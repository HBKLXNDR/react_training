import {useReducer, useRef} from "react";

import './App.css';

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "addCock":
            return {...state, cocks: [...state.cocks, {name: payload, id: Date.now()}]};
        case "deleteCock":
            return {...state, cocks: state.cocks.filter(cock => cock.id !== payload)};
        case "addFox":
            return {...state, foxes: [...state.foxes, {name: payload, id: Date.now()}]}
        case "deleteFox":
            return {...state, foxes: state.foxes.filter(fox => fox.id !== payload)}
        default:
            console.error("");
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cocks: [], foxes: []});
    const cockInput = useRef();
    const foxInput = useRef();

    const createCock = () => {
        dispatch({type: "addCock", payload: cockInput.current.value})
        cockInput.current.value = ""
    }

    const createFox = () => {
        dispatch({type: "addFox", payload: foxInput.current.value})
        foxInput.current.value = ""
    }

    return (
        <div className={"main"}>
            <div className={"cocks"}>
                <div>
                    <label>Cocks name: <input type="text" ref={cockInput}/></label>
                    <button onClick={createCock}>Save cock</button>
                </div>
                {
                    state.cocks.map(cock => (<div key={cock.id}>
                        {cock.name}
                        <button onClick={() => dispatch({type: "deleteCock", payload: cock.id})}> delete cock</button>
                    </div>))
                }
            </div>
            <div className={"foxes"}>
                <div>
                    <label>Fox name: <input type="text" ref={foxInput}/></label>
                    <button onClick={createFox}>Save fox</button>
                </div>
                {
                    state.foxes.map(fox => (<div key={fox.id}>
                        {fox.name}
                        <button onClick={()=> dispatch({type: "deleteFox", payload: fox.id})}>delete fox</button>
                    </div>))
                }
            </div>

        </div>
    );
}

export default App;
