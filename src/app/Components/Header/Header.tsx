import Link from "next/link"
import cssstyle from "./Header.module.css"

const Header =() => {
    return (
        <header className={cssstyle.h1}>
            <span className=" text-2xl font-bold">Header</span>
        <div>
            <nav>
             
             <ul className="flex-gap-5  py-11 ">
                
                <li className="hover:text-red-800"><Link href="/Home">Home</Link></li>
                <li className="hover:text-red-800"><Link href="/About">About</Link></li>
                <li className="hover:text-red-800"><Link href="/Contact">Contact</Link></li>
                
             </ul>
             


            </nav>
         
            
        </div>
        </header>
        
    )
};

export default Header;