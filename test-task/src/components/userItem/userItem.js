import React from 'react';
import classes from "./userItem.module.css"

const UserItem = ({user, onGetId, onGetVis}) => {

    return (
        <li className={classes.user}>
            <div className={classes.user__info}>
                <p>User: {user.username}</p>
                <p>Full name: {user.name}</p>
                <p>User phone: {user.phone}</p>
                <p>User email: {user.email}</p>
                <p>User website: {user.website}</p>
            </div>
            <div className={classes.btns} >
                <button
                    className={classes.myBtn}
                    >Show user posts</button>
                <button
                    className={classes.myBtn}
                    onClick={onGetId}
                    >Show user albums</button>
            </div>
        </li>
    );
};

export default UserItem;