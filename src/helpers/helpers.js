import easyIMG from '../assets/difficultyImgs/easy.JPG'
import hardIMG from '../assets/difficultyImgs/hard.JPG'
import difficultIMG from '../assets/difficultyImgs/difficult.JPG'
import insaneIMG from '../assets/difficultyImgs/insane.JPG'
import normalIMG from '../assets/difficultyImgs/normal.JPG'

export const area = {
    PPS:{
        color:'#ffbdd9',
        name:'Práctica Profesional Supervisada',
        totalAreaHours:96,
        acronim:'PPS'
    },
    MC:{
        color:'#ffbdd9',
        name:'Materias Complementaria',
        totalAreaHours:128,
        acronim:'MC'
    },
    Gral:{
        color:'#ffbdd9',
        name:'General',
        totalAreaHours:128,
        acronim:'Gral'
    },
    CB:{
        color:'#9df07a',
        name:'Ciencias Básicas',
        totalAreaHours:192,
        acronim:'CB'
    },
    TC:{
        color:'#f0d67a',
        name:'Teoría de la Computación',
        totalAreaHours:128,
        acronim:'TC'
    },
    AyL:{
        color:'#a97af0',
        name:'Algoritmos y Lenguajes',
        totalAreaHours:480,
        acronim:'Ayl'
    },
    ASOyR:{
        color:'#7ac1f0',
        name:'Arquitectura, Sistemas Operativos y Redes',
        totalAreaHours:352,
        acronim:'ASOyR'
    },
    ISBDySI:{
        color:'#f07a7a',
        name:'Ingeniería de Software, Base de Datos y Sistemas de Informació',
        totalAreaHours:480,
        acronim:'ISBDySI'
        },
}

export const difficulty = {
    easy: easyIMG,
    normal: normalIMG,
    difficult: difficultIMG,
    hard: hardIMG,
    insane: insaneIMG,
    difficult: difficultIMG,

}

export const truncate = (input, limit) => input.length > limit ? `${input.substring(0, limit)}...` : input;

//export const 


