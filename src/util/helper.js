const getInfo = {
    name:"lithium",
    week: "w3d5",
    topic: "today is node js topic how to create module and export it.",
};
function getbatchInfo(){
    console.log (`batch name ${getInfo.name} , current name ${getInfo.week},${getInfo.topic}`)
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    console.log(day);
    console.log(month);
    console.log(year);

}
module.exports.getbatchInfo = getbatchInfo;