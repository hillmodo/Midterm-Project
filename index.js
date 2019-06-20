let cartObject = {
    price: 0,
    flight: 0,
    hotel: 0,
    event: 0,
};


class Package {
    constructor(name, category, desc, price, flight, flightPrice, hotel, hotelPrice, event, eventPrice) {
        this.name = name;
        this.category = category;
        this.description = desc;
        this.price = price;
        this.flightAddOn = flight;
        this.flightAddOnPrice = flightPrice;
        this.hotelAddOn = hotel;
        this.hotelAddOnPrice = hotelPrice;
        this.eventAddOn = event;
        this.eventAddOnPrice = eventPrice;
        this.isFlightAddOnSelected = false;
        this.isHotelAddOnSelected = false;
        this.isEventAddOnSelected = false;
        this.isPackageSelected = false;
        this.eventAddOnSelected = false;
    }



    //Displays standard package in cart area
    displayInCart() {
        const cartElem = document.querySelector("#shopping-cart");
        const selectedCartElem = document.createElement("div");

        selectedCartElem.id = "pkg-in-cart";


        selectedCartElem.insertAdjacentHTML('beforeend', '<div class="item-name">' + this.name + '</div>' ); 
        selectedCartElem.insertAdjacentHTML('beforeend','<div class="item-price">'+ ' $' + this.price + '</div>');
        
        
        // attempt to push price into subtotal array//
        cartObject.price = this.price;
        console.log(cartObject);
        cartElem.appendChild(selectedCartElem);



    }

    removeFromCart() {
        const removeCartElem = document.querySelector("#pkg-in-cart");
        // cartArray.splice(removeCartElem, 1);
        // while (removeCartElem.hasChildNodes()){
        //     removeCartElem.removeChild(removeCartElem.firstChild);
        // }
        removeCartElem.remove();

    }



    //Displays  additional package options when standard package is selected
    displayAddOnsInPackage(detailsID) {
        const packageElem = document.getElementById(detailsID);
        // const addOnElem = document.createElement("form");
        // addOnElem.className = "addOnForm";

        packageElem.insertAdjacentHTML('beforeend','<h3 class="add-on-title">Upgrade Your Package!</h3>');
        packageElem.insertAdjacentHTML('beforeend', '<input class="add-on-input" type="checkbox" name="flight">' + this.flightAddOn + " $" + this.flightAddOnPrice + '<br>');
        packageElem.insertAdjacentHTML('beforeend', '<input class="add-on-input" type="checkbox" name="hotel">' + this.hotelAddOn + " $" + this.hotelAddOnPrice + '<br>');
        packageElem.insertAdjacentHTML('beforeend', '<input class="add-on-input" type="checkbox" name="event">' + this.eventAddOn + " $" + this.eventAddOnPrice + '<br>');


        // packageElem.appendChild(addOnElem);
    }

    hideAddOnPackage(detailsID) {
        const packageElem = document.getElementById(detailsID);

        this.isFlightAddOnSelected = false;
        this.isHotelAddOnSelected = false;
        this.isEventAddOnSelected = false;

        while (packageElem.hasChildNodes()) {
            packageElem.removeChild(packageElem.firstChild);
        }
    }

    //Displays additional package options in cart area
    displayAddOnInCart(addOnType) {
        const cartElem = document.querySelector(".cart");
        const pkgElem = document.querySelector("#pkg-in-cart");
        



        if (addOnType === this.flightAddOn) {
            
            pkgElem.insertAdjacentHTML('beforeend', '<div class="item-name">' + this.flightAddOn + '</div>' ); 
            pkgElem.insertAdjacentHTML('beforeend','<div class="item-price">'+ ' $' + this.flightAddOnPrice + '</div>');
            
        }

        if (addOnType === this.hotelAddOn) {
            
            pkgElem.insertAdjacentHTML('beforeend', '<div class="item-name">' + this.hotelAddOn + '</div>' ); 
            pkgElem.insertAdjacentHTML('beforeend','<div class="item-price">'+ ' $' + this.hotelAddOnPrice + '</div>');
            
        }

        if (addOnType === this.eventAddOn) {
            pkgElem.insertAdjacentHTML('beforeend', '<div class="item-name">' + this.eventAddOn + '</div>' ); 
            pkgElem.insertAdjacentHTML('beforeend','<div class="item-price">'+ ' $' + this.eventAddOnPrice + '</div>');
            
        }

        
        cartElem.appendChild(pkgElem);

    }

