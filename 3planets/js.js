let planet1 = document.getElementById('p-1');
let planet2 = document.getElementById('p-2');
let planet3 = document.querySelector('#p-3');
let planet4 = document.querySelector('#p-4');
let planet5 = document.querySelector('#p-5');
let planet6 = document.querySelector('#p-6');
let planet7 = document.querySelector('#p-7');
let planet8 = document.querySelector('#p-8');

let planets = { "g_mercurio": 3.7, "g_venus": 8.87, "g_tierra": 9.8, "g_marte": 3.721, "g_jupiter": 24.79, "g_saturno": 10.44, "g_urano": 8.87, "g_neptuno": 11.15 };
localStorage.setItem('Planeta', JSON.stringify(planets));

function most1() {
    planet1.addEventListener('click', () => {
        let data = JSON.parse(localStorage.getItem('Planeta'));
        let dataUser = JSON.parse(localStorage.getItem("data"));
        let p_f = dataUser.peso * data.g_mercurio / data.g_tierra;
        let deciP = p_f.toFixed(2);
        alertify.alert(dataUser.nombre, 'Tu peso en este planeta es de:' + deciP + ' kg');
    });
}
most1();

function most2() {
    planet2.addEventListener('click', () => {
        let data = JSON.parse(localStorage.getItem('Planeta'));
        let dataUser = JSON.parse(localStorage.getItem("data"));
        let p_f = dataUser.peso * data.g_venus / data.g_tierra;
        let deciP = p_f.toFixed(2);
        alertify.alert(dataUser.nombre, 'Tu peso en este planeta es de:' + deciP + ' kg');
    })
}
most2();

function most3() {
    planet3.addEventListener('click', () => {
        let data = JSON.parse(localStorage.getItem('Planeta'));
        let dataUser = JSON.parse(localStorage.getItem("data"));
        let p_f = dataUser.peso * data.g_tierra / data.g_tierra;
        let deciP = p_f.toFixed(2);
        alertify.alert(dataUser.nombre, 'Tu peso en este planeta es de:' + deciP + ' kg');
    })
}
most3();

function most4() {
    planet4.addEventListener('click', () => {
        let data = JSON.parse(localStorage.getItem('Planeta'));
        let dataUser = JSON.parse(localStorage.getItem("data"));
        let p_f = dataUser.peso * data.g_marte / data.g_tierra;
        let deciP = p_f.toFixed(2);
        alertify.alert(dataUser.nombre, 'Tu peso en este planeta es de:' + deciP + ' kg');
    })
}
most4();

function most5() {
    planet5.addEventListener('click', () => {
        let data = JSON.parse(localStorage.getItem('Planeta'));
        let dataUser = JSON.parse(localStorage.getItem("data"));
        let p_f = dataUser.peso * data.g_jupiter / data.g_tierra;
        let deciP = p_f.toFixed(2);
        alertify.alert(dataUser.nombre, 'Tu peso en este planeta es de:' + deciP + ' kg');
    })
}
most5();

function most6() {
    planet6.addEventListener('click', () => {
        let data = JSON.parse(localStorage.getItem('Planeta'));
        let dataUser = JSON.parse(localStorage.getItem("data"));
        let p_f = dataUser.peso * data.g_saturno / data.g_tierra;
        let deciP = p_f.toFixed(2);
        alertify.alert(dataUser.nombre, 'Tu peso en este planeta es de:' + deciP + ' kg');
    })
}
most6();

function most7() {
    planet7.addEventListener('click', () => {
        let data = JSON.parse(localStorage.getItem('Planeta'));
        let dataUser = JSON.parse(localStorage.getItem("data"));
        let p_f = dataUser.peso * data.g_urano / data.g_tierra;
        let deciP = p_f.toFixed(2);
        alertify.alert(dataUser.nombre, 'Tu peso en este planeta es de:' + deciP + ' kg');
    })
}
most7();

function most8() {
    planet8.addEventListener('click', () => {
        let data = JSON.parse(localStorage.getItem('Planeta'));
        let dataUser = JSON.parse(localStorage.getItem("data"));
        let p_f = dataUser.peso * data.g_neptuno / data.g_tierra;
        let deciP = p_f.toFixed(2);
        alertify.alert(dataUser.nombre, 'Tu peso en este planeta es de:' + deciP + ' kg');
    })
}
most8();












