"use strict";

function openNav() {
  document.getElementById("mainMenu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mainMenu").style.width = "0";
}

function subMenu() {
 let subMenuContent = this.nextElementSibling;
 if (subMenuContent.style.maxHeight) {
   subMenuContent.style.maxHeight = null;
 } else {
   subMenuContent.style.maxHeight = "2000px";
 }
}

const dropBtn = document.querySelectorAll(".has-drop");
dropBtn.forEach((el) => {
  el.addEventListener("click", subMenu)
});

if(document.querySelector('.siema')){
  const mySiema = new Siema({
    duration: 1800,
    draggable: false,
    loop: true,
    onInit: () => {}
  });

  document.querySelector('.siema__btn--prev').addEventListener('click', () => mySiema.prev());
  document.querySelector('.siema__btn--next').addEventListener('click', () => mySiema.next());
}

const mymap = L.map('mapId', {zoomControl : false}).setView([51.505, -0.09], 13);
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    zoomControl: 'false',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibXItdmFsZXJpbyIsImEiOiJja2dkb2NlYTgwa3c3MnJsZXFwejV2eWp1In0.lOrZv-r1ec_hRAaCAQt5Qg'
}).addTo(mymap);