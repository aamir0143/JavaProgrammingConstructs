const datas = [
    {Name: "Aamir", Profession: "Software Enginerr"},
    {Name: "Wasim", Profession: "Software Engineer"},
];
function getDatas() {
    setTimeout(() => {
        datas.forEach((data, index) => {
            console.log(data, Name);
        })
    }, 1000) // 1 sec
}
function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = true
            if (!error) {
                resolve();
            }
            else{
                reject("Error Occured........");
            }
        }, 2000) // 2 sec
    })
}
async function start() {
    await createData({Name: "Reza", Profession: "Software Engineer"});
    getDatas();
}
start();