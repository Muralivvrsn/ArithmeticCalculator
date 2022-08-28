const input = document.getElementById('enter');
const array = document.querySelectorAll('.item');
let str = "";
for(let i=0;i<array.length;i++){
    array[i].addEventListener('click',()=>{
        str+=array[i].textContent;
        input.value = str;
    });
}


