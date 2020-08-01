import React, {useState, useEffect} from 'react';
import Gist from './gist';
import {getGistsForUser} from "../calls";

function GistList(props) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState(null);
    const [error, setError] = useState(null);

    useEffect(catchUserChange);

    function catchUserChange() {
        if (!props.user) {
            return;
        }
        if (props.user === user) {
            return;
        }
        setUser(props.user);
        setLoading(true);
        setList(null);
        setError(null);
        getGistsForUser(props.user).then(
            (list) => {
                setList(list);
                setLoading(false);
            },
            (error) => {
                setError(error);
                setLoading(false);
            }
        )
    }

    if (props.hidden) {  // aka !user, it's just easier to read
        return null;
    }
    if (loading) {
        return <div className="panel">Please, wait</div>
    }
    if (error) {
        return <div className="panel error">{error}</div>
    }
    if (!Array.isArray(list)) {
        return null;   // don't think it happens at this point
    }
    if (list.length === 0) {
        return <div className="panel">No gists to display</div>
    }

    let renderedList = [];
    list.forEach(
        (gist, index) => renderedList.push(
            <Gist
                gist={gist}
                key={index}
                setAvatar={props.setAvatar}
            />))
    return (<div className="panel gistlist">
        {renderedList}
    </div>)
}

export default GistList;