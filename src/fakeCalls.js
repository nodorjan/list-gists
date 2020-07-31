function getGists(user) {
    console.log('get gists called', user);
    return new Promise(function (success,failure) {
        let sfu = () =>
        success([ {
            "url": "https://api.github.com/gists/aa5a315d61ae9438b18d",
            "forks_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
            "commits_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
            "id": "aa5a315d61ae9438b18d",
            "node_id": "MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk",
            "git_pull_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "git_push_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "html_url": "https://gist.github.com/aa5a315d61ae9438b18d",
            "files": {
                "hello_world.rb": {
                    "filename": "hello_world.rb",
                    "type": "application/x-ruby",
                    "language": "Ruby",
                    "raw_url": "https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb",
                    "size": 167
                }
            },
            "public": true,
            "created_at": "2010-04-14T02:15:15Z",
            "updated_at": "2011-06-20T11:34:15Z",
            "description": "Hello World Examples",
            "comments": 0,
            "user": null,
            "comments_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/comments/",
            "owner": {
                "login": "octocat",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                "gravatar_id": "",
                "url": "https://api.github.com/users/octocat",
                "html_url": "https://github.com/octocat",
                "followers_url": "https://api.github.com/users/octocat/followers",
                "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                "organizations_url": "https://api.github.com/users/octocat/orgs",
                "repos_url": "https://api.github.com/users/octocat/repos",
                "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                "received_events_url": "https://api.github.com/users/octocat/received_events",
                "type": "User",
                "site_admin": false
            },
            "truncated": false
        }])
        setTimeout(sfu, 2000);
        // fetch(`https://api.github.com/users/${user}/gists`).then(
        //     (response) => {
        //         if (response.status === 200) {
        //             response.json().then(
        //                 (data) => {success(data)},
        //                 (error) => {failure(error)}
        //             )
        //         } else {
        //             let error = `Error retrieving gists for ${user}`;
        //             if (response.status === 404) {
        //                 error = `Unknown user : {$user}`
        //             }
        //             if (response.status === 403) {
        //                 error = "Too many requests";
        //             }
        //             failure(error);
        //         }
        //     }
        // )
    })
}
    // {
    //     fetch('https://api.github.com/users/rxavierffs/gists').then(
    //         (response) => {
    //             if (response.status === 200) {
    //
    //             }
    //             console.log(response);
    //             response.json().then((j) => {
    //                 console.log(j)
    //             })
    //         }
    //     )
    // }

    // fetch('https://api.github.com/gists/623e8450d9234f86a29477e9373c081d/forks').then(
    //     (response ) => {
    //         response.json().then( (j) => { console.log(j)})
    //     }
    // )


export {getGists}