var discount=document.getElementById("discount");
var closeicon = document.getElementById("close-icon");

closeicon.addEventListener("click",function(){
    discount.style.display="none";
})

// Scroll to New Arrival section
    var newArrivalBtn = document.getElementById('New-Arrival-Btn');
    var newArrivalSection = document.getElementById('New-Arrival');
    if (newArrivalBtn && newArrivalSection) {
        newArrivalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            newArrivalSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Scroll to Most Wanted section
    var mostWantedBtn = document.getElementById('Most-Wanted-Btn');
    var mostWantedSection = document.getElementById('Most-Wanted-Section');
    if (mostWantedBtn && mostWantedSection) {
        mostWantedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mostWantedSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

