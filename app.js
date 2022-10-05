const taskTitle=document.getElementById('task-title')

taskTitle.style.background='gray'
taskTitle.style.color='#fff'
taskTitle.style.padding='15px'

taskTitle.textContent='My tasks'
taskTitle.innerText='Fav tasks'
taskTitle.innerHTML='<span style=color:red>My Tasks</span>'

let li=document.querySelector('li')
li=document.querySelector('li:last-child')
li=document.querySelectorAll('li:nth-child(odd)')

// for (let i=0; i<2; i++){
//     document.querySelectorAll('li:nth-child(odd)')[i].style.background='#ddd'
// }

li.forEach((li)=>{li.style.background='#ddd'})

let ul=document.querySelector("ul").parentElement

console.log(ul)