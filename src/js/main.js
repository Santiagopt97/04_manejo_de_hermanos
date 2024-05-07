const main = document.querySelector('main')
const footer = document.querySelector('footer')
const header = document.querySelector('header')    
const bntExample = createBtnImput()

/* //before insert the element before the parameter
main.before(bntExample)

//after insert the element after the parameter
main.after(bntExample) 

//prepend the element after the first element
main.prepend(bntExample)

//append the element after the last element
main.append(bntExample)

//erase all the content that the container has and put the new element
main.replaceChildren(bntExample)

//replace the container with the new element
main.replaceWith(bntExample)

//remove all the section 
main.remove()*/

function createBtnImput(){
    const btn = document.createElement('button')
    btn.classList.add('btn',"btn-info")
    btn.textContent = "Point"
    return btn
}


console.log(main.children)

const btnDark = document.querySelector(".btn-dark")
console.log(btnDark.parentElement)

console.log(main.firstElementChild)

// .previousElementSibling -> returns the previous sibling
// console.log(main.previousElementSibling)

//.nextElementSibling -> returns the next sibling
// console.log(main.nextElementSibling)