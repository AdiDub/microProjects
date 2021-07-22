let counter = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
  btn.addEventListener('click',function(e){
    const type = e.currentTarget.classList;
    if(type.contains('decrease')){
      counter--;
    } else if (type.contains('increase')) {
      counter++;
    } else{
      counter = 0;
    }

    if(counter>0){
      value.style.color = 'green';
    }
    if (counter<0) {
      value.style.color = 'red';
      value.style.backgroundColor = 'green';
    }
    if (counter===0) {
      value.style.color = 'black';
    }
    value.textContent = counter;
  });

});
