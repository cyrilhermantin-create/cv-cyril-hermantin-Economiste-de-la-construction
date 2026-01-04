// Fonction de téléchargement PDF avec html2pdf.js
document.getElementById('downloadBtn').addEventListener('click', () => {
    const element = document.body; // toute la page
    const opt = {
        margin:       0.5,
        filename:     'CV_Cyril_Hermantin.pdf',
        image:        { type:'jpeg', quality:0.98 },
        html2canvas:  { scale:2 },
        jsPDF:        { unit:'in', format:'a4', orientation:'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});
// Fonction d’initialisation du QR Code
function initQRCode() {
    // Lien vers votre CV (ou LinkedIn) – modifiez si besoin
    const url = "https://cyrilhermantin-create.github.io/cv-cyril-hermantin/";

    // Nettoyer le conteneur au cas où le script serait exécuté plusieurs fois
    const container = document.getElementById("qrContainer");
    container.innerHTML = "";   // reset

    // Crée le QR Code
    new QRCode(container, {
        text: url,
        width: 150,
        height: 150,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H   // haute correction d’erreurs
    });

    // Ajoute une légende sous le QR
    const caption = document.createElement("p");
    caption.className = "qr-caption";
    caption.textContent = "Scannez pour voir le CV en ligne";
    container.appendChild(caption);
}

// Lancer l’initialisation quand le DOM est prêt
document.addEventListener("DOMContentLoaded", initQRCode);
// Gestion du switch manuel du thème
(function () {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;   // safety

    // Au chargement, synchroniser l’état avec le thème système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggle.checked = prefersDark;

    // Appliquer la classe "dark" sur <html> lorsqu’on coche la case
    toggle.addEventListener('change', function () {
        if (this.checked) {
            document.documentElement.classList.add('manual-dark');
        } else {
            document.documentElement.classList.remove('manual-dark');
        }
    });
})();
