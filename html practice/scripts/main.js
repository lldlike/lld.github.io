//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!'

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jianzhu.jpg'){
        myImage.setAttribute('src','images/meinv.png');
    }else{
        myImage.setAttribute('src','images/jianzhu.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字');
    if(!myName||myName === null){
        setUserName();}
        else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'WOW太厉害了，' + myName;}
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'WOW太厉害了，' + storeName;
}

myButton.onclick = function(){
    setUserName();
}
