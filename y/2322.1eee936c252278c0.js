"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2322],{2322:(U,g,a)=>{a.r(g),a.d(g,{SignupPageModule:()=>b});var p=a(6895),i=a(433),l=a(6948),u=a(2435),d=a(5861),o=a(4650),m=a(410);function f(n,r){1&n&&(o.TgZ(0,"ion-text",23),o._uU(1,"Se requiere el nombre completo."),o.qZA())}function _(n,r){if(1&n&&(o.TgZ(0,"div",21),o.YNc(1,f,2,0,"ion-text",22),o.qZA()),2&n){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.errorControl.fullname.errors?null:e.errorControl.fullname.errors.required)}}function x(n,r){1&n&&(o.TgZ(0,"ion-text",23),o._uU(1,"El correo electr\xf3nico es requerido."),o.qZA())}function v(n,r){1&n&&(o.TgZ(0,"ion-text",23),o._uU(1,"Por favor proporcione un correo electr\xf3nico v\xe1lido."),o.qZA())}function Z(n,r){if(1&n&&(o.TgZ(0,"div",21),o.YNc(1,x,2,0,"ion-text",22),o.YNc(2,v,2,0,"ion-text",22),o.qZA()),2&n){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.errorControl.email.errors?null:e.errorControl.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.errorControl.email.errors?null:e.errorControl.email.errors.pattern)}}function C(n,r){1&n&&(o.TgZ(0,"ion-text",23),o._uU(1,"se requiere contrase\xf1a."),o.qZA())}function P(n,r){1&n&&(o.TgZ(0,"ion-text",23),o._uU(1,"Tener una longitud m\xednima de 8 caracteres. Incluir al menos un car\xe1cter especial. Contener al menos una letra may\xfascula. Poseer al menos un n\xfamero. "),o.qZA())}function h(n,r){if(1&n&&(o.TgZ(0,"div",21),o.YNc(1,C,2,0,"ion-text",22),o.YNc(2,P,2,0,"ion-text",22),o.qZA()),2&n){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.errorControl.password.errors?null:e.errorControl.password.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.errorControl.password.errors?null:e.errorControl.password.errors.pattern)}}function F(n,r){1&n&&(o.TgZ(0,"ion-text",23),o._uU(1,"El contacto es requerido.."),o.qZA())}function T(n,r){1&n&&(o.TgZ(0,"ion-text",23),o._uU(1,"El contacto debe contener s\xf3lo n\xfameros.."),o.qZA())}function I(n,r){1&n&&(o.TgZ(0,"ion-text",23),o._uU(1,"El contacto debe ser menos de 10 d\xedgitos.."),o.qZA())}function S(n,r){if(1&n&&(o.TgZ(0,"div",21),o.YNc(1,F,2,0,"ion-text",22),o.YNc(2,T,2,0,"ion-text",22),o.YNc(3,I,2,0,"ion-text",22),o.qZA()),2&n){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.errorControl.contact.errors?null:e.errorControl.contact.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.errorControl.contact.errors?null:e.errorControl.contact.errors.pattern),o.xp6(1),o.Q6J("ngIf",null==e.errorControl.contact.errors?null:e.errorControl.contact.errors.minlength)}}function A(n,r){if(1&n){const e=o.EpF();o.TgZ(0,"ion-fab",24)(1,"ion-fab-button",25),o.NdJ("click",function(){o.CHM(e);const c=o.oxw();return o.KtG(c.signUP())}),o._UZ(2,"ion-icon",26),o.qZA()()}}const q=function(){return["/login"]},M=[{path:"",component:(()=>{class n{constructor(e,t,c,s,J){this.toastController=e,this.loadingController=t,this.authService=c,this.router=s,this.formBuilder=J}ngOnInit(){this.ionicForm=this.formBuilder.group({fullname:["",[i.kI.required]],contact:["",[i.kI.required,i.kI.pattern("^[0-9]*$"),i.kI.minLength(10)]],email:["",[i.kI.required,i.kI.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],password:["",[i.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"),i.kI.required]]})}get errorControl(){return this.ionicForm.controls}signUP(){var e=this;return(0,d.Z)(function*(){const t=yield e.loadingController.create();if(yield t.present(),!e.ionicForm.valid)return console.log("Please provide all the required values!");(yield e.authService.registerUser(e.ionicForm.value.email,e.ionicForm.value.password,e.ionicForm.value.fullname).catch(s=>{e.presentToast(s),console.log(s),t.dismiss()}))&&(t.dismiss(),e.router.navigate(["/home"]))})()}presentToast(e){var t=this;return(0,d.Z)(function*(){console.log(e),yield(yield t.toastController.create({message:e,duration:1500,position:"top"})).present()})()}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(l.yF),o.Y36(l.HT),o.Y36(m.u),o.Y36(u.F0),o.Y36(i.qu))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-signup"]],decls:34,vars:9,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"header"],["size","large",1,"title"],[1,"subtitle"],["novalidate","",3,"formGroup"],[1,"ion-padding"],["formControlName","fullname","placeholder","Nombre completo",1,"input"],["slot","end","name","person-outline"],["style","padding-top: -26px;padding-bottom: 16px;",4,"ngIf"],["formControlName","email","placeholder","Correo electr\xf3nico",1,"input"],["slot","end","name","mail-outline"],["type","password","formControlName","password","placeholder","Contrase\xf1a",1,"input"],["slot","end","name","lock-closed-outline"],["type","numeric","formControlName","contact","placeholder","Tel\xe9fono",1,"input"],["slot","end","name","call-outline"],[1,"loginLink"],[1,"p"],[2,"color","#FFC33F",3,"routerLink"],["vertical","bottom","horizontal","end","style","margin-bottom: 30px;",4,"ngIf"],[2,"padding-top","-26px","padding-bottom","16px"],["class","errorInput","color","danger",4,"ngIf"],["color","danger",1,"errorInput"],["vertical","bottom","horizontal","end",2,"margin-bottom","30px"],[3,"click"],["name","chevron-forward"]],template:function(e,t){1&e&&(o.TgZ(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-title",2),o._uU(4,"Vamos a empezar"),o.qZA()()(),o.TgZ(5,"div",3)(6,"ion-title",4),o._uU(7,"Empecemos"),o.qZA(),o.TgZ(8,"p",5),o._uU(9,"Crea una cuenta"),o.qZA()(),o.TgZ(10,"form",6)(11,"div",7)(12,"ion-item"),o._UZ(13,"ion-input",8)(14,"ion-icon",9),o.qZA(),o.YNc(15,_,2,1,"div",10),o.TgZ(16,"ion-item"),o._UZ(17,"ion-input",11)(18,"ion-icon",12),o.qZA(),o.YNc(19,Z,3,2,"div",10),o.TgZ(20,"ion-item"),o._UZ(21,"ion-input",13)(22,"ion-icon",14),o.qZA(),o.YNc(23,h,3,2,"div",10),o.TgZ(24,"ion-item"),o._UZ(25,"ion-input",15)(26,"ion-icon",16),o.qZA(),o.YNc(27,S,4,3,"div",10),o.TgZ(28,"div",17)(29,"p",18),o._uU(30,"Ya eres usuario? "),o.TgZ(31,"a",19),o._uU(32,"Inicia sesi\xf3n"),o.qZA()()()(),o.YNc(33,A,3,0,"ion-fab",20),o.qZA()()),2&e&&(o.Q6J("fullscreen",!0),o.xp6(10),o.Q6J("formGroup",t.ionicForm),o.xp6(5),o.Q6J("ngIf",(null==t.ionicForm.controls?null:t.ionicForm.controls.fullname.touched)&&(null==t.ionicForm.controls?null:t.ionicForm.controls.fullname.invalid)),o.xp6(4),o.Q6J("ngIf",(null==t.ionicForm.controls?null:t.ionicForm.controls.email.touched)&&(null==t.ionicForm.controls?null:t.ionicForm.controls.email.invalid)),o.xp6(4),o.Q6J("ngIf",(null==t.ionicForm.controls?null:t.ionicForm.controls.password.touched)&&(null==t.ionicForm.controls?null:t.ionicForm.controls.password.invalid)),o.xp6(4),o.Q6J("ngIf",(null==t.ionicForm.controls?null:t.ionicForm.controls.contact.touched)&&(null==t.ionicForm.controls?null:t.ionicForm.controls.contact.invalid)),o.xp6(4),o.Q6J("routerLink",o.DdM(8,q)),o.xp6(2),o.Q6J("ngIf",t.ionicForm.valid))},dependencies:[p.O5,i._Y,i.JJ,i.JL,l.W2,l.IJ,l.W4,l.Gu,l.gu,l.pK,l.Ie,l.yW,l.wd,l.sr,l.j9,l.Fo,u.rH,i.sg,i.u],styles:[".header[_ngcontent-%COMP%]{margin-top:100px;margin-bottom:80px;text-align:center}.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:gray;font-size:.9rem}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:2rem}.input[_ngcontent-%COMP%]{font-weight:300}ion-item[_ngcontent-%COMP%]{--background: #f1f1f1;border-radius:10px;margin-bottom:16px}.loginLink[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:auto;left:0;right:0;bottom:0;width:80%;top:20}.loginLink[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%]{font-size:.9em}.loginLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}.errorInput[_ngcontent-%COMP%]{color:red;font-weight:300;font-size:small;padding-top:-16px;display:flex}.errorInput[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: red !important}.invalid[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: red !important}"]}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.Bz.forChild(M),u.Bz]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[p.ez,i.u5,l.Pc,y,i.UX]}),n})()}}]);