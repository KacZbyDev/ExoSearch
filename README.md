<h1 align="center"><img alt="ExoSearch Logo" src="landing-page/src/assets/logo-navbar.svg" width="200" height="200"/><br />
ExoSearch
</h1>


<p>Supported by NASA learning web app about exoplanets. Written in React + Vite + TS & Django</p>

![badgeNasa](https://img.shields.io/badge/supported_by-NASA-darkblue)
![badgeDjango](https://img.shields.io/badge/v5.1.1.-Django-darkgreen)
![badgeVite](https://img.shields.io/badge/v5.4.8.-Vite-yellow)
![badgeReact](https://img.shields.io/badge/v18.-React-blue)
![badgeTypescript](https://img.shields.io/badge/v5.6.2.-TypeScript-dodgerblue)
![badgeREST](https://img.shields.io/badge/v3.15.2.-django_REST_framework-darkred)
![badgeTailwind](https://img.shields.io/badge/v3.4.13.-Tailwind_CSS-cyan)
![badgePostgreSQL](https://img.shields.io/badge/v17.-PostgreSQL-darkblue)
![badgeBootstrapIcons](https://img.shields.io/badge/v1.11.0-Bootstrap_Icons-purple)

## Navigation
- [Install](#install)
- [Tech stack](#tech-stack)
- [License](#license)
- [Creators](#creators)

---

# Install

To clone and run this application, you'll need Git, Node.js (which comes with npm), PostgreSQL, Python installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/KacZbyDev/ExoSearch.git

# Go into repository
$ cd ExoSearch
```
Front-end configuration:
```bash
# Go into front-end directory
$ cd landing-page

# Install dependencies
$ npm install

# Start app in developer mode
$ npm run dev
```

Back-end configuration:

Set values of database field in `setting.py` to point to your database. To do this you have to change directory using `cd ExoSearch/exoClass/`

Change data in this dictionary so you can access your database provider. You can put values such as `PASSWORD` in your .env file.

```python
DATABASES = {
'default': {
'ENGINE': 'django.db.backends.postgresql_psycopg2',
'NAME': 'exoClass',                                 # your db name
'USER': 'postgres',                                 # your db username
'PASSWORD': os.getenv("PASSWORD"),                  # your db password
'HOST': 'localhost',                                # host ip
'PORT': '',                                         # host port
}}
```

Now, configure python and migrations

```bash
# Install requirements
$ pip install -r requirements.txt 

# Go into back-end directory
$ cd exoClass

# Make migration
$ python manage.py make_migrations
$ python manage.py migrate

# Run python manage.py make_migration by default on port 8000
```
# Tech-stack
1. Vite
2. React
3. Typescript
4. Django Simple JWT
5. django REST framework
6. TailwindCSS
7. React Router
8. PostgreSQL
9. REST API Router
10. Bootstrap Icons

# License
This project is under [MIT License](./LICENSE)

# Creators

**Front-end developers:**

1. Jan Florek
2. Tomasz Tłusty
3. Andrzej Bajcarczyk

**Back-end developers:**
1. Kacper Zbyrad
2. Kamil Konieczny

