"use strict";

const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '40px';

one.classList.add('two', 'three');
one.classList.remove('three');//til at slette element

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
    this.classList.toggle('three');
})

//атрибуты data
console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'));//link gennem js i console

one.setAttribute('data-num', 6);//tilføjet den i html i consolen

let gas = document.querySelector('.gas');
for (let i = 0; i <gas.length; i++){
    gas[i].addEventListener('click', function() {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    })
}

let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('one');
a.addEventListener('click', () => {
        alert('hello');
    })
document.querySelector('.test').appendChild(a);
console.log(a);