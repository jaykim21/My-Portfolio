let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");
let contact = document.querySelector("#contact");


//Attach the Event Listeners to Form using addEventListener()
contact.addEventListener("submit", (event) => {
    event.preventDefault();


    //Develop Utility / helper Functions
    //Create a function that shows correct error messages
    //for each required field
    let showError = (input, messages) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove('success');
        formField.classList.add('error');
    
        // show the error message
        const error = formField.querySelector('small');
        error.textContent = messages;
        
    };
    let showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;
    
        // remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');
    
        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    }
    

    if (firstName.value === ""){
        showError(firstName, `Please provide a First Name`);
    } else{
        showSuccess(firstName, ``);
    }


    if (lastName.value === ""){
        showError(lastName, `Please provide a Last Name`);
    } else{
        showSuccess(lastName, ``);
    }


    if (email.value === ""){
        showError(email, `Please provide an Email`);
    }else{
        showSuccess(email, ``);
    }

    if (message.value === ""){
        showError(message, `Please provide a message`);
    }else{
        showSuccess(message, ``);
    }



    const contactObj = {
        id: Date.now(),
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value,
    };

    //Save to localStorage using setItem()
    localStorage.setItem('contactObj', JSON.stringify(contactObj));
    console.log('Form data saved to local storage:', contactObj);
});

