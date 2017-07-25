import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() questions:any=[];
  constructor() { }

  ngOnInit() {
  }
  evaluateQuestion(question){
    for(let x=1; x <= 4;x++){
      if(question['btn'+x].answer){
        if(question['btn'+x].id==question.answer){
          return 'Answered';
        }else{
          break;
        }
      }
    }
    return 'Not Answered';
  }
}
