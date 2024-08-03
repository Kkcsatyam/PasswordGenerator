const passwordBox=document.getElementById('input');
const length=12;
const lengthDisplay=document.getElementById('slider');
const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const num='0123456789';
const symbol='~`@#$%^&*()_-+=/><';

const allChars=upperCase+lowerCase+num+symbol;


function generateRandom(){
    let password='';
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value=password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');

}
