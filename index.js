let cartArray = [];

class Package {
    constructor(name, category, desc, price, flight, flightPrice, hotel, hotelPrice, event, eventPrice, subtotal) {
        this.name = name;
        this.category = category;
        this.description = desc;
        this.price = price;
        this.flightAddOn = flight;
        this.flightAddOnPrice = flightPrice;
        this.flightAddOnSelected = false;
        this.hotelAddOn = hotel;
        this.hotelAddOnPrice = hotelPrice;
        this.hotelAddOnSelected = false;
        this.eventAddOn = event;
        this.eventAddOnPrice = eventPrice;
        this.eventAddOnSelected = false;

    }

    //Displays standard package in cart area
    displayInCart() {
        const cartElem = document.querySelector("#shopping-cart");
        const selectedCartElem = document.createElement("div");

        selectedCartElem.insertAdjacentText('beforeend', this.name + " $" + this.price);
        selectedCartElem.insertAdjacentHTML('beforeend', '<br>');
        // attempt to push price into subtotal array//
        cartArray.push(this.price);
        console.log(cartArray);
        cartElem.appendChild(selectedCartElem);

    }

    //Displays  additional package options when standard package is selected
    displayAddOnsInPackage(detailsID) {
        const packageElem = document.getElementById(detailsID);
        const addOnElem = document.createElement("form");
        addOnElem.className = "addOnForm";

        addOnElem.insertAdjacentHTML('beforeend', '<input type="checkbox" name="flight">' + this.flightAddOn + " $" + this.flightAddOnPrice + '<br>');
        addOnElem.insertAdjacentHTML('beforeend', '<input type="checkbox" name="hotel">' + this.hotelAddOn + " $" + this.hotelAddOnPrice + '<br>');
        addOnElem.insertAdjacentHTML('beforeend', '<input type="checkbox" name="event">' + this.eventAddOn + " $" + this.eventAddOnPrice + '<br>');

        packageElem.appendChild(addOnElem);
    }

    //Displays additional package options in cart area
    displayAddOnsInCart() {
        const cartElem = document.querySelector(".cart");
        const selectedAddOn = document.createElement("div");

        if (this.flightAddOnSelected) {
            selectedAddOn.insertAdjacentText('beforeend', this.flightAddOn + " $" + this.flightAddOnPrice);
            selectedAddOn.insertAdjacentHTML('beforeend', '<br>');
        }

        if (this.hotelAddOnSelected) {
            selectedAddOn.insertAdjacentText('beforeend', this.hotelAddOn + " $" + this.hotelAddOnPrice);
            selectedAddOn.insertAdjacentHTML('beforeend', '<br>');
        }

        if (this.eventAddOnSelected) {
            selectedAddOn.insertAdjacentText('beforeend', this.eventAddOn + " $" + this.eventAddOnPrice);
            selectedAddOn.insertAdjacentHTML('beforeend', '<br>');
        }

        cartElem.appendChild(selectedAddOn);

    }

    //Keeps track of which additional package options have been selected
    AddOnSelected(addOnType) {

        if (addOnType === this.flightAddOn) {
            cartArray.push(this.flightAddOnPrice);
            this.flightAddOnSelected = true;
        }

        if (addOnType === this.hotelAddOn) {
            cartArray.push(this.hotelAddOnPrice);
            this.hotelAddOnSelected = true;
        }

        if (addOnType === this.eventAddOn) {
            cartArray.push(this.eventAddOnPrice);
            this.eventAddOnSelected = true;
        }

    }

    //keeps track of which additional package options have been de-selected
    AddOnRemoved(addOnType) {
        if (addOnType === this.flightAddOn) {
            this.flightAddOnSelected = false;
        }

        if (addOnType === this.hotelAddOn) {
            this.hotelAddOnSelected = false;
        }

        if (addOnType === this.eventAddOn) {
            this.eventAddOnSelected = false;
        }
    }


}

const testPackage = new Package(
    "Bali",
    "International",
    "Tropical",
    1399,
    "First Class Flight",
    199,
    "Honeymoon Suite",
    275,
    "Trip to Seminyak Beach",
    90
);

const testPackage2 = new Package(
    "Sicily",
    "International",
    "European",
    1199,
    "First Class Flight",
    250,
    "Honeymoon Suite",
    399,
    "Trek Mount Etna",
    350
);

