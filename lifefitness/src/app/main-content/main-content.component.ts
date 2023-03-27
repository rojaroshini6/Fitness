import { Component, OnInit } from '@angular/core';
import {ContainerService} from '../container.service';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(public containerService: ContainerService) { }

  dataList: any; 
  ngOnInit(): void {

    this.containerService.getData().subscribe( data => {
      this.dataList = data;
    });
    
  }


}
