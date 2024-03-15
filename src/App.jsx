import Button from "./Components/Button";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
