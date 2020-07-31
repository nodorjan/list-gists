function getGistsForUser(user) {
    return new Promise(
        function (success, failure) {
            fetch(`https://api.github.com/users/${user}/gists`).then(
                (response) => {
                    if (response.status === 200) {
                        response.json().then(
                            (data) => {
                                success(data)
                            },
                            (error) => {
                                failure(error)
                            }
                        )
                    } else {
                        let error = `Error retrieving gists for ${user}`;
                        if (response.status === 404) {
                            error = `Unknown user : ${user}`
                        }
                        if (response.status === 403) {
                            error = "Too many requests";
                        }
                        failure(error);
                    }
                }
            )
        });
}

function getForksForGist(gist) {
    let url = gist.forks_url;
   //url = 'https://api.github.com/gists/8098d939ee597dd3eed87ac768a62075/forks';
   // url = 'https://api.github.com/gists/367fe5b8d29b99d4dad5/forks';
    return new Promise(
        function (success, failure) {
            fetch(url).then(
                (response) => {
                    response.json().then((d)=>{
                        console.log("forks" , d);
                        success(d)
                    }, (e)=>{
                        failure(e)
                    })
                },
                (error) => {
                    failure(error);
                }
            );
        })
}

function getUsers() {
    return new Promise(
        (success, failure) => {
            fetch('https://api.github.com/gists/public').then(
                (response) => {
                    response.json().then((j) => {
                        let owners = {};
                        j.forEach( (gist) => {
                            let login = gist.owner.login;
                            owners[login] = gist.owner;
                        })
                        success(owners)});
                }
            )
        }
    );
}

//     if (response.status === 200) {
//         response.json().then(
//             (data) => {
//                 success(data)
//             },
//             (error) => {
//                 failure(error)
//             }) else {
//         }
//     }
//     }
// }


export {getGistsForUser, getForksForGist, getUsers}

// https://gist.github.com/RaulMedeiros/4c393311af17bb17a1b495fa4dbaf453

/*
[
    {
        "url": "https://api.github.com/gists/6646c2c6debed467da4d52020b673d6a",
        "forks_url": "https://api.github.com/gists/6646c2c6debed467da4d52020b673d6a/forks",
        "commits_url": "https://api.github.com/gists/6646c2c6debed467da4d52020b673d6a/commits",
        "id": "6646c2c6debed467da4d52020b673d6a",
        "node_id": "MDQ6R2lzdDY2NDZjMmM2ZGViZWQ0NjdkYTRkNTIwMjBiNjczZDZh",
        "git_pull_url": "https://gist.github.com/6646c2c6debed467da4d52020b673d6a.git",
        "git_push_url": "https://gist.github.com/6646c2c6debed467da4d52020b673d6a.git",
        "html_url": "https://gist.github.com/6646c2c6debed467da4d52020b673d6a",
        "files": {

        },
        "public": true,
        "created_at": "2020-07-31T13:33:58Z",
        "updated_at": "2020-07-31T13:33:58Z",
        "description": "",
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/6646c2c6debed467da4d52020b673d6a/comments",
        "owner": {
            "login": "nodorjan",
            "id": 12472061,
            "node_id": "MDQ6VXNlcjEyNDcyMDYx",
            "avatar_url": "https://avatars1.githubusercontent.com/u/12472061?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nodorjan",
            "html_url": "https://github.com/nodorjan",
            "followers_url": "https://api.github.com/users/nodorjan/followers",
            "following_url": "https://api.github.com/users/nodorjan/following{/other_user}",
            "gists_url": "https://api.github.com/users/nodorjan/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nodorjan/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nodorjan/subscriptions",
            "organizations_url": "https://api.github.com/users/nodorjan/orgs",
            "repos_url": "https://api.github.com/users/nodorjan/repos",
            "events_url": "https://api.github.com/users/nodorjan/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nodorjan/received_events",
            "type": "ListedUser",
            "site_admin": false
        }
    }
]
*/