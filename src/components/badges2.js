import React from 'react';
import Badge from './badge'

function Badges(props) {
    let types = new Set(); // make sure there's only one copy of each type
    props.files.forEach((file) => {
        types.add(file.type)
    });
    let badges = [];
    for (let t of types) {
        badges.push(<Badge filetype={t} key={t}/>)
    }
    return <div className="badges">{badges}</div>
}

export default Badges;