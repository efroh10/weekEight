export function getShops(){
  fetch("https://donutshop-api.herokuapp.com/shops", {
  "method": "GET",
})
.then(response => response.json())
.then(data => {
  for(let x = 0; x < data.length; x++) {
    let opt = document.createElement('option');
    opt.value = data[x];
    document.querySelector('datalist').append(opt);
  }
})
.catch(err => {
  console.error(err);
});
}

export function getID(shopName){
  let div = document.createElement('div');
  fetch("https://donutshop-api.herokuapp.com/shop-id?", {
  "method": "POST",
  "headers": {"Content-Type": "application/json"},
  "body": JSON.stringify({'name': shopName})
})
.then(response => response.json())
.then(data => {
  let result;
  result += Object.entries(data)
  console.log(result);
  div.innerHTML += result;
})
.catch(err => {
  console.error(err);
});
document.body.append(div);
}

export function createShop(shopName){
  let div = document.createElement('div');
  fetch("https://donutshop-api.herokuapp.com/create-donut-shop", {
    "method": "POST",
    "headers": {"Content-Type": "application/json"},
    "body": JSON.stringify({'name': shopName})
  })
  .then(response => response.json())
  .then(data => {
    let result;
    result += Object.entries(data);
    console.log(result);
    div.innerHTML += result;
  })
  .catch(err => {console.error(err);});
  document.body.append(div);
}

export function getInventory(){
    let div = document.createElement('div');
    fetch("https://donutshop-api.herokuapp.com/inventory?id=634", {
    "method": "GET",
    })
    .then(response => response.json())
    .then(data => {
      let result;
      for(let x = 0; x < data.donuts.length; x++){
        result += Object.entries(data.donuts[x]);
      }
      div.innerHTML += result;
      })
    .catch(err => {
      console.error(err);
    });
    document.body.append(div);
}

export function newDonutType(){
        let newType;
        newType = (document.querySelector('#donutType').value);
        console.log(newType);
        return(newType);
}

export function newDonutPrice(){
        let newPrice;
        newPrice = (document.querySelector('#donutPrice').value);
        console.log(newPrice);
        return newPrice;
}

export function newDonut(type, price){
    fetch("https://donutshop-api.herokuapp.com/create-donut-type?id=634", {
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify({'type': type, 'price': price})
        })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
    console.error(err);
    });
 }

export function increaseType(){
  let increasedType;
  increasedType = (document.querySelector('#donutType').value);
  return increasedType;  
}

export function increaseNumber(){
  let increasedNumber;
  increasedNumber = (document.querySelector('#donutCount').value);
  return increasedNumber;
}

export function increaseInventory(type, number){
  fetch("https://donutshop-api.herokuapp.com/add-donuts?id=634", {
      "method": "POST",
      "headers": {"Content-Type": "application/json"},
      "body":JSON.stringify({'type': type, 'count': number})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.error(err);
    });
}

export function getRevenue(){
  let div = document.createElement('div');
  fetch("https://donutshop-api.herokuapp.com/revenue?id=634", {
      "method": "GET",
    })
    .then(response => response.json())
    .then(data => {
      let result;
      result += Object.entries(data);
      console.log(result);
      div.innerHTML += result;
    })
    .catch(err => {
      console.error(err);
    });
    document.body.append(div);
}

export function newOrderType(){
  let newOrderedType;
  newOrderedType = (document.querySelector('#donutType').value);
  return newOrderedType;
}

export function newOrderNumber(){
  let newOrderedNumber;
  newOrderedNumber = (document.querySelector('#donutCount').value);
  return newOrderedNumber;
}

export function newOrder(type, number){
  fetch("https://donutshop-api.herokuapp.com/place-order?id=634", {
      "method": "POST",
      "headers": {"Content-Type": "application/json"},
      "body": JSON.stringify({'type': type, 'count':number})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.error(err);
    });
}

export function changePrice(type, number){
  fetch("https://donutshop-api.herokuapp.com/edit-donut?id=634", {
      "method": "POST",
      "headers": {"Content-Type": "application/json"},
      "body": JSON.stringify({'type': type, 'price': number})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.error(err);
    });
}

export function giveRefund(type, number){
  fetch("https://donutshop-api.herokuapp.com/refund?id=634", {
      "method": "POST",
      "headers": {"Content-Type": "application/json"},
      "body": JSON.stringify({'type': type, 'count': number})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.error(err);
    });
}