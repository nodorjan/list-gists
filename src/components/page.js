import React, {useState} from 'react';
import GistList from "./gistList";
import UserInput from './userInput';
import UserDisplay from './userDisplay'
import {UserList} from './userList'
import {getGistsForUser} from "../calls";

function Page() {
    const [user, setUser] = useState('');

    const [userListOpen, setUserListOpen] = useState(false);

    const [loadingList, setLoadingList] = useState(false);
    const [list, setList] = useState(null);
    const [error, setError] = useState(null);

    const showUserList = () => {
        setUserListOpen(true);
    }

    const hideUserList = () => {
        setUserListOpen(false);
    }

    const changeUser = (username) => {
        if (username === user) {
            return;
        }
        setUser(username);
        setLoadingList(true);
        getGistsForUser(username).then(
            (list) => {
                setLoadingList(false);
                setList(list)
            },
            (error) => {
                setLoadingList(false);
                setError(error);
            }
        );
    }

    const resetUser = () => {
        // waiting for the viewer to enter or select a user name
        setUser('');
        setLoadingList(false);
        setList(null);
        setUserListOpen(false);
    }

    return (
        <div>
            {/* Enter user login name */}
            <UserInput hidden={user || userListOpen} changeUser={changeUser} showUserList={showUserList}/>
            {/* Present a list of users to select from */}
            <UserList hidden={user || !userListOpen} changeUser={changeUser} hideUserList={hideUserList}/>
            {/* Show selected / entered user */}
            <UserDisplay hidden={!user} name={user} resetUser={resetUser}/>
            {/* Show gists for the user */}
            <GistList hidden={!user} list={list} error={error}/>
        </div>
    )
}

export default Page;