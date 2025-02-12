import cssstyle from "./Section.module.css"

const Section=(props:any) =>{
    return(
        <section>
            <h1 className="flex justify-center text-[32px] font-bold">Hero Section</h1>
            <div className={cssstyle.HeroSection} >{props.page}
               
            </div>
        </section>
            

        
            
        
    )
};
export default Section;