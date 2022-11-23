import {Header, Posts, Users} from "./components";

function App() {
    return (
        <div>
            <Header/>
            <div>
                <Users/>
                <hr/>
                <Posts/>
            </div>
        </div>
    );
}

export default App;
