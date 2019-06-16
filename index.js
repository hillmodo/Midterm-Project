let cartArray = [];

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
        this.subtotal = [];
        this.eventAddOnSelected = false;

    }

    //Displays standard package in cart area
    displayInCart() {
        const cartElem = document.querySelector("#shopping-cart");
        const selectedCartElem = document.createElement("div");

        selectedCartElem.id = "pkg-in-cart";

        selectedCartElem.insertAdjacentText('beforeend', this.name + " $" + this.price);
        selectedCartElem.insertAdjacentHTML('beforeend', '<br>');

        // attempt to push price into subtotal array//
        cartArray.push(this.price);
        console.log(cartArray);
        cartElem.appendChild(selectedCartElem);

        

    }

    removeFromCart(){
        const removeCartElem = document.querySelector("#pkg-in-cart");

            // while (removeCartElem.hasChildNodes()){
            //     removeCartElem.removeChild(removeCartElem.firstChild);
            // }
            removeCartElem.remove();
       
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

    hideAddOnPackage(detailsID){
        const packageElem = document.getElementById(detailsID);

         while (packageElem.hasChildNodes()){
             packageElem.removeChild(packageElem.firstChild);
         }
    }

    //Displays additional package options in cart area
    displayAddOnInCart(addOnType) {
        const cartElem = document.querySelector(".cart");
        const pkgElem = document.querySelector("#pkg-in-cart");
        const selectedAddOn = document.createElement("div");



        if (addOnType === this.flightAddOn) {
            selectedAddOn.id = "flight-add";
            selectedAddOn.insertAdjacentText('beforeend', this.flightAddOn + " $" + this.flightAddOnPrice);
            selectedAddOn.insertAdjacentHTML('beforeend', '<br>');
        }

        if (addOnType === this.hotelAddOn) {
            selectedAddOn.id = "hotel-add";
            selectedAddOn.insertAdjacentText('beforeend', this.hotelAddOn + " $" + this.hotelAddOnPrice);
            selectedAddOn.insertAdjacentHTML('beforeend', '<br>');
        }

        if (addOnType === this.eventAddOn) {
            selectedAddOn.id = "event-add";
            selectedAddOn.insertAdjacentText('beforeend', this.eventAddOn + " $" + this.eventAddOnPrice);
            selectedAddOn.insertAdjacentHTML('beforeend', '<br>');
        }
        
        pkgElem.appendChild(selectedAddOn);
        cartElem.appendChild(pkgElem);

    }

    removeAddOnFromCart(addOnType){
        let removedAddOn = null;
        
        if(addOnType === this.flightAddOn){
            removedAddOn = document.querySelector("#flight-add");
        }

        if(addOnType === this.hotelAddOn){
            removedAddOn = document.querySelector("#hotel-add");
        }

        if(addOnType === this.eventAddOn){
            removedAddOn = document.querySelector("#event-add");
        }

        // while (removedAddOn.hasChildNodes()){
        //     removedAddOn.removeChild(removedAddOn.firstChild);
        // }
        removedAddOn.remove();
      
    }

    //Keeps track of which additional package options have been selected
    AddOnSelected(addOnType) {

        if (addOnType === this.flightAddOn) {

            this.subtotal.push(this.flightAddOnPrice);
            cartArray.push(this.flightAddOnPrice);
            this.isFlightAddOnSelected = true;
        }

        if (addOnType === this.hotelAddOn) {
            this.subtotal.push(this.hotelAddOnPrice);
            cartArray.push(this.hotelAddOnPrice);
            this.isHotelAddOnSelected = true;
        }

        if (addOnType === this.eventAddOn) {
            this.subtotal.push(this.eventAddOnPrice);
            cartArray.push(this.eventAddOnPrice);
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
     select(type){
         switch (type){
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

     deselect(type){
        switch (type){
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







let packageOneSelector = document.querySelector("#container1");
let packageTwoSelector = document.querySelector("#container2");
let packageThreeSelector = document.querySelector("#container3");



// Package EVENT LISTENERS

// Package one listener
packageOneSelector.addEventListener("click", function (e){
    

    if(e.target.matches('#package-one')){
        
        if(! testPackage.isPackageSelected){
          
          testPackage.displayInCart();
          testPackage.displayAddOnsInPackage("pkg-one-details");
          testPackage.select("package");
         
          
          if(testPackage2.isPackageSelected){
             testPackage2.removeFromCart();
             testPackage2.deselect("package");
             testPackage2.hideAddOnPackage("pkg-two-details");
          }
          
          if(testPackage3.isPackageSelected){
            testPackage3.removeFromCart();
            testPackage3.deselect("package");
            testPackage3.hideAddOnPackage("pkg-three-details");
          }  
          
         
        }else {
            testPackage.removeFromCart();
            testPackage.deselect("package");
            testPackage.hideAddOnPackage("pkg-one-details");

        }
      console.log(testPackage);
     
    }

    if(e.target.matches('input[name="flight"]')){
        if(! testPackage.isFlightAddOnSelected){

          testPackage.AddOnSelected(testPackage.flightAddOn);
          testPackage.displayAddOnInCart(testPackage.flightAddOn);
        } else {
           
           testPackage.removeAddOnFromCart(testPackage.flightAddOn);
           testPackage.AddOnRemoved(testPackage.flightAddOn);
        }
    }

    if(e.target.matches('input[name="hotel"]')){

        testPackage.AddOnSelected(testPackage.hotelAddOn);
        testPackage.displayAddOnInCart(testPackage.hotelAddOn);
    }

    if(e.target.matches('input[name="event"]')){

        testPackage.AddOnSelected(testPackage.eventAddOn);
        testPackage.displayAddOnInCart(testPackage.eventAddOn);
    
    }
  calculator();
});

// Package two listener
packageTwoSelector.addEventListener("click", function(e){

    if(e.target.matches('#package-two')){
        
        if(! testPackage2.isPackageSelected){
          
          testPackage2.displayInCart();
          testPackage2.displayAddOnsInPackage("pkg-two-details")
          testPackage2.select("package");
          
          if(testPackage.isPackageSelected){
             testPackage.removeFromCart();
             testPackage.deselect("package");
             testPackage.hideAddOnPackage("pkg-one-details");
          }
          
          if(testPackage3.isPackageSelected){
            testPackage3.removeFromCart();
            testPackage3.deselect("package");
            testPackage3.hideAddOnPackage("pkg-three-details");
          }  
          
         
        } else {
            testPackage2.removeFromCart();
            testPackage2.deselect("package");
            testPackage2.hideAddOnPackage("pkg-two-details");

        }
         console.log(testPackage2);
    }

    if(e.target.matches('input[name="flight"]')){
        testPackage2.AddOnSelected(testPackage2.flightAddOn);
        testPackage2.displayAddOnInCart(testPackage2.flightAddOn);
    }

    if(e.target.matches('input[name="hotel"]')){
        testPackage2.AddOnSelected(testPackage2.hotelAddOn);
        testPackage2.displayAddOnInCart(testPackage2.hotelAddOn);
       
    }

    if(e.target.matches('input[name="event"]')){
        testPackage2.AddOnSelected(testPackage2.eventAddOn);
        testPackage2.displayAddOnInCart(testPackage2.eventAddOn);


    }
    calculator();

})


// Package three listener
packageThreeSelector.addEventListener("click", function(e){

    if(e.target.matches('#package-three')){
        if(! testPackage3.isPackageSelected){
          
            testPackage3.displayInCart();
            testPackage3.displayAddOnsInPackage("pkg-three-details")
            testPackage3.select("package");
           
            if(testPackage.isPackageSelected){
               testPackage.removeFromCart();
               testPackage.deselect("package");
               testPackage.hideAddOnPackage("pkg-one-details");
            }
  
            if(testPackage2.isPackageSelected){
              testPackage2.removeFromCart();
              testPackage2.deselect("package");
              testPackage2.hideAddOnPackage("pkg-two-details");
            }  
            
           
          } else {
              testPackage3.removeFromCart();
              testPackage3.deselect("package");
              testPackage3.hideAddOnPackage("pkg-three-details");
  
          }
           console.log(testPackage3);
    }

    if(e.target.matches('input[name="flight"]')){
        testPackage3.AddOnSelected(testPackage3.flightAddOn);
        testPackage3.displayAddOnInCart(testPackage3.flightAddOn);
       
    }


    if(e.target.matches('input[name="hotel"]')){
        testPackage3.AddOnSelected(testPackage3.hotelAddOn);
        testPackage3.displayAddOnInCart(testPackage3.hotelAddOn);
    }

    if(e.target.matches('input[name="event"]')){
        testPackage3.AddOnSelected(testPackage3.eventAddOn);
        testPackage3.displayAddOnInCart(testPackage3.eventAddOn);

    }
    calculator();

});






// window.onload = cartArray.reduce(function(a, b) {return a + b;}, 0);

