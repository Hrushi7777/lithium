const _ = require("lodash"); //import lodash
function lodash(){
    let month1 = [
        "january",
        "februaray",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "supteber",
        "october",
        "november",
        "december",


    ];
    console.log(_.chunk(month1,4));
    const oddNum = [1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(oddNum,9));
    const num = [2,5,4,2,7];
    console.log(_.union(num));//print unique value


    const keyvalue = [
        ["horror","the shining"],
        ["drama","titanic"],
        ["thriller","pans labyrinth"]
    ];
    console.log(_.fromPairs(keyvalue));//for creating key value pair
}

module.exports.lodash = lodash; //export