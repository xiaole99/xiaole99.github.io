document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
        for (let i = 0; i < 3; i++) { // Create 3 meteors
            const meteor = document.createElement("div");
            meteor.classList.add("meteor");
            // Set random starting positions and animation delays for more variety if needed
            // The CSS already handles different delays for the first 3 meteors
            // If more meteors are added, their styles would need to be defined in CSS or dynamically here
            heroSection.appendChild(meteor);
        }
    }

    // Placeholder for future JS, e.g., fetching content for publications, dynamic links
    // Update profile links if actual URLs are found later
    const orcid = "0000-0002-8357-4629";
    const orcidLink = document.getElementById("orcid-link");
    if (orcidLink) {
        orcidLink.href = `https://orcid.org/${orcid}`;
    }

    // Example: If Google Scholar link is found (currently skipped)
    // const googleScholarId = "DCUoyukAAAAJ"; 
    // const gScholarLink = document.getElementById("gscholar-link");
    // if (gScholarLink) {
    //     gScholarLink.href = `https://scholar.google.com/citations?user=${googleScholarId}`;
    // }
});
