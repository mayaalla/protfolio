let bar = document.getElementById('bar')
let link = document.getElementById('link')
li = document.querySelectorAll('li')
let img = document.getElementById('img')
let about = document.getElementById('about')
let section = document.getElementById('section')
let contact = document.getElementById('contact')
let service = document.getElementById('service')
let skills = document.getElementById('skills')

bar.onclick = function(){
    link.style.display = 'flex'
    about.style.display = 'none'
    section.style.display = 'none'
    contact.style.display = 'none'
    service.style.display = 'none'
    skills.style.display = 'none'

}

// if(window.innerWidth < 992){
//     about.style.paddingTop = '180px'
// }



for(let i = 0; i < li.length; i++){
    li[i].onclick = function(){
        if(window.innerWidth < 675){
            link.style.display = 'none';
            about.style.display = 'block';
            section.style.display = 'block';
            contact.style.display = 'block';
            service.style.display = 'block';
            skills.style.display = 'block';
            
        }
    }
}
