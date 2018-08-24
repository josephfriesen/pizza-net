// Constrcutor function to create new objects of type Customer. The user will enter their information on the page, and the information will be entered as the values of the new customer object.
var Customer(name, street, city, state, zip, phone) {
  this.userName = name;
  this.streetAddress = street;
  this.city = city;
  this.state = state;
  this.zipCode = zip;
  this.phoneNumber = phone;
}

// Constructor function for new objects of type Pizza. User will create a new pizza, selecting a size, crust style, and set of toppings, which will be stored as an array.
var Pizza(size, style, toppings) {
  this.size = size; // can take one of three values, "14", "16", or "18".
  this.crustStyle = style; // can take one three values, "regular", "thin", or "deep dish".
  this.toppings = toppings; // an array consisting of a subset of values from the list of toppings
}

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

// Constructor funciton for new objects of type Order. Order will have a Customer object and an array of Pizza objects.
var Order(Customer, Pizzas) {
  this.Customer = Customer;
  this.Pizzas = Pizzas;
}