    removeAddOnFromCart(addOnType) {
        let removedAddOn = null;

        if (addOnType === this.flightAddOn) {
            removedAddOn = document.querySelector("#flight-add");
            cartObject.flight = 0;
        }

        if (addOnType === this.hotelAddOn) {
            removedAddOn = document.querySelector("#hotel-add");
            cartObject.hotel = 0;
        }

        if (addOnType === this.eventAddOn) {
            removedAddOn = document.querySelector("#event-add");
            cartObject.event = 0;
        }

        // while (removedAddOn.hasChildNodes()){
        //     removedAddOn.removeChild(removedAddOn.firstChild);
        // }
        removedAddOn.remove();

    }

    //Keeps track of which additional package options have been selected
    AddOnSelected(addOnType) {

        if (addOnType === this.flightAddOn) {
            cartObject.flight = this.flightAddOnPrice;

            this.isFlightAddOnSelected = true;

        }

        if (addOnType === this.hotelAddOn) {
            cartObject.hotel = this.hotelAddOnPrice;
            this.isHotelAddOnSelected = true;
        }

        if (addOnType === this.eventAddOn) {
            cartObject.event = this.eventAddOnPrice;
            this.isEventAddOnSelected = true;
        }
    }

    //keeps track of which additional package options have been de-selected
    AddOnRemoved(addOnType) {
        if (addOnType === this.flightAddOn) {
            this.isFlightAddOnSelected = false;
        }

        if (addOnType === this.hotelAddOn) {
            this.isHotelAddOnSelected = false;
        }

        if (addOnType === this.eventAddOn) {
            this.isEventAddOnSelected = false;
        }
    }
    select(type) {
        switch (type) {
            case "package":
                this.isPackageSelected = true;
                break;
            case "flight":
                this.isFlightAddOnSelected = true;
                break;
            case "hotel":
                this.isHotelAddOnSelected = true;
                break;
            case "event":
                this.isEventAddOnSelected = true;
        }
    }

    deselect(type) {
        switch (type) {
            case "package":
                this.isPackageSelected = false;
                break;
            case "flight":
                this.isFlightAddOnSelected = false;
                break;
            case "hotel":
                this.isHotelAddOnSelected = false;
                break;
            case "event":
                this.isEventAddOnSelected = false;
        }
    }


    calculator() {
        let subtotal = cartObject.price + cartObject.flight + cartObject.hotel + cartObject.event;
        let packageAndFeatureTotal = document.getElementsByClassName("subtotal");
        // packageAndFeatureTotal.forEach((e) => {
        // packageAndFeatureTotal.innerHTML = `Subtotal: ${subtotal}`;
        // })
        packageAndFeatureTotal.innerHTML = `Subtotal: $${subtotal}.00`;
        let tax = subtotal * .09;
        let salesTax = document.getElementsByClassName("sales-tax");
        salesTax.innerHTML = `Sales Tax: $${tax}`;
        let grandTotal = subtotal + tax;
        let total = document.getElementsByClassName("total");
        total.innerHTML = `Total: $${grandTotal}`;
    }

}

let package = new Package();

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




let packageOneSelector = document.querySelector("#container1");
let packageTwoSelector = document.querySelector("#container2");
let packageThreeSelector = document.querySelector("#container3");



// Package EVENT LISTENERS

// Package one listener
packageOneSelector.addEventListener("click", function(e) {


    if (e.target.matches('#package-one')) {

        if (!testPackage.isPackageSelected) {

            testPackage.displayInCart();
            testPackage.displayAddOnsInPackage("pkg-one-details");
            testPackage.select("package");


            if (testPackage2.isPackageSelected) {
                testPackage2.removeFromCart();
                testPackage2.deselect("package");
                testPackage2.hideAddOnPackage("pkg-two-details");
            }

            if (testPackage3.isPackageSelected) {
                testPackage3.removeFromCart();
                testPackage3.deselect("package");
                testPackage3.hideAddOnPackage("pkg-three-details");
            }


        } else {
            testPackage.removeFromCart();
            testPackage.deselect("package");
            testPackage.hideAddOnPackage("pkg-one-details");

        }

    }

    if (e.target.matches('input[name="flight"]')) {


        if (!testPackage.isFlightAddOnSelected) {

            testPackage.AddOnSelected(testPackage.flightAddOn);
            testPackage.displayAddOnInCart(testPackage.flightAddOn);
        } else {

            testPackage.removeAddOnFromCart(testPackage.flightAddOn);
            testPackage.AddOnRemoved(testPackage.flightAddOn);
        }
    }

    if (e.target.matches('input[name="hotel"]')) {
        if (!testPackage.isHotelAddOnSelected) {

            testPackage.AddOnSelected(testPackage.hotelAddOn);
            testPackage.displayAddOnInCart(testPackage.hotelAddOn);
        } else {

            testPackage.removeAddOnFromCart(testPackage.hotelAddOn);
            testPackage.AddOnRemoved(testPackage.hotelAddOn);
        }
    }

    if (e.target.matches('input[name="event"]')) {

        if (!testPackage.isEventAddOnSelected) {

            testPackage.AddOnSelected(testPackage.eventAddOn);
            testPackage.displayAddOnInCart(testPackage.eventAddOn);
        } else {

            testPackage.removeAddOnFromCart(testPackage.eventAddOn);
            testPackage.AddOnRemoved(testPackage.eventAddOn);
        }

    }
    package.calculator();
});

