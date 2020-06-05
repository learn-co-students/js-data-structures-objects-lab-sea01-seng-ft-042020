// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
   driver = {...driver};
   driver[key] = value;
   return driver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
};

function deleteFromDriverByKey(driver, key) {
    driver = {...driver};
    delete driver[key];
    return driver;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
};