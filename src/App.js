import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner/Spinner";
import styled from "styled-components";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
  @media only screen and (min-width: 768px){
    margin: 50px auto;
  }
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    cotizacion: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const { cotizacion, data } = resume;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />

      <ContenedorFormulario>
        <Formulario setResume={setResume} setLoading={setLoading} />

        {loading ? <Spinner /> : <Resume data={data} />}

        {!loading ? <Result cotizacion={cotizacion} /> : null }
        
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
