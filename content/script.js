/**
 * ====================================================
 * SWIFTDO PROJECT - JAVASCRIPT IMPLEMENTATION
 * Filename: script.js
 * Objective: Manipulate the DOM to add dynamic interactivity.
 * ====================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // This ensures the script only runs after the entire HTML document is loaded.

    // --- I. DOM Manipulation (Requirement A - Simple Content Changer) ---
    
    // Select the button and the main content element by their IDs
    const toggleButton = document.getElementById('toggleIdeaBtn');
    const pitchContent = document.getElementById('pitchContent');

    // Check if both elements exist before adding listeners (good practice)
    if (toggleButton && pitchContent) {
        
        // Function to toggle between the Problem and Solution content
        function togglePitchContent() {
            // Check the current state using the custom 'data-state' attribute
            const currentState = pitchContent.getAttribute('data-state');

            if (currentState === 'problem') {
                // Switch to Solution content
                pitchContent.innerHTML = '<h3 class="pitch-title">✅ Our Solution: Smart Prioritization</h3><p>SwiftDo leverages advanced algorithms to prioritize your tasks based on a composite <strong>SwiftScore</strong>. This score considers urgency, deadline, and effort, guaranteeing you always tackle the most impactful item first, reducing stress and maximizing output.</p>';
                pitchContent.setAttribute('data-state', 'solution'); 
                toggleButton.textContent = 'Read The Problem Statement Again';
                
            } else {
                // Switch back to Problem content
                pitchContent.innerHTML = '<h3 class="pitch-title">The Problem: Task Overload</h3><p>In today\'s fast-paced world, managing tasks can be overwhelming. Standard To-Do lists often fail because they don\'t account for **inter-task dependencies** or **human energy levels**. Users feel stressed and unsure what to tackle next.</p>';
                pitchContent.setAttribute('data-state', 'problem');
                toggleButton.textContent = 'See Our Solution';
            }
        }

        // Use .addEventListener() to attach the function to the button click
        toggleButton.addEventListener('click', togglePitchContent);
    }


    // --- II. DOM Manipulation (Requirement B - Tabbed Interface) ---

    // Select ALL elements with the class 'tab-button' (controls) and 'tab-content' (panels)
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to handle the tab switching logic
    function switchTab(event) {
        // event.currentTarget refers to the button that was clicked
        
        // 1. Get the target ID from the data-target attribute of the clicked button
        const targetId = event.currentTarget.getAttribute('data-target');

        // 2. Deactivate all buttons and content panels
        // Remove 'active' class from ALL buttons
        tabButtons.forEach(button => {
            button.classList.remove('active'); // classList.remove() demonstration
        });

        // Remove 'active' class from ALL content panels (HIDES them via CSS)
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // 3. Activate the selected button and its content
        // Add 'active' class to the clicked button
        event.currentTarget.classList.add('active'); // classList.add() demonstration
        
        // Use document.getElementById() to select the specific content panel by its ID
        const activeContent = document.getElementById(targetId);
        if (activeContent) {
            activeContent.classList.add('active'); // SHOWS the content via CSS
        }
    }

    // Attach Event Listeners to every single tab button
    // This uses a loop to apply the listener to the NodeList from querySelectorAll
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });
});