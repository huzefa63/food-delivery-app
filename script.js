let item1 = {
  id: 1,
  search: 'pizza',
  foodName: "Cheese pizza",
  price: 290,
  rating: 4.7,
  img: "./assests/pizza1.jpg",
};

let item2 = {
  id: 2,
  search:'pizza',
  foodName: "Italitan Pizza",
  price: 340,
  rating: 4.9,
  img: "./assests/pizza2.jpg",
};

let item3 = {
  id: 3,
  search: "burger",
  foodName: "pettis burger",
  price: 260,
  rating: 4.1,
  img: "./assests/burger1.jpg",
};

let item4 = {
  id: 4,
  search: "burger",
  foodName: "shahi burger",
  price: 450,
  rating: 4.9,
  img: "./assests/burger2.jpg",
};

let item5 = {
  id: 5,
  search: "burger",
  foodName: "Veg pettis burger",
  price: 310,
  rating: 4.6,
  img: "./assests/burger6.jpg",
};

let item6 = {
  id: 6,
  search: "burger",
  foodName: "Pure Veg pettis burger",
  price: 270,
  rating: 4.3,
  img: "./assests/burger7.jpg",
};

let item7 = {
  id: 7,
  search: "burger",
  foodName: "Cheese pettis burger",
  price: 330,
  rating: 4.5,
  img: "./assests/burger8.jpg",
};

let item8 = {
  id: 8,
  search: "noodles",
  foodName: "Fried noodles",
  price: 150,
  rating: 4.9,
  img: "./assests/noodles1.jpg",
};

let item9 = {
  id: 9,
  search: "noodles",
  foodName: "Fried masala noodles",
  price: 190,
  rating: 4.0,
  img: "./assests/noodles2.jpg",
};

let item10 = {
  id: 10,
  search: "noodles",
  foodName: "Veg Fried noodles",
  price: 180,
  rating: 4.4,
  img: "./assests/noodles3.jpg",
};

let item11 = {
  id: 11,
  search: "noodles",
  foodName: "Veg Fried Masala noodles",
  price: 240,
  rating: 4.7,
  img: "./assests/noodles4.jpg",
};

let item12 = {
  id: 12,
  search: "noodles",
  foodName: "Cheese masala noodles",
  price: 290,
  rating: 4.9,
  img: "./assests/noodles5.jpg",
};

let item13 = {
  id: 13,
  search: "chicken",
  foodName: "Fried chicken pieces",
  price: 450,
  rating: 4.7,
  img: "./assests/chicken1.jpg",
};

let item14 = {
  id: 14,
  search: "chicken",
  foodName: "Grilled chicken",
  price: 480,
  rating: 4.8,
  img: "./assests/chicken2.jpg",
};

let item15 = {
  id: 15,
  search: "chicken",
  foodName: "Roasted chicken leg piece",
  price: 390,
  rating: 4.7,
  img: "./assests/chicken3.jpg",
};

let item16 = {
  id: 16,
  search: "chicken",
  foodName: "Grilled chicken leg piece",
  price: 320,
  rating: 4.9,
  img: "./assests/chicken4.jpg",
};

let item17 = {
  id: 17,
  search: "chicken",
  foodName: "Masala chicken leg piece",
  price: 400,
  rating: 4.9,
  img: "./assests/chicken5.jpg",
};

let items = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17];

let input = document.querySelector('input');
let container = document.querySelector('.main-container');
let containerHtml = container.innerHTML;
let alertContainer = document.querySelector('.alert-con');
let cross = document.querySelector('.icon');

let appendSelectQuantity = function(){
  let selects = document.querySelectorAll("select");
  selects.forEach((select) => {
      for(let i=1;i<=5;i++){
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
      }
      
  })
}

let isSearch = true;
const displaySearchBarIcon = function () {
  if (isSearch) {
    
    isSearch = false;
  } else {
    
    isSearch = true;
  }
};

cross.addEventListener('click' , () => {
  if(cross.classList.contains('fa-xmark')){
    input.value = '';
    alertContainer.style.display = "none";
    container.innerHTML = containerHtml;
     cross.classList.remove("fa-xmark");
     cross.classList.add("fa-magnifying-glass");
  }
  else return;
})

appendSelectQuantity();


let generateFoodCard = function(img,foodName,rating,price,id){
  let html = `<div class="item-container">
                <div class="img-box">
                    <img src="${img}" alt="">
                </div>
                <div class="description">
                    <div class="name">
                        <p class="dish-name">Dish Name : ${foodName}</
                    </div>
                    <div class="rating-con">
                        <div class="rating">
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <p> ${rating} Star is Consumer's Rating </p>
                        </div>
                    </div>
                    <div class="price-con">
                        <p class="price">Price : ${price}₹ Only </p>
                        <div class="quan-con">
                            <p class="quan">Quantity : </p>
                            <select name="" id="">
                                
                            </select>
                        </div>
            
                    </div>
                    <div class="buy-con">
                        <button class="buy-btn" ">Order now</button>
                        <button class="add-to-cart-btn" data-id="${id}">Add to cart</button>
                    </div>
                </div>
            </div>`;

            return html;
}


const displayItems = function(){
  container.innerHTML = '';
  let searchedItem = input.value.toLowerCase();
  let itemsFound = items.filter(item => item.search === searchedItem);
  if(itemsFound.length === 0){
    alertContainer.style.display = 'flex';
  }
  else{
    alertContainer.style.display = "none";
  }
  itemsFound.forEach(item => {
    let html = generateFoodCard(item.img,item.foodName,item.rating,item.price,item.id);
    container.insertAdjacentHTML('afterbegin' , html);
  })
  
  appendSelectQuantity();
}


const displayAllItems = function(){
  container.innerHTML = '';
  items.forEach(item => {
    let html = generateFoodCard(item.img,item.foodName,item.rating,item.price,item.id);
    container.insertAdjacentHTML('afterbegin' , html);
  })
  appendSelectQuantity();
}

input.addEventListener('input' , () => {
  if(input.value.length === 0) {
    alertContainer.style.display = "none";
    container.innerHTML = containerHtml;
    cross.classList.remove("fa-xmark");
    cross.classList.add("fa-magnifying-glass");
  }
  else if(input.value === 'all'){
    alertContainer.style.display = "none";
    displayAllItems();
    
  }
  else{
    displayItems();
    cross.classList.remove("fa-magnifying-glass");
    cross.classList.add("fa-xmark");
  }
})





