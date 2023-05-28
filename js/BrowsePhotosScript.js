let src = "blank";

function forceDown(url, filename) {
    fetch(url).then(function(t) {
      return t.blob().then((b) => {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.setAttribute("download", filename);
        a.click();
      });
    });
  }

document.addEventListener("click", function (e){
    if(e.target.classList.contains("imgButton")){
        src = e.target.getAttribute("src");  
        document.querySelector(".modal-img").src = src;
        document.querySelector(".fullButton").href = src;
        const myModal = new bootstrap.Modal(document.getElementById('modalGallery'));
        myModal.show();
    }
    else if(e.target.classList.contains("dwnButton")){
        forceDown(src, "image");
    }
});