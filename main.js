import createTableElements from "./modules/createTableElements.js";

function main() {
    if (localStorage.length === 0) {
        getUsers('https://jsonplaceholder.typicode.com/users');
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            const user = JSON.parse(localStorage.getItem(localStorage.key(i)));
            createTableElements(user);
        }
    }
}

main();