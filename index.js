const toggle = document.getElementById("toggle");
const close = document.getElementById("close_modal");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

// Open Menu
toggle.addEventListener("click", function (e)
{
    document.body.classList.toggle("show_nav");
});

// Open and close Modal
open.addEventListener("click", function (e)
{
    modal.classList.add("show_modal");
});

close.addEventListener("click", function (e)
{
    modal.classList.remove("show_modal");
});

window.addEventListener("click", function (e)
{
    if (e.target == modal)
    {
        modal.classList.remove("show_modal");
    }
});

// Form validation
form.addEventListener("submit", function (e)
{
    e.preventDefault();

    checkRequired([username, email, password, confirm_password]);
    checkEmail(email);
    checkPasswordMatch(password, confirm_password);
});

function checkRequired(fields)
{
    fields.forEach(function (input)
    {
        if (input.value.trim() === '')
        {
            showError(input, "Required");
        }
        else
        {
            showSuccess(input);
        }
    });
}

function checkEmail(field)
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(field.value.toLowerCase()))
    {
        showError(field, "Not a valid email address");
    }
}

function checkPasswordMatch(input1, input2)
{
    if (input1.value !== input2.value)
    {
        showError(input2, "Password does not match");
    }
}

function showError(field, message)
{
    const form_control = field.parentElement;
    const small = form_control.querySelector("small");

    small.innerText = message;

    form_control.className = "form_control error";
}

function showSuccess(field)
{
    const form_control = field.parentElement;
    form_control.className = "form_control success";
}