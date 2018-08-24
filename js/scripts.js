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

// Prototype to write a list of toppings as a single string, for printing text on the page in the pizza order summary panel.
Pizza.prototype.toppingsString = function() {
  var str = "";
  var len = this.toppings.length;
  console.log(this.toppings);
  console.log(len);
  if (len === 0) {
    str = "cheese." // aka "string cheese". (a joke)
  } else if (len === 1) {
    str = this.toppings[0] + ".";
  } else {
    for (var i = 0; i < len - 1; i++) {
      str = str + this.toppings[i] + " ";
    }
    str = str + "and " + this.toppings[len-1] + ".";
  }
  return str;
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
  var NewCustomer;
  var NewOrder;
  var pizzas = [];

  $("#user-info-submit-button").click(function() {
    $("#pizza-order").slideDown();
    var userName = $("#user-name").val();
    var address = $("#street-address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var phone = $("#phone").val();
    NewCustomer = new Customer(userName, address, city, state, zip, phone);
  });

  $("#pizza-order-add-button").click(function() {
    var pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    var pizzaCrust = $("input:radio[name=pizza-crust]:checked").val();
    var pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    var NextPizza = new Pizza(pizzaSize, pizzaCrust, pizzaToppings);
    pizzas.push(NextPizza);
    $("input:checkbox[name=toppings]:checked").each(function() {
      this.checked = false;
    });
    $("#pizza-order-summary").slideDown();
    if (pizzas.length === 1) {
      $("#pizzas-left").html("<ul id='pizza-list-left'></ul>")
    } else if (pizzas.length === 2) {
      $("#pizzas-right").html("<ul id='pizza-list-right'></ul>");
    }
    if (pizzas.length % 2 === 1) {
      $("ul#pizza-list-left").append("<li>Item #" + pizzas.length + ": " + NextPizza.size + "\" " + NextPizza.crustStyle + " with " + NextPizza.toppingsString() + " ($" + NextPizza.price() + ")</li>");
    } else if (pizzas.length % 2 === 0) {
      $("ul#pizza-list-right").append("<li>Item #" + pizzas.length + ": " + NextPizza.size + "\" " + NextPizza.crustStyle + " with " + NextPizza.toppingsString() + " ($" + NextPizza.price() + ")</li>");
    }
  });

  $("#submit-order").click(function() {
    NewOrder = new Order(NewCustomer, pizzas);
    console.log(NewOrder);
    console.log(NewOrder.price());
  });

});
