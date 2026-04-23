let navBtn = document.querySelector(".nav-icon");
let nav = document.querySelector(".nav-links");

document.addEventListener('DOMContentLoaded',()=>{

  navBtn.addEventListener('click',()=>{
    let showNav = nav.classList.toggle("display");
    

    if(showNav){
      navBtn.textContent = "X";
       
    }
    else{
      navBtn.textContent = "☰";

    }

});

})



let foodMenu = [
  "Cheeseburger",
  "Chicken Burger",
  "Double Beef Burger",
  "Veggie Burger",
  "Bacon Burger",

  "French Fries",
  "Fried Chicken",
  "Hot Dog",
  "Chicken Nuggets",
  "Pizza Slice",
  "Sandwich",

  "Jollof Rice",
  "Pounded Yam and Egusi Soup",
  "Fried Rice",
  "Amala and Ewedu",
  "Tuwo Shinkafa",
  "Ogbono Soup with Fufu"
];

let p = document.querySelector(".para");
let searchBtn = document.querySelector(".searchBtn");



searchBtn.addEventListener('click',()=>{
  try {
     let search =  document.querySelector(".searchInput").value.toLowerCase();

     if (search === "") {
       throw new Error("*Search input cannot be left empty");
     }
     else{
         let filtered = foodMenu.filter(item=>item.toLowerCase().includes(search));
   if(filtered.length === 0){
    throw new Error("*Not available for now,search for another one");
   }
   p.textContent = filtered.join("\n");
     }
  
  } catch (error) {
    p.textContent = error.message;
  }
  finally{
     setTimeout(()=>{
    p.textContent = "";
    search = "";
   },20000);
  } 
  
})


//handling button clicks
let allBtn = document.querySelectorAll(".buttonF");

allBtn.forEach(btn =>{
  btn.addEventListener('click',()=>{
    alert("not available now!");
  });
})


document.addEventListener("DOMContentLoaded",()=>{
  let h = document.querySelector(".hero");
  h.classList.add("hero-anim");
})