'use strict'

const menu=document.querySelector('.nav')
const barra=document.querySelector('.fa-bars')
const lista=document.querySelectorAll('.opciones')

barra.addEventListener('click',()=>{
    menu.classList.toggle('abrir')
})

lista.forEach(l =>{
    barra.addEventListener('click',()=>{
        l.classList.toggle('efecto')
    })
})