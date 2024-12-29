document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('Main-Content');
    const cards = document.querySelectorAll('.card');
    const resetButton = document.getElementById('resetCards');
    const waveTransition = document.getElementById('wave-transition');
    const projectContents = document.querySelectorAll('.project-content');

    cards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (!mainContent.classList.contains('hide-cards')) {
                // Hide all cards
                mainContent.classList.add('hide-cards');
                cards.forEach(c => {
                    c.classList.remove('selected');
                    c.style.opacity = '0';
                    c.style.pointerEvents = 'none';
                });
                
                // Show wave transition
                waveTransition.classList.add('active');
                
                setTimeout(() => {
                    // Hide all content sections
                    projectContents.forEach(content => {
                        content.style.display = 'none';
                        content.classList.remove('active');
                    });
                    
                    // Show selected content
                    const contentId = `content-${index + 1}`;
                    const selectedContent = document.getElementById(contentId);
                    if (selectedContent) {
                        selectedContent.style.display = 'block';
                        setTimeout(() => {
                            selectedContent.classList.add('active');
                        }, 100);
                    }
                    
                    // Show reset button
                    resetButton.style.display = 'block';
                    resetButton.style.opacity = '1';
                    
                    waveTransition.classList.remove('active');
                }, 1500);
            }
        });
    });

    resetButton.addEventListener('click', function() {
        waveTransition.classList.add('active');
        
        // Hide all content
        projectContents.forEach(content => {
            content.classList.remove('active');
            setTimeout(() => {
                content.style.display = 'none';
            }, 800);
        });
        
        setTimeout(() => {
            // Show all cards
            mainContent.classList.remove('hide-cards');
            cards.forEach(card => {
                card.style.opacity = '1';
                card.style.pointerEvents = 'auto';
            });
            resetButton.style.display = 'none';
            waveTransition.classList.remove('active');
        }, 1400);
    });

  // Garder l'effet de rotation au survol
  document.addEventListener('mousemove', function(e) {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg)`;
    });
});

document.addEventListener('mouseleave', function() {
    cards.forEach(card => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});
});





//////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('Main-Content');
    const cards = document.querySelectorAll('.card');
    const resetButton = document.getElementById('resetCards');
    const waveTransition = document.getElementById('wave-transition');
    const projectContents = document.querySelectorAll('.project-content');
    const dynamicText = document.querySelector('.dynamic-text');
    const introText = document.querySelector('.intro p');

    // Store original header text
    const originalTitle = dynamicText.textContent;
    const originalIntro = introText.textContent;

    // Card content mapping
    const cardContent = {
        0: {
            title: "FoodTruck Project",
            description: "Description détaillée du projet FoodTruck"
        },
        1: {
            title: "Cours en ligne Project",
            description: "Description détaillée du projet de cours en ligne"
        },
        2: {
            title: "Oculus Project",
            description: "Description détaillée du projet Oculus"
        },
        3: {
            title: "Dashboard Project",
            description: "Description détaillée du projet Dashboard"
        }
    };

    cards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (!mainContent.classList.contains('hide-cards')) {
                // Update header content
                dynamicText.textContent = cardContent[index].title;
                introText.textContent = cardContent[index].description;
                
                // Hide all cards
                mainContent.classList.add('hide-cards');
                cards.forEach(c => {
                    c.classList.remove('selected');
                    c.style.opacity = '0';
                    c.style.pointerEvents = 'none';
                });
                
                // Show wave transition and content
                waveTransition.classList.add('active');
                
                // ... rest of your existing click handler code ...
            }
        });
    });

    resetButton.addEventListener('click', function() {
        waveTransition.classList.add('active');
        
        // Reset header text
        dynamicText.textContent = originalTitle;
        introText.textContent = originalIntro;
        
        resetButton.addEventListener('click', function() {
            waveTransition.classList.add('active');
            
            // Hide all content
            projectContents.forEach(content => {
                content.classList.remove('active');
                setTimeout(() => {
                    content.style.display = 'none';
                }, 800);
            });
            
            setTimeout(() => {
                // Show all cards
                mainContent.classList.remove('hide-cards');
                cards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.pointerEvents = 'auto';
                });
                resetButton.style.display = 'none';
                waveTransition.classList.remove('active');
            }, 1400);
        });
    });

// Garder l'effet de rotation au survol
document.addEventListener('mousemove', function(e) {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg)`;
    });
});

document.addEventListener('mouseleave', function() {
    cards.forEach(card => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});
});