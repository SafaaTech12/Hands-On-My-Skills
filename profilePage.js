//navigate bteween pages
document.getElementById("page1").addEventListener("click", function fin2() {
    document.getElementById("boxPage1").style.display = "block";
    document.getElementById("boxPage2").style.display = "none";
});
document.getElementById("page2").addEventListener("click", function fin2() {
    document.getElementById("boxPage2").style.display = "block";
    document.getElementById("boxPage1").style.display = "none";
});
document.getElementById("inputImage").addEventListener("change", function(event) {
    let file = event.target.files[0]; // Katjib le fichier sélectionné
    if (file) {
        let reader = new FileReader(); // Kayqra fichier
        reader.onload = function(e) {
            document.getElementById("profileImage").src = e.target.result; // Tchangi src dyal l'image
        };
        reader.readAsDataURL(file); // Tqra fichier en tant que Data URL
    }
});