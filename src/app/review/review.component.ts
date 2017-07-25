import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() questions:any=[];
  constructor() { }

  ngOnInit() {
  }
  evaluateQuestion(question){
    for(let x=1; x <= 4;x++){
      if(question['btn'+x].answer){
        if(question['btn'+x].id==question.answer){
          return true;
        }else{
          break;
        }
      }
    }
    return false;
  }

}
