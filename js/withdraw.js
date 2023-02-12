/*
1. add event handler withe the withdraw Button
2. get the withdraw amount from the withdraw input field
2.5 also make suer to convert the input type into a number by using a parsFloat
3. t get the previous withdraw total
4. calculate Total withdraw amount
4.5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6.5. set new balance total

7. clear the input field
*/

// Step 01

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log("Withdraw button Enable.");
    // step 02
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newDepositAmount);


    // step 07
    withdrawField.value= '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide valid amount Number!');
        return;
    }

    // step 03
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);


    // step 05
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotal);


    if(newWithdrawAmount>previousBalanceTotal){
        alert('Your are not possible to withdraw available Balance In Your asset.');
        return;
    }

    // step 04 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step 06

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText= newBalanceTotal;
})