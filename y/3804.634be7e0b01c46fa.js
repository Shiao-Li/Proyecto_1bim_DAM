"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3804],{3804:(oe,K,m)=>{m.r(K),m.d(K,{ion_popover:()=>Q});var L=m(5861),l=m(9376),N=m(5381),_=m(6655),F=m(1178),T=m(7781),$=m(7112),g=m(2854),u=m(9960),c=m(8127);m(4110);const R=(t,e,r)=>{const o=e.getBoundingClientRect(),n=o.height;let i=o.width;return"cover"===t&&r&&(i=r.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}},ne=(t,e,r)=>{let o=[];switch(e){case"hover":let n;o=[{eventName:"mouseenter",callback:(i=(0,L.Z)(function*(s){s.stopPropagation(),n&&clearTimeout(n),n=setTimeout(()=>{(0,_.r)(()=>{r.presentFromTrigger(s),n=void 0})},100)}),function(a){return i.apply(this,arguments)})},{eventName:"mouseleave",callback:i=>{n&&clearTimeout(n);const s=i.relatedTarget;s&&s.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;case"context-menu":o=[{eventName:"contextmenu",callback:i=>{i.preventDefault(),r.presentFromTrigger(i)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;default:o=[{eventName:"click",callback:i=>r.presentFromTrigger(i)},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}]}var i;return o.forEach(({eventName:n,callback:i})=>t.addEventListener(n,i)),t.setAttribute("data-ion-popover-trigger","true"),()=>{o.forEach(({eventName:n,callback:i})=>t.removeEventListener(n,i)),t.removeAttribute("data-ion-popover-trigger")}},Z=(t,e)=>e&&"ION-ITEM"===e.tagName?t.findIndex(r=>r===e):-1,U=t=>{const r=(0,_.g)(t).querySelector("button");r&&(0,_.r)(()=>r.focus())},pe=t=>{const e=function(){var r=(0,L.Z)(function*(o){var n;const i=document.activeElement;let s=[];const a=null===(n=o.target)||void 0===n?void 0:n.tagName;if("ION-POPOVER"===a||"ION-ITEM"===a){try{s=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch{}switch(o.key){case"ArrowLeft":(yield t.getParentPopover())&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":o.preventDefault();const f=((t,e)=>t[Z(t,e)+1])(s,i);void 0!==f&&U(f);break;case"ArrowUp":o.preventDefault();const w=((t,e)=>t[Z(t,e)-1])(s,i);void 0!==w&&U(w);break;case"Home":o.preventDefault();const h=s[0];void 0!==h&&U(h);break;case"End":o.preventDefault();const b=s[s.length-1];void 0!==b&&U(b);break;case"ArrowRight":case" ":case"Enter":if(i&&(t=>t.hasAttribute("data-ion-popover-trigger"))(i)){const v=new CustomEvent("ionPopoverActivateTrigger");i.dispatchEvent(v)}}}});return function(n){return r.apply(this,arguments)}}();return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},G=(t,e,r,o,n,i,s,a,p,f,w)=>{var h;let b={top:0,left:0,width:0,height:0};if("event"===i){if(!w)return p;b={top:w.clientY,left:w.clientX,width:1,height:1}}else{const C=f||(null===(h=null==w?void 0:w.detail)||void 0===h?void 0:h.ionShadowTarget)||(null==w?void 0:w.target);if(!C)return p;const D=C.getBoundingClientRect();b={top:D.top,left:D.left,width:D.width,height:D.height}}const v=le(s,b,e,r,o,n,t),y=fe(a,s,b,e,r),P=v.top+y.top,A=v.left+y.left,{arrowTop:x,arrowLeft:E}=de(s,o,n,P,A,e,r,t),{originX:k,originY:I}=ce(s,a,t);return{top:P,left:A,referenceCoordinates:b,arrowTop:x,arrowLeft:E,originX:k,originY:I}},ce=(t,e,r)=>{switch(t){case"top":return{originX:H(e),originY:"bottom"};case"bottom":return{originX:H(e),originY:"top"};case"left":return{originX:"right",originY:X(e)};case"right":return{originX:"left",originY:X(e)};case"start":return{originX:r?"left":"right",originY:X(e)};case"end":return{originX:r?"right":"left",originY:X(e)}}},H=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},X=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},de=(t,e,r,o,n,i,s,a)=>{const p={arrowTop:o+s/2-e/2,arrowLeft:n+i-e/2},f={arrowTop:o+s/2-e/2,arrowLeft:n-1.5*e};switch(t){case"top":return{arrowTop:o+s,arrowLeft:n+i/2-e/2};case"bottom":return{arrowTop:o-r,arrowLeft:n+i/2-e/2};case"left":return p;case"right":return f;case"start":return a?f:p;case"end":return a?p:f;default:return{arrowTop:0,arrowLeft:0}}},le=(t,e,r,o,n,i,s)=>{const a={top:e.top,left:e.left-r-n},p={top:e.top,left:e.left+e.width+n};switch(t){case"top":return{top:e.top-o-i,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+i,left:e.left};case"left":return a;case"start":return s?p:a;case"end":return s?a:p}},fe=(t,e,r,o,n)=>{switch(t){case"center":return ue(e,r,o,n);case"end":return he(e,r,o,n);default:return{top:0,left:0}}},he=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o-e.height),left:0};default:return{top:0,left:-(r-e.width)}}},ue=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o/2-e.height/2),left:0};default:return{top:0,left:-(r/2-e.width/2)}}},J=(t,e,r,o,n,i,s,a,p,f,w,h,b=0,v=0,y=0)=>{let P=b;const A=v;let k,x=r,E=e,I=f,O=w,d=!1,C=!1;const D=h?h.top+h.height:i/2-a/2,S=h?h.height:0;let W=!1;return x<o+p?(x=o,d=!0,I="left"):s+o+x+p>n&&(C=!0,x=n-s-o,I="right"),D+S+a>i&&("top"===t||"bottom"===t)&&(D-a>0?(E=Math.max(12,D-a-S-(y-1)),P=E+a,O="bottom",W=!0):k=o),{top:E,left:x,bottom:k,originX:I,originY:O,checkSafeAreaLeft:d,checkSafeAreaRight:C,arrowTop:P,arrowLeft:A,addPopoverBottomClass:W}},ge=(t,e)=>{var r;const{event:o,size:n,trigger:i,reference:s,side:a,align:p}=e,f=t.ownerDocument,w="rtl"===f.dir,h=f.defaultView.innerWidth,b=f.defaultView.innerHeight,v=(0,_.g)(t),y=v.querySelector(".popover-content"),P=v.querySelector(".popover-arrow"),A=i||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),{contentWidth:x,contentHeight:E}=R(n,y,A),{arrowWidth:k,arrowHeight:I}=(t=>{if(!t)return{arrowWidth:0,arrowHeight:0};const{width:e,height:r}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:r}})(P),d=G(w,x,E,k,I,s,a,p,{top:b/2-E/2,left:h/2-x/2,originX:w?"right":"left",originY:"top"},i,o),C="cover"===n?0:5,D="cover"===n?0:25,{originX:S,originY:W,top:j,left:M,bottom:Y,checkSafeAreaLeft:V,checkSafeAreaRight:De,arrowTop:Ae,arrowLeft:Ee,addPopoverBottomClass:Te}=J(a,d.top,d.left,C,h,b,x,E,D,d.originX,d.originY,d.referenceCoordinates,d.arrowTop,d.arrowLeft,I),Ie=(0,c.c)(),ee=(0,c.c)(),te=(0,c.c)();return ee.addElement(v.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),te.addElement(v.querySelector(".popover-arrow")).addElement(v.querySelector(".popover-content")).fromTo("opacity",.01,1),Ie.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===n&&t.style.setProperty("--width",`${x}px`),Te&&t.classList.add("popover-bottom"),void 0!==Y&&y.style.setProperty("bottom",`${Y}px`);let B=`${M}px`;V&&(B=`${M}px + var(--ion-safe-area-left, 0)`),De&&(B=`${M}px - var(--ion-safe-area-right, 0)`),y.style.setProperty("top",`calc(${j}px + var(--offset-y, 0))`),y.style.setProperty("left",`calc(${B} + var(--offset-x, 0))`),y.style.setProperty("transform-origin",`${W} ${S}`),null!==P&&(((t,e=!1,r,o)=>!(!r&&!o||"top"!==t&&"bottom"!==t&&e))(a,d.top!==j||d.left!==M,o,i)?(P.style.setProperty("top",`calc(${Ae}px + var(--offset-y, 0))`),P.style.setProperty("left",`calc(${Ee}px + var(--offset-x, 0))`)):P.style.setProperty("display","none"))}).addAnimation([ee,te])},be=t=>{const e=(0,_.g)(t),r=e.querySelector(".popover-content"),o=e.querySelector(".popover-arrow"),n=(0,c.c)(),i=(0,c.c)(),s=(0,c.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-arrow")).addElement(e.querySelector(".popover-content")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))}).duration(300).addAnimation([i,s])},we=(t,e)=>{var r;const{event:o,size:n,trigger:i,reference:s,side:a,align:p}=e,f=t.ownerDocument,w="rtl"===f.dir,h=f.defaultView.innerWidth,b=f.defaultView.innerHeight,v=(0,_.g)(t),y=v.querySelector(".popover-content"),P=i||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),{contentWidth:A,contentHeight:x}=R(n,y,P),k=G(w,A,x,0,0,s,a,p,{top:b/2-x/2,left:h/2-A/2,originX:w?"right":"left",originY:"top"},i,o),I="cover"===n?0:12,{originX:O,originY:d,top:C,left:D,bottom:S}=J(a,k.top,k.left,I,h,b,A,x,0,k.originX,k.originY,k.referenceCoordinates),W=(0,c.c)(),j=(0,c.c)(),M=(0,c.c)(),Y=(0,c.c)(),V=(0,c.c)();return j.addElement(v.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),M.addElement(v.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),Y.addElement(y).beforeStyles({top:`calc(${C}px + var(--offset-y, 0px))`,left:`calc(${D}px + var(--offset-x, 0px))`,"transform-origin":`${d} ${O}`}).beforeAddWrite(()=>{void 0!==S&&y.style.setProperty("bottom",`${S}px`)}).fromTo("transform","scale(0.8)","scale(1)"),V.addElement(v.querySelector(".popover-viewport")).fromTo("opacity",.01,1),W.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===n&&t.style.setProperty("--width",`${A}px`),"bottom"===d&&t.classList.add("popover-bottom")}).addAnimation([j,M,Y,V])},ye=t=>{const e=(0,_.g)(t),r=e.querySelector(".popover-content"),o=(0,c.c)(),n=(0,c.c)(),i=(0,c.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},Q=class{constructor(t){(0,l.r)(this,t),this.didPresent=(0,l.d)(this,"ionPopoverDidPresent",7),this.willPresent=(0,l.d)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,l.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,l.d)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,l.d)(this,"didPresent",7),this.willPresentShorthand=(0,l.d)(this,"willPresent",7),this.willDismissShorthand=(0,l.d)(this,"willDismiss",7),this.didDismissShorthand=(0,l.d)(this,"didDismiss",7),this.ionMount=(0,l.d)(this,"ionMount",7),this.parentPopover=null,this.coreDelegate=(0,N.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.onBackdropTap=()=>{this.dismiss(void 0,T.B)},this.onLifecycle=e=>{const r=this.usersElement,o=ke[e.type];if(r&&o){const n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:r,el:o,destroyTriggerInteraction:n}=this;if(n&&n(),void 0===e)return;const i=this.triggerEl=void 0!==e?document.getElementById(e):null;i?this.destroyTriggerInteraction=ne(i,r,o):(0,F.p)(`A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,this.el)},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:r}=this;e&&e(),this.destroyKeyboardInteraction=pe(r)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:r,triggerAction:o,triggerEl:n,el:i}=this;!r||!n||(e&&e(),this.destroyDismissInteraction=((t,e,r,o)=>{let n=[];const s=(0,_.g)(o).querySelector(".popover-content");return n="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==t&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==t?r.dismiss(void 0,void 0,!1):a.stopPropagation()}}],n.forEach(({eventName:a,callback:p})=>s.addEventListener(a,p)),()=>{n.forEach(({eventName:a,callback:p})=>s.removeEventListener(a,p))}})(n,o,i,r))},this.presented=!1,this.hasController=!1,this.delegate=void 0,this.overlayIndex=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.component=void 0,this.componentProps=void 0,this.keyboardClose=!0,this.cssClass=void 0,this.backdropDismiss=!0,this.event=void 0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.triggerAction="click",this.trigger=void 0,this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment=void 0,this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;(0,T.j)(e),t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){const{el:t}=this,e=(0,T.k)(t);this.parentPopover=t.closest(`ion-popover:not(#${e})`),void 0===this.alignment&&(this.alignment="ios"===(0,$.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;!0===e&&(0,_.r)(()=>this.present()),t&&(0,_.a)(t,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)})}presentFromTrigger(t,e=!1){var r=this;return(0,L.Z)(function*(){r.focusDescendantOnPresent=e,yield r.present(t),r.focusDescendantOnPresent=!1})()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const r=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}present(t){var e=this;return(0,L.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const{el:r}=e,{inline:o,delegate:n}=e.getDelegate(!0);e.usersElement=yield(0,N.a)(n,r,e.component,["popover-viewport"],e.componentProps,o),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),e.ionMount.emit(),(0,_.m)(r)?yield(0,u.e)(e.usersElement):e.keepContentsMounted||(yield(0,u.w)()),e.currentTransition=(0,T.f)(e,"popoverEnter",ge,we,{event:t||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),yield e.currentTransition,e.currentTransition=void 0,e.focusDescendantOnPresent&&(0,T.o)(e.el,e.el)})()}dismiss(t,e,r=!0){var o=this;return(0,L.Z)(function*(){void 0!==o.currentTransition&&(yield o.currentTransition);const{destroyKeyboardInteraction:n,destroyDismissInteraction:i}=o;r&&o.parentPopover&&o.parentPopover.dismiss(t,e,r),o.currentTransition=(0,T.g)(o,t,e,"popoverLeave",be,ye,o.event);const s=yield o.currentTransition;if(s){n&&(n(),o.destroyKeyboardInteraction=void 0),i&&(i(),o.destroyDismissInteraction=void 0);const{delegate:a}=o.getDelegate();yield(0,N.d)(a,o.usersElement)}return o.currentTransition=void 0,s})()}getParentPopover(){var t=this;return(0,L.Z)(function*(){return t.parentPopover})()}onDidDismiss(){return(0,T.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,T.h)(this.el,"ionPopoverWillDismiss")}render(){const t=(0,$.b)(this),{onLifecycle:e,parentPopover:r,dismissOnSelect:o,side:n,arrow:i,htmlAttributes:s}=this,a=(0,$.a)("desktop"),p=i&&!r;return(0,l.h)(l.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},s,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},(0,g.g)(this.cssClass)),{[t]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":a,[`popover-side-${n}`]:!0,"popover-nested":!!r}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!r&&(0,l.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,l.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:o?()=>this.dismiss():void 0},p&&(0,l.h)("div",{class:"popover-arrow",part:"arrow"}),(0,l.h)("div",{class:"popover-content",part:"content"},(0,l.h)("slot",null))))}get el(){return(0,l.f)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},ke={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};Q.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start):dir(rtl){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end):dir(rtl){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}@supports (inset-inline-start: 0){.popover-arrow::after{inset-inline-start:3px}}@supports not (inset-inline-start: 0){.popover-arrow::after{left:3px}:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}[dir=rtl] .popover-arrow::after{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){.popover-arrow::after:dir(rtl){left:unset;right:unset;right:3px}}}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start) .popover-arrow:dir(rtl){-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end) .popover-arrow:dir(rtl){-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start):dir(rtl){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end):dir(rtl){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}"}},2854:(oe,K,m)=>{m.d(K,{c:()=>N,g:()=>F,h:()=>l,o:()=>$});var L=m(5861);const l=(g,u)=>null!==u.closest(g),N=(g,u)=>"string"==typeof g&&g.length>0?Object.assign({"ion-color":!0,[`ion-color-${g}`]:!0},u):u,F=g=>{const u={};return(g=>void 0!==g?(Array.isArray(g)?g:g.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c):[])(g).forEach(c=>u[c]=!0),u},T=/^[a-z][a-z0-9+\-.]*:/,$=function(){var g=(0,L.Z)(function*(u,c,q,z){if(null!=u&&"#"!==u[0]&&!T.test(u)){const R=document.querySelector("ion-router");if(R)return null!=c&&c.preventDefault(),R.push(u,q,z)}return!1});return function(c,q,z,R){return g.apply(this,arguments)}}()}}]);