(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4aYi":function(t,e,c){"use strict";c.r(e),c.d(e,"EpisodesModule",(function(){return N}));var n=c("ofXK"),a=c("PCNd"),r=c("tyNb"),i=c("XNiG"),o=c("Kj3r"),s=c("02Lk"),b=c("TwVa"),p=c("iFvM"),d=c("XrNA"),l=c("fXoL"),h=c("l7P3"),u=c("bv9b"),m=c("+0xr"),f=c("bTqV"),g=c("5/t5"),D=c("M9IT"),C=c("sYmb");function S(t,e){1&t&&l.Pb(0,"mat-progress-bar",2)}function E(t,e){if(1&t&&(l.Sb(0),l.Dc(1,S,1,0,"mat-progress-bar",1),l.Rb()),2&t){const t=e.ngIf,c=l.gc();l.Cb(1),l.mc("ngIf",t===c.dataStateTypes.LOADING||t===c.dataStateTypes.REFRESHING)}}function I(t,e){1&t&&(l.Ub(0,"th",17),l.Fc(1),l.hc(2,"translate"),l.Tb()),2&t&&(l.Cb(1),l.Gc(l.ic(2,1,"EPISODES.FIELDS.NUM")))}const T=function(t){return["/episodes",t]};function w(t,e){if(1&t&&(l.Ub(0,"td",18),l.Fc(1),l.Tb()),2&t){const t=e.$implicit;l.mc("routerLink",l.pc(2,T,t.id)),l.Cb(1),l.Hc(" ",t.id," ")}}function y(t,e){1&t&&(l.Ub(0,"th",17),l.Fc(1),l.hc(2,"translate"),l.Tb()),2&t&&(l.Cb(1),l.Gc(l.ic(2,1,"EPISODES.FIELDS.EPISODE")))}function O(t,e){if(1&t&&(l.Ub(0,"td",18),l.Fc(1),l.Tb()),2&t){const t=e.$implicit;l.mc("routerLink",l.pc(2,T,t.id)),l.Cb(1),l.Hc(" ",t.episode," ")}}function P(t,e){1&t&&(l.Ub(0,"th",17),l.Fc(1),l.hc(2,"translate"),l.Tb()),2&t&&(l.Cb(1),l.Gc(l.ic(2,1,"EPISODES.FIELDS.NAME")))}function F(t,e){if(1&t&&(l.Ub(0,"td",18),l.Fc(1),l.Tb()),2&t){const t=e.$implicit;l.mc("routerLink",l.pc(2,T,t.id)),l.Cb(1),l.Hc(" ",t.name," ")}}function R(t,e){1&t&&(l.Ub(0,"th",17),l.Fc(1),l.hc(2,"translate"),l.Tb()),2&t&&(l.Cb(1),l.Gc(l.ic(2,1,"EPISODES.FIELDS.AIR_DATE")))}function v(t,e){if(1&t&&(l.Ub(0,"td",19),l.Fc(1),l.Tb()),2&t){const t=e.$implicit;l.Cb(1),l.Gc(t.air_date)}}function U(t,e){1&t&&(l.Ub(0,"th",17),l.Fc(1),l.hc(2,"translate"),l.Tb()),2&t&&(l.Cb(1),l.Gc(l.ic(2,1,"EPISODES.FIELDS.CHARACTERS")))}const L=function(t){return{number:t}};function $(t,e){if(1&t){const t=l.Vb();l.Ub(0,"td",19),l.Ub(1,"button",20),l.cc("click",(function(){l.uc(t);const c=e.$implicit;return l.gc(2).openCharactersDialog(c)})),l.Fc(2),l.hc(3,"translate"),l.Tb(),l.Tb()}if(2&t){const t=e.$implicit;l.Cb(1),l.mc("disabled",t.characters.length<1),l.Cb(1),l.Hc(" ",l.jc(3,2,null!=t.characters&&t.characters.length?"EPISODES.CHARACTERS":"EPISODES.NO_CHARACTERS",l.pc(5,L,null==t.characters?null:t.characters.length))," ")}}function H(t,e){1&t&&l.Pb(0,"tr",21)}function k(t,e){if(1&t){const t=l.Vb();l.Ub(0,"tr",22),l.cc("prefetch",(function(){l.uc(t);const c=e.$implicit;return l.gc(2).prefetchCharactersOnHover(c)})),l.Tb()}2&t&&l.mc("prefetchHovered",!0)}function A(t,e){if(1&t){const t=l.Vb();l.Ub(0,"mat-paginator",23),l.cc("page",(function(e){return l.uc(t),l.gc(2).changePage(e)})),l.hc(1,"async"),l.hc(2,"async"),l.Tb()}if(2&t){const t=l.gc(2);l.mc("pageIndex",l.ic(1,3,t.currentPage$)-1)("length",l.ic(2,5,t.totalEpisodes$))("pageSize",t.pageSize)}}function j(t,e){if(1&t&&(l.Sb(0),l.Ub(1,"div",3),l.Ub(2,"div",4),l.Ub(3,"table",5),l.Sb(4,6),l.Dc(5,I,3,3,"th",7),l.Dc(6,w,2,4,"td",8),l.Rb(),l.Sb(7,9),l.Dc(8,y,3,3,"th",7),l.Dc(9,O,2,4,"td",8),l.Rb(),l.Sb(10,10),l.Dc(11,P,3,3,"th",7),l.Dc(12,F,2,4,"td",8),l.Rb(),l.Sb(13,11),l.Dc(14,R,3,3,"th",7),l.Dc(15,v,2,1,"td",12),l.Rb(),l.Sb(16,13),l.Dc(17,U,3,3,"th",7),l.Dc(18,$,4,7,"td",12),l.Rb(),l.Dc(19,H,1,0,"tr",14),l.Dc(20,k,1,1,"tr",15),l.Tb(),l.Tb(),l.Dc(21,A,3,7,"mat-paginator",16),l.Tb(),l.Rb()),2&t){const t=e.ngIf,c=l.gc();l.Cb(3),l.mc("dataSource",t),l.Cb(16),l.mc("matHeaderRowDef",c.displayedColumns),l.Cb(1),l.mc("matRowDefColumns",c.displayedColumns),l.Cb(1),l.mc("ngIf",!!t.length)}}const M=[{path:"",component:(()=>{class t{constructor(t,e){this.store=t,this.router=e,this.dataState$=this.store.select(d.d.getDataState),this.episodes$=this.store.select(d.d.getEpisodes),this.totalEpisodes$=this.store.select(d.d.getTotalEpisodes),this.currentPage$=this.store.select(d.d.getCurrentPage),this.dataStateTypes=b.d,this.pageSize=b.f,this.displayedColumns=["id","episode","name","air_date","characters"],this.hoverEpisode$=new i.a}ngOnInit(){this.hoverEpisode$.pipe(Object(p.h)(this),Object(o.a)(300),Object(s.a)(({id:t})=>t)).subscribe(t=>this.store.dispatch(d.b.hoverEpisodeLine({episode:t})))}ngOnDestroy(){}prefetchCharactersOnHover(t){this.hoverEpisode$.next(t)}openCharactersDialog(t){}changePage(t){this.router.navigate([],{queryParams:{page:t.pageIndex+1},queryParamsHandling:"merge"})}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(h.h),l.Ob(r.f))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-episodes-list"]],decls:6,vars:6,consts:[[4,"ngIf"],["class","progress-bar--top","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"progress-bar--top"],[1,"content"],[1,"table-responsive"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","pointer-cursor",3,"routerLink",4,"matCellDef"],["matColumnDef","episode"],["matColumnDef","name"],["matColumnDef","air_date"],["mat-cell","",4,"matCellDef"],["matColumnDef","characters"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"prefetchHovered","prefetch",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageIndex","length","pageSize","page",4,"ngIf"],["mat-header-cell",""],["mat-cell","",1,"pointer-cursor",3,"routerLink"],["mat-cell",""],["mat-stroked-button","","color","primary",1,"characters-button",3,"disabled","click"],["mat-header-row",""],["mat-row","",3,"prefetchHovered","prefetch"],["showFirstLastButtons","",3,"pageIndex","length","pageSize","page"]],template:function(t,e){1&t&&(l.Ub(0,"p"),l.Fc(1,"filter here!"),l.Tb(),l.Dc(2,E,2,1,"ng-container",0),l.hc(3,"async"),l.Dc(4,j,22,4,"ng-container",0),l.hc(5,"async")),2&t&&(l.Cb(2),l.mc("ngIf",l.ic(3,2,e.dataState$)),l.Cb(2),l.mc("ngIf",l.ic(5,4,e.episodes$)))},directives:[n.l,u.a,m.j,m.c,m.e,m.b,m.g,m.i,m.d,m.a,r.g,f.b,m.f,m.h,g.a,D.a],pipes:[n.b,C.c],styles:[".content[_ngcontent-%COMP%]{margin-top:24px}.pointer-cursor[_ngcontent-%COMP%]{cursor:pointer}.characters-button[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t})()},{path:":id",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ib({type:t,selectors:[["app-episode-details"]],decls:2,vars:0,template:function(t,e){1&t&&(l.Ub(0,"p"),l.Fc(1,"episode-details works!"),l.Tb())},styles:[""],changeDetection:0}),t})()}];let G=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[r.j.forChild(M)],r.j]}),t})(),N=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[n.c,G,a.a]]}),t})()}}]);