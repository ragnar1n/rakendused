
const form=document.querySelector('#add-task')

form.addEventListener('submit', addTask)

function addTask(event){
    // get form input value
    const taskInput=document.querySelector('#task')

    //create li with value and X link
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className='collection-item'
    const x=document.createElement('a')
    x.appendChild(document.createTextNode('x'))
    x.setAttribute('href','#')
    x.className='secondary-content'

    li.appendChild(x)

    const ul=document.querySelector('ul')
    ul.appendChild(li)



    // console.log(li)
    //delete input value from form input field
    taskInput.value=''
    event.preventDefault()
}