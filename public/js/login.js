const loginFormHandler = async function (){

    const nameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login")

    const response = await fetch('/api/users/login', {
        method: 'POST',
    body: JSON.stringify({
        name: nameEl.value,
        password: passwordEl.value,
    }),
    headers: {'Content-Type': "application/json"},
    });

    if(response.ok){
        document.location.replace('/dashboard');
    }else{
        alert('failed to login')
    }
}

document.querySelector("#login-form").addEventListener("submit", loginFormHandler)