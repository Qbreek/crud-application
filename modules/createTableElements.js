import editUserHiddenPopupForm from "../editUserHiddenPopup.js";

//for every user create the coresponding table element
export default function createTableElements(userInfo) {
    //create the table elements
    const table = document.getElementById('users');
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('id', userInfo.id);
    const firstName = document.createElement('td');
    const lastName = document.createElement('td');
    const address = document.createElement('td');
    const action = document.createElement('td');
   
    //split userInfo.name into first and last name
    firstName.textContent = userInfo.firstName;
    lastName.textContent = userInfo.lastName;
    address.textContent = userInfo.address;
    tableRow.append(firstName, lastName, address, action);

    //edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('button', 'edit-btn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
       editUserHiddenPopupForm(userInfo);
    });
    
    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('button', 'delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        tableRow.remove();
        localStorage.removeItem(userInfo.id);
    });

    action.append(editBtn, deleteBtn);

    tableRow.appendChild(action);

    table.appendChild(tableRow);
}