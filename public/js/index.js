console.log('Hello World!');

const userForm = document.getElementById('userForm')

const formSubmission = async (e) => {
    e.preventDefault();


    const userValue = document.getElementById('userNameInput').value;
        console.log(userValue);
    const emailValue = document.getElementById('emailInput').value;
        console.log(emailValue);
    const passwordValue = document.getElementById('passwordInput').value;
        console.log(passwordValue);

    const postValue = await fetch('/users/sign-up', {
        method: 'POST',
        body: JSON.stringify({
            username: userValue,
            password: passwordValue,
            email: emailValue
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (postValue.ok) {
            alert('YOU SIGNED UP!');
    } else {
        alert('FIX YOUR CODE, YOU BABY!');
        }
}

userForm.addEventListener('submit', formSubmission);
