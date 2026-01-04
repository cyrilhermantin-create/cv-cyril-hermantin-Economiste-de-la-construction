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
    const url = "https://cyrilhermantin-create.github.io/cv-cyril-hermantin-Economiste-de-la-construction/";

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
/* ----------------- Scroll‑Spy ----------------- */
function activateNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sticky-nav a');

    const scrollPos = window.scrollY + 120; // offset pour tenir compte du header

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}
window.addEventListener('scroll', activateNavLink);
activateNavLink(); // exécuter au chargement


/* ----------------- Back‑to‑top button ----------------- */
function addBackToTop() {
    const btn = document.createElement('button');
    btn.id = 'backToTop';
    btn.textContent = '↑ Retour en haut';
    btn.title = 'Remonter en haut de la page';
    btn.style.position = 'fixed';
    btn.style.right = '1rem';
    btn.style.bottom = '1rem';
    btn.style.padding = '.6rem .9rem';
    btn.style.background = 'var(--accent)';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    btn.style.opacity = '0';
    btn.style.transition = 'opacity .3s';

    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.style.opacity = (window.scrollY > 300) ? '1' : '0';
    });
}
addBackToTop();

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
