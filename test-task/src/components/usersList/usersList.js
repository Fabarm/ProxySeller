import React from 'react';
import UserItem from "../userItem/userItem";

const UsersList = ({users, onGetId}) => {

    return (
        <ul>
            <h1>Users List</h1>
            {users.map((user) =>
                <UserItem 
                    user={user} 
                    key={user.id} 
                    onGetId={() => onGetId(user.id)}/>
            )}
        </ul>
    );
};

export default UsersList;