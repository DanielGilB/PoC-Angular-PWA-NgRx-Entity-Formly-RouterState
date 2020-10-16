!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4aYi":function(e,n,c){"use strict";c.r(n),c.d(n,"EpisodesModule",(function(){return mt}));var i,r=c("ofXK"),o=c("PCNd"),s=c("tyNb"),l=c("XNiG"),b=c("Kj3r"),f=c("02Lk"),d=c("TwVa"),p=c("iFvM"),m=c("XrNA"),u=c("ub1J"),h=c("fXoL"),g=c("l7P3"),S=c("0IaG"),D=c("3Pt+"),I=c("sYmb"),C=c("Wp6s"),E=c("bTqV"),v=c("/2Tz"),y=((i=function(){function e(a){t(this,e),this.translate=a,this.FORM_GROUP_ID=d.e.FORM_EPISODES_FILTER_ID,this.initialModel={},this.form=new D.h({}),this.fields=[],this.options={}}return a(e,[{key:"ngOnInit",value:function(){this.initForm()}},{key:"resetFilter",value:function(){this.form.patchValue({name:void 0,episode:void 0})}},{key:"initForm",value:function(){this.fields=[{fieldGroupClassName:"flex-container no-margin no-padding",fieldGroup:[{key:"name",type:"input",className:"flex-25",templateOptions:{floatLabel:"always",label:this.translate.instant("EPISODES.FIELDS.NAME")}},{key:"episode",type:"input",className:"flex-25",templateOptions:{floatLabel:"always",label:this.translate.instant("EPISODES.FIELDS.EPISODE")}}]}]}}]),e}()).\u0275fac=function(t){return new(t||i)(h.Ob(I.d))},i.\u0275cmp=h.Ib({type:i,selectors:[["app-episodes-filter-form"]],decls:10,vars:12,consts:[["mat-button","",3,"click"],[3,"formId","form","fields","initialModel","options","filter"]],template:function(t,e){1&t&&(h.Ub(0,"mat-card"),h.Ub(1,"mat-card-header"),h.Ub(2,"mat-card-title"),h.Fc(3),h.hc(4,"translate"),h.Tb(),h.Ub(5,"button",0),h.cc("click",(function(){return e.resetFilter()})),h.Fc(6),h.hc(7,"translate"),h.Tb(),h.Tb(),h.Ub(8,"mat-card-content"),h.Pb(9,"app-dynamic-form",1),h.Tb(),h.Tb()),2&t&&(h.Cb(3),h.Gc(h.ic(4,8,"EPISODES.FILTER_EPISODES")),h.Cb(3),h.Gc(h.ic(7,10,"FORMS.CLEAR_FILTER")),h.Cb(3),h.mc("formId",e.FORM_GROUP_ID)("form",e.form)("fields",e.fields)("initialModel",e.initialModel)("options",e.options)("filter",!0))},directives:[C.a,C.d,C.g,E.b,C.c,v.a],pipes:[I.c],styles:[".mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:16px}.mat-card[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),i),O=c("bv9b"),T=c("+0xr"),P=c("5/t5"),F=c("M9IT");function R(t,e){1&t&&h.Pb(0,"mat-progress-bar",2)}function w(t,e){if(1&t&&(h.Sb(0),h.Dc(1,R,1,0,"mat-progress-bar",1),h.Rb()),2&t){var a=e.ngIf,n=h.gc();h.Cb(1),h.mc("ngIf",a===n.dataStateTypes.LOADING||a===n.dataStateTypes.REFRESHING)}}function U(t,e){1&t&&(h.Ub(0,"th",17),h.Fc(1),h.hc(2,"translate"),h.Tb()),2&t&&(h.Cb(1),h.Gc(h.ic(2,1,"EPISODES.FIELDS.NUM")))}var L=function(t){return["/episodes",t]};function k(t,e){if(1&t&&(h.Ub(0,"td",18),h.Fc(1),h.Tb()),2&t){var a=e.$implicit;h.mc("routerLink",h.pc(2,L,a.id)),h.Cb(1),h.Hc(" ",a.id," ")}}function $(t,e){1&t&&(h.Ub(0,"th",17),h.Fc(1),h.hc(2,"translate"),h.Tb()),2&t&&(h.Cb(1),h.Gc(h.ic(2,1,"EPISODES.FIELDS.EPISODE")))}function _(t,e){if(1&t&&(h.Ub(0,"td",18),h.Fc(1),h.Tb()),2&t){var a=e.$implicit;h.mc("routerLink",h.pc(2,L,a.id)),h.Cb(1),h.Hc(" ",a.episode," ")}}function H(t,e){1&t&&(h.Ub(0,"th",17),h.Fc(1),h.hc(2,"translate"),h.Tb()),2&t&&(h.Cb(1),h.Gc(h.ic(2,1,"EPISODES.FIELDS.NAME")))}function M(t,e){if(1&t&&(h.Ub(0,"td",18),h.Fc(1),h.Tb()),2&t){var a=e.$implicit;h.mc("routerLink",h.pc(2,L,a.id)),h.Cb(1),h.Hc(" ",a.name," ")}}function A(t,e){1&t&&(h.Ub(0,"th",17),h.Fc(1),h.hc(2,"translate"),h.Tb()),2&t&&(h.Cb(1),h.Gc(h.ic(2,1,"EPISODES.FIELDS.AIR_DATE")))}function G(t,e){if(1&t&&(h.Ub(0,"td",19),h.Fc(1),h.Tb()),2&t){var a=e.$implicit;h.Cb(1),h.Gc(a.air_date)}}function N(t,e){1&t&&(h.Ub(0,"th",17),h.Fc(1),h.hc(2,"translate"),h.Tb()),2&t&&(h.Cb(1),h.Gc(h.ic(2,1,"EPISODES.FIELDS.CHARACTERS")))}var j=function(t){return{number:t}};function x(t,e){if(1&t){var a=h.Vb();h.Ub(0,"td",19),h.Ub(1,"button",20),h.cc("click",(function(){h.uc(a);var t=e.$implicit;return h.gc(2).openCharactersDialog(t)})),h.Fc(2),h.hc(3,"translate"),h.Tb(),h.Tb()}if(2&t){var n=e.$implicit;h.Cb(1),h.mc("disabled",n.characters.length<1),h.Cb(1),h.Hc(" ",h.jc(3,2,null!=n.characters&&n.characters.length?"EPISODES.CHARACTERS":"EPISODES.NO_CHARACTERS",h.pc(5,j,null==n.characters?null:n.characters.length))," ")}}function z(t,e){1&t&&h.Pb(0,"tr",21)}function V(t,e){if(1&t){var a=h.Vb();h.Ub(0,"tr",22),h.cc("prefetch",(function(){h.uc(a);var t=e.$implicit;return h.gc(2).prefetchCharactersOnHover(t)})),h.Tb()}2&t&&h.mc("prefetchHovered",!0)}function B(t,e){if(1&t){var a=h.Vb();h.Ub(0,"mat-paginator",23),h.cc("page",(function(t){return h.uc(a),h.gc(2).changePage(t)})),h.hc(1,"async"),h.hc(2,"async"),h.Tb()}if(2&t){var n=h.gc(2);h.mc("pageIndex",h.ic(1,3,n.currentPage$)-1)("length",h.ic(2,5,n.totalEpisodes$))("pageSize",n.pageSize)}}function J(t,e){if(1&t&&(h.Sb(0),h.Ub(1,"div",3),h.Ub(2,"div",4),h.Ub(3,"table",5),h.Sb(4,6),h.Dc(5,U,3,3,"th",7),h.Dc(6,k,2,4,"td",8),h.Rb(),h.Sb(7,9),h.Dc(8,$,3,3,"th",7),h.Dc(9,_,2,4,"td",8),h.Rb(),h.Sb(10,10),h.Dc(11,H,3,3,"th",7),h.Dc(12,M,2,4,"td",8),h.Rb(),h.Sb(13,11),h.Dc(14,A,3,3,"th",7),h.Dc(15,G,2,1,"td",12),h.Rb(),h.Sb(16,13),h.Dc(17,N,3,3,"th",7),h.Dc(18,x,4,7,"td",12),h.Rb(),h.Dc(19,z,1,0,"tr",14),h.Dc(20,V,1,1,"tr",15),h.Tb(),h.Tb(),h.Dc(21,B,3,7,"mat-paginator",16),h.Tb(),h.Rb()),2&t){var a=e.ngIf,n=h.gc();h.Cb(3),h.mc("dataSource",a),h.Cb(16),h.mc("matHeaderRowDef",n.displayedColumns),h.Cb(1),h.mc("matRowDefColumns",n.displayedColumns),h.Cb(1),h.mc("ngIf",!!a.length)}}var X,q=((X=function(){function e(a,n,c){t(this,e),this.store=a,this.router=n,this.dialog=c,this.dataState$=this.store.select(m.d.getDataState),this.episodes$=this.store.select(m.d.getEpisodes),this.totalEpisodes$=this.store.select(m.d.getTotalEpisodes),this.currentPage$=this.store.select(m.d.getCurrentPage),this.dataStateTypes=d.d,this.pageSize=d.f,this.displayedColumns=["id","episode","name","air_date","characters"],this.hoverEpisode$=new l.a}return a(e,[{key:"ngOnInit",value:function(){var t=this;this.hoverEpisode$.pipe(Object(p.h)(this),Object(b.a)(300),Object(f.a)((function(t){return t.id}))).subscribe((function(e){return t.store.dispatch(m.b.hoverEpisodeLine({episode:e}))}))}},{key:"prefetchCharactersOnHover",value:function(t){this.hoverEpisode$.next(t)}},{key:"changePage",value:function(t){this.router.navigate([],{queryParams:{page:t.pageIndex+1},queryParamsHandling:"merge"})}},{key:"openCharactersDialog",value:function(t){this.dialog.open(u.a,{data:{title:t.name,characterIds:t.characters}})}},{key:"ngOnDestroy",value:function(){this.dialog.closeAll()}}]),e}()).\u0275fac=function(t){return new(t||X)(h.Ob(g.h),h.Ob(s.f),h.Ob(S.b))},X.\u0275cmp=h.Ib({type:X,selectors:[["app-episodes-list"]],decls:5,vars:6,consts:[[4,"ngIf"],["class","progress-bar--top","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"progress-bar--top"],[1,"content"],[1,"table-responsive"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","pointer-cursor",3,"routerLink",4,"matCellDef"],["matColumnDef","episode"],["matColumnDef","name"],["matColumnDef","air_date"],["mat-cell","",4,"matCellDef"],["matColumnDef","characters"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"prefetchHovered","prefetch",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageIndex","length","pageSize","page",4,"ngIf"],["mat-header-cell",""],["mat-cell","",1,"pointer-cursor",3,"routerLink"],["mat-cell",""],["mat-stroked-button","","color","primary",1,"characters-button",3,"disabled","click"],["mat-header-row",""],["mat-row","",3,"prefetchHovered","prefetch"],["showFirstLastButtons","",3,"pageIndex","length","pageSize","page"]],template:function(t,e){1&t&&(h.Pb(0,"app-episodes-filter-form"),h.Dc(1,w,2,1,"ng-container",0),h.hc(2,"async"),h.Dc(3,J,22,4,"ng-container",0),h.hc(4,"async")),2&t&&(h.Cb(1),h.mc("ngIf",h.ic(2,2,e.dataState$)),h.Cb(2),h.mc("ngIf",h.ic(4,4,e.episodes$)))},directives:[y,r.l,O.a,T.j,T.c,T.e,T.b,T.g,T.i,T.d,T.a,s.g,E.b,T.f,T.h,P.a,F.a],pipes:[r.b,I.c],styles:[".content[_ngcontent-%COMP%]{margin-top:24px}.pointer-cursor[_ngcontent-%COMP%]{cursor:pointer}.characters-button[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),X),Y=c("SRnY"),K=c("f0Cb"),Q=c("HQHz");function W(t,e){1&t&&h.Pb(0,"mat-progress-bar",2)}function Z(t,e){if(1&t&&(h.Sb(0),h.Dc(1,W,1,0,"mat-progress-bar",1),h.Rb()),2&t){var a=e.ngIf,n=h.gc();h.Cb(1),h.mc("ngIf",a===n.dataStateTypes.LOADING||a===n.dataStateTypes.REFRESHING)}}function tt(t,e){1&t&&h.Pb(0,"mat-progress-bar",6)}function et(t,e){if(1&t&&(h.Ub(0,"div",10),h.Pb(1,"app-character-mini-card",11),h.Tb()),2&t){var a=e.$implicit;h.Cb(1),h.mc("character",a)}}function at(t,e){if(1&t&&(h.Sb(0),h.Dc(1,et,2,1,"div",9),h.Rb()),2&t){var a=h.gc().ngIf,n=h.gc(3);h.Cb(1),h.mc("ngForOf",a)("ngForTrackBy",null==n.character?null:n.character.id)}}function nt(t,e){1&t&&(h.Ub(0,"p"),h.Fc(1),h.hc(2,"translate"),h.Tb()),2&t&&(h.Cb(1),h.Gc(h.ic(2,1,"EPISODES.NO_CHARATERS")))}function ct(t,e){if(1&t&&h.Dc(0,nt,3,3,"p",0),2&t){var a=h.gc(2).ngIf,n=h.gc(2);h.mc("ngIf",a===n.dataStateTypes.LOADED)}}function it(t,e){if(1&t&&(h.Sb(0),h.Dc(1,at,2,2,"ng-container",7),h.Dc(2,ct,1,1,"ng-template",null,8,h.Ec),h.Rb()),2&t){var a=e.ngIf,n=h.sc(3);h.Cb(1),h.mc("ngIf",!!a.length)("ngIfElse",n)}}function rt(t,e){if(1&t&&(h.Ub(0,"div",4),h.Dc(1,tt,1,0,"mat-progress-bar",5),h.Dc(2,it,4,2,"ng-container",0),h.hc(3,"async"),h.Tb()),2&t){var a=e.ngIf,n=h.gc(2);h.Cb(1),h.mc("ngIf",a===n.dataStateTypes.LOADING),h.Cb(1),h.mc("ngIf",h.ic(3,2,n.characters$))}}var ot=function(t){return{name:t}};function st(t,e){if(1&t&&(h.Sb(0),h.Ub(1,"h1"),h.Fc(2),h.Tb(),h.Pb(3,"mat-divider"),h.Ub(4,"mat-card"),h.Ub(5,"h2"),h.Fc(6),h.hc(7,"translate"),h.Tb(),h.Dc(8,rt,4,4,"div",3),h.hc(9,"async"),h.Tb(),h.Rb()),2&t){var a=e.ngIf,n=h.gc();h.Cb(2),h.Jc("",a.episode,": ",a.name," (",a.air_date,")"),h.Cb(4),h.Gc(h.jc(7,5,"EPISODES.EPISODE_CHARACTERS",h.pc(10,ot,a.name))),h.Cb(2),h.mc("ngIf",h.ic(9,8,n.charactersDataState$))}}var lt,bt,ft,dt=[{path:"",component:q},{path:":id",component:(lt=function(){function e(a){t(this,e),this.store=a,this.dataState$=this.store.select(m.d.getDataState),this.episode$=this.store.select(m.d.getSelectedEpisode),this.charactersDataState$=this.store.select(Y.a.getDataState),this.characters$=this.store.select(Y.a.getCharactersOfSelectedEpisode),this.dataStateTypes=d.d}return a(e,[{key:"ngOnInit",value:function(){}}]),e}(),lt.\u0275fac=function(t){return new(t||lt)(h.Ob(g.h))},lt.\u0275cmp=h.Ib({type:lt,selectors:[["app-episode-details"]],decls:4,vars:6,consts:[[4,"ngIf"],["class","progress-bar--top","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"progress-bar--top"],["class","row",4,"ngIf"],[1,"row"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"],[4,"ngIf","ngIfElse"],["emptyCharacters",""],["class","col-12 col-md-6",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-12","col-md-6"],[3,"character"]],template:function(t,e){1&t&&(h.Dc(0,Z,2,1,"ng-container",0),h.hc(1,"async"),h.Dc(2,st,10,12,"ng-container",0),h.hc(3,"async")),2&t&&(h.mc("ngIf",h.ic(1,2,e.dataState$)),h.Cb(2),h.mc("ngIf",h.ic(3,4,e.episode$)))},directives:[r.l,O.a,K.a,C.a,r.k,Q.a],pipes:[r.b,I.c],styles:[".mat-divider[_ngcontent-%COMP%]{margin-bottom:24px}"],changeDetection:0}),lt)}],pt=((ft=function e(){t(this,e)}).\u0275mod=h.Mb({type:ft}),ft.\u0275inj=h.Lb({factory:function(t){return new(t||ft)},imports:[[s.j.forChild(dt)],s.j]}),ft),mt=((bt=function e(){t(this,e)}).\u0275mod=h.Mb({type:bt}),bt.\u0275inj=h.Lb({factory:function(t){return new(t||bt)},imports:[[r.c,pt,o.a]]}),bt)}}])}();