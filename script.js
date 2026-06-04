const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));



const detailButtons = document.querySelectorAll('.service-btn');

detailButtons.forEach(button => {

    button.addEventListener('click', () => {

        const serviceCard = button.closest('.service-item');

        serviceCard.classList.toggle('active');

        if(serviceCard.classList.contains('active')){
            button.textContent = 'Hide Details';
        }else{
            button.textContent = 'More Details';
        }

    });

});





document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("teamModal");

    const modalName = document.getElementById("modalName");
    const modalRole = document.getElementById("modalRole");
    const modalDesc = document.getElementById("modalDesc");
    const modalQuote = document.getElementById("modalQuote");
    const modalImage = document.getElementById("modalImage");

    document.querySelectorAll(".team-info-btn").forEach(btn => {

        btn.addEventListener("click", function () {

            modalName.textContent = this.dataset.name;
            modalRole.textContent = this.dataset.role;
            modalDesc.textContent = this.dataset.desc;
            modalQuote.textContent = this.dataset.quote;
            modalImage.src = this.dataset.image;

            modal.classList.add("show");
        });

    });

    document.querySelector(".team-close").addEventListener("click", () => {
        modal.classList.remove("show");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });


    document.querySelector(".team-close-btn").addEventListener("click", () => {
    document.getElementById("teamModal").classList.remove("show");
});

});



