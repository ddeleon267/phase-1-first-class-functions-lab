// Code your solution in this file!
const drivers = ["Sally", "Bob", "Freddy", "Claudia", "John"];

const returnFirstTwoDrivers = function () {
  // console.log("hello" + "goodbye")

  // console.log([drivers[0], drivers[1]]);
  //return [drivers[0], drivers[1]]
  return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
};

function selectingDrivers() {
  return [returnFirstTwoDrivers, returnLastTwoDrivers];
}

const createFareMultiplier = function (multiplyValue, value) {
  return multiplyValue * value;
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
  return driversToReturn(drivers);
};
