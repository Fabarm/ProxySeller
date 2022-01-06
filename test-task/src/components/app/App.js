import React, {useEffect} from "react";
import './App.css';
import UsersList from "../usersList/usersList";
import MyModal from "../modal/MyModal";
import {useState} from "react";
import Service from "../../services/servise";
import UserAlbums from "../userAlbums/userAlbums";

function App() {
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [id, setId] = useState('');
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);

   useEffect(()=>{
       fetchUsers()
   }, [])

    async function fetchUsers() {
        const users = await Service.getMe("/users");
        setUsers(users)
   }

    useEffect(()=>{
        fetchAlbums()
    }, [])

    async function fetchAlbums() {
        const albums = await Service.getMe("/albums");
        setAlbums(albums)
    }

    useEffect(()=>{
        fetchPosts()
    }, [])

    async function fetchPosts() {
        const posts = await Service.getMe("/posts");
        setPosts(posts)
    }

   function onGetId(id) {
       setId(id);
       if(id){
           setModal(true);
       }
   }


  return (
    <div className="App">
        <MyModal visible={modal} setVisible={setModal}>
            <UserAlbums albums={albums} albumsId={id}/>
        </MyModal>
        <UsersList
            users={users}
            onGetId={id => onGetId(id)} />
    </div>
  );
}

export default App;
