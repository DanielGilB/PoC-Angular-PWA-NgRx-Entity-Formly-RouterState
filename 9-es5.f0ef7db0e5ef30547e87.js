!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function n(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ANty:function(e,c,i){"use strict";i.r(c),i.d(c,"LocationsModule",(function(){return X}));var a=i("ofXK"),o=i("PCNd"),r=i("tyNb"),s=i("XNiG"),u=i("Kj3r"),b=i("02Lk"),l=i("TwVa"),f=i("iFvM"),d=i("Ns9j"),p=i("fXoL"),m=i("l7P3"),h=i("bv9b"),g=i("+0xr"),v=i("bTqV"),C=i("5/t5"),D=i("M9IT"),S=i("sYmb");function y(t,e){1&t&&p.Pb(0,"mat-progress-bar",2)}function I(t,e){if(1&t&&(p.Sb(0),p.Dc(1,y,1,0,"mat-progress-bar",1),p.Rb()),2&t){var n=e.ngIf,c=p.gc();p.Cb(1),p.mc("ngIf",n===c.dataStateTypes.LOADING||n===c.dataStateTypes.REFRESHING)}}function T(t,e){1&t&&(p.Ub(0,"th",17),p.Fc(1),p.hc(2,"translate"),p.Tb()),2&t&&(p.Cb(1),p.Gc(p.ic(2,1,"LOCATIONS.FIELDS.NUM")))}var L=function(t){return["/locations",t]};function O(t,e){if(1&t&&(p.Ub(0,"td",18),p.Fc(1),p.Tb()),2&t){var n=e.$implicit;p.mc("routerLink",p.pc(2,L,n.id)),p.Cb(1),p.Hc(" ",n.id," ")}}function w(t,e){1&t&&(p.Ub(0,"th",17),p.Fc(1),p.hc(2,"translate"),p.Tb()),2&t&&(p.Cb(1),p.Gc(p.ic(2,1,"LOCATIONS.FIELDS.NAME")))}function N(t,e){if(1&t&&(p.Ub(0,"td",18),p.Fc(1),p.Tb()),2&t){var n=e.$implicit;p.mc("routerLink",p.pc(2,L,n.id)),p.Cb(1),p.Hc(" ",n.name," ")}}function F(t,e){1&t&&(p.Ub(0,"th",17),p.Fc(1),p.hc(2,"translate"),p.Tb()),2&t&&(p.Cb(1),p.Gc(p.ic(2,1,"LOCATIONS.FIELDS.TYPE")))}function R(t,e){if(1&t&&(p.Ub(0,"td",19),p.Fc(1),p.Tb()),2&t){var n=e.$implicit;p.Cb(1),p.Gc(n.type)}}function U(t,e){1&t&&(p.Ub(0,"th",17),p.Fc(1),p.hc(2,"translate"),p.Tb()),2&t&&(p.Cb(1),p.Gc(p.ic(2,1,"LOCATIONS.FIELDS.DIMENSION")))}function k(t,e){if(1&t&&(p.Ub(0,"td",19),p.Fc(1),p.Tb()),2&t){var n=e.$implicit;p.Cb(1),p.Gc(n.dimension)}}function $(t,e){1&t&&(p.Ub(0,"th",17),p.Fc(1),p.hc(2,"translate"),p.Tb()),2&t&&(p.Cb(1),p.Gc(p.ic(2,1,"LOCATIONS.FIELDS.RESIDENTS")))}var E=function(t){return{number:t}};function P(t,e){if(1&t){var n=p.Vb();p.Ub(0,"td",19),p.Ub(1,"button",20),p.cc("click",(function(){p.uc(n);var t=e.$implicit;return p.gc(2).openResidentsDialog(t)})),p.Fc(2),p.hc(3,"translate"),p.Tb(),p.Tb()}if(2&t){var c=e.$implicit;p.Cb(1),p.mc("disabled",c.residents.length<1),p.Cb(1),p.Hc(" ",p.jc(3,2,null!=c.residents&&c.residents.length?"LOCATIONS.RESIDENTS":"LOCATIONS.NO_RESIDENTS",p.pc(5,E,null==c.residents?null:c.residents.length))," ")}}function H(t,e){1&t&&p.Pb(0,"tr",21)}function j(t,e){if(1&t){var n=p.Vb();p.Ub(0,"tr",22),p.cc("prefetch",(function(){p.uc(n);var t=e.$implicit;return p.gc(2).prefetchResidentsOnHover(t)})),p.Tb()}2&t&&p.mc("prefetchHovered",!0)}function M(t,e){if(1&t){var n=p.Vb();p.Ub(0,"mat-paginator",23),p.cc("page",(function(t){return p.uc(n),p.gc(2).changePage(t)})),p.hc(1,"async"),p.hc(2,"async"),p.Tb()}if(2&t){var c=p.gc(2);p.mc("pageIndex",p.ic(1,3,c.currentPage$)-1)("length",p.ic(2,5,c.totalLocations$))("pageSize",c.pageSize)}}function A(t,e){if(1&t&&(p.Sb(0),p.Ub(1,"div",3),p.Ub(2,"div",4),p.Ub(3,"table",5),p.Sb(4,6),p.Dc(5,T,3,3,"th",7),p.Dc(6,O,2,4,"td",8),p.Rb(),p.Sb(7,9),p.Dc(8,w,3,3,"th",7),p.Dc(9,N,2,4,"td",8),p.Rb(),p.Sb(10,10),p.Dc(11,F,3,3,"th",7),p.Dc(12,R,2,1,"td",11),p.Rb(),p.Sb(13,12),p.Dc(14,U,3,3,"th",7),p.Dc(15,k,2,1,"td",11),p.Rb(),p.Sb(16,13),p.Dc(17,$,3,3,"th",7),p.Dc(18,P,4,7,"td",11),p.Rb(),p.Dc(19,H,1,0,"tr",14),p.Dc(20,j,1,1,"tr",15),p.Tb(),p.Tb(),p.Dc(21,M,3,7,"mat-paginator",16),p.Tb(),p.Rb()),2&t){var n=e.ngIf,c=p.gc();p.Cb(3),p.mc("dataSource",n),p.Cb(16),p.mc("matHeaderRowDef",c.displayedColumns),p.Cb(1),p.mc("matRowDefColumns",c.displayedColumns),p.Cb(1),p.mc("ngIf",!!n.length)}}var G,x,z,V,_=[{path:"",component:(x=function(){function e(n,c){t(this,e),this.store=n,this.router=c,this.dataState$=this.store.select(d.d.getDataState),this.locations$=this.store.select(d.d.getLocations),this.totalLocations$=this.store.select(d.d.getTotalLocations),this.currentPage$=this.store.select(d.d.getCurrentPage),this.dataStateTypes=l.d,this.pageSize=l.f,this.displayedColumns=["id","name","type","dimension","residents"],this.hoverLocation$=new s.a}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.hoverLocation$.pipe(Object(f.h)(this),Object(u.a)(300),Object(b.a)((function(t){return t.id}))).subscribe((function(e){return t.store.dispatch(d.b.hoverLocationLine({location:e}))}))}},{key:"ngOnDestroy",value:function(){}},{key:"prefetchResidentsOnHover",value:function(t){this.hoverLocation$.next(t)}},{key:"openResidentsDialog",value:function(t){}},{key:"changePage",value:function(t){this.router.navigate([],{queryParams:{page:t.pageIndex+1},queryParamsHandling:"merge"})}}]),e}(),x.\u0275fac=function(t){return new(t||x)(p.Ob(m.h),p.Ob(r.f))},x.\u0275cmp=p.Ib({type:x,selectors:[["app-locations-list"]],decls:6,vars:6,consts:[[4,"ngIf"],["class","progress-bar--top","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"progress-bar--top"],[1,"content"],[1,"table-responsive"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","pointer-cursor",3,"routerLink",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","type"],["mat-cell","",4,"matCellDef"],["matColumnDef","dimension"],["matColumnDef","residents"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"prefetchHovered","prefetch",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageIndex","length","pageSize","page",4,"ngIf"],["mat-header-cell",""],["mat-cell","",1,"pointer-cursor",3,"routerLink"],["mat-cell",""],["mat-stroked-button","","color","primary",1,"residents-button",3,"disabled","click"],["mat-header-row",""],["mat-row","",3,"prefetchHovered","prefetch"],["showFirstLastButtons","",3,"pageIndex","length","pageSize","page"]],template:function(t,e){1&t&&(p.Ub(0,"p"),p.Fc(1,"filter here!"),p.Tb(),p.Dc(2,I,2,1,"ng-container",0),p.hc(3,"async"),p.Dc(4,A,22,4,"ng-container",0),p.hc(5,"async")),2&t&&(p.Cb(2),p.mc("ngIf",p.ic(3,2,e.dataState$)),p.Cb(2),p.mc("ngIf",p.ic(5,4,e.locations$)))},directives:[a.l,h.a,g.j,g.c,g.e,g.b,g.g,g.i,g.d,g.a,r.g,v.b,g.f,g.h,C.a,D.a],pipes:[a.b,S.c],styles:[".content[_ngcontent-%COMP%]{margin-top:24px}.pointer-cursor[_ngcontent-%COMP%]{cursor:pointer}.residents-button[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),x)},{path:":id",component:(G=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}(),G.\u0275fac=function(t){return new(t||G)},G.\u0275cmp=p.Ib({type:G,selectors:[["app-location-details"]],decls:2,vars:0,template:function(t,e){1&t&&(p.Ub(0,"p"),p.Fc(1,"location-details works!"),p.Tb())},styles:[""],changeDetection:0}),G)}],q=((V=function e(){t(this,e)}).\u0275mod=p.Mb({type:V}),V.\u0275inj=p.Lb({factory:function(t){return new(t||V)},imports:[[r.j.forChild(_)],r.j]}),V),X=((z=function e(){t(this,e)}).\u0275mod=p.Mb({type:z}),z.\u0275inj=p.Lb({factory:function(t){return new(t||z)},imports:[[a.c,q,o.a]]}),z)}}])}();