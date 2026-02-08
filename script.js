const scripts = [

  {
    title: "Auto Farm",
    desc: "Farm otomatis super cepat",
    color: "#1e1e1e",
    glow: "#00ffcc",
    btn1: "Download",
    link1: "https://google.com",
    btn2: "Guide",
    link2: "https://youtube.com"
  },

  {
    title: "Auto BP",
    desc: "Ambil BP otomatis",
    color: "#2b1457",
    glow: "#9d4dff",
    btn1: "Download",
    link1: "https://github.com",
    btn2: "Discord",
    link2: "https://discord.com"
  }

];



const container = document.getElementById("list");

scripts.forEach(item => {

  const card = document.createElement("div");
  card.className = "card";

  card.style.background = item.color;
  card.style.setProperty('--glow', item.glow);

  card.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.desc}</p>
    <div class="btns">
      <a href="${item.link1}" class="btn btn1" target="_blank">${item.btn1}</a>
      <a href="${item.link2}" class="btn btn2" target="_blank">${item.btn2}</a>
    </div>
  `;

  container.appendChild(card);
});
