let bar = document.getElementById('bar')
let link = document.getElementById('link')
li = document.querySelectorAll('li')
let img = document.getElementById('img')
let about = document.getElementById('about')

bar.onclick = function(){
    link.style.display = 'flex'
}

// if(window.innerWidth < 992){
//     about.style.paddingTop = '180px'
// }



for(let i = 0; i < li.length; i++){
    li[i].onclick = function(){
        if(window.innerWidth < 675){
            link.style.display = 'none';
        }
    }
}

