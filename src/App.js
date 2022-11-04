import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layots";
import {MoviesListPage} from "./pages";
import {MovieInfo} from "./components";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesListPage/>}/>
                <Route path={'movies/movieInfo'} element={<MovieInfo/>}/>


        </Route>
</Routes>

)
    ;
}

export default App;
