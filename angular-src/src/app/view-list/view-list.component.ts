
import { Component, OnInit } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  private lists: List[];
  private newList: List;
  submitted = false;

  onSubmit() { this.submitted = true; }

  //get diagnostic() { return JSON.stringify(this.newList); }

  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.loadLists();
    this.newList = {
      title:'',
      category:'high',
      description:'',
      _id:''
    }


  }


  public loadLists(){
    this.listServ.getAllLists().subscribe(
      res => this.lists = res,
    )
  }
  public deleteList(list : List): void{
    this.lists = this.lists.filter(lists => lists !== list),

    this.listServ.deleteList(list._id).subscribe();

  }
  public add(list:List):void {
    if (!list) { return; }

    this.listServ.addList(list as List)
    .subscribe(
      (list) => {
        this.lists.push(list);
      },
      (err) => {console.log(err);}
)
}
public sort(){
  console.log("working on it...")
}



}
