const datas = [
    {Name: "Aamir", Profession: "Software Engineer"},
    {Name: "Wasim", Profession: "SoftwareEngineer"},
];
function getDatas(){
    setTimeout(() => {
        datas.forEach((data, index) => {
            console.log(data.Name);
        })
    }, 1000)  // 1 sce
}
function createData(newData){
    setTimeout(() => {
        datas.push(newData)
    }, 2000) // 2 sec
}
createData({Name:"Reza",Profession: "SoftwareEngineer"});
getDatas();