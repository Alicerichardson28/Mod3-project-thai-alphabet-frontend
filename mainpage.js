const linkImage = document.querySelector('.imageBackground')

// const imageclick = document.createElement('image')
linkImage.addEventListener('click', ()=> {
    console.log(event.target)  
    window.location.href = "http://localhost:3001/";
})