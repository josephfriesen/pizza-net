// Business logic

// Constrcutor function to create new objects of type Customer. The user will enter their information on the page, and the information will be entered as the values of the new customer object.
function Customer(name, street, city, state, zip, phone) {
  this.userName = name;
  this.streetAddress = street;
  this.city = city;
  this.state = state;
  this.zipCode = zip;
  this.phoneNumber = phone;
}

// Constructor function for new objects of type Pizza. User will create a new pizza, selecting a size, crust style, and set of toppings, which will be stored as an array.
function Pizza(size, style, toppings) {
  this.size = size; // can take one of three values, "14", "16", or "18".
  this.crustStyle = style; // can take one three values, "regular", "thin", or "deep dish".
  this.toppings = toppings; // an array consisting of a subset of values from the list of toppings
}

// Prototype to calculate the price of a single pizza.
Pizza.prototype.price = function() {
  var cost;
  if (this.size === "14") {
    cost = 12;
  } else if (this.size === "16") {
    cost = 15;
  } else if (this.size === "18") {
    cost = 19;
  }
  if (this.crustStyle === "deep dish") {
    cost = cost + 3;
  }
  cost = cost + (this.toppings.length * 2);
  return cost;
}

// Constructor function for new objects of type Order. Order will have a Customer object and an array of Pizza objects.
function Order(Customer, pizzas) {
  this.Customer = Customer;
  this.pizzas = pizzas; // array of Pizza objects
}

// Prototype to determine the total price of an order
Order.prototype.price = function() {
  var cost = 4; // $4 delivery charge
  this.pizzas.forEach(function(Pizza) {
    cost = cost + Pizza.price();
  })
  return cost;
}




// User interface logic

$(document).ready(function() {
  $("#user-info-submit-button").click(function() {
    $("#pizza-order").slideDown();
  });
});
