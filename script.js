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
            createTableElements(user);
        });
    } catch(error) {
        console.error(`Could not get users: ${error}`);
    }
}

//for every user create the coresponding table element
function createTableElements(userInfo) {
    //create the table elements
    const table = document.getElementById('users');
    const tr = document.createElement('tr');
    const firstName = document.createElement('td');
    const lastName = document.createElement('td');
    const address = document.createElement('td');
    //split userInfo.name into first and last name
    const name = userInfo.name.split(' ');
    firstName.textContent = name[0];
    lastName.textContent = name[1];
    address.textContent = userInfo.address.street;
    tr.appendChild(firstName);
    tr.appendChild(lastName);
    tr.appendChild(address);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
        editUser(userInfo);
    });
    tr.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteUser(userInfo);
    });
    tr.appendChild(deleteBtn);

    table.appendChild(tr);
}




getUsers('https://jsonplaceholder.typicode.com/users');