import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Users from "../../pages/users";
import Posts from "../../pages/posts";
import {useState} from "react";
import "./App.css"

function App() {
    const [posts, setPosts] = useState();

    function callback(id, posts){
        let postsWithId = posts.filter(i => i.userId === id)
        setPosts(postsWithId)
    }

    return (
    <BrowserRouter>
        <nav className="navbar">
            <NavLink to="/" className="navbar_item">Users</NavLink>
            <NavLink to="posts" className="navbar_item">Posts</NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<Users callback={(id, posts) => callback(id, posts)}/>}/>
            <Route path="posts" element={<Posts posts={posts}/>}/>
            <Route path="*" element={<Users/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
