
import "./BackGround.css"
import Navbar from "./components/Navbar.jsx";
import Exoplanets from "./components/Exoplanets";
import MainPage from "./components/MainPage";
import Forum from "./components/Forum";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/registerPage";
import WelcomePage from "./components/WelcomePage";
import Challenges from "./components/Challenges";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetails from "@/components/PostDetails.tsx";
import Teams from "@/components/Teams.tsx";
import Quiz from "@/components/Quiz.tsx";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/WelcomePage" element={<WelcomePage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/Exoplanets" element={<Exoplanets/>}/>
                <Route path="/Forum" element={<Forum/>}/>
                <Route path="/Forum/Posts/:postId" element={<PostDetails />} />
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/loginPage" element={<LoginPage/>}/>
                <Route path="/registerPage" element={<RegisterPage/>} />
                <Route path="/Challenges" element={<Challenges/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Faq" element={<Faq/>} />
                <Route path="/Quiz" element={<Quiz/>} />
                <Route path="/Teams" element={<Teams/>} />

            </Routes>
        </Router>
    );
};

export default App;
