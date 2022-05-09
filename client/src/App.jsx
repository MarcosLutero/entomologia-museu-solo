import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./Components/AdminHomePage/AdminHomePage";
import HomePage from "./Components/HomePage/HomePage";

const App = () => {
  useEffect(()=> {
    axios.get("http://localhost:3001/taxonomia").then((response)=>{
      console.log(response.data)
      setData(response.data)
    })
  },[])

  // value from user
  const [inputValue, setInputValue] = useState("");

  //data from backend
  const [data, setData] = useState([]);

  //function for make a request for backend
  // const getData = () => {
  //   axios
  //     .get("/urlForGetDataFromBug")
  //     .then( (response) => {
  //       // manipula o sucesso da requisição
  //       setData(response);
  //     })
  //     .catch( (error) => {
  //       // manipula erros da requisição
  //       console.error(error);
  //     })
  // };

  //catch the value from the form that contain the input user
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    console.log(`chave: ${Object.keys(data)}, valor: ${Object.values(data)}`);
    setInputValue("");
  };

  //function for listen the input user
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <BrowserRouter>
      {data.map((item, key) =>{
        return <div key={key} >{item.nome}</div>
      })}

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              inputValue={inputValue}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              setInputValue={setInputValue}
              data={data}
            />
          }
        />
        <Route
          path="/login"
          element={
            <div className="card text-white bg-dark mb-3 w-auto position-absolute mt-4 top-0 start-50 translate-middle-x">
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
                  <button type="submit" className="btn btn-success">
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          }
        />
        <Route path="/admin" element={<AdminHomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
