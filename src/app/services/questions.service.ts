import { Injectable } from '@angular/core';

@Injectable()
export class QuestionsService {
  questions=[];
  constructor() { 
    this.initQuestions();
    console.log("Software Create By Eduardo Cermeño wolf1827@gmail.com");
  }
  public initQuestions(){
    this.setQuestion('hola mundo','dos','tres','cuatro','cinco',1);
    this.setQuestion('chao mundo','dos','tres','cuatro','cinco',1);
    this.setQuestion('hello mundo','dos','tres','cuatro','cinco',1);
    this.setQuestion('hello world','dos','tres','cuatro','cinco',1);
    console.log(this.questions);
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
