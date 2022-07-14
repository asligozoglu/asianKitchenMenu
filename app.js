const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// DOM selection
const filterButtons = document.querySelector(".btn-container");
const menuItems= document.querySelector(".section-center");

// Create buttons html
function buttons() {
  let buttons = `
  <button class="btn btn-outline-dark btn-item" id="All">All</button>
  <button class="btn btn-outline-dark btn-item" id="Korea">Korea</button>
  <button class="btn btn-outline-dark btn-item" id="Japan">Japan</button>
  <button class="btn btn-outline-dark btn-item" id="China">China</button></div>
  `;
  filterButtons.innerHTML = buttons;
}
buttons();

// Create meals html
function meals(meal) {
  let meals = `<div class="menu-items col-lg-6 col-sm-12">
  <img src= ${meal.img} alt=${meal.title} class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${meal.title}</h4>
      <h4 class="price">${meal.price}</h4>
    </div>
    <div class="menu-text">
      ${meal.desc}
    </div>
  </div>
</div>
  `;
  return meals;
}

// List All Meals 
function mealsList() {
  let mealsList = "";
  menu.map(meal => {
    mealsList += meals(meal);
  });
  menuItems.innerHTML = mealsList;
}

document.addEventListener("DOMContentLoaded",mealsList);
document.querySelector("#All").addEventListener("click",mealsList)

// List Korean Meals 

function koreanmeals(){
  let koreanMeals=""
  menu.map(item=>{
    if(item.category === "Korea"){
      koreanMeals += meals(item)
    }
    menuItems.innerHTML=koreanMeals
  })
}

document.querySelector("#Korea").addEventListener("click",koreanmeals)

// List Japanese Meals 
function japanesemeals(){
  let japaneseMeals=""
  menu.map(item=>{
    if(item.category === "Japan"){
      japaneseMeals += meals(item)
    }
    menuItems.innerHTML=japaneseMeals
  })
}

document.querySelector("#Japan").addEventListener("click",japanesemeals)

//List Chinese Meals

function chinesemeals(){
  let chineseMeals=""
  menu.map(item=>{
    if(item.category === "China"){
      chineseMeals += meals(item)
    }
    menuItems.innerHTML=chineseMeals
  })
}

document.querySelector("#China").addEventListener("click",chinesemeals)