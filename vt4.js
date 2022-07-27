"use strict";
//@ts-check 

let palkkimaara = 10;
let osienmaara = 16;
let img = new Image();
img.src = 'http://appro.mit.jyu.fi/tiea2120/vt/vt4/owl.png';
img.alt = 'Pollo';
img.title = 'pollo';

window.onload = () => {
    teePalkit();
    luoPollo();
};

window.onresize = () => {
    //
};

const teePalkit = () => {
    let delay = 0;
    let body = document.getElementsByTagName("body")[0];
    let palkkiDelay = 0;
    for (let i = 0; i < palkkimaara; i++) {
        palkkiDelay = delay + 'ms';
        let palkki = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        palkki.setAttribute("class", "palkki");
        palkki.style.animationDelay = palkkiDelay;
        palkki.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        palkki.setAttribute("version", "1.1");
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("class", "tayte");
        rect.setAttribute("x", "0%");
        rect.setAttribute("y", "0%");
        rect.setAttribute('width', '100%');
        rect.setAttribute('height', '100%');
        let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        let liukuvari = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        liukuvari.id = "lvariId" + i;
        liukuvari.setAttribute("x1", "0%");
        liukuvari.setAttribute("x2", "0%");
        liukuvari.setAttribute("y1", "0%");
        liukuvari.setAttribute("y2", "100%");
        let stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        let stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        let stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop1.setAttribute("class", "stop1");
        stop1.setAttribute("offset", "0%");
        stop2.setAttribute("class", "stop2");
        stop2.setAttribute("offset", "50%");
        stop2.style.animationDelay = palkkiDelay;
        stop3.setAttribute("class", "stop3");
        stop3.setAttribute("offset", "100%");
        liukuvari.appendChild(stop1);
        liukuvari.appendChild(stop2);
        liukuvari.appendChild(stop3);
        let v = 0;
        palkki.addEventListener("animationiteration", () => {
            if (v == 0) {
                stop2.style.stopColor = "#FFFF00";
            }
            if (v == 1) {
                stop2.style.stopColor = "#FF00FF";
            }
            if (v == 2) {
                stop2.style.stopColor = "#FFFF00";
                v = 0;
            }
            v++;
        });
        defs.appendChild(liukuvari);
        palkki.appendChild(defs);
        palkki.appendChild(rect);
        body.appendChild(palkki);
        rect.setAttribute("fill", "url(#" + liukuvari.id + ")");
        delay = delay + 200;
    }
};

const luoPollo = () => {
    let body = document.getElementsByTagName("body")[0];
    for (let i = 0; i < osienmaara; i++) {
        let canvas = document.createElement("canvas");
        if (i % 2 == 0) {
            canvas.setAttribute("class", "canvasEven");
        } else {
            canvas.setAttribute("class", "canvasOdd");
        }
        canvas.width = img.width;
        canvas.height = img.height / 16;
        let context = canvas.getContext("2d");
        let osaKorkeus = img.height / 16;
        let leveys = img.width;
        // kuva, sourcex, sourcey, sourcew, sourceh, destinationx, destinationy, destinationw, destinationh
        context.drawImage(img, 0, i * osaKorkeus, leveys, osaKorkeus, 0, 0, leveys, osaKorkeus);
        body.appendChild(canvas);
    }
};