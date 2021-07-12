import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFF;
`
const TextoHeader = styled.h1`
    font-size: 3rem;
    font-weight: 200;
    margin: 0;
    text-align: center;
`
const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
}

export default Header;