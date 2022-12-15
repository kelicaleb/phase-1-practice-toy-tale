let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetch('http://localhost:3000/toys').then(res => res.json()).then(data => {
    for (let element of data){
     createToy(element)
    }
  })
  let form = document.querySelector('.add-toy-form')
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let toyName = document.getElementById('input-name')
    let toyImage = document.getElementById('input-image')
    let newToy = {
      name: toyName.value,
      image: toyImage.value,
      likes: 0
    }
    console.log(newToy)
    createToy(newToy)
  })
  function createToy(element){
    console.log(element)
    let div = document.createElement('div')
    div.classList.add('card')
    let img = document.createElement('img')
    img.classList.add('toy-avatar')
    img.src = element.image
    div.appendChild(img)
    let name = document.createElement('h2')
    name.textContent = element.name
    div.appendChild(name)
    let p = document.createElement('p')
    p.textContent = element.likes
    div.appendChild(p)
    let likeButton = document.createElement('button')
    likeButton.classList.add('like-btn')
    likeButton.id = element.id
    likeButton.addEventListener('click',()=>{
      console.log('asd')
      p.textContent = parseInt(p.textContent) + 1
    })
    likeButton.textContent = 'Like'
    div.appendChild(likeButton)
    document.getElementById('toy-collection').appendChild(div)
  }

});