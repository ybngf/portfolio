const $=s=>document.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const LANGS=["pt","en","es"];
let lang=localStorage.getItem("lang")||(navigator.language||"pt").slice(0,2);
if(!LANGS.includes(lang))lang="pt";
let cat="all",q="";
const t=k=>I18N[lang][k];
function proj(p,i){const o=P_I18N[lang]&&P_I18N[lang][i];return{name:(o&&o[0])||p.name,desc:o?o[1]:p.desc,tags:p.tags.map(x=>(T_I18N[lang]||{})[x]||x)}}
function render(){
  const list=PROJECTS.map((p,i)=>({p,l:proj(p,i)})).filter(({p,l})=>(cat==="all"||p.cat===cat)&&(l.name+l.desc+l.tags.join(" ")).toLowerCase().includes(q));
  $("#grid").innerHTML=list.map(({p,l})=>{
    const tag=p.url?`<a class="badge pub" href="${esc(p.url)}" target="_blank" rel="noopener">${t("pub")}</a>`:`<span class="badge">${t("priv")}</span>`;
    return `<article class="card reveal in"><div class="meta"><span>${esc(t("cats")[p.cat])}</span>${tag}</div><h3>${esc(l.name)}</h3><p>${esc(l.desc)}</p><div class="tags">${l.tags.map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div></article>`}).join("")||`<p style='color:var(--mut)'>${t("none")}</p>`;
  $("#count").textContent=list.length;
}
function renderFilters(){
  $("#filters").innerHTML=Object.entries(t("cats")).map(([k,v])=>`<button class="chip ${k===cat?"on":""}" data-k="${k}">${esc(v)}</button>`).join("")+`<input type="search" id="q" value="${esc(q)}" placeholder="${esc(t("search"))}" aria-label="${esc(t("search"))}">`;
  $("#q").addEventListener("input",e=>{q=e.target.value.toLowerCase();render()});
}
function renderCases(){
  const tr=C_I18N[lang];
  $("#caselist").innerHTML=CASES.map((c,i)=>{const x=tr?tr[i]:[c.t,c.d,c.h];return `<article class="card case reveal in"><span class="num">${t("case")} ${c.n}</span><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p><ul>${x[2].map(h=>`<li>${esc(h)}</li>`).join("")}</ul><div class="tags">${c.tags.map(g=>`<span class="tag">${esc(g)}</span>`).join("")}</div><a class="more" href="${c.u}/">${t("more")}</a></article>`}).join("");
}
function apply(){
  document.documentElement.lang={pt:"pt-BR",en:"en",es:"es"}[lang];
  document.title=t("title");document.querySelector('meta[name=description]').content=t("meta");
  document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===lang));
  $("#total").textContent=PROJECTS.length+CASES.length;
  renderFilters();renderCases();render();
}
$("#filters").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;cat=b.dataset.k;renderFilters();render()});
document.querySelector(".lang").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;lang=b.dataset.l;localStorage.setItem("lang",lang);apply()});
apply();
