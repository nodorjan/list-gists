const delay = 2700;

function getUsers() {
    return new Promise((success, failure) => {
        setTimeout(() => success(getUsersReturnValue), delay);
    })
}

function getGistsForUser(user) {
    return new Promise((success, failure) => {
        setTimeout(() => success(getGistsReturnValue), delay);
    })
}

function getUsersReturnValue() {
    return {
        noGist: {
            avatar_url: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        someGists: {
            avatar_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg?crop=1.00xw:0.757xh;0,0.173xh&resize=980:*'
        }
    }
}

function getGistsReturnValue(user) {
    if (user === 'noGist') {
        return [];
    }
    return [{
        "url": "https://api.github.com/gists/4c393311af17bb17a1b495fa4dbaf453",
        "forks_url": "https://api.github.com/gists/4c393311af17bb17a1b495fa4dbaf453/forks",
        "commits_url": "https://api.github.com/gists/4c393311af17bb17a1b495fa4dbaf453/commits",
        "id": "4c393311af17bb17a1b495fa4dbaf453",
        "node_id": "MDQ6R2lzdDRjMzkzMzExYWYxN2JiMTdhMWI0OTVmYTRkYmFmNDUz",
        "git_pull_url": "https://gist.github.com/4c393311af17bb17a1b495fa4dbaf453.git",
        "git_push_url": "https://gist.github.com/4c393311af17bb17a1b495fa4dbaf453.git",
        "html_url": "https://gist.github.com/4c393311af17bb17a1b495fa4dbaf453",
        "files": {
            "list of lists": {
                "filename": "list of lists into a single list",
                "type": "text/plain",
                "language": null,
                "raw_url": "https://gist.githubusercontent.com/RaulMedeiros/4c393311af17bb17a1b495fa4dbaf453/raw/df3f5a5ce54a8562386877f7ca18eaa2c6cd1642/list%20of%20lists%20into%20a%20single%20list",
                "size": 277
            },
            "image added": {
                "filename": "list of lists into a single list",
                "type": "image/gif",
                "language": null,
                "raw_url": "https://gist.githubusercontent.com/RaulMedeiros/4c393311af17bb17a1b495fa4dbaf453/raw/df3f5a5ce54a8562386877f7ca18eaa2c6cd1642/list%20of%20lists%20into%20a%20single%20list",
                "size": 277
            },
            "other image added": {
                "filename": "list of lists into a single list",
                "type": "image/gif",
                "language": null,
                "raw_url": "https://gist.githubusercontent.com/RaulMedeiros/4c393311af17bb17a1b495fa4dbaf453/raw/df3f5a5ce54a8562386877f7ca18eaa2c6cd1642/list%20of%20lists%20into%20a%20single%20list",
                "size": 277
            }
        },
        "public": true,
        "created_at": "2019-11-22T12:51:45Z",
        "updated_at": "2020-07-31T13:33:58Z",
        "description": "",
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/4c393311af17bb17a1b495fa4dbaf453/comments",
        "owner": {
            "login": "RaulMedeiros",
            "id": 4583166,
            "node_id": "MDQ6VXNlcjQ1ODMxNjY=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/4583166?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/RaulMedeiros",
            "html_url": "https://github.com/RaulMedeiros",
            "followers_url": "https://api.github.com/users/RaulMedeiros/followers",
            "following_url": "https://api.github.com/users/RaulMedeiros/following{/other_user}",
            "gists_url": "https://api.github.com/users/RaulMedeiros/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/RaulMedeiros/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/RaulMedeiros/subscriptions",
            "organizations_url": "https://api.github.com/users/RaulMedeiros/orgs",
            "repos_url": "https://api.github.com/users/RaulMedeiros/repos",
            "events_url": "https://api.github.com/users/RaulMedeiros/events{/privacy}",
            "received_events_url": "https://api.github.com/users/RaulMedeiros/received_events",
            "type": "User",
            "site_admin": false
        },
        "truncated": false
    },
        {
            "url": "https://api.github.com/gists/a3c7e0376b5e31a9694d02b29919e183",
            "forks_url": "https://api.github.com/gists/a3c7e0376b5e31a9694d02b29919e183/forks",
            "commits_url": "https://api.github.com/gists/a3c7e0376b5e31a9694d02b29919e183/commits",
            "id": "a3c7e0376b5e31a9694d02b29919e183",
            "node_id": "MDQ6R2lzdGEzYzdlMDM3NmI1ZTMxYTk2OTRkMDJiMjk5MTllMTgz",
            "git_pull_url": "https://gist.github.com/a3c7e0376b5e31a9694d02b29919e183.git",
            "git_push_url": "https://gist.github.com/a3c7e0376b5e31a9694d02b29919e183.git",
            "html_url": "https://gist.github.com/a3c7e0376b5e31a9694d02b29919e183",
            "files": {
                "Create Virtual Environments For Python With Conda": {
                    "filename": "Create Virtual Environments For Python With Conda",
                    "type": "text/plain",
                    "language": null,
                    "raw_url": "https://gist.githubusercontent.com/RaulMedeiros/a3c7e0376b5e31a9694d02b29919e183/raw/623e358cf7d87ff6bf6edd7d598fa7b373267820/Create%20Virtual%20Environments%20For%20Python%20With%20Conda",
                    "size": 707
                }
            },
            "public": true,
            "created_at": "2019-10-20T21:56:08Z",
            "updated_at": "2019-10-20T21:56:08Z",
            "description": "Create Virtual Environments For Python With Conda",
            "comments": 0,
            "user": null,
            "comments_url": "https://api.github.com/gists/a3c7e0376b5e31a9694d02b29919e183/comments",
            "owner": {
                "login": "RaulMedeiros",
                "id": 4583166,
                "node_id": "MDQ6VXNlcjQ1ODMxNjY=",
                "avatar_url": "https://avatars3.githubusercontent.com/u/4583166?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/RaulMedeiros",
                "html_url": "https://github.com/RaulMedeiros",
                "followers_url": "https://api.github.com/users/RaulMedeiros/followers",
                "following_url": "https://api.github.com/users/RaulMedeiros/following{/other_user}",
                "gists_url": "https://api.github.com/users/RaulMedeiros/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/RaulMedeiros/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RaulMedeiros/subscriptions",
                "organizations_url": "https://api.github.com/users/RaulMedeiros/orgs",
                "repos_url": "https://api.github.com/users/RaulMedeiros/repos",
                "events_url": "https://api.github.com/users/RaulMedeiros/events{/privacy}",
                "received_events_url": "https://api.github.com/users/RaulMedeiros/received_events",
                "type": "User",
                "site_admin": false
            },
            "truncated": false
        },

    ];
}

export {getUsers as getUsersDemo, getGistsForUser as getGistsForUserDemo}