const $=s=>document.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let cat="all",q="";
function render(){
  const list=PROJECTS.filter(p=>(cat==="all"||p.cat===cat)&&(p.name+p.desc+p.tags.join(" ")).toLowerCase().includes(q));
  $("#grid").innerHTML=list.map(p=>{
    const tag=p.url?`<a class="badge pub" href="${esc(p.url)}" target="_blank" rel="noopener">Público · ver código</a>`:`<span class="badge">Privado</span>`;
    return `<article class="card reveal in"><div class="meta"><span>${esc(CATS[p.cat])}</span>${tag}</div><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div></article>`}).join("")||"<p style='color:var(--mut)'>Nenhum projeto encontrado.</p>";
  $("#count").textContent=list.length;
}
$("#filters").innerHTML=Object.entries(CATS).map(([k,v])=>`<button class="chip ${k==="all"?"on":""}" data-k="${k}">${v}</button>`).join("")+`<input type="search" id="q" placeholder="Buscar projeto ou tecnologia" aria-label="Buscar">`;
$("#filters").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;cat=b.dataset.k;document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",c===b));render()});
$("#q").addEventListener("input",e=>{q=e.target.value.toLowerCase();render()});
$("#caselist").innerHTML=CASES.map(c=>`<article class="card case reveal in"><span class="num">CASE ${c.n}</span><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p><ul>${c.h.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><div class="tags">${c.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div><a class="more" href="${c.u}/">Ver detalhes →</a></article>`).join("");
$("#total").textContent=PROJECTS.length+CASES.length;
render();
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
