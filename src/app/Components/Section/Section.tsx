import cssstyle from "./Section.module.css"

interface SectionProps {
    page: React.ReactNode;  // Define a specific type
  }

const Section=({page}: SectionProps) =>{
    return(
        <section>
            <h1 className="flex justify-center text-[32px] font-bold">Hero Section</h1>
            <div className={cssstyle.HeroSection} >{page}
               
            </div>
        </section>
            

        
            
        
    )
};
export default Section;