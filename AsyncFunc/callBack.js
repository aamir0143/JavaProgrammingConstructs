const datas = [
    {Name: "Aamir", Profession: "Software Engineer"},
    {Name: "Wasim", Profession: "Software Engineer"},
];
function getDatas() {
    setTimeout(() => {
        datas.forEach((data, index) => {
            console.log(data.Name);
        })
    }, 1000) // 1 sec
}
function createData(newData, callback) {
    setTimeout(() => {
        datas.push(newData)
        callback();
    }, 2000) // 2 sec
}
createData({Name: "Reza", Profession: "Software Engineer"}, getDatas);