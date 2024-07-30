import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import ContactPage from "./Components/ContactPage/ContactPage";
import Footer from "./Components/Footer/Footer";
import Mission from "./Components/Mission/Mission";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Vision from "./Components/Vision/Vision";
import Team from "./Components/team/Team";
import "./assets/bootsrap/bootstrap.min.css"
import "boxicons";

const App = () => {
  return (
    <div className="display">
      <Banner />
      <About />
      <Services />
      <Vision />
      <Mission />
      <Portfolio />
      <Team />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App
