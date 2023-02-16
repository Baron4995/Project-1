import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {LoadJsService} from "./../load-js.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  constructor(_load: LoadJsService){
    _load.load(["no-past-dates-schedule"]);
  }

  cStatus = [
    {title: "--Select--"},
    {title: "Negotiations"},
    {title: "blueprints"},
    {title: "Building"},
    {title: "Done"}
  ]

  scheduleForm = new FormGroup(
  {
    cid: new FormControl(0),
    name: new FormControl(""),
    project: new FormControl(""),
    status: new FormControl(this.cStatus[0]),
    phone: new FormControl(""),
    state: new FormControl("")
  }
  );

  scheduleMeeting(){
    
  }
}
