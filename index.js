// Write your solution in this file!

const driver = {
    name: 'Sam'
};

function updateDriverWithKeyAndValue(obj, key, value) {
    const newDriver = { ...driver } ;
    
    newDriver[key] = value;

    return newDriver; 
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    driver[key] = value;

    return driver;
};

function deleteFromDriverByKey(driver, key) {
    const driverThree = { ...driver } ;

    delete driverThree[key];

    return driverThree;
}

function destructivelyDeleteFromDriverByKey(driver, key) {

    delete driver[key];

    return driver;
}