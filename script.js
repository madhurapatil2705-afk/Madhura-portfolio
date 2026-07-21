const image = document.getElementById("certificateImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (image && prevBtn && nextBtn) {

    const certificates = [
        "../assets/Internship_1.jpeg",
        "../assets/Internship_2.jpeg"
    ];

    let current = 0;

    function showCertificate() {
        image.src = certificates[current];
    }

    nextBtn.addEventListener("click", () => {
        if (current < certificates.length - 1) {
            current++;
            showCertificate();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (current > 0) {
            current--;
            showCertificate();
        }
    });

    showCertificate();
}