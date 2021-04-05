import { Component, OnInit, Input } from '@angular/core';
import { PosService } from '../../../../services/pos.service';
@Component({
  selector: 'app-list-temp',
  templateUrl: './list-temp.component.html',
  styleUrls: ['./list-temp.component.css']
})
export class ListTempComponent implements OnInit {
  @Input() item;
  constructor(private posService: PosService) { }

  ngOnInit(): void {

  }
  closeInvoice(){
    console.log(this.item)
    return this.posService.deleteInvoice(this.item._id)
    .subscribe(data =>{ 
      alert(data + 'invoice closed successfully')
      
    })

  }
}
