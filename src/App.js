import {MoviesList} from "./components/MoviesList";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layots";


function App() {
  return (
    <div >
      <Routes>
        <Route path={'/'} element={<MainLayout/>}/>

      </Routes>
    <MoviesList/>
    </div>
  );
}

export default App;
