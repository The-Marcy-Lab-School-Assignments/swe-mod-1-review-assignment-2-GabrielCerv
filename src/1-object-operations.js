// Create your object here
const shoppingCart = {
    customerName: "Alex",
    totalPrice: 0,
    itemCount: 0,
};

shoppingCart.items = ['apples', 'bananas', 'cherries'];
shoppingCart.itemCount = 3;
shoppingCart.totalPrice = 99.99;
delete shoppingCart.customerName;

console.log(shoppingCart);