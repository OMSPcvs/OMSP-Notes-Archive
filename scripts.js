function downloadPDF(pdfLink) {
    const link = document.createElement('a');
    link.href = pdfLink;
    link.download = ''; // Leave this empty to allow Google Drive to handle the filename
    link.click();
}

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.subject-button, h2, p');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }
    });
});