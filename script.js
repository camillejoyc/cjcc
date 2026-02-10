document.addEventListener("DOMContentLoaded", () => {
    const aboutMeDescription = `
        Digital Analytics, Tag Management, and QA Specialist with 14 years of experience in
digital advertising and analytics. Expert in Adobe Experience Platform, GTM, GA4, and
QA methodologies. Skilled in leading tagging strategy, data governance, and
cross-functional implementation for enterprise websites and campaigns. Known for
sharp troubleshooting, technical coaching, and ensuring data quality across platforms.

    `;

    const textElement = document.getElementById('about-text');
    
    // Inject the text
    textElement.textContent = aboutMeDescription;

    // Small interaction: Log a message when the portfolio button is clicked
    const portfolioBtn = document.querySelector('.btn');
    portfolioBtn.addEventListener('click', () => {
        console.log("Redirecting to portfolio...");
    });
});