import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Cocktail.css";

// Cocktail card component
interface Props {
  name: string;
  alk: number;
  ingredients: string[];
}

function Cocktail({ name, ingredients, alk }: Props) {
  const accordionId = `accordion-${name}`;

  return (
    <div className="card" style={{ width: "20rem" }}>
      <div className="card-body">
        {/* Display the cocktail name */}
        <h5 className="card-title">{name}</h5>
        {/* Display the subtitle for ingredients */}
        <img
          className="card-img"
          src="https://www.eatclub.tv/wp-content/uploads/sites/4/2022/07/hurricane-ec.jpg"
          alt={name}
        />

        <div className="accordion" id={accordionId}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${accordionId}-collapseOne`}
                aria-expanded="false"
                aria-controls={`${accordionId}-collapseOne`}
              >
                Ingredients
              </button>
            </h2>
            <div
              id={`${accordionId}-collapseOne`}
              className="accordion-collapse collapse"
              data-bs-parent={`#${accordionId}`}
            >
              <div className="accordion-body">
                {/* Display the list of ingredients */}
                <ul className="list-group">
                  {/* Map over the ingredients array and render each ingredient as a list item */}
                  {ingredients.map((ingredient, index) => (
                    <li className="list-group-item" key={index}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">Alk vol. {alk}%</h6>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
