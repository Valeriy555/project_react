import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layots";
import {MovieInfoPage, MoviesListPage} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesListPage/>}/>
                <Route path={'moviesInfo'} element={<MovieInfoPage/>}/>


        </Route>
</Routes>

)
    ;
}

export default App;
