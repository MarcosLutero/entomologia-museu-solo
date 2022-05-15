import React from "react";


const FormSearchBug = ({ handleSubmit, handleInputChange, inputValue }) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light mt-5 justify-content-center py-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Nome do Inseto..."
            name="input-common-user"
            onChange={handleInputChange}
            value={inputValue}
          />
          <button
            className="btn btn-outline-secondary">
            Pesquisar
          </button>
        </div>
        <div id="passwordHelpBlock" className="form-text">
          Insira o nome do inseto para a página mostrar as informacões do mesmo.
        </div>
      </form>
    </div>
  );
};

export default FormSearchBug;