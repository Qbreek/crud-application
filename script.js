//async function that fetches the users from the provided endpoint(url)
async function getUsers(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const users = await response.json();
        users.forEach(user => {
            console.log(user);
        });
    } catch(error) {
        console.error(`Could not get users: ${error}`);
    }
}

getUsers('https://jsonplaceholder.typicode.com/users');