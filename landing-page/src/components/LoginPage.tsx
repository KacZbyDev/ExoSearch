import { Link } from "react-router-dom";  
import "../App.css";
import {useState} from "react";

const LoginPage = () => {

    const [formData,setFormData] = useState({
        username: "",
        password: "",
    })

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        fetch('http://127.0.0.1:8000/token/',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(token=>localStorage.setItem("token",token.Stringify()))
            .catch(error => console.log(error));
    }
    return (
        <>
            <div className="bg-slate-800 text-white min-h-screen">
                <div className="w-screen h-screen flex flex-col items-center justify-center container mx-auto px-4">
                    <div
                        className="text-center bg-slate-700 p-8 rounded shadow border border-slate-600 max-w-sm w-full">
                        <span className="text-4xl md:text-5xl">Zaloguj się</span>
                        <form onSubmit={onSubmit}>
                            <span className="flex mt-4 text-sm md:text-base">Twój email</span>
                            <input
                                type="text"
                                placeholder="nazwa uzytkownika"
                                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"
                                name="username"
                                onChange={onChange}
                            />
                            <span className="flex mt-4 text-sm md:text-base">Twoje hasło</span>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"
                                name = "password"
                                onChange={onChange}
                            />
                            <span className="flex justify-center mt-4 text-center w-full text-sm md:text-base">
                    Nie masz konta? Załóż je
                    <Link className="text-blue-600 ml-1 hover:text-blue-700 transition" to="/registerPage">tutaj!</Link>
                </span>
                
                <button
                                type="submit"
                                className="mt-4 bg-blue-600 rounded p-4 w-full hover:bg-blue-700 transition focus:bg-blue-800"
                                
                            >
                
                                <Link className="text-2xl font-semibold" to="">Zaloguj Się</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
