import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./Components/AdminHomePage/AdminHomePage";
import HomePage from "./Components/HomePage/HomePage";
import CuriosidadesPage from "./Components/CuriosidadesPage/CuriosidadesPage";
import InsetoDetails from "./Components/InsetoDetails/InsetoDetails";
import LoginPage from "./Components/LoginPage/LoginPage";

const App = () => {
  useEffect(() => {
    axios.get("https://api-museu-entomologiaufra.herokuapp.com/abdomens").then((response) => {
      console.log(response.data);
      setData(response.data);
    });

    console.log(data)

  }, []);

  // value from user
  const [inputValue, setInputValue] = useState("");

  //data from backend
  const [data, setData] = useState([]);


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
      
      {/* {data.map((element, index) => {
        return (
          <h1 key={index} >{element.nome_abdomen}</h1>
        )
      })} */}
      
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route
          path="/curiosidades"
          element={<CuriosidadesPage data={data} />}
        />
        <Route
          path="*"
          element={
            <>
              {" "}
              <h1>Página não encontrada</h1>{" "}
            </>
          }
        />
        <Route
          path="/:nomeVulgarInseto"
          element={<InsetoDetails data={data} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
