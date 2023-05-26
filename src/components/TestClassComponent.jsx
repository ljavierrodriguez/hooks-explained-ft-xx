import { Component } from 'react';

class TestClassComponent extends Component {

    componentDidMount(){
        console.log('Class: Component Mounted...');
    }

    componentWillUnmount(){
        console.log('Class: Component Eliminado...');
    }

    componentDidUpdate(){
        
    }

    render(){
        return (
            <>
                <h1>Class Component</h1>
            </>
        )
    }
}

export default TestClassComponent;