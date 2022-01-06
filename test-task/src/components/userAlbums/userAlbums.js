import React from 'react';

const UserAlbums = ({albums, albumsId}) => {
    let usersAlbums = albums.filter(i => i.userId === albumsId)


    return (
        <ul>
            <h1>Users albums</h1>
            {usersAlbums.map(i => <li key={i.id}>{i.title}</li>)}
        </ul>
    );
};

export default UserAlbums;