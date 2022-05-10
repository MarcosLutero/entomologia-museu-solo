import React from "react";
import BugPic from "../../assets/img/louvaDeus.jpg";
import NavMain from "../NavMain/NavMain";

const BugInformation = ({dataInsect}) => {
  return (
    <>
      <NavMain/>

      <div className="card mb-3 w-50 mt-4 mx-auto bg-secondary">
      <h3 className="text-white text-center mt-3">{dataInsect.nomeVulgar}</h3>
        <img src={BugPic} className="card-img-top" alt={dataInsect.nomeVulgar} title={dataInsect.nomeVulgar} />
        <div className="card-body">
          <h5 className="card-title text-center text-white mt-1">
            Características Gerais
          </h5>
        <div className="row row-cols-md-2 mx-auto">
          <ul className="list-group mb-3">
            <li className="list-group-item"><b>Abdomen:</b> {dataInsect.abdomen}</li>
            <li className="list-group-item"><b>Antenas:</b> {dataInsect.antena}</li>
            <li className="list-group-item"><b>Aparelho Bucal:</b> {dataInsect.aparelhoBucal}</li>
            <li className="list-group-item"><b>Asas:</b> {dataInsect.asa}</li>
            <li className="list-group-item"><b>Habitat:</b>{dataInsect.habitat}</li>
            <li className="list-group-item"><b>Pernas:</b> {dataInsect.perna}</li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item"><b>Filo:</b> {dataInsect.filo}</li>
            <li className="list-group-item"><b>Classe:</b> {dataInsect.classe}</li>
            <li className="list-group-item"><b>Ordem:</b> {dataInsect.ordem}</li>
            <li className="list-group-item"><b>Família:</b> {dataInsect.familia}</li>
            <li className="list-group-item"><b>Gênero:</b> {dataInsect.genero}</li>
            <li className="list-group-item"><b>Curiosidade:</b> {dataInsect.curiosidade}</li>
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
