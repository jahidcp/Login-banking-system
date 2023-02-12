// step 01 add click event with submit button handler

document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log("Button Submit Change.")
    // step 02 get email address inside the input field
    // always remember to use .value to get next from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step 03 get password
    // step 03.a: set id on html element
    // step 03.b: get the element
    // step 03.c: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    // DANGER: Do not verify on the client side.
    // step 04 very email and password and check weather valid user or not
    if(email === 'random@gmail.com' && password === 'bangladesh'){
        // console.log("Your are a valid user.")
        window.location.href='bank.html';
    }
    else{
        alert('Your are not a valid for access our Service.');
    }
})