//change the form 
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#loginAccountForm");
    const createAccountForm = document.querySelector("#createAccountForm");

    document.querySelector("#createAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("hideForm");
        createAccountForm.classList.remove("hideForm");
    });


    document.querySelector("#loginAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("hideForm");
        createAccountForm.classList.add("hideForm");
    });
});


// control error meassages