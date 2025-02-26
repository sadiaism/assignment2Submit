import cssstyle from "./Footer.module.css"

const Footer =() =>{
    return(
        <footer className={cssstyle.h2}>
            <span className="flex justify-center text-2xl font-bold text-[32px]">Footer</span>


        <div>
            
             <ul className="flex justify-center gap-5 py-11 bg-slate-500 text-black font-bold text-[32px]">
                <li className="text-center  hover:text-red-800 "><a href="https://www.google.com" target="_blank">Google</a></li>
                <li className="text-center  hover:text-red-800 "><a href="https://www.youtube.com" target="_blank">Youtube</a></li>
                <li className="text-center  hover:text-red-800 "><a href="https://www.vercel.com" target="_blank">Vercel</a></li>
            </ul>

            </div>
            
             
                

        </footer>
        
    )
};
export default Footer;