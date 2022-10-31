let itemsDiv = document.querySelector(".items");

let selcteditems = document.querySelector(".selctedItems");

let aside = document.querySelector(".aside");
let hamburger = document.querySelector(".hamburger");
let x = document.getElementById("x-btn");
let loginfield = document.getElementById("loginfield");
const signIn = document.querySelector("#login-btn");
let signUp = document.getElementById("sign-up");
let registerbtn = document.getElementById("register-btn");
let exit = document.getElementById("close");
let searchField = document.getElementById("search-field");
let searchBtn = document.getElementById("searchBtn");
let hideItems = document.getElementById("hideItems");
let hideSelectedItems = document.getElementById("hideSelectedItems");
let categories = [];
let allData = [];

hamburger.onclick = () => {
  aside.classList.toggle("mystyle");
};

window.onload = () => {
  fetchData();
  fetchDataCategory();
};

function fetchData() {
  fetch("https://fakestoreapi.com/products")
    .then((value) => value.json())
    .then((value) => {
      Showproduct(value), (allData = value);
    });
}

function fetchDataCategory() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((cate) => cate.json())
    .then((category) => {
      showCategory(category), (categories = category);
    });
}

function showCategory(category) {
  for (let i = 0; i < category.length; i++) {
    aside.innerHTML += `<div   onclick="numOfCategory(${i})" >${category[i]}</div>`;
  }
}

function numOfCategory(i) {
  console.log(categories[i]);
  fetch(`https://fakestoreapi.com/products/category/${categories[i]}`)
    .then((res) => res.json())
    .then((item) => selctedItems(item));
}

function selctedItems(items) {
  let refrshItem = "";
  for (let i = 0; i < items.length; i++) {
    refrshItem += `<div class="item">
       <img class="box-img" src="${items[i].image}" alt="">
      <div class="label"> ${items[i].title} </div>
      <div class="price"><span>price</span> <span>${
        items[i].price * 20
      } EG</span></div>
      <button onclick="addtoCart(${items[i].id})" class="btn"> buyNow </button>
   </div>`;
  }
  selcteditems.innerHTML = refrshItem;
  itemsDiv.replaceWith(selcteditems);
}

function Showproduct(items) {
  for (let i = 0; i < items.length; i++) {
    itemsDiv.innerHTML += `<div class="item">
       <img class="box-img" src="${items[i].image}" alt="">
      <div class="label"> ${items[i].title} </div>
      <div class="price"><span>price</span> <span>${
        items[i].price * 20
      } EG</span></div>
      <button onclick="addtoCart(${items[i].id})" class="btn"> buyNow </button>
   </div>`;
  }
  selcteditems.replaceWith(aside);
}

function addtoCart(i) {
  console.log(i);
  alert("maybe you have to sign up");
}
// close login pop-up
x.onclick = function () {
  loginfield.style.display = "none";
};
// open login pop-up
signIn.onclick = function () {
  loginfield.style.display = "block";
};

registerbtn.onclick = () => {
  signUp.style.display = "block";
};

exit.onclick = function () {
  signUp.style.display = "none";
};

searchBtn.onclick = function () {
  let itemName = searchField.value;
  findItem(itemName);
};
function findItem(n) {
  for (let i = 0; i < allData.length; i++) {
    if (n == allData[i].title.substr(0, n.length).toLowerCase()) {
      console.log(allData[i].id);
    }
  }
}
