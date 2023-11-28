
let pass=document.getElementById("password")
let down=document.getElementById("downloadButton")
let wrong=document.getElementById("wrong")
let toping =document.querySelector("#learnMoreButton")
down.addEventListener("click", function () {
    pass.style.display="block"
pass.addEventListener("change",(e)=>{
    if(e.target.value=="2417"){
        var resumePath = 'FatimaTabassumlect.docx';

    // Creating a temporary link element
    var link = document.createElement('a');
    link.href = resumePath;
    
    // Setting the download attribute with the filename
    link.download = 'FatimaTabassumlect.docx';

    // Appending the link to the document
    document.body.appendChild(link);

    // Triggering the click event to initiate the download
    link.click();

    // Removing the link from the document
    document.body.removeChild(link);
    }
   
else{
        wrong.style.display="block"
        wrong.innerHTML='Wrong Key! Cannot Download'
        if(wrong.style.display=="block"){
            setTimeout(() => {wrong.style.display="none"
        },5000)
        }
        }    
    
})
})
    
    
pass.addEventListener('blur', function () {
    pass.style.display = 'none';
}); 







function showCertificate(id) {
    var certificateImage = document.getElementById(id);
    // certificateImage.style.display = certificateImage.style.display === 'none' ? 'block' : 'none';
    if(certificateImage.style.display==='none'){
        certificateImage.style.display='block'
    }
    else{
        certificateImage.style.display='none'
    }
}
 let succes= document.getElementById("successfully")
   // You can add JavaScript for form validation or submission handling here
   document.getElementById('contactForm').addEventListener('submit', function (event) {
alert("Sent Sucessfully! Can Go Through My Resume Key:2417")
})
   
   