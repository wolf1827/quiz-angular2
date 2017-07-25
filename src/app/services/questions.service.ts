import { Injectable } from '@angular/core';
@Injectable()
export class QuestionsService {
  questions=[];
  
  constructor() { 
    this.initQuestions();
    console.log("Software Create By Eduardo Cermeño wolf1827@gmail.com");
  }
  public initQuestions(){
    let questionsArray=[];
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
    questionsArray.push({
        pregunta:'queen of meereen',
        respuestas:[
            'daenerys targaryen',
            'davos seaworth',
            'jon snow',
            'arya stark'
        ],
        respuestaCorrecta:0
    });
    questionsArray.push({
        pregunta:'What are the three names of Daenerys dragons?',
        respuestas:[
            'Viserion, Rhaegal, Smaug',
            'Mushu, Viserion,Drogon',
            'Rhaegal, Drogos, Smaug',
            'Drogon, Viserion, Rhaegal'
        ],
        respuestaCorrecta:3
    });
    questionsArray.push({
        pregunta:'1+1',
        respuestas:[
            '1',
            '2',
            '0',
            '3'
        ],
        respuestaCorrecta:1
    });
    questionsArray.push({
        pregunta:'the first cryptocurrency?',
        respuestas:[
            'Bitcoin',
            'Dogecoin',
            'Zcash',
            'Nerdcoin'
        ],
        respuestaCorrecta:0
    });
    questionsArray.push({
        pregunta:'sons of tywin lannister?',
        respuestas:[
            'Cersei, Jaime, and Tyrion',
            'Joffrey, Myrcella, and Tommen',
            'Arya, Jhon, Tommen',
            'Jaime, Jhon, Myrcella'
        ],
        respuestaCorrecta:0
    });
    questionsArray.push({
        pregunta:'author of game of throne',
        respuestas:[
            'J. R. R. Tolkien',
            'George R. R. Martin',
            'Edgar Allan Poe',
            'Eduardo Cermeño'
        ],
        respuestaCorrecta:1
    });
    questionsArray.push({
        pregunta:'a Lion is a symbol of the family?',
        respuestas:[
            'Tully',
            'Stark',
            'Lannister',
            'greyjoy'
        ],
        respuestaCorrecta:2
    });
    questionsArray.push({
        pregunta:'What is RGBA',
        respuestas:[
            'red, grey, and blue',
            'red, green, and black',
            'red, green, and blue',
            'red, grey, and black'
        ],
        respuestaCorrecta:2
    });
    questionsArray.push({
        pregunta:'first book of song of ice and fire?',
        respuestas:[
            'Clash of Kings',
            'Feast for Crows',
            'Dance with Dragons',
            'Game of throne'
        ],
        respuestaCorrecta:3
    });
    questionsArray.push({
        pregunta:'5 * 4',
        respuestas:[
            '25',
            '20',
            '9',
            '1'
        ],
        respuestaCorrecta:1
    });
    questionsArray.push({
        pregunta:'second book of song of ice and fire?',
        respuestas:[
            'Clash of Kings',
            'Feast for Crows',
            'Dance with Dragons',
            'Game of throne'
        ],
        respuestaCorrecta:0
    });
    questionsArray.push({
        pregunta:'What does CSS mean?',
        respuestas:[
            'Code Style Sheets',
            'Cascading Stylesheets',
            'Case Solid Sensitive ',
            'Cascading Style Solid'
        ],
        respuestaCorrecta:1
    });
    questionsArray.push({
        pregunta:'the king of the north is?',
        respuestas:[
            'Lyanna Mormont',
            'Jaime Lannister',
            'Jhon Snow',
            'Arya Stark'
        ],
        respuestaCorrecta:2
    });
    questionsArray.push({
        pregunta:'What is the symbol of the stark family?',
        respuestas:[
            'a Wolf',
            'a Dragon',
            'a kraken',
            'a Lion'
        ],
        respuestaCorrecta:0
    });
    questionsArray.push({
        pregunta:'a kraken is a symbol of the family?',
        respuestas:[
            'Tully',
            'Stark',
            'Lannister',
            'greyjoy'
        ],
        respuestaCorrecta:3
    });
    questionsArray.push({
        pregunta:'a Fish is a symbol of the family?',
        respuestas:[
            'Tully',
            'Stark',
            'Lannister',
            'greyjoy'
        ],
        respuestaCorrecta:0
    });
    questionsArray.push({
        pregunta:'What is the real last name of joffrey?',
        respuestas:[
            'Baratheon',
            'Lannister',
            'Greyjoy',
            'Stark'
        ],
        respuestaCorrecta:1
    });
    for(let x in questionsArray){
      this.setQuestion(questionsArray[x].pregunta,questionsArray[x].respuestas[0],questionsArray[x].respuestas[1],questionsArray[x].respuestas[2],questionsArray[x].respuestas[3],questionsArray[x].respuestaCorrecta+1);
    }
    
  }
  public setQuestion(question,label1,label2,label3,label4,answer){
    this.questions.push({
      question:question,
      btn1:{
        id:1,
        label:label1,
        answer:false
      },
      btn2:{
        id:2,
        label:label2,
        answer:false
      },
      btn3:{
        id:3,
        label:label3,
        answer:false
      },
      btn4:{
        id:4,
        label:label4,
        answer:false
      },
      answer:answer
    });
  }
  public getQuestions(){
    return this.questions;
  }



}
