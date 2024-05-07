const main = document.querySelector('main');
const bntExample = createBtnImput()
main.before(bntExample) //before insert the element before the parameter 

function createBtnImput(){
    const btn = document.createElement('button')
    btn.classList.add('btn',"btn-info")
    btn.textContent = "Point"
    return btn
}
