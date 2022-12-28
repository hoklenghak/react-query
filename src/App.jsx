import NavBar from "./components/navbar";

import {Routes, Route, Navigate} from "react-router-dom";
import Competition from "./pages/Competition";
import Home from "./pages/Home";
import Category from "./pages/Category.jsx";

function App() {
    return (
        <>
            <NavBar/>
            <div className="App">
                <Routes>
                    <Route path="/" index element={<Navigate to={"home"}/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="competition" element={<Competition/>}>
                        <Route path={":category"} element={<Category/>}/>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
