import React, { useEffect } from 'react'

const TestFunctionComponent = ({ name }) => {
    
    useEffect(() => {
        // componentDidMount

        console.log('Func: Component Mounted...');

        return () => {
            // componentWillUnmount
            console.log('Func: Component Eliminado...');
        }

    }, [])


    useEffect(() => {
        console.log("Ha cambiado el nombre");
    }, [name])
  return (
    <div>TestFunctionComponent</div>
  )
}

export default TestFunctionComponent