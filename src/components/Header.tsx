import { Link } from "react-router-dom";
import MainNav from "./MainNav"


const Header = () => {
    return(
        <div className="border-b-2 border-red-500 py-6 px-5 mx-0">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold tracking-tight text-red-500">
                    Yemek.com 
                </Link>
                <div className="hidden md:block">
                <MainNav />
                </div>
            </div>
            
        </div>
    )
}

export default Header;