

    document.getElementById('deposite-button').addEventListener('click',function(){

        const NewDepositeInputs= GetInputValueById('deposite-field');
       

        const PreviousDepositeTotals= GetElementId('deposite-amount');
        //console.log(NewDepositeInputs,NewDepositeTotals);

        const NewDepositeTotals= NewDepositeInputs + PreviousDepositeTotals;

        SetTextElementByID('deposite-amount',NewDepositeTotals);


        const PreviousBalanceTotals= GetElementId('balance-amount')
        const NewBalanceTotal= PreviousBalanceTotals + NewDepositeInputs;

        SetTextElementByID('balance-amount',NewBalanceTotal); 

        

 })