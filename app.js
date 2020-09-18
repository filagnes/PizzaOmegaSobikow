 document.addEventListener("DOMContentLoaded", function() {

    // read more-less
    const readMoreLessBtn = document.querySelector(".read-more-less-btn");
    const additionalText = document.querySelector(".additional-paragraph");

    readMoreLessBtn.addEventListener("click", function() {
        if (additionalText.style.display === "none" || additionalText.style.display === "") {
            additionalText.style.display = "block";
            readMoreLessBtn.textContent = "Czytaj mniej";
        } else {
            additionalText.style.display = "none";
            readMoreLessBtn.textContent = "Czytaj więcej";
        }
    });

    // go-up button //

    const goUpBtn = document.querySelector(".go-up i");

    goUpBtn.addEventListener("click", function() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
});
