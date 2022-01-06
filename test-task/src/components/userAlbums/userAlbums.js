import React from 'react';
import cl from "./userAlbums.module.css"

const UserAlbums = ({albums, albumsId}) => {
    let usersAlbums = albums.filter(i => i.userId === albumsId)


    return (
        <ol className={cl.albums_list}>
            <h1>Users albums:</h1>
            {usersAlbums.map(i => <li className={cl.albums_list_item} key={i.id}>{i.title}</li>)}
        </ol>
    );
};

export default UserAlbums;