"use strict";(self.webpackChunkt_shirt_store_withAngular=self.webpackChunkt_shirt_store_withAngular||[]).push([[700],{6700:(v,p,a)=>{a.r(p),a.d(p,{CartModule:()=>x});var l=a(6895),s=a(9541),t=a(1571),C=a(3705),c=a(433);function d(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",7),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," quantity "),t.TgZ(9,"input",8),t.NdJ("ngModelChange",function(i){const u=t.CHM(n).$implicit;return t.KtG(u.quantity=i)})("change",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.calculateTotal())}),t.qZA()(),t.TgZ(10,"button",9),t.NdJ("click",function(){const g=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.removeFromCart(g.id))}),t._uU(11," X "),t.qZA()()}if(2&e){const n=r.$implicit;t.xp6(1),t.Q6J("src",n.image,t.LSH),t.xp6(2),t.Oqu(n.description),t.xp6(2),t.hij("",t.xi3(6,4,n.price,"BRL")," "),t.xp6(4),t.Q6J("ngModel",n.quantity)}}function m(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"ul"),t.YNc(2,d,12,7,"li",4),t.qZA(),t.TgZ(3,"h2",5),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",6),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.buy())}),t._uU(7,"buy"),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.itensCart),t.xp6(2),t.hij(" total: ",t.xi3(5,2,n.total,"BRL")," ")}}function _(e,r){1&e&&t._uU(0," No products have been added to cart ")}const h=[{path:"",component:(()=>{class e{constructor(n,o){this.cartService=n,this.router=o,this.itensCart=[],this.total=0}ngOnInit(){this.itensCart=this.cartService.getCart(),this.calculateTotal()}calculateTotal(){this.total=this.itensCart.reduce((n,o)=>n+o.price*o.quantity,0)}removeFromCart(n){this.itensCart=this.itensCart.filter(o=>o.id!==n),this.cartService.removeFromCart(n),this.calculateTotal()}buy(){alert("you have completed your purchase!"),this.cartService.clearCart(),this.router.navigate(["products"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.N),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],decls:6,vars:2,consts:[[1,"cart-content"],[1,"cart-title"],[4,"ngIf","ngIfElse"],["noProducts",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"]],template:function(n,o){if(1&n&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2," cart "),t.qZA(),t.YNc(3,m,8,5,"div",2),t.YNc(4,_,1,0,"ng-template",null,3,t.W1O),t.qZA()),2&n){const i=t.MAs(5);t.xp6(3),t.Q6J("ngIf",o.itensCart.length>0)("ngIfElse",i)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-content[_ngcontent-%COMP%]{max-width:1100px;margin:0 auto}.cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(h),s.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,f,c.u5]}),e})()}}]);