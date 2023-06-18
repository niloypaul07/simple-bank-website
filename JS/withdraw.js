document.getElementById('withdraw-button').addEventListener('click',function(){

      const WithdrawInputField= GetInputValueById('withdraw-field');
      const PreviousWithdrawButton= GetElementId('withdraw-amount');


      const NewWithDrawBalance= PreviousWithdrawButton + WithdrawInputField;



      SetTextElementByID('withdraw-amount', NewWithDrawBalance);

      const PreviousBalanceTotals= GetElementId('balance-amount');
      const NewBalanceAmount= PreviousBalanceTotals - NewWithDrawBalance;
      SetTextElementByID('balance-amount',NewBalanceAmount);







})