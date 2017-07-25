import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './../services/questions.service';
import { ResultComponent } from './../result/result.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers:[QuestionsService,ResultComponent]
})
export class QuizComponent implements OnInit {
  questions=[];
  question={};
  disabledPrev=true;
  disabledNext=false;
  init=0;
  finish;
  viewQuiz:boolean=true;
  viewResult:boolean=false;
  viewReview:boolean=false;
  disableReview:boolean=true;
  constructor(public questionsService:QuestionsService, public ResultComponent:ResultComponent) { }
  ngOnInit() {//inicializa el proyecto
    this.questions=this.questionsService.getQuestions();
    this.init=0;
    this.finish=this.questions.length;
    this.setQuestion();
  }
  private changeQuestion(type){//mueve al usuario entre preguntas 
    switch(type){
      case('first'):{
        this.init=0;
        break;
      }
      case('prev'):{
        if(this.init > 0){
          this.init--;
        }
        break;
      }
      case('next'):{
        if(this.init != this.finish-1){
          this.init++;
        }
        break;
      }
      case('last'):{
        this.init=this.finish-1;
        break;
      }
      default:{
        this.changeView('viewQuiz');
        for(let x in this.questions){
          for(let y=1; y <= 4;y++){
            this.questions[x]['btn'+y].answer=false;
          }     
        }
        this.init=0;
        break;
      }      
    }
    this.setQuestion();
    this.checkedDisabledBtn();    
  }
  public setQuestion(){// muestra la pregunta seleccionada
    this.question=this.questions[this.init];
  }
  public checkedDisabledBtn(){//valida si se debe activar o desactivar los botones de navegacion
    if(this.init <= 0){
      this.disabledPrev=true;
    }else{
      this.disabledPrev=false;
    }
    if(this.init >= this.finish-1){
      this.disabledNext=true;
    }else{
      this.disabledNext=false;
    }
  }
  public setAnswer(answerId){//marca la opcion seleccionada por el usuario
    for(let x=1; x <= 4;x++){
      if(this.questions[this.init]['btn'+x].id==answerId){
        this.questions[this.init]['btn'+x].answer=!this.questions[this.init]['btn'+x].answer;
      }else{
        this.questions[this.init]['btn'+x].answer=false;
      }
    }
  }
  public changeView(view){//cambia entre la vista de cuestionario resultados y review
    if(view == 'viewQuiz'){
      this.disableReview=true;
      this.viewResult=false;
      this.viewReview=false;
      this.viewQuiz=true;
    }else if(view == 'viewResult'){
      this.disableReview=false;
      this.viewResult=true;
      this.viewReview=false;
      this.viewQuiz=false;
    }else if(view == 'viewReview'){
      this.viewResult=false;
      this.viewReview=true;
      this.viewQuiz=false;
    }
  }

}
