import { Component, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-right-image',
    templateUrl: './right-image.component.html',
    styleUrls: ['./right-image.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class RightImageComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() shortDetails!: string;
  @Input() fullDetails!: string;
  constructor( private modalService: NgbModal) {}



  closeResult = '';
  open(content: any) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then(
    (result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult =
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
