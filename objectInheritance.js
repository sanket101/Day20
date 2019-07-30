let vehicle = {};

let goodsVehicle = {};

let passengerVehicle = {};

vehicle.commute = function (startdoc, enddoc){
    console.log(`commuting from ${startdoc} till ${enddoc}`);
}

goodsVehicle.__proto__ = vehicle;
passengerVehicle.__proto__ = vehicle;

goodsVehicle.commute('Bangalore', 'Chennai');

passengerVehicle.commute('Mumbai', 'Nagpur');