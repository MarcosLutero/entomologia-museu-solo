import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavMain from '../NavMain/NavMain';

const LoginPage = () => {
    
    let navigate = useNavigate()
    
    
    return ( <>
        <NavMain/>
        <div className="card bg-light mb-3 w-auto position-absolute mt-4 top-25 start-50 translate-middle-x">
              <form className="w-100 p-3">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Usuário
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    Insira seu usuário para acessar a página do admin
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button onClick={()=>{
                      navigate("/admin")
                  }} className="btn btn-success">
                    Entrar
                  </button>
                </div>
              </form>
            </div>
    </> );
}
 
export default LoginPage;