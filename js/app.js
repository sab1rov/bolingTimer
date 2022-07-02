let input = document.querySelector('.input');
let btn = document.querySelector('.btn')
let sec = document.querySelector('.sec')
let time;
let interval;

input.addEventListener('input', (e) =>{
    time = e.target.value
    time.value = ''
    btn.addEventListener('click', ()=>{
        sec.innerHTML = time
        sec.classList.add('active')
    })
})
function timer (){
    if(time > 0){
        time--
    }else if (time == 0){
        clearInterval(interval)
        return sec.classList.remove('active')
    }
    sec.innerHTML = time
    sec.classList.add('active')

}

btn.addEventListener('click', function(){
    interval = setInterval(timer, 1000)
    input.value = ''
})

