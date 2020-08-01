import React, {useState} from "react";
import Badge from './badge'
import Forks from './forks2'
import {getForksForGist} from "../calls"
import './gists.css'

function Gist(props) {
    const [forks, setForks] = useState(null);
    const [forksLoading, setForksLoading] = useState(false);
    let {gist, getForksForGist} = props;
    let {files, id, description, html_url} = gist;
    let fileValues = Object.values(files);
    let displayName = fileValues.length > 0 ? fileValues[0].filename : id;
    let types = new Set();
    fileValues.forEach((file) => {
        types.add(file.type)
    });
    let badges = [];
    for (let t of types) {
        badges.push(<Badge filetype={t} key={t}/>)
    }
    let getMyForks = () => {
        setForksLoading(true);
        getForksForGist(gist).then((forks) => {
            setForksLoading(false);
            setForks(forks);
        });
    }

    let forksPart = <div className="actionLink" onClick={getMyForks}>Get forks</div>;
    if (forksLoading) {
        forksPart = <div>Loading</div>
    }
    if (Array.isArray(forks)) {
        forksPart = <Forks forks={forks}/>
    }

    return (
        <div key={props.index} className="gist">
            <a href={html_url}
               target={'showGist' + id}
               title="Open Gist">
                {displayName}
            </a>
            <div>{description}</div>
            File types : {badges}
            {forksPart}
        </div>
    )
}

export {Gist};
