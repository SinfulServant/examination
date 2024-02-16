import{A as q}from"./ApiTests.service-773a25f0.js";import{S as R}from"./Spiner-db7fe4fe.js";import{_ as A,o as S,r as m,b as l,d as r,e as n,t as v,F as g,f as C,w as B,k as N,j as $,i as w,l as I,p as V,m as j,n as M,q as Q,h as y,s as k,g as O,x as L}from"./index-36b0b8a7.js";const U={id:"question",class:"p-3 w-[400px] border rounded-lg my-2"},D={class:"text-center text-slate-300 py-2"},E={class:"px-2"},F=["onChange","disabled","onUpdate:modelValue"],P={key:0,class:"icon-cancel-squared text-red-500 float-right"},z={key:1,class:"icon-ok-squared text-green-500 float-right"},Y={__name:"Question",props:{question:Object,questionTitle:Array,questionNumber:Number,toShowResult:Boolean,canBeSeveralAnswers:Boolean},emits:["sendAnswers"],setup(u,{emit:i}){const s=u;S(()=>{d()});const c=i,t=m({});function a(h,_){if(!s.canBeSeveralAnswers){for(let o in t.value)t.value[o]=!1;t.value[_]=!0}x()}function d(){s.question.options.forEach((h,_)=>{t.value[_]=!1})}function x(){console.log(t.value[s.question.correctAnswer-1]),t.value[s.question.correctAnswer-1]?c("sendAnswers",!0):c("sendAnswers",!1)}return(h,_)=>(l(),r("div",U,[n("h3",D,[n("strong",null,v(s.questionTitle[u.questionNumber]),1)]),(l(!0),r(g,null,C(u.question.options,(o,e)=>(l(),r("div",{key:o,class:"flex flex-row justify-between"},[n("label",E,[B(n("input",{onChange:p=>a(p,e),value:"index",type:"checkbox",disabled:s.toShowResult,"onUpdate:modelValue":p=>t.value[e]=p},null,40,F),[[N,t.value[e]]]),$(" "+v(o),1)]),s.toShowResult?(l(),r(g,{key:0},[e+1!==s.question.correctAnswer&&t.value[e]?(l(),r("i",P)):w("",!0),e+1==s.question.correctAnswer&&t.value[e]?(l(),r("i",z)):w("",!0)],64)):w("",!0)]))),128))]))}},G=A(Y,[["__scopeId","data-v-a1216c6c"]]);const H=u=>(V("data-v-a5878872"),u=u(),j(),u),J={class:"h-[200px] w-[350px] bg-zinc-900 relative p-[8px] flex items-center justify-around flex-col rounded"},K=H(()=>n("div",{id:"close"},null,-1)),W={__name:"ModalTemplate",emits:["toClose"],setup(u,{emit:i}){const s=i;function c(t){const a=t.target.id;(a==="bg-modal"||a==="close")&&s("toClose")}return(t,a)=>(l(),r("div",{onClick:a[0]||(a[0]=d=>c(d)),id:"bg-modal",class:"h-screen w-scree flex justify-center items-center fixed inset-0"},[n("div",J,[K,I(t.$slots,"default",{},void 0,!0)])]))}},X=A(W,[["__scopeId","data-v-a5878872"]]),Z={class:"text-xl text-center pt-3"},ee={class:"flex gap-3"},te={class:"bg-gray-600 hover:bg-slate-500 px-2 py-1 rounded"},se={class:"min-h-[85vh] py-4 flex flex-col items-center justify-center"},oe={key:0,class:"flex flex-col items-center"},ne={class:"text-2xl py-2"},ue={__name:"PassingTestView",setup(u){const i=m(!1),s=M(),c=m([]),t={},a=m(!1),d=[];S(()=>{x()});async function x(){const o=await q.getTestQuestions(s.query.title);for(let e in o)d.push(`${q.replaceUnderscores(e)}`),c.value.push(o[e])}function h(o,e){t[e]=o}function _(){let o=0;a.value=!0,console.log(t);for(let e in t)t[e]&&o++;return o}return(o,e)=>{const p=Q("RouterLink");return l(),r(g,null,[i.value?(l(),y(X,{key:0,onToClose:e[1]||(e[1]=f=>i.value=!1)},{default:k(()=>[n("h4",Z," You get "+v(_())+" correct answers of the "+v(c.value.length)+" questions! ",1),n("div",ee,[n("button",te,[L(p,{to:"/available-tests"},{default:k(()=>[$("To other tests")]),_:1})]),n("button",{onClick:e[0]||(e[0]=f=>i.value=!1),class:"bg-gray-600 hover:bg-slate-500 px-2 py-1 rounded"}," View the results ")])]),_:1})):w("",!0),n("div",se,[c.value.length?(l(),r("div",oe,[n("h2",ne,v(O(s).query.title),1),(l(!0),r(g,null,C(c.value,(f,b)=>(l(),y(G,{key:f,onSendAnswers:T=>h(T,b),question:f,questionNumber:b,questionTitle:d,toShowResult:a.value,canBeSeveralAnswers:!1},null,8,["onSendAnswers","question","questionNumber","toShowResult"]))),128)),n("button",{onClick:e[2]||(e[2]=f=>i.value=!0),class:"rounded-lg py-1 px-3 bg-slate-600 hover:bg-slate-700"}," Здати тест! ")])):(l(),y(R,{key:1}))])],64)}}};export{ue as default};