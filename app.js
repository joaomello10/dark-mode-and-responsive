const html = document.querySelector("html");
const checkbox = document.querySelector("#checkbox");
const theme = localStorage.getItem("theme");

let items = [
  "img/foto-1.jpeg",
  "img/foto-2.jpeg",
  "img/foto-3.jpeg",
  "img/foto-4.jpeg",
];

if (theme !== null) {
  html.classList.add(theme);
} else {
  localStorage.setItem("theme", "light-mode");
  html.classList.add("light-mode");
}

if (theme == "dark-mode") {
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  const CSSclass = html.classList[0];
  if (CSSclass == "dark-mode") {
    localStorage.setItem("theme", "light-mode");
    html.classList.remove("dark-mode");
    html.classList.add("light-mode");
  } else {
    localStorage.setItem("theme", "dark-mode");
    html.classList.add("dark-mode");
    html.classList.remove("light-mode");
  }
});

function createItems() {
  items.forEach((src) => {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `<div>
    <h1>Title</h1>
    <img src="${src}">
</div>
<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nesciunt quaerat possimus delectus
        sapiente facere officiis magnam, at iusto soluta ducimus totam, saepe sequi, aliquid dolor quasi fuga.
        Architecto optio, quidem dicta repellendus inventore nisi laboriosam minima eligendi odio porro amet
        facere deserunt et consectetur. Veniam, laudantium labore molestias officia est nesciunt facere cupiditate
        incidunt eaque dolor blanditiis recusandae quaerat voluptatibus aut saepe? Est vitae, cum aliquam iste
        dicta rem repellendus ab eaque possimus tenetur non, reprehenderit exercitationem culpa sint!</p>
</div>`;

    document.querySelector("#items").append(div);
  });
}

createItems();
