import { Component,TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TERAVISION - WEB';

  isCollapsed: boolean = true;

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService ) {

  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }
}
