import React from 'react';

const UserAlbums = ({albums, albumsId}) => {
    if(albums.length > 1 && albumsId !== ""){
        const ff = albums.filter(i => i.userId === albumsId)
        console.log(ff)
    }



    return (
        <ul>
            <h1>Users albums</h1>

        </ul>
    );
};

export default UserAlbums;