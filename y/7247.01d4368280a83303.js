"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7247],{7247:(C,g,i)=>{i.r(g),i.d(g,{LandingPageModule:()=>P});var l=i(6895),d=i(433),o=i(6948),s=i(2435),m=i(5861),t=i(4650),p=i(3858);function f(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"ion-col",12)(1,"ion-card",13),t.NdJ("click",function(){const c=t.CHM(e),u=c.$implicit,v=c.index,M=t.oxw();return t.KtG(M.showActionSheet(u,v))}),t.TgZ(2,"ion-card-content"),t._UZ(3,"ion-img",14),t.TgZ(4,"ion-card-title"),t._uU(5),t.qZA()()()()}if(2&n){const e=a.$implicit;t.xp6(3),t.Q6J("src",e.fotos[0]),t.xp6(2),t.Oqu(e.nombre)}}const h=function(){return["/login"]},x=[{path:"",component:(()=>{class n{constructor(e,r,c){this.firebaseService=e,this.actionSheetController=r,this.router=c,this.huecas=[]}ngOnInit(){this.firebaseService.getHuecas().subscribe(e=>{this.huecas=e})}showActionSheet(e,r){var c=this;return(0,m.Z)(function*(){yield(yield c.actionSheetController.create({header:e.nombre,buttons:[{text:"Ver Detalle",icon:"information",handler:()=>{c.verDetalleHueca(e.id)}},{text:"Cancelar",icon:"close",role:"cancel"}]})).present()})()}verDetalleHueca(e){this.router.navigateByUrl(`/detalle-hueca/${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.O),t.Y36(o.BX),t.Y36(s.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-landing"]],decls:17,vars:4,consts:[[3,"fullscreen"],[1,"container"],["src","assets/landing2.webp",1,"top-image"],[1,"main-title"],["src","assets/landing1.jpg",1,"bottom-image"],[1,"title-row"],["size","12"],[1,"title-header"],["size","6",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end",2,"margin-bottom","30px"],[1,"custom-fab-button",3,"routerLink"],[1,"button-text"],["size","6"],[3,"click"],[1,"first-image",3,"src"]],template:function(e,r){1&e&&(t.TgZ(0,"ion-content",0)(1,"div",1),t._UZ(2,"ion-img",2),t.TgZ(3,"h1",3),t._uU(4,'Descubre las mejores "Huecas" de Comida'),t.qZA(),t._UZ(5,"ion-img",4),t.qZA(),t.TgZ(6,"ion-grid")(7,"ion-row",5)(8,"ion-col",6)(9,"h1",7),t._uU(10,"Echale un ojo a las siguientes huecas \u{1f60b}"),t.qZA()()(),t.TgZ(11,"ion-row"),t.YNc(12,f,6,2,"ion-col",8),t.qZA()()(),t.TgZ(13,"ion-fab",9)(14,"ion-fab-button",10)(15,"span",11),t._uU(16,"Empieza ahora!"),t.qZA()()()),2&e&&(t.Q6J("fullscreen",!0),t.xp6(12),t.Q6J("ngForOf",r.huecas),t.xp6(2),t.Q6J("routerLink",t.DdM(3,h)))},dependencies:[l.sg,o.PM,o.FN,o.Dq,o.wI,o.W2,o.IJ,o.W4,o.jY,o.Xz,o.Nd,o.YI,s.rH],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{text-align:center;position:relative;margin-top:15%}.top-image[_ngcontent-%COMP%], .bottom-image[_ngcontent-%COMP%]{max-width:100%}.main-title[_ngcontent-%COMP%]{font-size:36px;font-weight:700;margin-top:20px}.custom-fab-button[_ngcontent-%COMP%]{--background: #007bff;--background-activated: #0056b3;--border-radius: 25px;--box-shadow: 0 4px 6px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .08);width:250px;height:50px;margin:20px auto;display:flex;align-items:center;justify-content:center}.custom-fab-button[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%]{color:#fff;font-size:16px;text-transform:uppercase}.title-row[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.title-header[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;color:#333}']}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(x),s.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,d.u5,o.Pc,b]}),n})()}}]);