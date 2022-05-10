import React from "react";
import BugPic from "../../assets/img/louvaDeus.jpg";

const BugInformation = () => {
  return (
    <>
      <div className="card mb-3 w-75 mt-4 mx-auto bg-secondary">
      <h3 className="text-white text-center mt-3">Besourinho</h3>
        <img src={BugPic} className="card-img-top" alt="inseto" title="inseto" />
        <div className="card-body">
          <h5 className="card-title text-center text-white mt-1">
            Características Gerais
          </h5>
        <div className="row row-cols-md-2 mx-auto">
          <ul className="list-group mb-3">
            <li className="list-group-item"><b>Abdomen:</b> Tipo abdomen xyz</li>
            <li className="list-group-item"><b>Antenas:</b> Tipo antena xyz</li>
            <li className="list-group-item"><b>Aparelho Bucal:</b> Tipo Aparelho Bucal xyz</li>
            <li className="list-group-item"><b>Asas:</b> Tipo asa xyz</li>
            <li className="list-group-item"><b>Habitat:</b> Casa do Caralho</li>
            <li className="list-group-item"><b>Pernas:</b> Tipo perna xyz</li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item"><b>Filo:</b> Arthropoda</li>
            <li className="list-group-item"><b>Classe:</b> Insecta</li>
            <li className="list-group-item"><b>Ordem:</b> Hymenoptera</li>
            <li className="list-group-item"><b>Família:</b> Pompilidae</li>
            <li className="list-group-item"><b>Gênero:</b> Pepsis</li>
          </ul>

        </div>

          <h5 className="card-title text-white text-center mt-2">
            Curiosidade
          </h5>
          <p className="card-text text-white">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </>
  );
};

export default BugInformation;
