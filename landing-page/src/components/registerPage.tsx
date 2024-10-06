import "../App.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const RegisterPage = () => {
    const [formData,setFormData] = useState({
        username:"",
        email: "",
        password: "",
        repeated_password:""
    })

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(formData);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        fetch("http://localhost:8000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(response => console.log(response))
    };
    return (
        <>
            <div className="bg-slate-800 text-white min-h-screen">
                <div className="w-screen h-screen flex flex-col items-center justify-center container mx-auto px-4">
                    <div
                        className="text-center bg-slate-700 p-8 rounded shadow border border-slate-600 max-w-sm w-full">
                        <span className="text-4xl md:text-5xl">Zarejestruj się</span>
                        <form onSubmit={onSubmit}>
                            <span className="flex mt-4 text-sm md:text-base">Podaj nazwe uzytkownika</span>
                            <input
                                type="text"
                                placeholder="name"
                                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"
                                name="username"
                                onChange={onChange}

                            />

                            <span className="flex mt-4 text-sm md:text-base">Podaj email</span>
                            <input
                                type="text"
                                placeholder="email@example.com"
                                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"
                                name="email"
                                onChange={onChange}
                            />
                            <span className="flex mt-4 text-sm md:text-base">Podaj hasło</span>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"
                                name="password"
                                onChange={onChange}
                            />
                            <span className="flex mt-4 text-sm md:text-base">Powtórz hasło</span>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"
                                name="repeated_password"
                                onChange={onChange}
                            />
                            <span className="flex justify-center mt-4 text-center w-full text-sm md:text-base">
                    Masz już konto? Zaloguj się
                    <Link className="text-blue-600 ml-1 hover:text-blue-700 transition" to="/loginPage">tutaj!</Link>
                            </span>
                            <input
                                type="submit"
                                value="Załóż konto"
                                className="mt-4 bg-blue-600 rounded p-4 w-full hover:bg-blue-700 transition focus:bg-blue-800"
                            />
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default RegisterPage;