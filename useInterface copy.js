
import {getInventory, getRevenue, newDonutType, newDonutPrice, newDonut, increaseType, increaseNumber, increaseInventory, newOrderType, newOrderNumber, newOrder, newPriceType, newPrice, changePrice, getRefundType, getRefundNumber, giveRefund} from './donutShopHelpers.js';



function useInterface(){
    let task = prompt('What is your bidding, my master? Enter the number corresponding to the task you\'d like to perform: 1): Print Inventory and Prices, 2): Print Total Revenue, 3): Create New Donut Type, 4): Update Inventory, 5): Place Order, 6): Change a Price, 7): Give Refund, 8): Quit Program', '1');
    switch (task) {
        case '1':
            getInventory();
            useInterface();
            break;
        case '2':
            getRevenue();
            useInterface();
            break;
        case '3':
            newDonut(newDonutType(), newDonutPrice());
            useInterface();
            break;
        case '4':
            increaseInventory(increaseType(), increaseNumber());
            useInterface();
            break;
        case '5':
            newOrder(newOrderType(), newOrderNumber());
            useInterface();
            break;
        case '6':
            changePrice(newPriceType(), newPrice());
            useInterface();
            break;
        case '7': //because refund calculation is handled on the api side simply by multiplying price by number of donuts, if price has been changed between an example order and refund, the refund will be different than the purchase.
            giveRefund(getRefundType(), getRefundNumber());
            useInterface();
            break;
        case '8':
            break;
    }
}

useInterface();