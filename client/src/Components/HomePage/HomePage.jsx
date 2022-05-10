import React from "react";
import FormSearchBug from "../FormSearchBug/FormSearchBug";
import NavMain from "../NavMain/NavMain";
import BugInformation from "../BugInformation/BugInformation";

import bug from "../../assets/img/louvaDeus.jpg";

const HomePage = ({
  handleSubmit,
  handleInputChange,
  inputValue,
  setInputValue,
  data,
}) => {
  //    if exists data in data, the component BugInformation is rendered
  let validationData = data.length;

  return (
    <>
      <NavMain />
      <FormSearchBug
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        setInputValue={setInputValue}
      />
      {validationData ? <BugInformation /> : <div></div>}

      <div className="container mt-4">
        <div class="row row-cols-1 row-cols-md-5">
          <div class="col" onClick={() => {
              console.log("oi")
            }}>
            <div class="card">
              <img src={bug} class="card-img-top" alt="imagem do inseto" title="inseto"/>
              <div class="card-body">
                <h5 class="card-title"><b>Besourinho</b></h5>
                <p class="card-text">
                  <b>Habitat:</b> habitat xyz
                </p>
                <p class="card-text">
                  <b>Asa:</b> asa xyz
                </p>
                <p class="card-text">
                  <b>Pernas:</b> pernas xyz
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={bug} class="card-img-top" alt="imagem do inseto" title="inseto"/>
              <div class="card-body">
                <h5 class="card-title"><b>Besourinho</b></h5>
                <p class="card-text">
                  <b>Habitat:</b> habitat xyz
                </p>
                <p class="card-text">
                  <b>Asa:</b> asa xyz
                </p>
                <p class="card-text">
                  <b>Pernas:</b> pernas xyz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
