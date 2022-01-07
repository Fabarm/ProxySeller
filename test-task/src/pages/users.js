import React, {useEffect, useState} from "react";
import '../components/app/App.css';
import UsersList from "../components/usersList/usersList";
import MyModal from "../components/modal/MyModal";
import Service from "../services/servise";
import UserAlbums from "../components/userAlbums/userAlbums";
import {useNavigate} from "react-router-dom";

const Users = ({callback}) => {
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [idAl, setIdAl] = useState('');
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    let navigate = useNavigate();

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
       setIdAl(id);
       if(id){
           setModal(true);
       }
   }

    function onGet(id) {
        if(id){
            callback(id, posts)
            navigate('posts');
        }
    }

  return (
    <div className="App">
        <MyModal visible={modal} setVisible={setModal}>
            <UserAlbums albums={albums} albumsId={idAl}/>
        </MyModal>
        <UsersList
            users={users}
            onGetId={id => onGetId(id)}
            onGet={(id) => onGet(id)} />
    </div>
  );
}

export default Users;