// Package two listener
packageTwoSelector.addEventListener("click", function(e) {

    if (e.target.matches('#package-two')) {

        if (!testPackage2.isPackageSelected) {

            testPackage2.displayInCart();
            testPackage2.displayAddOnsInPackage("pkg-two-details")
            testPackage2.select("package");

            if (testPackage.isPackageSelected) {
                testPackage.removeFromCart();
                testPackage.deselect("package");
                testPackage.hideAddOnPackage("pkg-one-details");
            }

            if (testPackage3.isPackageSelected) {
                testPackage3.removeFromCart();
                testPackage3.deselect("package");
                testPackage3.hideAddOnPackage("pkg-three-details");
            }


        } else {
            testPackage2.removeFromCart();
            testPackage2.deselect("package");
            testPackage2.hideAddOnPackage("pkg-two-details");

        }
    }

    if (e.target.matches('input[name="flight"]')) {
        if (!testPackage2.isFlightAddOnSelected) {

            testPackage2.AddOnSelected(testPackage2.flightAddOn);
            testPackage2.displayAddOnInCart(testPackage2.flightAddOn);
        } else {

            testPackage2.removeAddOnFromCart(testPackage2.flightAddOn);
            testPackage2.AddOnRemoved(testPackage2.flightAddOn);
        }
    }

    if (e.target.matches('input[name="hotel"]')) {
        if (!testPackage2.isHotelAddOnSelected) {

            testPackage2.AddOnSelected(testPackage2.hotelAddOn);
            testPackage2.displayAddOnInCart(testPackage2.hotelAddOn);
        } else {

            testPackage2.removeAddOnFromCart(testPackage2.hotelAddOn);
            testPackage2.AddOnRemoved(testPackage2.hotelAddOn);
        }

    }

    if (e.target.matches('input[name="event"]')) {
        if (!testPackage2.isEventAddOnSelected) {

            testPackage2.AddOnSelected(testPackage2.eventAddOn);
            testPackage2.displayAddOnInCart(testPackage2.eventAddOn);
        } else {

            testPackage2.removeAddOnFromCart(testPackage2.eventAddOn);
            testPackage2.AddOnRemoved(testPackage2.eventAddOn);
        }


    }
    package.calculator();

})


// Package three listener
packageThreeSelector.addEventListener("click", function(e) {

    if (e.target.matches('#package-three')) {
        if (!testPackage3.isPackageSelected) {

            testPackage3.displayInCart();
            testPackage3.displayAddOnsInPackage("pkg-three-details")
            testPackage3.select("package");

            if (testPackage.isPackageSelected) {
                testPackage.removeFromCart();
                testPackage.deselect("package");
                testPackage.hideAddOnPackage("pkg-one-details");
            }

            if (testPackage2.isPackageSelected) {
                testPackage2.removeFromCart();
                testPackage2.deselect("package");
                testPackage2.hideAddOnPackage("pkg-two-details");
            }


        } else {
            testPackage3.removeFromCart();
            testPackage3.deselect("package");
            testPackage3.hideAddOnPackage("pkg-three-details");

        }
    }

    if (e.target.matches('input[name="flight"]')) {
        if (!testPackage3.isFlightAddOnSelected) {

            testPackage3.AddOnSelected(testPackage3.flightAddOn);
            testPackage3.displayAddOnInCart(testPackage3.flightAddOn);
        } else {

            testPackage3.removeAddOnFromCart(testPackage3.flightAddOn);
            testPackage3.AddOnRemoved(testPackage3.flightAddOn);
        }

    }


    if (e.target.matches('input[name="hotel"]')) {
        if (!testPackage3.isHotelAddOnSelected) {

            testPackage3.AddOnSelected(testPackage3.hotelAddOn);
            testPackage3.displayAddOnInCart(testPackage3.hotelAddOn);
        } else {

            testPackage3.removeAddOnFromCart(testPackage3.hotelAddOn);
            testPackage3.AddOnRemoved(testPackage3.hotelAddOn);
        }
    }

    if (e.target.matches('input[name="event"]')) {
        if (!testPackage3.isEventAddOnSelected) {

            testPackage3.AddOnSelected(testPackage3.eventAddOn);
            testPackage3.displayAddOnInCart(testPackage3.eventAddOn);
        } else {

            testPackage3.removeAddOnFromCart(testPackage3.eventAddOn);
            testPackage3.AddOnRemoved(testPackage3.eventAddOn);
        }
    }
    package.calculator();

});


