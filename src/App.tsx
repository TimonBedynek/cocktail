import Header from "./components/Header";
import Cocktail from "./components/Cocktail";

function App() {
  return (
    <div>
      <Header header="Cocktails" />
      <div className="row">
        <Cocktail
          name="Bahama Mama"
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
          name="Jungle Bird"
          alk={40}
          ingredients={[
            "Rum",
            "Ananassaft",
            "Campari",
            "Limettensaft",
            "Zuckersirup",
          ]}
        />
        <Cocktail
          name="Mai Tai"
          alk={40}
          ingredients={["Rum", "Zuckersirup", "Limettensaft", "Mandelsirup"]}
        />
        <Cocktail
          name="Blue Hawaii"
          alk={40}
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
          alk={40}
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
