function GetInputValueById(InputValue){

    const PleaseDepositeField= document.getElementById(InputValue);
        const DepositeInput= PleaseDepositeField.value;
        const NewDepositeInput= parseFloat(DepositeInput);
        PleaseDepositeField.value='';
        return NewDepositeInput;
    
    }


    function GetElementId(ElementValue){
        const DepositeFiled= document.getElementById(ElementValue);
      const DepositeTotal= DepositeFiled.innerText;
      const NewDepositeTotal= parseFloat(DepositeTotal);
      return NewDepositeTotal;
    }

    function SetTextElementByID(ElementValue,NewValue){
        const DepositeFiled= document.getElementById(ElementValue);
        DepositeFiled.innerText= NewValue;
    }
