import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Brasao_ufra.png";
import FormAddCharacteristics from "../FormAddCharacteristics/FormAddCharacteristics";

Modal.setAppElement("#root");

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={Logo} width="50px" height="50px" alt="Logo da Ufra" />
          <a className="navbar-brand ms-2" href="#navbarNavAltMarkup">
            Museu de Entomologia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <button
                type="button"
                className="btn btn-outline-light ms-2"
                onClick={() => {
                  navigate("/");
                }}
              >
                Voltar para Home
              </button>
            </div>
          </div>
        </div>
      </nav>


                <div className="container bg-light d-flex flex-column justify-content-center w-25 mt-5">
                  <h3 className="text-center mt-3 mb-4">Clique na opção desejada</h3>
                  
                  <button
                    type="button"
                    className="btn btn-outline-primary w-auto mx-auto mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#adicionar-classe"
                  >
                    Adicionar Classe
                  </button>
                  <div className="modal fade"
                    id="adicionar-classe"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Adicionar Classe
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">

                            <FormAddCharacteristics content={"testando"}/>

                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Fechar
                          </button>
                          <button type="button" className="btn btn-primary">
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-auto mx-auto mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#adicionar-familia"
                  >
                    Adicionar Família
                  </button>
                  <div className="modal fade"
                    id="adicionar-familia"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Adicionar Família
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">

                            <FormAddCharacteristics content={"testando"}/>

                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Fechar
                          </button>
                          <button type="button" className="btn btn-primary">
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-auto mx-auto mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#adicionar-filo"
                  >
                    Adicionar Filo
                  </button>
                  <div className="modal fade"
                    id="adicionar-filo"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Adicionar Filo
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">

                            <FormAddCharacteristics content={"testando"}/>

                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Fechar
                          </button>
                          <button type="button" className="btn btn-primary">
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-auto mx-auto mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#adicionar-ordem"
                  >
                    Adicionar Ordem
                  </button>
                  <div className="modal fade"
                    id="adicionar-ordem"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Adicionar Ordem
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">

                            <FormAddCharacteristics content={"testando"}/>

                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Fechar
                          </button>
                          <button type="button" className="btn btn-primary">
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  <button
                    type="button"
                    className="btn btn-outline-primary w-auto mx-auto mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#adicionar-genero"
                  >
                    Adicionar Gênero
                  </button>
                  <div className="modal fade"
                    id="adicionar-genero"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Adicionar Gênero
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">

                            <FormAddCharacteristics content={"content second Button"}/>

                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Fechar
                          </button>
                          <button type="button" className="btn btn-primary">
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-success w-auto mx-auto mb-5"
                    data-bs-toggle="modal"
                    data-bs-target="#adicionar-inseto"
                  >
                   - - - - - Adicionar Inseto - - - - -
                  </button>
                  <div className="modal fade"
                    id="adicionar-inseto"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Adicionar Inseto
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">

                            <FormAddCharacteristics content={"content second Button"}/>

                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Fechar
                          </button>
                          <button type="button" className="btn btn-primary">
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

    </>
  );
};

export default AdminHomePage;
