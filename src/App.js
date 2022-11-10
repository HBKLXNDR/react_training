import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
    const state = useSelector(state => state.userReducer);
    console.log(state);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/')
                    .then(value => value.json())
                    .then(value => {
                        dispatch({type: "Load user", payload: value})
                        });
    },[])






    return (
        <div>
        </div>
    );
}

export default App;
