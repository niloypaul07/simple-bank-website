document.getElementById('submit-button').addEventListener('click',function(){

    console.log('clicked');

    const emailField= document.getElementById('user-email')
        Email= emailField.value;
    

     const passField= document.getElementById('user-passward')
        Passward= passField.value;
        console.log(Email,Passward);


        if(Email=='niloy@gmail.com' && Passward== '1234'){
            window.location.href='bank.html';
        }
        else{
            alert('invalid-user');
        }
    
})