import React, {useState} from 'react';
import GistList from "./gistList";
import UserInput from './userInput';
import UserDisplay from './userDisplay'
import {UserList} from './userList'
import {getGistsForUser,getForksForGist, getUsers} from "../fakeCalls";

function Page() {
    const [loadingList, setLoadingList] = useState(false);
    const [user, setUser] = useState('');
    const [userListOpen, setUserListOpen] = useState(false)
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
            <UserInput      hidden={ user || userListOpen }
                            changeUser={changeUser}
                            showUserList={showUserList}/>
            <UserList       hidden={ user || !userListOpen }
                            getUsers={getUsers}
                            changeUser={changeUser}
                            hideUserList={hideUserList}/>
            <UserDisplay    hidden={!user} name={user}
                            resetUser={resetUser} />
            <GistList       hidden={!user}
                            list={list} error={error}
                            getForksForGist={getForksForGist}/>
        </div>
    )

    // return (
    //     <div>
    //         <UserList getUsers={getUsers} userChange={userChanged}/>
    //         <Username changeHandler={userChanged} resetHandler={userReset}/>
    //         { loading?  <div>wait</div> : null}
    //         { user.length > 0  ?
    //             <GistList list={list} error={error} getForksForGist={getForksForGist}/> : null}
    // </div>);
}

export default Page;