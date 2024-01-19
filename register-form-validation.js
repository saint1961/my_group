const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const position = document.getElementById('position');
const form = document.getElementById('form');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');

form.addEventListener('submit', (e)=>
{
     
     var email_check = /^([A-Za-z0-9_\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4}$)/;
  
    if(name.value == '' || name.value == null)
        {
    e.preventDefault();
            name_error.innerHTML = "Please fill the name!";
        }
    
    
    
    if (!email.value.match(email_check))
        {
           e.preventDefault();
     email_error.innerHTML = "Please fill correct email!";  
        }
    if(password.value.length <= 4)
        {
            e.preventDefault();
            password_error.innerHTML = "Password length must be more 8 character!";
        }
    
     if(password.value.length >= 20)
        {
            e.preventDefault();
            password_error.innerHTML = "Password can not be more than 20 character!";
        }
    
    if(password.value.length >= 20)
        {
            e.preventDefault();
            password_error.innerHTML = "Password can not be more than 20 character!";
        }
    
     if(password.value == '' || password.value == null)
        {
    e.preventDefault();
            password_error.innerHTML = "Please fill password!";
        }
    
    
     if(position.value == 'Select your position')
        {
    e.preventDefault();
            position_error.innerHTML = "Please chooose position first!";
        }
    
    
});
                      
 

 
