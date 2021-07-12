//obtiene diferrencia de años
export const getYearsDifference = (year) => {
    return new Date().getFullYear() - year;
}

//calcular el  total a pagar segun la marca 
export const calculateDependingBrand = (brand) => {
    let incremento;
    switch( brand ) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05
            break;
        default: 
            break;
    }
    return incremento;
}

export const getPlan = (plan) => {
    return plan === 'basico' ? 1.20 : 1.50;
}

export const capitalFirst = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}