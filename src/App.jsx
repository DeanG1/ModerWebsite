import Benefits from "./Components/Benefits";
import Button from "./Components/Button";
import Collaboration from "./Components/Collaboration";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Prices from "./Components/Prices";
import RoadMap from "./Components/RoadMap";
import Services from "./Components/Services";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Prices />
        <RoadMap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
