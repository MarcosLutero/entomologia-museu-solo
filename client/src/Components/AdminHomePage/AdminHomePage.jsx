import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Brasao_ufra.png";
import FormAddCharacteristics from "../FormAddCharacteristics/FormAddCharacteristics";

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
        <h3 className="text-center mt-3 mb-4">
          Adicionar Característica Morfológica
        </h3>

        {/* ABDOMEN FORM WORKING */}
        <button
          type="button"
          className="btn btn-outline-primary w-auto mx-auto mb-3"
          data-bs-toggle="modal"
          data-bs-target="#adicionar-abdomen"
        >
          Adicionar Abdomen
        </button>
        <div
          className="modal fade"
          id="adicionar-abdomen"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Adicionar Abdomen
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Adicionar Classificação
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <FormAddCharacteristics  finalPath={"abdomens"} field={"nome_abdomen"} title={"Abdomen"}/>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <FormAddCharacteristics />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Antenas                 */}
        <button
          type="button"
          className="btn btn-outline-primary w-auto mx-auto mb-3"
          data-bs-toggle="modal"
          data-bs-target="#adicionar-antena"
        >
          Adicionar Antena
        </button>
        <div
          className="modal fade"
          id="adicionar-antena"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Adicionar Antena
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <FormAddCharacteristics finalPath={"antenas"} field={"nome_antena"} title={"Antena"}/>
              </div>
            </div>
          </div>
        </div>


          {/* Adicionar Aparelho Bucal */}
        <button
          type="button"
          className="btn btn-outline-primary w-auto mx-auto mb-3"
          data-bs-toggle="modal"
          data-bs-target="#adicionar-aparelho-bucal"
        >
          Adicionar Aparelho Bucal
        </button>
        <div
          className="modal fade"
          id="adicionar-aparelho-bucal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Adicionar Aparelho Bucal
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <FormAddCharacteristics content={"content second Button"} />
              </div>
            </div>
          </div>
        </div>


        {/* Adicionar Asa */}

        <button
          type="button"
          className="btn btn-outline-primary w-auto mx-auto mb-3"
          data-bs-toggle="modal"
          data-bs-target="#adicionar-asa"
        >
          Adicionar Asa
        </button>
        <div
          className="modal fade"
          id="adicionar-asa"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Adicionar Asa
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <FormAddCharacteristics content={"content second Button"} />
              </div>
            </div>
          </div>
        </div>

                {/* Perna */}

        <button
          type="button"
          className="btn btn-outline-primary w-auto mx-auto mb-3"
          data-bs-toggle="modal"
          data-bs-target="#adicionar-perna"
        >
          Adicionar Perna
        </button>
        <div
          className="modal fade"
          id="adicionar-perna"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Adicionar Perna
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <FormAddCharacteristics content={"Adicionar Perna"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
