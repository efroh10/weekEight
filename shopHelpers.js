function getInventory(){
    fetch("https://donutshop-api.herokuapp.com/inventory?id=634", {
  "method": "GET",
})
.then(response => response.json())
.then(data => console.log(data.donuts))
.catch(err => {
  console.error(err);
});
 }
 
 function getRevenue(){
    fetch("https://donutshop-api.herokuapp.com/revenue?id=634", {
        "method": "GET",
      })
      .then(response => response.json())
      .then(data => console.log(data.revenue))
      .catch(err => {
        console.error(err);
      });
 }
 
 function newDonutType(){
     let newType = prompt('Enter the type of your new donut.');
     return newType;
 }
 
 function newDonutPrice(){
     let newPrice = Number(prompt('Enter the price of your new donut.'));
     return newPrice;
 }
 
 function newDonut(type, price){
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

 function increaseType(){
     let increasedType = prompt('Enter the type of donut for which you\'d like to increase the inventory.');
     return increasedType;  
 }
 
 function increaseNumber(){
     let increasedNumber = Number(prompt('Enter the number by which you\'d like to increase the inventory.'));
     return increasedNumber;
 }
 
 function increaseInventory(type, number){
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
 
 function newOrderType(){
     let newOrderedType = prompt('Enter the type of donut you\'d like to order.');
     return newOrderedType;
 }
 
 function newOrderNumber(){
     let newOrderedNumber = Number(prompt('Enter the number of donuts you\'d like to order.'));
     return newOrderedNumber;
 }
 
 function newOrder(type, number){
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
 
 function newPriceType(){
     let changedType = prompt('Enter the type of donut for which you\'d like to change the price.');
     return changedType;
 }
 
 function newPrice(){
     let changedPrice = Number(prompt('Enter the new price.'));
     return changedPrice;
 }
 
 function changePrice(type, number){
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
 
 function getRefundType(){
     let refundType = (prompt('Enter the type of donut to be refunded.'));
     return refundType;
 }

 function getRefundNumber(){
     let refundNumber = Number(prompt('Enter the number of donuts to be refunded.'));
     return refundNumber;
 }
 
 function giveRefund(type, number){
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

 export {getInventory, getRevenue, newDonutType, newDonutPrice, newDonut, increaseType, increaseNumber, increaseInventory, newOrderType, newOrderNumber, newOrder, newPriceType, newPrice, changePrice, getRefundType, getRefundNumber, giveRefund};