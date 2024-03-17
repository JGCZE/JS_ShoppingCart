let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "1",
    name: "Casual Shirt",
    price: 45,
    desc: "lorem impsum dolor sit amet conceoneoe",
    img: "images/img-1.jpg",
  },
  {
    id: "2",
    name: "Office Shirt",
    price: 450,
    desc: "lorem impsum dolor sit amet conceoneoe",
    img: "images/img-2.jpg",
  },
  {
    id: "3",
    name: "T Shirt",
    price: 5,
    desc: "lorem impsum dolor sit amet conceoneoe",
    img: "images/img-3.jpg",
  },
  {
    id: "4",
    name: "Mens suit",
    price: 300,
    desc: "lorem impsum dolor sit amet conceoneoe",
    img: "images/img-4.jpg",
  },
];

let basket = []

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      const { id, name, price, desc, img } = x
      return `
        <div class="item" id=product-id-${id} >
            <img width="220" src=${img} alt="">
            <div class="details">
              <h3>${name}</h3>
              <p>${desc}</p>
              <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div class="quantity" id=${id}>0</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
              </div>
            </div>
          </div>
        `;
    })
    .join(""));
};
generateShop();


let increment = (id) => {
  let selectedItem = id
  
  basket.push({
    id: selectedItem,
    item: 1,
  })

  console.log(basket)
}

let decrement = (id) => {
  let selectedItem = id
  console.log(selectedItem)
}

let update = () => {

}
