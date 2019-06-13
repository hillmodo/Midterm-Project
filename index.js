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
        this.subtotal = [];
    }

    //Displays standard package in cart area
    displayInCart() {
        const cartElem = document.querySelector(".cart");
        const selectedCartElem = document.createElement("div");

        selectedCartElem.insertAdjacentText('beforeend', this.name + " $" + this.price);
        selectedCartElem.insertAdjacentHTML('beforeend', '<br>');
        // attempt to push price into subtotal array//
        this.subtotal.push(this.price);
        console.log(this.subtotal);
        cartElem.appendChild(selectedCartElem);

    }

    //Displays  additional package options when standard package is selected
    displayAddOnsInPackage(detailsID) {
        const packageElem = document.getElementById(detailsID);
        const addOnElem = document.createElement("form");
        addOnElem.className = "addOnForm";

        addOnElem.insertAdjacentHTML('beforeend', '<input type="checkbox" name="flight">' + this.flightAddOn + " " + this.flightAddOnPrice + '<br>');
        addOnElem.insertAdjacentHTML('beforeend', '<input type="checkbox" name="hotel">' + this.hotelAddOn + " " + this.hotelAddOnPrice + '<br>');
        addOnElem.insertAdjacentHTML('beforeend', '<input type="checkbox" name="event">' + this.eventAddOn + " " + this.eventAddOnPrice + '<br>');

        packageElem.appendChild(addOnElem);
    }

    //Displays additional package options in cart area
    displayAddOnsInCart() {
        const cartElem = document.querySelector(".cart");
        const selectedAddOn = document.createElement("div");

        if (this.flightAddOnSelected) {
            selectedAddOn.insertAdjacentText('beforeend', this.flightAddOn + " " + this.flightAddOnPrice);
            selectedAddOn.insertAdjacentHTML('beforeend', '<br>');
        }

        if (this.hotelAddOnSelected) {
            selectedAddOn.insertAdjacentText('beforeend', this.hotelAddOn + " " + this.hotelAddOnPrice);
            selectedAddOn.insertAdjacentHTML('beforeend', '<br>');
        }

        if (this.eventAddOnSelected) {
            selectedAddOn.insertAdjacentText('beforeend', this.eventAddOn + " " + this.eventAddOnPrice);
            selectedAddOn.insertAdjacentHTML('beforeend', '<br>');
        }

        cartElem.appendChild(selectedAddOn);

    }

    //Keeps track of which additional package options have been selected
    AddOnSelected(addOnType) {

        if (addOnType === this.flightAddOn) {
            this.subtotal.push(this.flightAddOnPrice);
            this.flightAddOnSelected = true;
        }

        if (addOnType === this.hotelAddOn) {
            this.subtotal.push(this.hotelAddOnPrice);
            this.hotelAddOnSelected = true;
        }

        if (addOnType === this.eventAddOn) {
            this.subtotal.push(this.eventAddOnPrice);
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

    calculator() {
        this.subtotal;
        console.log(this.subtotal);
    }
}


const testPackage = new Package(
    "Atlanta",
    "local",
    "Southern City",
    1399,
    "Business Class Flight",
    "$199",
    "Penthouse at the W",
    "$399",
    "VIP Club Package",
    "$350"
);

const testPackage2 = new Package(
    "Nashville",
    "local",
    "Southern City",
    "$1199",
    "Business Class Flight",
    "$199",
    "Penthouse on Broadway",
    "$399",
    "VIP Club Package",
    "$350"
);

console.log(testPackage.calculator());






let packageSelector = document.querySelector(".menu");

//Listener on menu container
//Currently listens to both the select button and the additional option boxes
packageSelector.addEventListener("click", function(e) {
    if (e.target.matches('#package-one')) {

        console.log("package one selected");
        testPackage.displayInCart();
        testPackage.displayAddOnsInPackage("pkg-one-details");
        console.log(e);


    }

    if (e.target.matches('#package-two')) {
        testPackage2.displayInCart();
        testPackage2.displayAddOnsInPackage("pkg-two-details");
        console.log(e);



    }

    if (e.target.matches('#package-three')) {
        console.log(e);
        console.log("package three selected");


    }

    if (e.target.matches('input[name="flight"]')) {
        testPackage.AddOnSelected(testPackage.flightAddOn);
        testPackage.displayAddOnsInCart();

    }



});