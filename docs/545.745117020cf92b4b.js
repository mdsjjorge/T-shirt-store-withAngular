"use strict";(self.webpackChunkt_shirt_store_withAngular=self.webpackChunkt_shirt_store_withAngular||[]).push([[545],{8545:(C,a,r)=>{r.r(a),r.d(a,{ProductsModule:()=>x});var d=r(6895),s=r(9541),t=r(1571);const g=[{id:1,description:"Puff Sleeve Keyhole Back Top",price:439,descriptionprice:"only PIX",image:"./assets/img/01.jpg",stockQuantity:8},{id:2,description:"Sleeve Waffle Knit Tee",price:100.5,descriptionprice:"only PIX",image:"./assets/img/02.jpg",stockQuantity:8},{id:3,description:"Puff Sleeve Top",price:749.99,descriptionprice:"only PIX",image:"./assets/img/03.jpg",stockQuantity:8},{id:4,description:"Lettuce Trim Round Neck Tee",price:599.99,descriptionprice:"only PIX",image:"./assets/img/04.jpg",stockQuantity:8},{id:5,description:"Keyhole Back Mock-neck Puff Sleeve Top",price:299.99,descriptionprice:"only PIX",image:"./assets/img/05.jpg",stockQuantity:8},{id:6,description:"Solid Petal Sleeve Tee",price:399.99,descriptionprice:"only PIX",image:"./assets/img/06.jpg",stockQuantity:8},{id:7,description:"Puff Sleeve Round Neck Tee",price:499.99,descriptionprice:"only PIX",image:"./assets/img/07.jpg",stockQuantity:8},{id:8,description:"Mock-neck Puff Sleeve Rib-knit Top",price:149.99,descriptionprice:"only PIX",image:"./assets/img/08.jpg",stockQuantity:8}];let l=(()=>{class o{constructor(){this.products=g}getAll(){return this.products}getOne(e){return this.products.find(n=>n.id===e)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=r(8881);let _=(()=>{class o{constructor(e){this.snackBar=e}notify(e){this.snackBar.open(e,"ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.ux))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=r(3705),c=r(433);let h=(()=>{class o{constructor(e,n,p,u){this.productsService=e,this.route=n,this.notificationService=p,this.cartService=u,this.quantity=1}ngOnInit(){const n=Number(this.route.snapshot.paramMap.get("id"));this.product=this.productsService.getOne(n)}addToCart(){this.notificationService.notify("Product added to cart!");const e={...this.product,quantity:this.quantity};this.cartService.addToCart(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l),t.Y36(s.gz),t.Y36(_),t.Y36(f.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-detail"]],decls:18,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__availability"],[3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"h3",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"available"),t.qZA(),t.TgZ(11,"label"),t._uU(12," Quantity: "),t.TgZ(13,"input",6),t.NdJ("ngModelChange",function(u){return n.quantity=u}),t.qZA()(),t.TgZ(14,"p",7),t._uU(15),t.qZA(),t.TgZ(16,"button",8),t.NdJ("click",function(){return n.addToCart()}),t._uU(17,"add to cart"),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("src",null==n.product?null:n.product.image,t.LSH),t.xp6(3),t.hij(" ",null==n.product?null:n.product.description," "),t.xp6(2),t.hij(" ",t.xi3(8,5,null==n.product?null:n.product.price,"BRL")," "),t.xp6(6),t.Q6J("ngModel",n.quantity),t.xp6(2),t.hij(" ",null==n.product?null:n.product.stockQuantity," units available "))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.On,d.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-deion__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),o})();function P(o,i){if(1&o&&(t.TgZ(0,"div",2)(1,"a",3),t._UZ(2,"img",4),t.TgZ(3,"h2",5),t._uU(4),t.qZA(),t.TgZ(5,"p",6),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA(),t.TgZ(10,"button",8),t._uU(11," buy "),t.qZA()()()),2&o){const e=i.$implicit;t.xp6(1),t.MGl("routerLink","/products/",e.id,""),t.xp6(1),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.hij(" ",e.description," "),t.xp6(2),t.hij(" ",t.xi3(7,5,e.price,"BRL")," "),t.xp6(3),t.hij(" ",e.descriptionprice," ")}}const y=[{path:"",component:(()=>{class o{constructor(e,n){this.productsService=e,this.route=n}ngOnInit(){const e=this.productsService.getAll();this.route.queryParamMap.subscribe(n=>{const p=n.get("description")?.toLowerCase();this.products=p?e.filter(u=>u.description.toLowerCase().includes(p)):e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l),t.Y36(s.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0),t.YNc(1,P,12,8,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.products))},dependencies:[d.sg,s.yS,d.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;max-width:1200px;margin:0 auto;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),o})()},{path:":id",component:h}];let v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(y),s.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,v,c.u5]}),o})()}}]);