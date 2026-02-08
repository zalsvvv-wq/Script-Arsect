// DATA SCRIPT
const scripts=[
  // 2 card gratis
  {type:"free", title:"Auto Farm", desc:"Farm otomatis cepat", color:"#121826", glow:"#00ffff", badge:"FREE", btn1:"Download", link1:"https://example.com/download1", btn2:"Guide", link2:"https://example.com/guide1"},
  {type:"free", title:"Auto BP", desc:"Ambil BP otomatis", color:"#102a43", glow:"#00ffff", badge:"FREE", btn1:"Download", link1:"https://example.com/download2", btn2:"Info", link2:"https://example.com/info2"},
  
  // 2 card premium
  {type:"premium", title:"Ultra Bot Pro", desc:"Fitur lengkap sultan", color:"#2a0f0f", glow:"gold", badge:"HOT", btn1:"Buy", link1:"https://example.com/buy1", btn2:"Preview", link2:"https://example.com/preview1"},
  {type:"premium", title:"God Mode", desc:"All fitur unlock", color:"#3b0f0f", glow:"orange", badge:"VIP", btn1:"Buy", link1:"https://example.com/buy2", btn2:"Demo", link2:"https://example.com/demo2"}
];

// FUNCTION CREATE CARD
function createCard(item){
  const card=document.createElement("div");
  card.className="card";
  card.style.setProperty('--bg',item.color);
  card.style.setProperty('--glow',item.glow);
  card.innerHTML=`
    <div class="badge">${item.badge||""}</div>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
    <div class="btns">
      <a href="${item.link1}" target="_blank" class="btn btn1">${item.btn1}</a>
      <a href="${item.link2}" target="_blank" class="btn btn2">${item.btn2}</a>
    </div>
  `;
  // ripple effect on click
  card.addEventListener("click",e=>{
    const ripple=document.createElement("span");
    ripple.className="ripple";
    ripple.style.left=e.offsetX+"px";
    ripple.style.top=e.offsetY+"px";
    card.appendChild(ripple);
    setTimeout(()=>ripple.remove(),500);
  });
  return card;
}

// RENDER CARDS
const freeList=document.getElementById("freeList");
const premiumList=document.getElementById("premiumList");

scripts.forEach(s=>{
  const card=createCard(s);
  if(s.type==="free") freeList.appendChild(card);
  else premiumList.appendChild(card);
});
