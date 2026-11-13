const filterButtons = document.querySelectorAll(".filter-buttons button");
const machineCards = document.querySelectorAll(".machine-card");

filterButtons.forEach(button => {
    button.addEventListener("click", function() {

        const selectedFilter = this.dataset.filter;

        machineCards.forEach(card => {

            const cardPlanet= card.dataset.planet;

            if(selectedFilter === "all" || selectedFilter === cardPlanet){
                card.style.display = "block";
            }
            else {
                card.style.display="none";
            }

        });

        filterButtons.forEach(btn =>{
            btn.classList.remove("active");
        });

        this.classList.add("active");
    });
});