import {Comments, Header, Posts, Todos, Users} from "./components";
import css from "./App.module.css";


function App() {
    return (
        <div>
            <Header/>
            <div className={css.flex}>
                <Comments/>
                <hr/>
                <Posts/>
            </div>
            <hr/>
            <div className={css.flex}>
                <Users/>
                <hr/>
                <Todos/>
            </div>
        </div>
    );
}

export default App;
