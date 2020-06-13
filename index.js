// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, newkey, value) {
    let newobj = { ...driver };
    newobj[newkey] = value
    return newobj
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let newdriver = { ...driver }
    delete newdriver[key]
    return newdriver
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
    
}
