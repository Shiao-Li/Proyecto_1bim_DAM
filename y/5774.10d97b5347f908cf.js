"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5774],{5774:(H,s,c)=>{c.r(s),c.d(s,{EditarHuecaPageModule:()=>_});var g=c(6895),l=c(433),i=c(6948),d=c(2435),e=c(4650),h=c(7618),p=c(3858);function m(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e._uU(3),e.qZA()(),e.TgZ(4,"ion-card-content")(5,"ion-item")(6,"ion-label",6),e._uU(7,"Nombre"),e.qZA(),e.TgZ(8,"ion-input",7),e.NdJ("ngModelChange",function(a){e.CHM(t);const u=e.oxw();return e.KtG(u.nombre=a)}),e.qZA()(),e.TgZ(9,"ion-item")(10,"ion-label",6),e._uU(11,"Descripci\xf3n"),e.qZA(),e.TgZ(12,"ion-textarea",8),e.NdJ("ngModelChange",function(a){e.CHM(t);const u=e.oxw();return e.KtG(u.descripcion=a)}),e.qZA()(),e.TgZ(13,"ion-item")(14,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.getCurrentCoordinates())}),e._uU(15," Obtener ubicaci\xf3n "),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-label"),e._uU(18,"Latitud"),e.qZA(),e.TgZ(19,"ion-badge",10),e._uU(20),e.qZA()(),e.TgZ(21,"ion-item")(22,"ion-label"),e._uU(23,"Longitud"),e.qZA(),e.TgZ(24,"ion-badge",10),e._uU(25),e.qZA()(),e.TgZ(26,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.updateHueca())}),e._uU(27,"Guardar cambios"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(3),e.hij("Editar detalles de ",t.hueca.nombre,""),e.xp6(5),e.Q6J("ngModel",t.nombre),e.xp6(4),e.Q6J("ngModel",t.descripcion),e.xp6(8),e.Oqu(t.latitude),e.xp6(5),e.Oqu(t.longitude)}}const b=[{path:"",component:(()=>{class n{constructor(t,o,a,u){this.route=t,this.router=o,this.geolocation=a,this.firebaseService=u}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");this.huecaId=t||"",this.firebaseService.getHuecaById(this.huecaId).subscribe(o=>{this.hueca=o,this.nombre=this.hueca.nombre,this.descripcion=this.hueca.descripcion,this.latitude=this.hueca.latitude,this.longitude=this.hueca.longitude})}getCurrentCoordinates(){this.geolocation.getCurrentPosition().then(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude}).catch(t=>{console.log("Error al obtener las coordenadas",t)})}updateHueca(){this.firebaseService.updateHueca(this.huecaId,this.nombre,this.descripcion,this.latitude,this.longitude).then(()=>{this.router.navigateByUrl(`/detalle-hueca/${this.huecaId}`)}).catch(t=>{console.error("Error al actualizar la hueca:",t)})}redirectToHome(){this.router.navigate(["/home"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.gz),e.Y36(d.F0),e.Y36(h.b),e.Y36(p.O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-editar-hueca"]],decls:9,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[4,"ngIf"],["vertical","bottom","horizontal","end",2,"margin-bottom","30px"],["type","submit",3,"click"],["name","chevron-back-outline"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["expand","block",3,"click"],["color","danger","slot","end"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Editar Hueca"),e.qZA()()(),e.TgZ(4,"ion-content",1),e.YNc(5,m,28,5,"ion-card",2),e.TgZ(6,"ion-fab",3)(7,"ion-fab-button",4),e.NdJ("click",function(){return o.redirectToHome()}),e._UZ(8,"ion-icon",5),e.qZA()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngIf",o.hueca))},dependencies:[g.O5,l.JJ,l.On,i.yp,i.YG,i.PM,i.FN,i.Zi,i.Dq,i.W2,i.IJ,i.W4,i.Gu,i.gu,i.pK,i.Ie,i.Q$,i.g2,i.wd,i.sr,i.j9]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(b),d.Bz]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,l.u5,i.Pc,f]}),n})()}}]);