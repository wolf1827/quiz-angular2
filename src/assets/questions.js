questionsArray=[];
questionsArray.push({
    pregunta:'¿Cuál es la sintaxis correcta a utilizar para dejar 10 píxels entre palabras?',
    respuestas:[
        'word-spacing: 10px;',
        'word-spacing: 10px',
        'wordSpacing: 10px;',
        'word_spacing: 10px;'
    ],
    respuestaCorrecta:0
});
questionsArray.push({
    pregunta:'¿Cómo mostraría los enlaces sin que estén subrayados?',
    respuestas:[
        'text-decoration:  hidden;',
        'text-decoration:  underline none',
        'text-decoration:  none;',
        'text-decoration:  0px;'
    ],
    respuestaCorrecta:2
});
questionsArray.push({
    pregunta:'¿Cuál es el resultado de: "1"+2+4?',
    respuestas:[
        'error;',
        '7',
        '16;',
        '124;'
    ],
    respuestaCorrecta:3
});
console.log(questionsArray);
export class QuestionsArray {
    
}