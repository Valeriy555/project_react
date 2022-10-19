import {MoviesList} from "./components/MoviesList";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layots";
import {MovieInfo} from "./components/MovieInfo";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>

            </Routes>
            <MoviesList/>
            <MovieInfo/>
        </div>
    );
}

export default App;
