const menu = document.getElementById('menu');
const menubtn = document.getElementById('open-menu');
const closebtn = document.getElementById('close-menu');

//open nav bar

menubtn.addEventListener('click' , ()=> {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";

})


//close nav bar

const closenav = ()=> {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";

}
closebtn.addEventListener('click', closenav)
