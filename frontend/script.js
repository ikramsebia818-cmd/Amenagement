console.log("JS works");

/* 🔹 TOTALS */
let totalCuisine = 0;
let totalPlacard = 0;
let totalSanitaire = 0;

/* =========================
   🔹 CALCUL CUISINE
========================= */
function calcCuisine() {
  const L = parseFloat(document.getElementById("longueurCuisine").value);
  const l = parseFloat(document.getElementById("largeurCuisine").value);
  const h = parseFloat(document.getElementById("hauteurCuisine").value);
  const prix = parseFloat(document.getElementById("prixCuisine").value);

  if (isNaN(L) || isNaN(l) || isNaN(h) || isNaN(prix)) {
    alert("Remplis tous les champs Cuisine !");
    return;
  }

  const surface = (L * l) + (2 * (L + l) * h);
  const total = surface * prix;

  totalCuisine = total;

  document.getElementById("resCuisine").innerText =
    `Surface: ${surface.toFixed(2)} m² | Total: ${total.toFixed(2)} DA`;
}

/* =========================
   🔹 CALCUL PLACARD
========================= */
function calcPlacard() {
  const L = parseFloat(document.getElementById("longueurPlacard").value);
  const l = parseFloat(document.getElementById("largeurPlacard").value);
  const prix = parseFloat(document.getElementById("prixPlacard").value);

  if (isNaN(L) || isNaN(l) || isNaN(prix)) {
    alert("Remplis les champs Placard !");
    return;
  }

  const surface = L * l;
  const total = surface * prix;

  totalPlacard = total;

  document.getElementById("resPlacard").innerText =
    `Surface: ${surface.toFixed(2)} m² | Total: ${total.toFixed(2)} DA`;
}

/* =========================
   🔹 CALCUL SANITAIRE
========================= */
function calcSanitaire() {
  const L = parseFloat(document.getElementById("longueurSanitaire").value);
  const l = parseFloat(document.getElementById("largeurSanitaire").value);
  const h = parseFloat(document.getElementById("hauteurSanitaire").value);

  const prixSurface = parseFloat(document.getElementById("prixSanitaire").value);

  const nbWC = parseFloat(document.getElementById("nbWC").value) || 0;
  const prixWC = parseFloat(document.getElementById("prixWC").value) || 0;

  const nbLavabo = parseFloat(document.getElementById("nbLavabo").value) || 0;
  const prixLavabo = parseFloat(document.getElementById("prixLavabo").value) || 0;

  if (isNaN(L) || isNaN(l) || isNaN(h) || isNaN(prixSurface)) {
    alert("Remplis les dimensions Sanitaire !");
    return;
  }

  const surface = (L * l) + (2 * (L + l) * h);
  const coutSurface = surface * prixSurface;

  const coutEquipements =
    (nbWC * prixWC) +
    (nbLavabo * prixLavabo);

  const total = coutSurface + coutEquipements;

  totalSanitaire = total;

  document.getElementById("resSanitaire").innerText =
    `Surface: ${surface.toFixed(2)} m² | Matériaux: ${coutSurface.toFixed(2)} DA | Équipements: ${coutEquipements.toFixed(2)} DA | Total: ${total.toFixed(2)} DA`;
}

/* =========================
   🔹 TOTAL GENERAL
========================= */
function calcTotal() {
  const total = totalCuisine + totalPlacard + totalSanitaire;

  document.getElementById("total").innerText =
    `💰 Total Général: ${total.toFixed(2)} DA`;
}

/* =========================
   🔹 SAVE PROJECT
========================= */
function saveProject(name, result) {
  fetch('http://localhost:3000/projects', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, result })
  })
  .then(res => res.json())
  .then(() => loadProjects())
  .catch(err => console.error("Error:", err));
}

/* =========================
   🔹 LOAD PROJECTS
========================= */
function loadProjects() {
  fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => {

      let container = document.getElementById("projects");
      container.innerHTML = "";

      data.forEach(p => {
        container.innerHTML += `
          <div>
            ${p.name} : ${p.result}
          </div>
        `;
      });
    })
    .catch(err => console.error("Error:", err));
}
/* 🔥 SAVE FUNCTIONS */
function saveCuisine() {
  const texte = document.getElementById("resCuisine").innerText;

  if (!texte) {
    alert("Fais le calcul d'abord !");
    return;
  }

  saveProject("Cuisine", texte);
}

/* 🔥 LOAD au démarrage */
loadProjects();