const testPackage3 = new Package(
    "Alaska",
    "Domestic",
    "Arctic",
    1099,
    "Pilot Seat Flight",
    299,
    "Honeymoon Suite",
    175,
    "Kenai Wildlife Cruise",
    350
);


function calculator() {
    let subtotal = cartArray.reduce(function(a, b) { return a + b; }, 0);
    let packageAndFeatureTotal = document.querySelector("#subtotal");
    packageAndFeatureTotal.innerHTML = `Subtotal: $${subtotal}`;
    let tax = subtotal * .09;
    let salesTax = document.querySelector("#sales-tax");
    salesTax.innerHTML = `Sales Tax: $${tax}`;
    let grandTotal = subtotal + tax;
    let total = document.querySelector("#total");
    total.innerHTML = `Total: $${grandTotal}`;
}






let flightCounter = 0;
let hotelCounter = 0;
let eventCounter = 0;

let packageOneSelector = document.querySelector("#container1");
let packageTwoSelector = document.querySelector("#container2");
let packageThreeSelector = document.querySelector("#container3");

//Listener on menu container
//Currently listens to both the select button and the additional option boxes

packageOneSelector.addEventListener("click", function(e) {
    if (e.target.matches('#package-one')) {
        testPackage.displayInCart();
        testPackage.displayAddOnsInPackage("pkg-one-details");
    }

    if (e.target.matches('input[name="flight"]') && flightCounter === 0) {
        testPackage.AddOnSelected(testPackage.flightAddOn);
        testPackage.displayAddOnsInCart();
        testPackage.AddOnRemoved(testPackage.flightAddOn);
    }

    if (e.target.matches('input[name="hotel"]') && hotelCounter === 0) {
        testPackage.AddOnSelected(testPackage.hotelAddOn);
        testPackage.displayAddOnsInCart();
        testPackage.AddOnRemoved(testPackage.hotelAddOn);
    }

    if (e.target.matches('input[name="event"]') && eventCounter === 0) {
        testPackage.AddOnSelected(testPackage.eventAddOn);
        testPackage.displayAddOnsInCart();
        testPackage.AddOnRemoved(testPackage.eventAddOn);

    }
    calculator();
})

packageTwoSelector.addEventListener("click", function(e) {

    if (e.target.matches('#package-two')) {
        testPackage2.displayInCart();
        testPackage2.displayAddOnsInPackage("pkg-two-details");
    }

    if (e.target.matches('input[name="flight"]') && flightCounter === 0) {
        testPackage2.AddOnSelected(testPackage2.flightAddOn);
        testPackage2.displayAddOnsInCart();
        testPackage2.AddOnRemoved(testPackage2.flightAddOn);

    }

    if (e.target.matches('input[name="hotel"]') && hotelCounter === 0) {
        testPackage2.AddOnSelected(testPackage2.hotelAddOn);
        testPackage2.displayAddOnsInCart();
        testPackage2.AddOnRemoved(testPackage2.hotelAddOn);

    }

    if (e.target.matches('input[name="event"]') && eventCounter === 0) {
        testPackage2.AddOnSelected(testPackage2.eventAddOn);
        testPackage2.displayAddOnsInCart();
        testPackage2.AddOnRemoved(testPackage2.eventAddOn);

    }
    calculator();

})

packageThreeSelector.addEventListener("click", function(e) {

    if (e.target.matches('#package-three')) {
        testPackage3.displayInCart();
        testPackage3.displayAddOnsInPackage("pkg-three-details");
    }

    if (e.target.matches('input[name="flight"]') && flightCounter === 0) {
        testPackage3.AddOnSelected(testPackage3.flightAddOn);
        testPackage3.displayAddOnsInCart();
        testPackage3.AddOnRemoved(testPackage3.flightAddOn);

    }

    if (e.target.matches('input[name="hotel"]') && hotelCounter === 0) {
        testPackage3.AddOnSelected(testPackage3.hotelAddOn);
        testPackage3.displayAddOnsInCart();
        testPackage3.AddOnRemoved(testPackage3.hotelAddOn);

    }

    if (e.target.matches('input[name="event"]') && eventCounter === 0) {
        testPackage3.AddOnSelected(testPackage3.eventAddOn);
        testPackage3.displayAddOnsInCart();
        testPackage3.AddOnRemoved(testPackage3.eventAddOn);

    }
    calculator();

});





// window.onload = cartArray.reduce(function(a, b) {return a + b;}, 0);