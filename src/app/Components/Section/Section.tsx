import cssstyle from "./Section.module.css"

const Section=(props:any) =>{
    return(
        <section>
            <h1 className="text-2xl font-bold">Hero Section</h1>
            <div className={cssstyle.HeroSection} >{props.page}
               
            </div>
        </section>
            

        
            
        
    )
};
export default Section;