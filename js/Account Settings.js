// script for edit and save in profile information start
const editBtn = document.getElementById('editProfile');
const inputs = document.querySelectorAll('#profileForm input');
const genderRadios = document.querySelectorAll('#profileForm input[name="gender"]');

let isEditable = false;

editBtn.addEventListener('click', function (e) {
    e.preventDefault();
    isEditable = !isEditable;

    // Toggle input fields' readonly state
    inputs.forEach(input => {
        input.readOnly = !isEditable;
    });

    // Toggle radio buttons' disabled state
    genderRadios.forEach(radio => {
        radio.disabled = !isEditable;
    });

    // Toggle Edit/Save button text
    editBtn.textContent = isEditable ? 'Save' : 'Edit';

    // Optional: Add save logic here if needed, like sending data to a server
    if (!isEditable) {
        alert('Profile saved successfully!');
    }
});
// script for edit and save in profile information end





// script for edit and save in address information start

const editAddressBtn = document.getElementById('editAddress');
const addressInputs = document.querySelectorAll('#addressForm input');

let isAddressEditable = false;

editAddressBtn.addEventListener('click', function (e) {
    e.preventDefault();
    isAddressEditable = !isAddressEditable;

    // Toggle input fields' readonly state
    addressInputs.forEach(input => {
        input.readOnly = !isAddressEditable;
    });

    // Toggle Edit/Save button text
    editAddressBtn.textContent = isAddressEditable ? 'Save' : 'Edit';

    // Optional: Add save logic here if needed
    if (!isAddressEditable) {
        alert('Address saved successfully!');
    }
});
// script for edit and save in address information end

