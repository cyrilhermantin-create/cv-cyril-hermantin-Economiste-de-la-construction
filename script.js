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
