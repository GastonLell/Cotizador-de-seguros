import { useState } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { getYearsDifference, calculateDependingBrand, getPlan } from '../helpers'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`
const Label = styled.label`
    flex: 0 0 55px;
    @media only screen and (min-width: 768px){
        flex: 0 0 100px;
    }
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`

    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: 200;
    border: none;
    margin-top: 2rem;
    transition: background-color .3s ease;
    &:hover{
        background-color: #26C6DA;
        cursor: pointer;

    }
`

const Alert = styled.div`
    background-color: lightpink;
    color: white;
    padding: 1rem;
    margin-top: 2rem;
    width: 94%;
    text-align: center;
`

const Formulario = ({setResume, setLoading}) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: 'basico',
    });

    const {brand, year, plan} = data;

    const [error, setError] = useState(false);

    const getData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleCotizar = (e) =>{
        e.preventDefault();

        if(brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
            setError(true);
            return;
        }

        setError(false);

        // precio base
        let resultado = 2000;

        const diferencia = getYearsDifference(year);

        resultado -= ((diferencia * 3) *  resultado / 100)

        resultado = calculateDependingBrand(brand) * resultado;

        const incrementoPlan = getPlan(plan);
        
        resultado = (parseFloat( incrementoPlan * resultado).toFixed(2));
        
        setLoading(true);

        setTimeout(() => {

            setLoading(false)

            setResume({
                cotizacion: resultado,
                data   
            })

        }, 3000)


    }
    return ( 
        <form onSubmit={handleCotizar}>
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getData}
                >
                    <option>-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getData}
                >
                    <option>-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={getData}
                /> Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={getData}
                /> Completo
            </Campo>
            <Button type="submit">Cotizar</Button>
            {
                error && <Alert>Todos los campos son obligatorios</Alert>
                
            }
        </form>
     );
}

Formulario.propTypes = {
    setResume: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
}

export default Formulario;