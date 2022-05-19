import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Brasao_ufra.png";
import FormAddCharacteristics from "../FormAddCharacteristics/FormAddCharacteristics";

const AdminHomePage = () => {
  const navigate = useNavigate();

  // let teste = ""

  const [characteristcsStatus, setCharacteristcsStatus] = useState("")

  // const changeComponent = async (value) => {
  //   // await setCharacteristcsStatus(value)
  //   teste = value
  //   // console.log(value)
  //   if(teste == "filo"){
  //     console.log("filo")
  //   }else if (teste == "classe"){
  //     console.log("classe")
  //   }else if (teste == "ordem"){
  //     console.log("ordem")
  //   }else {
  //     console.log("não pegou nada")
  //   }
  // }

  const showRightComponent = () => {
    console.log(characteristcsStatus)
    if(characteristcsStatus == "filo"){
      return <h1 className="text-white">FILO CARALHO</h1>
     
    }else if (characteristcsStatus == "classe"){
      return <h1 className="text-white" >CLASSE CARALHO</h1>
    }else if (characteristcsStatus == "ordem"){
      return <h1 className="text-white" >ORDEM CARALHO</h1>
    }else {
      return <h1 className="text-white" ></h1>
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
                      setCharacteristcsStatus("filo")
                    }}>
                      Filo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      setCharacteristcsStatus("classe")
                      // changeComponent("classe")
                    }}>
                      Classe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      setCharacteristcsStatus("ordem")
                      // changeComponent("ordem")
                    }}>
                      Ordem
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      setCharacteristcsStatus("familia")
                      // changeComponent("família")
                    }}>
                      Familia
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      setCharacteristcsStatus("genero")
                      // changeComponent("genero")
                    }}>
                      Gênero
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={()=>{
                      setCharacteristcsStatus("especie")
                      // changeComponent("especie")
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

      {showRightComponent()}

    </>
  );
};

export default AdminHomePage;
