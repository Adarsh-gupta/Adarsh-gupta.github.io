var circle = document.querySelector("#circle");
var btn = document.querySelector("#btn-toggle");
var name = document.getElementById("hi")
var dark = false;
btn.addEventListener('click', () =>{
    circle.classList.toggle('clicked');
    if(dark == false){
    document.documentElement.style
        .setProperty('--bg-color', '#19293A');
    document.documentElement.style
        .setProperty('--primary-color', '#ffffff');
        
        hi.innerHTML = "Light";
        dark = true;
}
else{
    document.documentElement.style
        .setProperty('--bg-color', '#fff');
    document.documentElement.style
        .setProperty('--primary-color', '#19293A');
        hi.innerHTML = "Dark";
        dark = false;
}
});

