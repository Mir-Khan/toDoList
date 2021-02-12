// these functions handle what happens when the store is modified, either by deleting or adding a new item

// ADDING FUNCTION(S)
// this function deals with what happens when the store's next id to be added isn't just the max id + 1
// this needed to be done since the next id to be added was determined by what's in the local storage on page load
// so when deleting an item, the next id to be added needed to be changed, this function fixes that simply
export const idCheck = (id, max, allIds) => {
    // if the array is empty or undefined, we just return 1
    if (!Array.isArray(allIds) || !allIds.length) {
        return 1;
    }
    // otherwise we check if the id supplied is accurate and if it's not supply the proper id 
    if (id === max + 1) {
        return id;
    } else {
        return max + 1;
    }
}

// DELETING FUNCTION(S)
// these functions deal with the store after a todo item was deleted
export const filterByIds = (id, object) => {
    let newObject = {};
    // if the object being passed in has more than one property we have to adjust it
    if (Object.keys(object).length > 1) {
        for (let key in object) {
            let numKey = parseInt(key, 10);
            if (numKey !== id) {
                if (id < numKey) {
                    let fixedId = numKey - 1;
                    newObject[fixedId] = object[key];
                } else {
                    newObject[key] = object[key];
                }
            }
        }
    }
    // otherwise the end goal is just an empty object, which we initialized before
    return newObject;
}

export const filterAllIds = (id, arr) => {
    let filteredArr = arr.filter(item => item !== id);
    let newArr = [];
    for (let i = 0; i < filteredArr.length; i++) {
        // just to make sure the thing we're comparing is an int in base 10
        let fixedNum = parseInt(filteredArr[i], 10);
        if (fixedNum > 1 && fixedNum > id) {
            newArr.push(fixedNum - 1);
        } else {
            newArr.push(fixedNum);
        }
    }
    return newArr;
}