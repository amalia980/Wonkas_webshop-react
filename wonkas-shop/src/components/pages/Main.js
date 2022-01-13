import { Outlet } from "react-router-dom"
import Navbar from "../static/Navbar"
import './Main.css'


const Main = () => {

    return (
        <>
            <Navbar />
            <div className="main">
            <Outlet />
            </div>
        </>
    )
}

export default Main;