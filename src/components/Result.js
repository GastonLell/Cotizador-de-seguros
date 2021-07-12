import '../index.css'
import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`

const TextCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    margin: 0;
`

const Result = ({ cotizacion }) => {
  return (
        (cotizacion === 0 )
            ? <Message>Elige marca, año y plan de seguro</Message>
            : (
                <ResultCotizacion>
                    <TextCotizacion>El total es: ${cotizacion}</TextCotizacion>
                </ResultCotizacion>
            )
        );
};

Result.propTypes = {
    cotizacion: PropTypes.number.isRequired,
}

export default Result;
