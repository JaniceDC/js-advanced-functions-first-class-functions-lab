// Code your solution in this file!
const drivers = ["Sally", "Bob", "Freddy", "Claudia"]

const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num) {
    return function(multiply) {
        return (num * multiply);
    }
}

const fareDoubler = function(doubler){
    return createFareMultiplier(doubler)(2);
}

const fareTripler = function(tripler){
    return createFareMultiplier(tripler)(3);
}

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}