console.log("===Welcome To Employee Wage Programs===");
//UC1 Check Absent or Present
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT)
    {
        console.log("Employee is Absent");
    }
    else 
    {
        console.log("Employee is Present");
    }
}
//UC2 Calculate Daily Employee Wages
{
    const IS_FULL_TIME = 1;
    const WAGE_PER_HOUR = 20;
    let empHrs = 0;
    let empWage = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_FULL_TIME)
    {
        console.log("Employee is Present");
        empHrs = 8; 
    }
    else 
    {
        console.log("Employee is Absent");
        empHrs = 0;
    }
    empWage = empHrs * WAGE_PER_HOUR;
    console.log("Daily Emp Wage is : " + empWage);
}
//UC3 Add Part time Employee & Wage
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const WAGE_PER_HOUR = 20;
    let empHrs = 0;
    let empWage = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    if (empCheck == IS_PART_TIME)
    {
        console.log("Employee is Present");
        empHrs = 4;
    }
    else if (empCheck == IS_FULL_TIME) 
    {
        console.log("Employee is Present");
        empHrs = 8;
    }
    else
    {
        console.log("Employee is Absent");
        empHrs = 0;
    }
    empWage = empHrs * WAGE_PER_HOUR;
    console.log("Employee Wage is : " + empWage);
}
//Write function for daily working hours
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
PART_TIME_HOURS = 4;
FULL_TIME_HOURS = 8;
let empHrs = 0;
let empWage = 0;
function getWorkingHours(empCheck)
{
    switch (empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);

//UC4 Solving using Switch case statement
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const WAGE_PER_HOUR = 20;
    let empHrs = 0;
    let empWage = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck)
    {
        case IS_PART_TIME:
            empHrs = 4;
            break;
        case IS_FULL_TIME:
            empHrs = 8;
            break;
        default:
            empHrs = 0;
            break;    
    }
    empWage = empHrs * WAGE_PER_HOUR;
    console.log("Employee Wage is: " + empWage);
}
//UC5 Calculating wages for a month
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    let empHrs = 0;
    let empWage = 0;
    for(let day = 0; day < NUM_OF_WORKING_DAYS; day++)
    {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs += getWorkingHours(empCheck);
    }
    empWage = empHrs * WAGE_PER_HOUR;
    console.log("Total Hrs: " + empHrs + "\tEmp Wage: " +empWage);
}
//UC6 Calculating Wages till Number of Working Days or Total Working Hours Per Month is Reached
{
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 100;
    let totalWorkingDays = 0;
    let empHrs = 0;
    let empWage = 0;
    let totalEmpHrs = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays ++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Days: " + totalWorkingDays + "\tTotal Hrs: " + totalEmpHrs + "\tEmp Wage: " + empWage);
}