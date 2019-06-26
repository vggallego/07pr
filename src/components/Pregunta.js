import React, {Fragment, useState} from 'react';

const Pregunta = () => {

    //definir el state
    const [ cantidad, guardarCantidad] = useState(0);
    const [ error, guardarError ] = useState(false);


    const agregarPresupuesto = e => {
        e.preventDefault();

        if (cantidad < 1 || cantidad === null ){
            guardarError(true);
            return;
        }
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form onSubmit={agregarPresupuesto}>
                <input  type="number" 
                        className="u-full-width"
                        placeholder="Agrega tu Presupuesto"
                        onChange={e => guardarCantidad(parseInt(e.target.value))}/>
                <input type="submit" className="button-primary u-full-width" value="Definit Presupuesto" />
            </form>
        </Fragment>

     );
}
 
export default Pregunta;