import Header from "./components/Header";
import Cocktail from "./components/Cocktail";

function App() {
  return (
    <div>
      <Header header="Cocktails" />
      <div className="row">
        <Cocktail name="Hurricane" alk={10} ingredients={["rum", "sugar"]} />
        <Cocktail name="Wodka-E" alk={40} ingredients={["wodka", "energy"]} />
        <Cocktail name="Gin-Tonic" alk={20} ingredients={["gin", "tonic"]} />
        <Cocktail name="Mojito" alk={10} ingredients={["rum", "sugar"]} />
        <Cocktail
          name="Woody"
          alk={40}
          ingredients={["wodka", "energy", "wasser", "salz", "pfeffer"]}
        />
        <Cocktail name="Gin-Tonic" alk={20} ingredients={["gin", "tonic"]} />
      </div>
    </div>
  );
}

export default App;
