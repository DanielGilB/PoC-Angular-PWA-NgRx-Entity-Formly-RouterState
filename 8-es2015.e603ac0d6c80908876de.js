(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4aYi":function(t,e,c){"use strict";c.r(e),c.d(e,"EpisodesModule",(function(){return rt}));var a=c("ofXK"),n=c("PCNd"),i=c("tyNb"),s=c("XNiG"),r=c("Kj3r"),o=c("02Lk"),l=c("TwVa"),b=c("iFvM"),d=c("XrNA"),p=c("ub1J"),f=c("fXoL"),m=c("l7P3"),h=c("0IaG"),g=c("3Pt+"),u=c("sYmb"),S=c("Wp6s"),D=c("bTqV"),I=c("/2Tz");let C=(()=>{class t{constructor(t){this.translate=t,this.FORM_GROUP_ID=l.e.FORM_EPISODES_FILTER_ID,this.initialModel={},this.form=new g.h({}),this.fields=[],this.options={}}ngOnInit(){this.initForm()}resetFilter(){this.form.patchValue({name:void 0,episode:void 0})}initForm(){this.fields=[{fieldGroupClassName:"flex-container no-margin no-padding",fieldGroup:[{key:"name",type:"input",className:"flex-25",templateOptions:{floatLabel:"always",label:this.translate.instant("EPISODES.FIELDS.NAME")}},{key:"episode",type:"input",className:"flex-25",templateOptions:{floatLabel:"always",label:this.translate.instant("EPISODES.FIELDS.EPISODE")}}]}]}}return t.\u0275fac=function(e){return new(e||t)(f.Ob(u.d))},t.\u0275cmp=f.Ib({type:t,selectors:[["app-episodes-filter-form"]],decls:10,vars:12,consts:[["mat-button","",3,"click"],[3,"formId","form","fields","initialModel","options","filter"]],template:function(t,e){1&t&&(f.Ub(0,"mat-card"),f.Ub(1,"mat-card-header"),f.Ub(2,"mat-card-title"),f.Fc(3),f.hc(4,"translate"),f.Tb(),f.Ub(5,"button",0),f.cc("click",(function(){return e.resetFilter()})),f.Fc(6),f.hc(7,"translate"),f.Tb(),f.Tb(),f.Ub(8,"mat-card-content"),f.Pb(9,"app-dynamic-form",1),f.Tb(),f.Tb()),2&t&&(f.Cb(3),f.Gc(f.ic(4,8,"EPISODES.FILTER_EPISODES")),f.Cb(3),f.Gc(f.ic(7,10,"FORMS.CLEAR_FILTER")),f.Cb(3),f.mc("formId",e.FORM_GROUP_ID)("form",e.form)("fields",e.fields)("initialModel",e.initialModel)("options",e.options)("filter",!0))},directives:[S.a,S.d,S.g,D.b,S.c,I.a],pipes:[u.c],styles:[".mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:16px}.mat-card[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),t})();var E=c("bv9b"),O=c("+0xr"),T=c("5/t5"),y=c("M9IT");function F(t,e){1&t&&f.Pb(0,"mat-progress-bar",2)}function P(t,e){if(1&t&&(f.Sb(0),f.Dc(1,F,1,0,"mat-progress-bar",1),f.Rb()),2&t){const t=e.ngIf,c=f.gc();f.Cb(1),f.mc("ngIf",t===c.dataStateTypes.LOADING||t===c.dataStateTypes.REFRESHING)}}function R(t,e){1&t&&(f.Ub(0,"th",17),f.Fc(1),f.hc(2,"translate"),f.Tb()),2&t&&(f.Cb(1),f.Gc(f.ic(2,1,"EPISODES.FIELDS.NUM")))}const v=function(t){return["/episodes",t]};function w(t,e){if(1&t&&(f.Ub(0,"td",18),f.Fc(1),f.Tb()),2&t){const t=e.$implicit;f.mc("routerLink",f.pc(2,v,t.id)),f.Cb(1),f.Hc(" ",t.id," ")}}function U(t,e){1&t&&(f.Ub(0,"th",17),f.Fc(1),f.hc(2,"translate"),f.Tb()),2&t&&(f.Cb(1),f.Gc(f.ic(2,1,"EPISODES.FIELDS.EPISODE")))}function L(t,e){if(1&t&&(f.Ub(0,"td",18),f.Fc(1),f.Tb()),2&t){const t=e.$implicit;f.mc("routerLink",f.pc(2,v,t.id)),f.Cb(1),f.Hc(" ",t.episode," ")}}function $(t,e){1&t&&(f.Ub(0,"th",17),f.Fc(1),f.hc(2,"translate"),f.Tb()),2&t&&(f.Cb(1),f.Gc(f.ic(2,1,"EPISODES.FIELDS.NAME")))}function _(t,e){if(1&t&&(f.Ub(0,"td",18),f.Fc(1),f.Tb()),2&t){const t=e.$implicit;f.mc("routerLink",f.pc(2,v,t.id)),f.Cb(1),f.Hc(" ",t.name," ")}}function H(t,e){1&t&&(f.Ub(0,"th",17),f.Fc(1),f.hc(2,"translate"),f.Tb()),2&t&&(f.Cb(1),f.Gc(f.ic(2,1,"EPISODES.FIELDS.AIR_DATE")))}function M(t,e){if(1&t&&(f.Ub(0,"td",19),f.Fc(1),f.Tb()),2&t){const t=e.$implicit;f.Cb(1),f.Gc(t.air_date)}}function A(t,e){1&t&&(f.Ub(0,"th",17),f.Fc(1),f.hc(2,"translate"),f.Tb()),2&t&&(f.Cb(1),f.Gc(f.ic(2,1,"EPISODES.FIELDS.CHARACTERS")))}const G=function(t){return{number:t}};function k(t,e){if(1&t){const t=f.Vb();f.Ub(0,"td",19),f.Ub(1,"button",20),f.cc("click",(function(){f.uc(t);const c=e.$implicit;return f.gc(2).openCharactersDialog(c)})),f.Fc(2),f.hc(3,"translate"),f.Tb(),f.Tb()}if(2&t){const t=e.$implicit;f.Cb(1),f.mc("disabled",t.characters.length<1),f.Cb(1),f.Hc(" ",f.jc(3,2,null!=t.characters&&t.characters.length?"EPISODES.CHARACTERS":"EPISODES.NO_CHARACTERS",f.pc(5,G,null==t.characters?null:t.characters.length))," ")}}function N(t,e){1&t&&f.Pb(0,"tr",21)}function x(t,e){if(1&t){const t=f.Vb();f.Ub(0,"tr",22),f.cc("prefetch",(function(){f.uc(t);const c=e.$implicit;return f.gc(2).prefetchCharactersOnHover(c)})),f.Tb()}2&t&&f.mc("prefetchHovered",!0)}function j(t,e){if(1&t){const t=f.Vb();f.Ub(0,"mat-paginator",23),f.cc("page",(function(e){return f.uc(t),f.gc(2).changePage(e)})),f.hc(1,"async"),f.hc(2,"async"),f.Tb()}if(2&t){const t=f.gc(2);f.mc("pageIndex",f.ic(1,3,t.currentPage$)-1)("length",f.ic(2,5,t.totalEpisodes$))("pageSize",t.pageSize)}}function z(t,e){if(1&t&&(f.Sb(0),f.Ub(1,"div",3),f.Ub(2,"div",4),f.Ub(3,"table",5),f.Sb(4,6),f.Dc(5,R,3,3,"th",7),f.Dc(6,w,2,4,"td",8),f.Rb(),f.Sb(7,9),f.Dc(8,U,3,3,"th",7),f.Dc(9,L,2,4,"td",8),f.Rb(),f.Sb(10,10),f.Dc(11,$,3,3,"th",7),f.Dc(12,_,2,4,"td",8),f.Rb(),f.Sb(13,11),f.Dc(14,H,3,3,"th",7),f.Dc(15,M,2,1,"td",12),f.Rb(),f.Sb(16,13),f.Dc(17,A,3,3,"th",7),f.Dc(18,k,4,7,"td",12),f.Rb(),f.Dc(19,N,1,0,"tr",14),f.Dc(20,x,1,1,"tr",15),f.Tb(),f.Tb(),f.Dc(21,j,3,7,"mat-paginator",16),f.Tb(),f.Rb()),2&t){const t=e.ngIf,c=f.gc();f.Cb(3),f.mc("dataSource",t),f.Cb(16),f.mc("matHeaderRowDef",c.displayedColumns),f.Cb(1),f.mc("matRowDefColumns",c.displayedColumns),f.Cb(1),f.mc("ngIf",!!t.length)}}let V=(()=>{class t{constructor(t,e,c){this.store=t,this.router=e,this.dialog=c,this.dataState$=this.store.select(d.d.getDataState),this.episodes$=this.store.select(d.d.getEpisodes),this.totalEpisodes$=this.store.select(d.d.getTotalEpisodes),this.currentPage$=this.store.select(d.d.getCurrentPage),this.dataStateTypes=l.d,this.pageSize=l.f,this.displayedColumns=["id","episode","name","air_date","characters"],this.hoverEpisode$=new s.a}ngOnInit(){this.hoverEpisode$.pipe(Object(b.h)(this),Object(r.a)(300),Object(o.a)(({id:t})=>t)).subscribe(t=>this.store.dispatch(d.b.hoverEpisodeLine({episode:t})))}prefetchCharactersOnHover(t){this.hoverEpisode$.next(t)}changePage(t){this.router.navigate([],{queryParams:{page:t.pageIndex+1},queryParamsHandling:"merge"})}openCharactersDialog(t){this.dialog.open(p.a,{data:{title:t.name,characterIds:t.characters}})}ngOnDestroy(){this.dialog.closeAll()}}return t.\u0275fac=function(e){return new(e||t)(f.Ob(m.h),f.Ob(i.f),f.Ob(h.b))},t.\u0275cmp=f.Ib({type:t,selectors:[["app-episodes-list"]],decls:5,vars:6,consts:[[4,"ngIf"],["class","progress-bar--top","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"progress-bar--top"],[1,"content"],[1,"table-responsive"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","pointer-cursor",3,"routerLink",4,"matCellDef"],["matColumnDef","episode"],["matColumnDef","name"],["matColumnDef","air_date"],["mat-cell","",4,"matCellDef"],["matColumnDef","characters"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"prefetchHovered","prefetch",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageIndex","length","pageSize","page",4,"ngIf"],["mat-header-cell",""],["mat-cell","",1,"pointer-cursor",3,"routerLink"],["mat-cell",""],["mat-stroked-button","","color","primary",1,"characters-button",3,"disabled","click"],["mat-header-row",""],["mat-row","",3,"prefetchHovered","prefetch"],["showFirstLastButtons","",3,"pageIndex","length","pageSize","page"]],template:function(t,e){1&t&&(f.Pb(0,"app-episodes-filter-form"),f.Dc(1,P,2,1,"ng-container",0),f.hc(2,"async"),f.Dc(3,z,22,4,"ng-container",0),f.hc(4,"async")),2&t&&(f.Cb(1),f.mc("ngIf",f.ic(2,2,e.dataState$)),f.Cb(2),f.mc("ngIf",f.ic(4,4,e.episodes$)))},directives:[C,a.l,E.a,O.j,O.c,O.e,O.b,O.g,O.i,O.d,O.a,i.g,D.b,O.f,O.h,T.a,y.a],pipes:[a.b,u.c],styles:[".content[_ngcontent-%COMP%]{margin-top:24px}.pointer-cursor[_ngcontent-%COMP%]{cursor:pointer}.characters-button[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t})();var B=c("SRnY"),J=c("f0Cb"),X=c("HQHz");function q(t,e){1&t&&f.Pb(0,"mat-progress-bar",2)}function Y(t,e){if(1&t&&(f.Sb(0),f.Dc(1,q,1,0,"mat-progress-bar",1),f.Rb()),2&t){const t=e.ngIf,c=f.gc();f.Cb(1),f.mc("ngIf",t===c.dataStateTypes.LOADING||t===c.dataStateTypes.REFRESHING)}}function K(t,e){1&t&&f.Pb(0,"mat-progress-bar",6)}function Q(t,e){if(1&t&&(f.Ub(0,"div",10),f.Pb(1,"app-character-mini-card",11),f.Tb()),2&t){const t=e.$implicit;f.Cb(1),f.mc("character",t)}}function W(t,e){if(1&t&&(f.Sb(0),f.Dc(1,Q,2,1,"div",9),f.Rb()),2&t){const t=f.gc().ngIf,e=f.gc(3);f.Cb(1),f.mc("ngForOf",t)("ngForTrackBy",null==e.character?null:e.character.id)}}function Z(t,e){1&t&&(f.Ub(0,"p"),f.Fc(1),f.hc(2,"translate"),f.Tb()),2&t&&(f.Cb(1),f.Gc(f.ic(2,1,"EPISODES.NO_CHARATERS")))}function tt(t,e){if(1&t&&f.Dc(0,Z,3,3,"p",0),2&t){const t=f.gc(2).ngIf,e=f.gc(2);f.mc("ngIf",t===e.dataStateTypes.LOADED)}}function et(t,e){if(1&t&&(f.Sb(0),f.Dc(1,W,2,2,"ng-container",7),f.Dc(2,tt,1,1,"ng-template",null,8,f.Ec),f.Rb()),2&t){const t=e.ngIf,c=f.sc(3);f.Cb(1),f.mc("ngIf",!!t.length)("ngIfElse",c)}}function ct(t,e){if(1&t&&(f.Ub(0,"div",4),f.Dc(1,K,1,0,"mat-progress-bar",5),f.Dc(2,et,4,2,"ng-container",0),f.hc(3,"async"),f.Tb()),2&t){const t=e.ngIf,c=f.gc(2);f.Cb(1),f.mc("ngIf",t===c.dataStateTypes.LOADING),f.Cb(1),f.mc("ngIf",f.ic(3,2,c.characters$))}}const at=function(t){return{name:t}};function nt(t,e){if(1&t&&(f.Sb(0),f.Ub(1,"h1"),f.Fc(2),f.Tb(),f.Pb(3,"mat-divider"),f.Ub(4,"mat-card"),f.Ub(5,"h2"),f.Fc(6),f.hc(7,"translate"),f.Tb(),f.Dc(8,ct,4,4,"div",3),f.hc(9,"async"),f.Tb(),f.Rb()),2&t){const t=e.ngIf,c=f.gc();f.Cb(2),f.Jc("",t.episode,": ",t.name," (",t.air_date,")"),f.Cb(4),f.Gc(f.jc(7,5,"EPISODES.EPISODE_CHARACTERS",f.pc(10,at,t.name))),f.Cb(2),f.mc("ngIf",f.ic(9,8,c.charactersDataState$))}}const it=[{path:"",component:V},{path:":id",component:(()=>{class t{constructor(t){this.store=t,this.dataState$=this.store.select(d.d.getDataState),this.episode$=this.store.select(d.d.getSelectedEpisode),this.charactersDataState$=this.store.select(B.a.getDataState),this.characters$=this.store.select(B.a.getCharactersOfSelectedEpisode),this.dataStateTypes=l.d}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(f.Ob(m.h))},t.\u0275cmp=f.Ib({type:t,selectors:[["app-episode-details"]],decls:4,vars:6,consts:[[4,"ngIf"],["class","progress-bar--top","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"progress-bar--top"],["class","row",4,"ngIf"],[1,"row"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"],[4,"ngIf","ngIfElse"],["emptyCharacters",""],["class","col-12 col-md-6",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-12","col-md-6"],[3,"character"]],template:function(t,e){1&t&&(f.Dc(0,Y,2,1,"ng-container",0),f.hc(1,"async"),f.Dc(2,nt,10,12,"ng-container",0),f.hc(3,"async")),2&t&&(f.mc("ngIf",f.ic(1,2,e.dataState$)),f.Cb(2),f.mc("ngIf",f.ic(3,4,e.episode$)))},directives:[a.l,E.a,J.a,S.a,a.k,X.a],pipes:[a.b,u.c],styles:[".mat-divider[_ngcontent-%COMP%]{margin-bottom:24px}"],changeDetection:0}),t})()}];let st=(()=>{class t{}return t.\u0275mod=f.Mb({type:t}),t.\u0275inj=f.Lb({factory:function(e){return new(e||t)},imports:[[i.j.forChild(it)],i.j]}),t})(),rt=(()=>{class t{}return t.\u0275mod=f.Mb({type:t}),t.\u0275inj=f.Lb({factory:function(e){return new(e||t)},imports:[[a.c,st,n.a]]}),t})()}}]);