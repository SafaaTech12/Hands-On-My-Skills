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
    let file = event.target.files[0]; 
    if (file) {
        let reader = new FileReader(); 
        reader.onload = function(e) {
            document.getElementById("profileImage").src = e.target.result; 
        };
        reader.readAsDataURL(file); 
    }
});