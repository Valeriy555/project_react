import {MoviesList} from "./components/MoviesList";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layots";
import {MovieInfo} from "./components/MovieInfo";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'users/:id'} element={<SingleUserPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>

            </Routes>
            <MoviesList/>
            <MovieInfo/>
        </div>
    );
}

export default App;
