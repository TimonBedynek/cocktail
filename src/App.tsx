import Header from "./components/Header";
import Cocktail from "./components/Cocktail";

function App() {
  return (
    <div>
      <Header header="Cocktails" />
      <div className="row">
        <Cocktail
          name="Bahama_Mama"
          alk={10}
          ingredients={[
            "Zitronensaft",
            "Orangensaft",
            "Rum",
            "Kokosnuss-Rum",
            "Ananassaft",
            "Angostura Bitters",
            "Grenadine",
          ]}
        />
        <Cocktail
          name="Jungle_Bird"
          alk={13}
          ingredients={[
            "Rum",
            "Ananassaft",
            "Campari",
            "Limettensaft",
            "Zuckersirup",
          ]}
        />
        <Cocktail
          name="Mai_Tai"
          alk={25}
          ingredients={["Rum", "Zuckersirup", "Limettensaft", "Mandelsirup"]}
        />
        <Cocktail
          name="Blue_Hawaii"
          alk={10}
          ingredients={[
            "Wodka",
            "Rum",
            "Blue Curaçao",
            "Ananassaft",
            "Limettensaft",
            "Zuckersirup",
          ]}
        />
        <Cocktail
          name="Hurricane"
          alk={8}
          ingredients={[
            "Rum",
            "Maracujas",
            "Orangensaft",
            "Limettensaft",
            "Zuckersirup",
            "Grenadine",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
