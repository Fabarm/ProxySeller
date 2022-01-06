import React, {useEffect} from "react";
import './App.css';
import UsersList from "../usersList/usersList";
import MyModal from "../UI/modal/MyModal";
import {useState} from "react";
import Service from "../../services/servise";
import UserAlbums from "../userAlbums/userAlbums";

function App() {
    const [users, setUsers] = useState([])
    const [albums, setAlbums] = useState([])
    const [id, setId] = useState('')
    // const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)

   useEffect(()=>{
       fetchUsers()
   }, [])

    async function fetchUsers() {
        const users = await Service.getUsers();
        setUsers(users)
   }

    useEffect(()=>{
        fetchAlbums()
    }, [])

    async function fetchAlbums() {
        const albums = await Service.getAlbums();
        setAlbums(albums)
    }

   function onGetId(id) {
       console.log(id)
       setId(id);
   }

    function onGetVis(i) {
        console.log(i)
        setModal(i);
    }

  return (
    <div className="App">
        <MyModal visible={modal} setVisible={setModal}>
            <UserAlbums albums={albums} albumsId={id}/>
        </MyModal>
        <UsersList
            users={users}
            onGetId={id => onGetId(id)}
            onGetVis={i => onGetVis(i)}/>
    </div>
  );
}

export default App;
