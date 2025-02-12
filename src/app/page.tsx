import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Section from "./Components/Section/Section"


const homePage = ()=>{
  return(
    <div>
<Header></Header>
<Section page={<p>This is my hero section content</p>} />
<Footer></Footer>
    </div>
  )
}
export default homePage;