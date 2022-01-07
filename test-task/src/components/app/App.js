import {BrowserRouter, Routes, Route} from "react-router-dom";
import Users from "../../pages/users";
import Posts from "../../pages/posts";

function App() {
    function ok(){

    }
    
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Users ok={ok}/> }/>
            <Route path="posts" element={<Posts/>}/>
            <Route path="*" element={<Users/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
