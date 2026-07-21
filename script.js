const certificates = [

    "../assets/internship_1.jpeg",

    "../assets/internship_2.jpeg"

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