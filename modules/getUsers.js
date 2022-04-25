import createTableElements from "./createTableElements.js";

//async function that fetches the users from the provided endpoint(url)
export default async function getUsers(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const users = await response.json();
        users.forEach(user => {
            const userObject = {
                id: user.id,
                firstName: user.name.split(' ')[0],
                lastName: user.name.split(' ')[1],
                address: user.address.street
            };
            localStorage.setItem(user.id, JSON.stringify(userObject));
            createTableElements(userObject);
        });
    } catch(error) {
        console.error(`Could not get users: ${error}`);
    }
}