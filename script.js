const certificates = [

    "../assets/Internship_1.jpeg",

    "../assets/Internship_2.jpeg"

];

let current = 0;

const image = document.getElementById("certificateImage");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

function showCertificate(){

    image.src = certificates[current];

}

nextBtn.addEventListener("click", function(){

    if(current < certificates.length - 1){

        current++;

        showCertificate();

    }

});

prevBtn.addEventListener("click", function(){

    if(current > 0){

        current--;

        showCertificate();

    }

});

showCertificate();