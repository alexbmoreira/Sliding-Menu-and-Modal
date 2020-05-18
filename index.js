const toggle = document.getElementById("toggle");
const close = document.getElementById("close_modal");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

toggle.addEventListener("click", function (e)
{
    document.body.classList.toggle("show_nav");
});

open.addEventListener("click", function (e)
{
    modal.classList.add("show_modal");
});

close.addEventListener("click", function (e)
{
    modal.classList.remove("show_modal");
});