📄 README – CV Web de Cyril Hermantin
Table des matières
À propos du projet
Structure du dépôt
Installation locale (optionnel)
Déploiement sur GitHub Pages
Fonctionnalités principales
Comment ajouter / modifier du contenu
QR Code – deux implémentations possibles
Licence
Contact
À propos du projet
Ce dépôt contient le CV interactif de Cyril Hermantin, économiste de la construction‑métrieur, présenté sous forme d’une page web statique (HTML + CSS + JavaScript).
Le CV est hébergé sur GitHub Pages à l’adresse :

https://cyrilhermantin-create.github.io/cv-cyril-hermantin/
Il inclut :

Un design responsive (mobile / desktop).
Un bouton permettant de télécharger le CV au format PDF.
Une section Lettre de recommandation (extrait + lien de téléchargement).
Un lien vers le profil LinkedIn de Cyril.
Un QR Code scannable qui redirige vers le CV en ligne (ou vers le profil LinkedIn).
Structure du dépôt
├── index.html          ← Page principale du CV
├── style.css           ← Feuille de style globale
├── script.js           ← Logique JavaScript (pdf download, QR code)
├── Lettre_de_recommandation_1.pdf   ← Lettre de recommandation (PDF)
├── js/
│   └── qrcode.min.js  ← Bibliothèque QRCode.js (optionnelle)
└── README.md           ← Vous êtes ici
index.html : contient toutes les sections du CV (profil, expériences, compétences, recommandation, etc.).
style.css : variables de thème, mise en page, responsive.
script.js : fonction de génération du PDF et, si vous choisissez l’option locale, initialisation du QR Code.
qrcode.min.js : uniquement requis si vous utilisez la solution « QR Code en local ».
Installation locale (optionnel)
Cette étape n’est pas obligatoire pour visualiser le CV en ligne, mais elle est utile si vous souhaitez le tester/modifier hors connexion.

Cloner le dépôt

git clone https://github.com/cyrilhermantin-create/cv-cyril-hermantin.git
cd cv-cyril-hermantin
Ouvrir le fichier
Double‑clic sur index.html ou lancez un serveur local :

python -m http.server 8000   # puis ouvrez http://localhost:8000
Modifier le contenu
Editez index.html, style.css ou script.js avec votre éditeur préféré.

Déploiement sur GitHub Pages
Pousser les changements

git add .
git commit -m "Mise à jour du CV"
git push origin main
Activer GitHub Pages (si ce n’est pas déjà fait) :

Allez dans le dépôt → Settings → Pages.
Source : Branch: main → / (root).
Sauvegardez. GitHub générera l’URL du site (voir section À propos du projet).
Vérifier que le QR Code pointe bien vers l’URL affichée. Si vous avez changé le nom du dépôt ou le chemin, mettez‑à‑jour l’URL dans le code (voir section QR Code).

Fonctionnalités principales
Fonction	Description	Où le trouver
Header	Nom, titre, coordonnées, lien LinkedIn	index.html → <header>
Profil	Bref résumé professionnel	index.html → section Profil
Missions Métrieur	Liste des tâches d’économiste‑construction	index.html → section Missions d’économiste
Expériences	Historique professionnel (details collapsibles)	index.html → <details>
Formations & habilitations	Diplômes, certifications, nouvelles habilitations SST & H0B0 (2025)	index.html → section Formations & Certifications
Compétences techniques	Logiciels, méthodes, savoir‑faire	index.html → section Compétences techniques
Lettre de recommandation	Extrait + bouton de téléchargement du PDF complet	index.html → section Recommandation professionnelle
Bouton PDF	Génère un PDF du CV via html2pdf.js	script.js → downloadBtn
QR Code	Redirige vers le CV en ligne (ou LinkedIn)	index.html (Google Chart) ou script.js + qrcode.min.js
Footer	Copyright & mentions légales	index.html → <footer>
Comment ajouter / modifier du contenu
Texte : éditez directement le HTML entre les balises <section> correspondantes.
Nouvelle expérience : copiez un bloc <details> existant, modifiez le titre et la liste des tâches.
Ajout d’une image (ex. photo, logo) : placez le fichier image dans le dépôt (ex. assets/photo.jpg) puis insérez <img src="assets/photo.jpg" alt="Photo de Cyril"> où vous le désirez.
Mettre à jour le QR Code :
Google Chart – changez l’URL dans l’attribut src de l’image.
QRCode.js – modifiez la variable url dans script.js.
Après chaque modification, commit et push pour que GitHub Pages reflète les changements.

QR Code – deux implémentations possibles
1️⃣ QR Code via l’API Google Chart (solution la plus courte)
<img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https%3A%2F%2Fcyrilhermantin-create.github.io%2Fcv-cyril-hermantin%2F&choe=UTF-8"
     alt="QR code vers le CV de Cyril Hermantin"
     class="qr-code">
Pas de fichier supplémentaire à ajouter.

2️⃣ QR Code généré en local avec QRCode.js (privacy‑first)
Ajouter le script js/qrcode.min.js (CDN ou copie locale).
Conteneur HTML
<div id="qrContainer" class="qr-wrapper"></div>
Initialisation dans script.js (déjà fournie) – modifiez la variable url si vous voulez pointer vers le profil LinkedIn plutôt que le CV.
Choisissez la méthode qui correspond le mieux à vos exigences de confidentialité et de dépendances externes.

Licence
Ce projet est publié sous licence MIT – vous êtes libre de le copier, le modifier et le redistribuer, à condition de conserver le copyright original. Voir le fichier LICENSE (à créer si vous le désirez).

Contact
Cyril Hermantin – cyril.hermantin@gmail.com
LinkedIn : https://www.linkedin.com/in/cyril-hermantin-157617201
GitHub : https://github.com/cyrilhermantin-create
N’hésitez pas à ouvrir une issue ou à proposer une pull request si vous voyez une amélioration à apporter au CV.

Bonne navigation ! 🚀
