import React, {useEffect, useState} from 'react';


const FunctionComponent = ({name}) => {
    console.log("constructor");

    const [state, setState] = useState({a: 0, b: 25});

    //component didMount
    useEffect(() => {
        console.log("componentDidMount");
        return () => {
            //component Unmounted
            console.log("componentWillUnmount")
        }
    }, [])

    useEffect(() => {
        //component updated
        console.log("componentDidUpdate");
    }, [state])

    const inc = () => {
        setState({...state, a: state.a + 1})
    }


    return (
        //render() will be updated if changed: 1)new props, 2)setState(), 3)forceUpdate()
        <div>
            {console.log("render()")}
            FunctionComponent
            <div>A: {state.a}</div>
            <div>B: {state.b}</div>
            <div>Props: {name}</div>
            <button onClick={() => inc()}>Inc</button>
        </div>
    );
};

export {FunctionComponent};