import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Brasao_ufra.png";
import FormAddCharacteristics from "../FormAddCharacteristics/FormAddCharacteristics";

const AdminHomePage = () => {
  const navigate = useNavigate();

  const [characteristcsStatus, setCharacteristcsStatus] = useState("")

  const teste = (value) => {
    setCharacteristcsStatus(value)
    switch (characteristcsStatus) {
      case "filo":
        console.log("filo")
        break;
      case "classe":
        console.log("classe")
        break;
      case "classe":
        console.log("ordem")
        break;
      case "classe":
        console.log("familia")
        break;
      default:
        console.log("padrao")
        break;
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={Logo} width="50px" height="50px" alt="Logo da Ufra" />
          <a className="navbar-brand ms-2" href="/">
            Museu de Entomologia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/admin">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Taxonomia
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      teste("filo")

                    }}>
                      Filo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      teste("classe")
                    }}>
                      Classe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      setCharacteristcsStatus("ordem")
                      teste()
                    }}>
                      Ordem
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      setCharacteristcsStatus("familia")
                      teste()
                    }}>
                      Familia
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      setCharacteristcsStatus("genero")
                      teste()
                    }}>
                      Gênero
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      setCharacteristcsStatus("especie")
                      teste()
                    }}>
                      Espécie
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Morfologia
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Antena
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Aparelho Bucal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Asa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Abdomen
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Perna
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Biologia
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Metamorfose
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ecologia
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Comportamento
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Habitat
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     

    </>
  );
};

export default AdminHomePage;
