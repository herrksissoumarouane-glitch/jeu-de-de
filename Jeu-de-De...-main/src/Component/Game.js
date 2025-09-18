import React from "react";
import { useState } from "react";

export default function Game() {
  let numCache = Math.floor(Math.random() * 6 + 1);

  const [state, setState] = useState({ face: null, nbEssai: 0 });

  function jeuer() {
    let nb_rand = Math.floor(Math.random() * 6 + 1);
    setState({ face: nb_rand, nbEssai: state.nbEssai + 1 });
  }
  function Initialiser() {
    numCache = Math.floor(Math.random() * 6 + 1);
    setState({ face: null, nbEssai: 0 });
  }
  return (
    <React.Fragment>
      <div className="card mb-3 text-center bg-secondary bg-light bg-gradient">
        <h1 className="card-header">Jeu de Dee...</h1>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./images/dice.PNG"
              className="card-img-top"
              alt="img"
              style={{ width: "20rem" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-text">
                Face : <span className="text-danger">{state.face}</span>
              </h2>
              <img
                src={"./images/dice-" + state.face + ".PNG"}
                className="card-img"
                alt="img"
                style={{ width: "15rem" }}
              />
              <h2 className="card-text">
                Nombre d'essai :{" "}
                <span className="text-danger">{state.nbEssai}</span>
              </h2>
              <div className="d-grid gap col-6 mx-auto">
                {state.face === numCache ? (
                  <>
                    <h2 className="text-success">
                      Bravo vous avez trouvez la face cachee .
                    </h2>
                    <button
                      onClick={() => Initialiser()}
                      className="btn btn-outline-success btn-lg"
                    >
                      Initialiser
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => jeuer()}
                    className="btn btn-outline-success btn-lg"
                  >
                    jeuer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
