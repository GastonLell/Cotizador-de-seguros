import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {capitalFirst} from '../helpers';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`
const ItemList = styled.li`
    list-style: none;
    text-align: left;
    padding-bottom: 1rem;
`

const Resume = ({data}) => {
    const {brand, year, plan} = data;

    if (brand === "" || year === "" || plan === "") return null;

    return (  
        <ContenedorResumen>
        <h2>Resumen de cotizacion</h2>
        <ul>
            <ItemList>Marca: {capitalFirst(brand)}</ItemList>
            <ItemList>Plan: {capitalFirst(plan)}</ItemList>
            <ItemList>Año del auto: {year}</ItemList>
        </ul>
        </ContenedorResumen>

    );
}

Resume.propTypes = {
    data: PropTypes.object.isRequired,
}
 
export default Resume;