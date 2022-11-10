import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {CommentsPage, PostsPage, SingleUserPage, UsersPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout/>} path={"/"}>
                <Route path={"users"} element={<UsersPage/>}/>
                <Route path={"comments"} element={<CommentsPage/>}/>
                <Route path={"posts"} element={<PostsPage/>}/>
                <Route path={"users/:id"} element={<SingleUserPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
