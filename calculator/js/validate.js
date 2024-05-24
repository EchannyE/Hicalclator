const number = document.querySelectorAll('#number');
const operational = document.querySelectorAll('#operational');
const display = document.querySelector('#total');


number.forEach((number) => {
   number.addEventListener('click',() =>{
      // console.log(number.innerHTML);
    if (display.value ==0) {
       display.value = number.innerHTML;
    }
    else{
        display.value += number.innerHTML;
    };
   });
});

operational.forEach((operational) => {
    operational.addEventListener('click',() =>{
     if (display.value !== '0') {
        display.value += operational.innerHTML;
     };
     
    });
 });

 function Calculate() {
    const cal = eval(display.value);
    display.value = cal;
 };

 function Clear() {
    display.value = '0';
 };