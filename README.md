# Diagrama de materias de la tecnicatura en informatica

Este es un diagrama de las materias de la 'Tecnicatura universitaria en informatica' de la UNAHUR hecho principalmente con la libreria de BasicPrimitives.

## Librerias usadas

- BasicPrimitives
- Create-react-app
- Bootstrap-React
- Bootstrap-CDN
- Bootstrap-Icons
- react-circular-progressbar
- Material-UI
- Styled-components

## Puedo tener una copia del proyecto?

Claro que si, podes hacer un fork presionando en el boton que dice Fork en el github del proyecto, esto lo que hace es crearte una copia del proyecto en tu repo.

## Como descargo el proyecto en mi PC?

- Abrir la consola de windows (win+r -> "cmd" -> Enter)
- pararse en la carpeta que se desee descargar el proyecto.
- poner en la consola "git clone https://github.com/albertoleandrosanchez/diagrama.git" (esta url reemplazarla por la que se te creara en tu repo sino no vas a poder pushear)

## Como correrlo teniendolo ya descargado en mi maquina?

- abrir la terminal, ya sea de vsCode o la que sea.
- Pararse dentro de la carpeta del proyecto llamada "diagrama"
- Correr el comando 'npm i' para instalar todos los modulos.
- Correr el comando 'npm start' para levantar el proyecto en localhost:3000

## Como puedo personalizar las materias del diagrama?

Para personalizarlo podes ir al archivo config.js, que se encuentra dentro de la carpeta helpers,
en la constante materias podes observar objetos, podes retocar todo siempre y cuando sigas esta estructura:
{  
 id: 10, --> Number - id de la materia
parents: [13,15,16,23,24], --> Array - Los Id de las materias que se habilitan al hacer esta materia.
children: [6], --> Array - Los ID de las correlativas a esta materia
hoursPerWeek: 6, --> Number - horas de las que se cursa por semana
totalHours: 96, --> Number - horas totales de la materia
title: "Programación con Objetos II", --> String - nombre de la materia
description: "Programación con Objetos II", --> String - descripcion de la materia
areaId: area.AyL.id, --> Number - Id del area al que pertenece la materia
itemTitleColor: area.AyL.color, String/hexa --> color en hexa del area.
studyGroup: area.AyL.name, --> String - nombre del Area
studyArea: area.AyL.acronim, --> String - acronimo del Area
image: difficulty.easy, --> Image - ubicacion de la imagen
url:'https://informaticaunahur.github.io/objetos-2/', --> URL - url de donde se puede encontrar informacion de la materia
cuatrimestre:'Tercer', --> String(podria ser numero) cuatrimestre perteneciente de la materia
templateName: "materiaTemplate", --> ClassName/String - nombre de la clase del template con el que se visualizara en el diagrama.
}
