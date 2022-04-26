import createTableElements from "./createTableElements.js";
import { enableBtns } from "./enableDisableBtn.js";

export default function createNewUserHiddenPopupForm() {
    const formPopup = document.createElement('div');
    formPopup.classList.add('form-popup');
    
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');

    const formButtonContainer = document.createElement('div');
    formButtonContainer.classList.add('form-button-container');

    //create the form title
    const formLegend = document.createElement('legend');
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'New Member';
    formLegend.appendChild(formTitle);

    //create the label elements
    const firstNameLabel = document.createElement('label');
    firstNameLabel.setAttribute('for', 'firstName');
    firstNameLabel.textContent = 'First Name';
    
    const lastNameLabel = document.createElement('label');
    lastNameLabel.setAttribute('for', 'lastName');
    lastNameLabel.textContent = 'Last Name';

    const addressLabel = document.createElement('label');
    addressLabel.setAttribute('for', 'address');
    addressLabel.textContent = 'Address';

    //create the text input elements
    const firstNameInput = document.createElement('input');
    firstNameInput.id = 'firstName';
    firstNameInput.type = 'text';
    firstNameInput.name = 'firstname';
    firstNameInput.placeholder = 'eg. John';
    
    const lastNameInput = document.createElement('input');
    lastNameInput.id = 'lastName';
    lastNameInput.type = 'text';
    lastNameInput.name = 'lastname';
    lastNameInput.placeholder = 'eg. Smith';
   
    const addressInput = document.createElement('input');
    addressInput.id = 'address';
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.placeholder = 'eg. 123 Main St.';

    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.classList.add('button', 'save-btn');
    saveBtn.textContent = 'Add';
    saveBtn.addEventListener('click', () => {
        if( checkForEmptyInputs() ) {
            alert('Please fill in all the fields');           
        } else {
             //create the user object and store in local storage
             const userObject = {
                id: localStorage.getItem('key'),
                firstName: firstNameInput.value,  
                lastName: lastNameInput.value,
                address: addressInput.value
            };
            createTableElements(userObject);
            localStorage.setItem(userObject.id, JSON.stringify(userObject));
            localStorage.setItem('key', parseInt(localStorage.getItem('key')) + 1);
            //close the popup
            formPopup.remove();
            enableBtns();
        }
    });

    //create the cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.classList.add('button', 'cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        formPopup.remove();
        enableBtns();
    });

    formButtonContainer.append(saveBtn, cancelBtn);
    formLegend.appendChild(formTitle);
    formContainer.append(formLegend, firstNameLabel, firstNameInput, lastNameLabel, lastNameInput, addressLabel, addressInput, formButtonContainer);
    formPopup.appendChild(formContainer);
    document.body.appendChild(formPopup);
}

function checkForEmptyInputs() {
    const firstNameInput = document.getElementById('firstName').value;
    const lastNameInput = document.getElementById('lastName').value;
    const addressInput = document.getElementById('address').value;
    if (firstNameInput === '' || lastNameInput === '' || addressInput === '') {
        return true;
    }
    return false;
}