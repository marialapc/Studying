
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const ProductDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')




// Toggle the menus

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleShopMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toggleDesktopMenu() {
desktopMenu.classList.toggle("inactive");
shoppingCartContainer.classList.add('inactive');
ProductDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  ProductDetailContainer.classList.add('inactive');
}

function toggleShopMenu() {
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  ProductDetailContainer.classList.add('inactive')
  
}

// open and close product detail

function openProductDetailAside(){
  ProductDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
  shoppingCartContainer.classList.toggle('inactive');
  ProductDetailContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  

}

// Paint the products

const productList = [];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'pantalla',
  price: 200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'ordenador',
  price: 600,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
 name: 'pantalla',
 price: 200,
 image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
 name: 'ordenador',
 price: 600,
 image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
  for (product of arr){
const htmlCards = `<div class="product-card">
<img src=${product.image} class="product-img">
<div class="product-info">
<div>
<p>$${product.price}</p>
<p>${product.name}</p>
</div>
<figure>
<img src="./icons/bt_add_to_cart.svg" alt="">
</figure>
</div>
<div>`
cardsContainer.innerHTML += htmlCards

const img = document.querySelector('.product-img')
img.addEventListener('click', openProductDetailAside)

}};

renderProducts(productList)



 








