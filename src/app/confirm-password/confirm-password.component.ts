import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent {
  cshowPwd:any;
  nshowPwd:any;
  confirmshowPwd:any;
  cpasswordToggle()
  {
   this.cshowPwd=!this.cshowPwd;
  }
  
  npasswordToggle()
  {
   this.nshowPwd=!this.nshowPwd;
  }
  
  conpasswordToggle()
  {
   this.confirmshowPwd=!this.confirmshowPwd;
  }
}
