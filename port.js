 const toggleIcon=document.querySelector('.toggle');
 toggleIcon.addEventListener('click', ()=>{
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
 });