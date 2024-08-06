import React from "react"
import { Outlet , Link} from "react-router-dom"
import '../pages/Vans.css'
import Footer from "../pages/Footer"


export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                <Link  to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
          
            <Outlet />
        </>
    )
}