import React, { useEffect, useState } from 'react'
import ContactCard from './components/ContactCard'
import TestClassComponent from './components/TestClassComponent'
import TestFunctionComponent from './components/TestFunctionComponent'

const App = () => {

    const [name, setName] = useState("John") // ["John Doe", function(){}]
    const [lastname, setLastName] = useState("Doe")

    const [show, setShow] = useState(true);
    // setName('Jane');
    // setLastName('Smith');

    const cambiarNombre = (e, name) => {
        e.target.classList.add('disabled');
        document.querySelector('.btn-warning').classList.remove('disabled');
        setName(name);
        setLastName('Smith');
    }

    const cambiarNombreFromComponent = () => {
        setName('Martin');
        setLastName('Perez');
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const { name } = form;
        setName(name.value);
    }

    useEffect(() => {



    }, [])

    return (
        <>
            <div className="container">
                <div className="text-primary fs-3 text-center">{name} {lastname}</div>
                <button className="btn btn-primary btn-sm"
                    /* onClick={() => { setName('Jane'); }} */
                    /* onClick={cambiarNombre} */
                    onClick={(e) => cambiarNombre(e, "Jane")}
                /* onClick={() => cambiarNombre()} */
                /* onClick={() => setName('Jane')} */
                /* onClick={(e) => {
                    // e => evento click
                    e.target.classList.add('disabled');
                }} */
                >
                    Click para cambiar el nombre
                </button>
                <button className="btn btn-warning btn-sm disabled"
                    onClick={(e) => {
                        setName('John');
                        setLastName('Doe');
                        e.target.classList.add('disabled');
                        document.querySelector('.btn-primary').classList.remove('disabled');
                    }}
                >
                    Reset
                </button>
            </div>

            <div className="container my-5">
                <ContactCard name={name} lastname={lastname} onClick={cambiarNombreFromComponent} />
            </div>
            <div className="container my-5">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" name="name" id="name" placeholder='Insert Name'/>
                        <button className="btn btn-dark btn-sm">Set Name</button>
                    </div>
                </form>
            </div>

            <div className="container my-5">
                {
                    show ? 
                    (
                        <TestClassComponent />
                    ):(
                        <TestFunctionComponent name={name} />
                    )
                }
            </div>
        </>
    )
}

export default App