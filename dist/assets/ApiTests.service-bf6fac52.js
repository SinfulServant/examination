import{a as r}from"./Spiner-3219a6e5.js";const a="https://my-json-server.typicode.com/SinfulServant/jsonplaceholder/db/";class n{async getTitles(){try{const e=await r.get(a);return Object.keys(e.data.TESTS)}catch(e){throw e}}formatTitles(e){return e.map(s=>s.split("").map(t=>t!=="_"?t:" ").join(""))}removeSpaces(e){return e.replace(/ /g,"_")}replaceUnderscores(e){return e.replace(/_/g," ")}async getTestQuestions(e){const t=(await r.get(a)).data.TESTS[this.removeSpaces(e)];return(await r.get(t)).data}}const l=new n;export{l as A};
