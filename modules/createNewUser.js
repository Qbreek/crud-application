function createNewUser() {
    const formPopup = document.createElement('div');
    formPopup.classList.add('form-popup');
    
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');

    const formButtonContainer = document.createElement('div');
    formButtonContainer.classList.add('form-button-container');

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
    firstNameInput.type = 'text';
    firstNameInput.name = 'firstname';
    firstNameInput.value = userInfo.firstName;
    
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.name = 'lastname';
    lastNameInput.value = userInfo.lastName;
   
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.value = userInfo.address;
   
}