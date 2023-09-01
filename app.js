const input = document.getElementById("email");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
let button = 0;
document.getElementById('success').style.display = 'none';
document.getElementById('error').style.display = 'none';

    function validateEmail() {
        // let emailRegx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
        const Email = input.value;
        const emailRegx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(Email.match(emailRegx)){
            document.getElementById('success').style.display = 'block';
            document.getElementById('process').style.display = 'none';
            document.getElementById('confirmEmail').innerText = Email
            return true;
        }else{
            input.style.backgroundColor = 'hsla(4, 100%, 67%, 0.2)';
            input.style.borderColor = 'hsla(4, 100%, 67%)';
            input.style.color = 'hsl(4, 100%, 67%)';
            document.getElementById('error').style.display = 'block'; 
            return false;  
        }
    }

    btn2.onclick = function () {
        location.reload();
        }

    btn.onclick = function () {
        validateEmail()
        }

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            btn.click();
        }
    });