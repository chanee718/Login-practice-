"use strict";

//DOM: document object model (일종의 인터페이스) - JS에서 html 에 존재하는 데이터를 가져와서 사용!

const id = document.querySelector("#id"),
    pwd = document.querySelector("#pwd"),
    loginbutton = document.querySelector("button");

loginbutton.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pwd: pwd.value,
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    });
}