class Checkout {
    constructor(checkoutButton, checkoutParent) {
        this.checkoutButton = checkoutButton;
        this.checkoutParent = checkoutParent;
    };

    processPayment() {
        this.checkoutButton = document.getElementById("checkout");
        const paymentType = document.getElementById("payment-type");
        const cashForm = document.getElementById("cash-form");
        const creditForm = document.getElementById("credit-form");
        const proceed = document.getElementById("proceed");
        const cashProcess = document.getElementById("cash-process-btn");
        const creditProcess = document.getElementById("credit-process-btn");
        let contanctInfo = document.getElementById("contact-info");
        let subTotalDiv = "";
        let salesTaxDiv = "";
        let totalDiv = ""; 

       
        
        this.checkoutButton.addEventListener("click", (e) => {
            paymentType.style = "visibility: inherit;";
        });

        proceed.addEventListener("click", (e) => {
            let subtotal = cartObject.price + cartObject.flight + cartObject.hotel + cartObject.event;
            let tax = subtotal * .09;
            let grandTotal = subtotal + tax;

            let type = document.querySelector('input[name="type"]:checked').value;
            console.log(type);
            if (type === "cash") {
                subTotalDiv = document.getElementById("cash-sub");
                salesTaxDiv = document.getElementById("cash-tax");
                totalDiv = document.getElementById("cash-total");
                paymentType.style = "visibility: hidden;";
                cashForm.style = "visibility: inherit;";
                
               
            } else if (type === "credit-card") {
                subTotalDiv = document.getElementById("credit-sub");
                salesTaxDiv = document.getElementById("credit-tax");
                totalDiv = document.getElementById("credit-total");

                paymentType.style = "visibility: hidden;";
                creditForm.style = "visibility: inherit;";
               
            }

            subTotalDiv.insertAdjacentText('beforeend',"Subtotal: $"+subtotal);
            salesTaxDiv.insertAdjacentText('beforeend',"Tax: $"+tax);
            totalDiv.insertAdjacentText('beforeend',"Subtotal: $"+grandTotal);
        });

        cashProcess.addEventListener("click", (e) => {
            let subtotal = cartObject.price + cartObject.flight + cartObject.hotel + cartObject.event;
            let tax = subtotal * .09;
            let grandTotal = subtotal + tax;

            let cashTender = document.querySelector('input[name="tender"]').value;

            subTotalDiv = document.getElementById("cash-sub");
            salesTaxDiv = document.getElementById("cash-tax");
            totalDiv = document.getElementById("cash-total");

            cashForm.style = "visibility: hidden;";
            receipt.style = "visibility: inherit;";
            console.log(cartObject);

        })

        creditProcess.addEventListener("click", (e) => {
            let nameInput = document.getElementById("name").value;
            let address = document.getElementById("street-address").value;
            let city = document.getElementById("city").value;
            let state = document.getElementById("state").value;
            let zipcode = document.getElementById("zipcode").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value;
            let creditCard = document.getElementById("credit-card").value;
            let expiration = document.getElementById("exp-date").value;
            let cvv = document.getElementById("cvv").value;
            creditForm.style = "visiblity: hidden;";
            receipt.style = "visibility: inherit;";
            contanctInfo.innerHTML = `
            <div>Thank you for your order!</div>
            <div>Your package information and tickets will be shipped to:</div>
            <div>${nameInput}</div>
            <div>${address}</div>
            <div>${city}</div>
            <div>${state}</div>
            <div>${zipcode}</div>
            <div>${phone}</div>
            <div>${email}</div>
            <div>**** **** **** ****</div>
            <div>${expiration}</div>
            <div>***</div>
            `;

        })


    }
}



let checkout = new Checkout();
checkout.processPayment();