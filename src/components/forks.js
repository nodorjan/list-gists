import React, {useState} from 'react';
import {getForksForGist} from '../calls';
import './user.css'

function Fork(props) {
    let owner = props.fork.owner;
    return (
        <div className="user">
            <div className="username">
                {owner.login}
            </div>
            <a href={props.fork.html_url} target={'fork' + props.fork.id}>
                <img src={props.fork.owner.avatar_url} alt={owner.login}/>
            </a>
        </div>);
}

function Forks(props) {
    const [loading, setLoading] = useState(false);
    const [forks, setForks] = useState(null);
    const [error, setError] = useState(null);
    const [dormant, setDormant] = useState(true);  // that is, nobody clicked on the link to see the forks

    const getForks = (gist) => {
        setLoading(true);
        setDormant(false);
        setForks(null);
        setError(null);
        getForksForGist(props.gist).then(
            (forks) => {
                setForks(forks);
                setLoading(false);
            },
            (eror) => {
                setError(error);
                setLoading(false);
            }
        )
    }

    let forksContent = null;
    if (dormant)
        forksContent = <div className="actionLink" onClick={getForks}>Get forks</div>
    else if (loading) {
        forksContent =
            <img src="images/loading.gif" className="loading" alt="Please, wait"/>
    } else if (error) {
        forksContent = <div className="panel error">$error</div>
    } else {
        if (Array.isArray(forks)) {
            if (forks.length === 0) {
                forksContent = "No forks"
            } else {
                let renderedForks = forks.map((f, index) => {
                        return (
                            <Fork key={index} fork={f}/>)
                    }
                )
                forksContent = renderedForks;
            }
        }
    }

    return <div className="forks">
        {forksContent}
    </div>
}

export default Forks;