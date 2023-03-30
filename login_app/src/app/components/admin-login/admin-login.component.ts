import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.sass']
})
export class AdminLoginComponent {
  model={username:"",password:""}
  getData:any
  constructor(private loginservice:LoginserviceService,private router : Router) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  

  }
  loginadmin(){
     //console.log("sff");
      let user=this.model.username;
      let password=this.model.password;
      if (user== null || password == null)
         alert("Please fill all the fields");
      else{
      this.loginservice.getDoctorData(user,password).subscribe((res: any) => {
          this.getData=res;
          if (this.getData==true){
               this.router.navigate(["/Security"]);
          }
          else{
             alert("Invalid username and password");
          }
      })

  }
}
}
