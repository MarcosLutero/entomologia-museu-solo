import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Brasao_ufra.png";

const NavMain = () => {
  const navigate = useNavigate()
  
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
              <button type="button" className="btn btn-outline-light" onClick={() => {
                navigate("/login")
              }}>
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMain;
// <nav className='navigation-container'>
//     <div className="logo-ufra">
//         <img src={Logo} width="50px" alt="" />
//         <p>Museu de Entomologia</p>
//     </div>
//     <div className="button-login">
//         {/* criar modal aqui */}
//         <button>Login</button>
//     </div>
// </nav>
