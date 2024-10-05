-- FUNCTION: public.create_profile()

-- DROP FUNCTION IF EXISTS public.create_profile();

CREATE OR REPLACE FUNCTION public.create_profile()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
BEGIN
	INSERT INTO  main_profile(avatar,user_id)
	VALUES(
		null,
		NEW.id
	);
	RETURN NEW;
END;
$BODY$;

ALTER FUNCTION public.create_profile()
    OWNER TO postgres;

-- FUNCTION: public.update_vote_count()

-- DROP FUNCTION IF EXISTS public.update_vote_count();

CREATE OR REPLACE FUNCTION public.update_vote_count()
RETURNS trigger
LANGUAGE 'plpgsql'
AS $BODY$
BEGIN
    IF TG_OP = 'INSERT' THEN
        IF NEW.comment_id IS NOT NULL THEN
            UPDATE main_comment SET vote_count = vote_count + CASE WHEN NEW.is_upvoted THEN 1 ELSE -1 END WHERE id = NEW.comment_id;
        ELSIF NEW.post_id IS NOT NULL THEN
            UPDATE main_post SET vote_count = vote_count + CASE WHEN NEW.is_upvoted THEN 1 ELSE -1 END WHERE id = NEW.post_id;
        END IF;
    ELSIF TG_OP = 'DELETE' THEN
        IF OLD.comment_id IS NOT NULL THEN
            UPDATE main_comment SET vote_count = vote_count - CASE WHEN OLD.is_upvoted THEN 1 ELSE -1 END WHERE id = OLD.comment_id;
        ELSIF OLD.post_id IS NOT NULL THEN
            UPDATE main_post SET vote_count = vote_count - CASE WHEN OLD.is_upvoted THEN 1 ELSE -1 END WHERE id = OLD.post_id;
        END IF;
    ELSIF TG_OP = 'UPDATE' THEN
        IF NEW.is_upvoted <> OLD.is_upvoted THEN
            IF NEW.comment_id IS NOT NULL THEN
                UPDATE main_comment SET vote_count = vote_count + CASE WHEN NEW.is_upvoted THEN 2 ELSE -2 END WHERE id = NEW.comment_id;
            ELSIF NEW.post_id IS NOT NULL THEN
                UPDATE main_post SET vote_count = vote_count + CASE WHEN NEW.is_upvoted THEN 2 ELSE -2 END WHERE id = NEW.post_id;
            END IF;
        END IF;
    END IF;
    RETURN NULL;
END;
$BODY$;

ALTER FUNCTION public.update_vote_count()
    OWNER TO postgres;

-- Trigger: profile_insert_trigger

-- DROP TRIGGER IF EXISTS profile_insert_trigger ON public.auth_user;

CREATE OR REPLACE TRIGGER profile_insert_trigger
    AFTER INSERT
    ON public.auth_user
    FOR EACH ROW
    EXECUTE FUNCTION public.create_profile();

-- Trigger: update_count_trigger

-- DROP TRIGGER IF EXISTS update_count_trigger ON public.main_vote;

CREATE OR REPLACE TRIGGER update_count_trigger
    AFTER INSERT OR DELETE
    ON public.main_vote
    FOR EACH ROW
    EXECUTE FUNCTION public.update_vote_count();

-- FUNCTION: public.handle_node_profile_relation()

-- DROP FUNCTION IF EXISTS public.handle_node_profile_relation();

CREATE OR REPLACE FUNCTION public.handle_node_profile_relation()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
BEGIN
	INSERT INTO main_profilenode
	SELECT NEW.id,
	case
		WHEN id = 1 THEN true
		ELSE false
	END AS is_unlocked,
	id
	from main_node;
	RETURN NEW;
END;
$BODY$;

ALTER FUNCTION public.handle_node_profile_relation()
    OWNER TO postgres;

CREATE OR REPLACE TRIGGER handle_node_profile_relation_trigger
    AFTER INSERT
    ON public.main_profile
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_node_profile_relation();


CREATE OR REPLACE FUNCTION handle_node_profile_relation()
RETURNS TRIGGER AS $$
BEGIN
	INSERT INTO main_profilenode
	SELECT
	id,
	CASE
		WHEN NEW.id = 1 THEN false
		ELSE TRUE
	END AS is_unlocked,
	NEW.id
	FROM main_profile;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_node_profile_relation_trigger
AFTER INSERT ON main_node
FOR EACH ROW
EXECUTE FUNCTION handle_node_profile_relation()


