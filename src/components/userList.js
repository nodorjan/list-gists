import React, {useState, useEffect} from "react";
import ListedUser from './listedUser';
import {getUsers} from '../calls';

function UserList(props) {
    const [list, setList] = useState({});
    const [error, setError] = useState(null);
    const [listLoading, setListLoading] = useState(false);
    const [listLoaded, setListLoaded] = useState(false);

    if (props.hidden) {
        return null;
    }

    if (listLoading) {
        return <div className="panel">Please, wait</div>
    }

    if (error) {
        return <div className="panel error">{error}</div>
    }

    const getCurrentUsers = () => {
        setListLoading(true);
        getUsers().then(
            (u) => {
                setList(u);
                setListLoading(false);
                setListLoaded(true);
            },
            (e) => {
                setError(e);
                setListLoading(false);
                setListLoaded(true);
            })
    }

    if (!listLoading && !listLoaded) {
        getCurrentUsers();
    }

    let renderedUsers = [];
    for (let login in list) {
        renderedUsers.push(<ListedUser
            key={login}
            login={login}
            userProperties = {list[login]}
            clickHandler={() => {
                props.changeUser(login, list[login].avatar_url);
            }}
        />);
    }
    return (
        <div className="panel">
            <div className="title">Some Git users who have gists to look at</div>
            <div>Click on a user to see their public gists or
                <button onClick={props.hideUserList}>Input user name</button></div>
            <div className="userList">
                {renderedUsers}
            </div>
        </div>);
}

export {UserList};
