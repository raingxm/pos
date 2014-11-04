var printInventory = function(inputs) {
  var shoppingCart = new ShoppingCart(inputs);
  var lineItem = new LineItem('ITEM000000', '可口可乐', 3.00, 2, '瓶');
  console.log(lineItem.isPromot());
};
