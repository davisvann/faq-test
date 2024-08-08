document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".question");

        question.addEventListener("click", () => {
            const answer = item.querySelector(".answer");
            const isVisible = answer.style.display === "block";

            document.querySelectorAll(".answer").forEach(ans => ans.style.display = "none");

            answer.style.display = isVisible ? "none" : "block";
        });
    });
});
