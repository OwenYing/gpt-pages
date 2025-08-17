// Page data structure with 100 practical tool pages
const pagesData = [
    // Personal Tools Category
    { id: 1, title: "Daily Mood Tracker", description: "Track your daily mood with exportable CSV data and mood analytics", category: "personal", tags: ["Mood Tracking", "Mental Health", "Data Export", "Analytics"] },
    { id: 2, title: "Compare Text Diff", description: "Interactive tool to compare differences between two pieces of text with highlighted changes", category: "tech", tags: ["Text Comparison", "Diff Tool", "Code Review", "Document Editing"] },
    { id: 3, title: "BMI Calculator", description: "Calculate your Body Mass Index with health category classification", category: "personal", tags: ["BMI", "Health", "Calculator", "Fitness"] },
    { id: 4, title: "Gratitude Journal Template", description: "Simple gratitude journal template for daily appreciation practice", category: "personal", tags: ["Gratitude", "Journaling", "Mindfulness", "Wellness"] },
    { id: 5, title: "Countdown Timer", description: "Countdown timer for important events and deadlines", category: "personal", tags: ["Timer", "Countdown", "Events", "Productivity"] },
    { id: 6, title: "Age Calculator", description: "Calculate exact age from birthdate with detailed breakdown", category: "personal", tags: ["Age Calculator", "Birthdate", "Time", "Calculator"] },
    { id: 7, title: "Tip Calculator", description: "Easy tip calculator for restaurants and service calculations", category: "personal", tags: ["Tip Calculator", "Restaurant", "Service", "Math"] },
    { id: 8, title: "Loan Repayment Calculator", description: "Calculate loan payments and total interest with amortization schedule", category: "personal", tags: ["Loan Calculator", "Finance", "Payments", "Interest"] },
    { id: 9, title: "Daily Habit Checklist", description: "Track daily habits and build consistent routines", category: "personal", tags: ["Habits", "Checklist", "Productivity", "Routines"] },
    { id: 10, title: "Time Zone Converter", description: "Convert between different time zones worldwide", category: "personal", tags: ["Time Zones", "Travel", "Converter", "Global"] },
    { id: 11, title: "Currency Converter", description: "Real-time currency conversion with historical rates", category: "finance", tags: ["Currency", "Converter", "Exchange Rates", "International"] },
    
    // Finance & Money Category
    { id: 12, title: "Compound Interest Calculator", description: "Calculate compound interest growth over time", category: "finance", tags: ["Compound Interest", "Investing", "Calculator", "Growth"] },
    { id: 13, title: "Paycheck Tax Estimator", description: "Estimate take-home pay after taxes and deductions", category: "finance", tags: ["Tax Calculator", "Paycheck", "Income", "Deductions"] },
    { id: 14, title: "Credit Card Payoff Calculator", description: "Plan credit card debt payoff with different strategies", category: "finance", tags: ["Credit Card", "Debt Payoff", "Calculator", "Finance"] },
    { id: 15, title: "Budget Allocation Pie Chart", description: "Visualize budget allocation with interactive pie charts", category: "finance", tags: ["Budget", "Pie Chart", "Visualization", "Finance"] },
    { id: 16, title: "Savings Goal Tracker", description: "Track progress toward savings goals with timeline visualization", category: "finance", tags: ["Savings", "Goals", "Tracker", "Finance"] },
    { id: 17, title: "Cost Per Use Calculator", description: "Calculate cost per use for purchases to make informed decisions", category: "finance", tags: ["Cost Analysis", "Purchases", "Calculator", "Smart Spending"] },
    { id: 18, title: "Inflation-Adjusted Value Calculator", description: "Calculate real value of money accounting for inflation", category: "finance", tags: ["Inflation", "Value Calculator", "Economics", "Finance"] },
    { id: 19, title: "Side-Hustle Income Tracker", description: "Track income from multiple sources and side projects", category: "finance", tags: ["Side Hustle", "Income Tracking", "Multiple Sources", "Finance"] },
    { id: 20, title: "Calorie Needs Calculator", description: "Calculate daily calorie needs based on TDEE and activity level", category: "health", tags: ["Calories", "TDEE", "Nutrition", "Fitness"] },
    { id: 21, title: "Retirement Savings Projection", description: "Project retirement savings needs and growth over time", category: "finance", tags: ["Retirement", "Savings", "Projection", "Financial Planning"] },
    
    // Health & Fitness Category
    { id: 22, title: "Simple Workout Generator", description: "Generate randomized workouts for different fitness levels", category: "health", tags: ["Workout Generator", "Exercise", "Random", "Fitness"] },
    { id: 23, title: "Water Intake Tracker", description: "Track daily water consumption and hydration goals", category: "health", tags: ["Water Intake", "Hydration", "Health", "Tracker"] },
    { id: 24, title: "Step Goal Visualizer", description: "Visualize step goals and daily walking progress", category: "health", tags: ["Step Counter", "Walking", "Goals", "Visualization"] },
    { id: 25, title: "Sleep Debt Calculator", description: "Calculate sleep debt and optimal sleep schedule", category: "health", tags: ["Sleep", "Sleep Debt", "Health", "Calculator"] },
    { id: 26, title: "Heart Rate Zone Calculator", description: "Calculate target heart rate zones for different training intensities", category: "health", tags: ["Heart Rate", "Training Zones", "Exercise", "Health"] },
    { id: 27, title: "Macro Nutrient Calculator", description: "Calculate daily macro nutrient needs based on goals and activity", category: "health", tags: ["Macro Nutrients", "Nutrition", "Calculator", "Health"] },
    { id: 28, title: "Simple Yoga Pose Library", description: "Library of basic yoga poses with instructions and benefits", category: "health", tags: ["Yoga", "Poses", "Flexibility", "Wellness"] },
    { id: 29, title: "Stretch Reminder Timer", description: "Timer with reminders for regular stretching breaks", category: "health", tags: ["Stretching", "Timer", "Reminders", "Health"] },
    { id: 30, title: "Exercise Log Sheet", description: "Track workouts, sets, reps, and progress over time", category: "health", tags: ["Exercise Log", "Workout Tracking", "Progress", "Fitness"] },
    { id: 31, title: "Walking Pace Calculator", description: "Calculate walking pace, time, and distance for different speeds", category: "health", tags: ["Walking", "Pace Calculator", "Exercise", "Health"] },
    
    // Education & Learning Category
    { id: 32, title: "Flashcard Study Tool", description: "Master any subject with interactive flashcards and spaced repetition", category: "education", tags: ["Flashcards", "Study", "Learning", "Education"] },
    { id: 33, title: "Random Vocabulary Word of the Day", description: "Expand your vocabulary daily with randomly selected words", category: "education", tags: ["Vocabulary", "Words", "Learning", "Education"] },
    { id: 34, title: "Typing Speed Tester", description: "Test and improve your typing speed and accuracy", category: "education", tags: ["Typing", "Speed", "Accuracy", "Education"] },
    { id: 35, title: "Reading Time Estimator", description: "Estimate reading time for different text lengths and speeds", category: "education", tags: ["Reading", "Time Estimator", "Speed", "Planning"] },
    { id: 36, title: "Math Problem Generator", description: "Generate random math problems for practice and learning", category: "education", tags: ["Math", "Problem Generator", "Practice", "Learning"] },
    { id: 37, title: "Periodic Table Reference", description: "Interactive periodic table with element information", category: "education", tags: ["Periodic Table", "Chemistry", "Elements", "Science"] },
    { id: 38, title: "Language Pronunciation Guide", description: "Audio pronunciation guide for common words and phrases", category: "education", tags: ["Pronunciation", "Language", "Audio", "Learning"] },
    { id: 39, title: "Capital Cities Quiz", description: "Interactive quiz to learn world capital cities", category: "education", tags: ["Geography", "Capital Cities", "Quiz", "Learning"] },
    { id: 40, title: "Historical Timeline Viewer", description: "Browse historical events in interactive timeline format", category: "education", tags: ["History", "Timeline", "Events", "Learning"] },
    { id: 41, title: "Spaced Repetition Scheduler", description: "Schedule learning reviews using spaced repetition technique", category: "education", tags: ["Spaced Repetition", "Learning", "Review Schedule", "Memory"] },
    
    // Writing & Creativity Category
    { id: 42, title: "Random Writing Prompt Generator", description: "Generate creative writing prompts for inspiration", category: "creative", tags: ["Writing Prompts", "Creativity", "Inspiration", "Writing"] },
    { id: 43, title: "Character Name Generator", description: "Generate unique character names for stories and games", category: "creative", tags: ["Character Names", "Generator", "Writing", "Creativity"] },
    { id: 44, title: "Poem or Haiku Creator", description: "Create poems and haikus with guided templates", category: "creative", tags: ["Poetry", "Haiku", "Creative Writing", "Templates"] },
    { id: 45, title: "Story Plot Idea Generator", description: "Generate story plot ideas and creative writing concepts", category: "creative", tags: ["Story Ideas", "Plot Generator", "Writing", "Creativity"] },
    { id: 46, title: "Simple Markdown Editor", description: "Basic markdown editor with live preview", category: "creative", tags: ["Markdown", "Editor", "Writing", "Preview"] },
    { id: 47, title: "Daily Journaling Page", description: "Structured daily journaling template for reflection", category: "creative", tags: ["Journaling", "Daily Reflection", "Writing", "Mindfulness"] },
    { id: 48, title: "Color Palette Generator", description: "Generate harmonious color palettes for design projects", category: "creative", tags: ["Color Palettes", "Design", "Generator", "Visual"] },
    { id: 49, title: "Emoji Art Creator", description: "Create art and messages using emoji combinations", category: "creative", tags: ["Emoji Art", "Creativity", "Visual", "Fun"] },
    { id: 50, title: "Logo Idea Randomizer", description: "Generate random logo ideas and design concepts", category: "creative", tags: ["Logo Ideas", "Design", "Randomizer", "Branding"] },
    { id: 51, title: "Simple Mood Board Template", description: "Create mood boards for creative projects and inspiration", category: "creative", tags: ["Mood Board", "Inspiration", "Creative Projects", "Visual"] },
    
    // Travel & Navigation Category
    { id: 52, title: "Packing Checklist Generator", description: "Generate customized packing lists for different types of trips", category: "travel", tags: ["Packing", "Checklist", "Travel", "Organization"] },
    { id: 53, title: "Simple Route Map", description: "Embed Google Maps for simple route planning", category: "travel", tags: ["Route Map", "Google Maps", "Navigation", "Travel"] },
    { id: 54, title: "World Clock for Travelers", description: "World clock showing multiple time zones for travelers", category: "travel", tags: ["World Clock", "Time Zones", "Travel", "Global"] },
    { id: 55, title: "Local Weather Forecast", description: "Quick weather snapshot for travel destinations", category: "travel", tags: ["Weather", "Forecast", "Travel", "Local"] },
    { id: 56, title: "Sunrise/Sunset Time Finder", description: "Find sunrise and sunset times for any location", category: "travel", tags: ["Sunrise", "Sunset", "Time", "Location"] },
    { id: 57, title: "Currency Cheat Sheet", description: "Quick currency reference for specific countries", category: "travel", tags: ["Currency", "Cheat Sheet", "Travel", "Reference"] },
    { id: 58, title: "Visa Requirement Quick Checker", description: "Check visa requirements for different countries", category: "travel", tags: ["Visa", "Requirements", "Travel", "International"] },
    { id: 59, title: "Emergency Contact Sheet", description: "Template for emergency contacts while traveling", category: "travel", tags: ["Emergency Contacts", "Travel Safety", "Template", "Safety"] },
    { id: 60, title: "Public Transportation Map Embed", description: "Embed public transportation maps for cities", category: "travel", tags: ["Public Transport", "Maps", "Travel", "Navigation"] },
    { id: 61, title: "Travel Budget Calculator", description: "Calculate and track travel expenses and budget", category: "travel", tags: ["Travel Budget", "Expenses", "Calculator", "Planning"] },
    
    // Work & Productivity Category
    { id: 62, title: "Pomodoro Timer", description: "Focus timer using the Pomodoro Technique for productivity", category: "productivity", tags: ["Pomodoro", "Timer", "Focus", "Productivity"] },
    { id: 63, title: "Resume/CV PDF Generator", description: "Generate professional resumes from form inputs", category: "productivity", tags: ["Resume", "CV Generator", "PDF", "Professional"] },
    { id: 64, title: "Simple Invoice Creator", description: "Create professional invoices for freelancers and businesses", category: "productivity", tags: ["Invoice Creator", "Business", "Freelance", "Professional"] },
    { id: 65, title: "Business Card Quick Design", description: "Quick business card design tool for professionals", category: "productivity", tags: ["Business Card", "Design Tool", "Professional", "Branding"] },
    { id: 66, title: "Work Hours Tracker", description: "Track work hours, overtime, and project time", category: "productivity", tags: ["Work Hours", "Time Tracking", "Overtime", "Productivity"] },
    { id: 67, title: "Simple Gantt Chart Generator", description: "Create basic Gantt charts for project planning", category: "productivity", tags: ["Gantt Chart", "Project Planning", "Timeline", "Management"] },
    { id: 68, title: "Client Onboarding Checklist", description: "Comprehensive checklist for client onboarding process", category: "productivity", tags: ["Client Onboarding", "Checklist", "Process", "Business"] },
    { id: 69, title: "Idea Backlog Tracker", description: "Track and organize ideas for future development", category: "productivity", tags: ["Idea Backlog", "Organization", "Planning", "Innovation"] },
    { id: 70, title: "Professional Email Template Library", description: "Library of professional email templates for business", category: "productivity", tags: ["Email Templates", "Professional", "Business", "Communication"] },
    
    // Home & Lifestyle Category
    { id: 71, title: "Weekly Meal Planner", description: "Plan weekly meals with shopping lists and recipes", category: "lifestyle", tags: ["Meal Planning", "Weekly Planner", "Recipes", "Organization"] },
    { id: 72, title: "Grocery List Generator", description: "Generate organized grocery lists from meal plans", category: "lifestyle", tags: ["Grocery List", "Meal Planning", "Shopping", "Organization"] },
    { id: 73, title: "Chore Schedule Template", description: "Create and manage household chore schedules", category: "lifestyle", tags: ["Chore Schedule", "Household", "Organization", "Planning"] },
    { id: 74, title: "Home Budget Tracker", description: "Track household expenses and budget categories", category: "lifestyle", tags: ["Home Budget", "Expenses", "Tracking", "Finance"] },
    { id: 75, title: "Plant Watering Schedule", description: "Track plant care and watering schedules", category: "lifestyle", tags: ["Plant Care", "Watering Schedule", "Gardening", "Organization"] },
    { id: 76, title: "Recipe Scaling Calculator", description: "Scale recipe ingredients for different serving sizes", category: "lifestyle", tags: ["Recipe Scaling", "Cooking", "Calculator", "Ingredients"] },
    { id: 77, title: "Home Maintenance Checklist", description: "Seasonal home maintenance tasks and schedules", category: "lifestyle", tags: ["Home Maintenance", "Checklist", "Seasonal", "Household"] },
    { id: 78, title: "Pet Care Schedule", description: "Track pet care tasks and veterinary appointments", category: "lifestyle", tags: ["Pet Care", "Schedule", "Veterinary", "Organization"] },
    { id: 79, title: "Pantry Inventory List", description: "Track pantry items and expiration dates", category: "lifestyle", tags: ["Pantry Inventory", "Food Storage", "Expiration", "Organization"] },
    { id: 80, title: "Household Bill Split Calculator", description: "Calculate how to split household bills between roommates", category: "lifestyle", tags: ["Bill Splitter", "Roommates", "Calculator", "Finance"] },
    { id: 81, title: "Daily Trivia Question", description: "Random daily trivia questions with answers", category: "entertainment", tags: ["Trivia", "Daily Question", "Fun", "Learning"] },
    { id: 82, title: "QR Code Generator", description: "Generate QR codes for URLs, text, and contact information", category: "tech", tags: ["QR Code", "Generator", "Barcode", "Tech"] },
    { id: 83, title: "Random Joke Generator", description: "Generate random jokes for entertainment", category: "entertainment", tags: ["Jokes", "Random Generator", "Fun", "Entertainment"] },
    { id: 84, title: "Simple Meme Maker", description: "Create simple memes with text overlays", category: "entertainment", tags: ["Meme Maker", "Fun", "Creativity", "Entertainment"] },
    { id: 85, title: "Movie Night Picker", description: "Random movie picker for movie night decisions", category: "entertainment", tags: ["Movie Picker", "Random", "Entertainment", "Decision Making"] },
    { id: 86, title: "Book Recommendation Randomizer", description: "Get random book recommendations across different genres", category: "entertainment", tags: ["Book Recommendations", "Random", "Reading", "Literature"] },
    { id: 87, title: "Quote of the Day", description: "Daily inspirational quotes with sharing capabilities", category: "entertainment", tags: ["Quotes", "Inspiration", "Daily", "Motivation"] },
    { id: 88, title: "Random Would You Rather Question", description: "Generate random 'Would You Rather' questions for fun discussions", category: "entertainment", tags: ["Would You Rather", "Questions", "Fun", "Discussion"] },
    { id: 89, title: "Party Game Rules Quick Reference", description: "Quick reference guide for popular party games and rules", category: "entertainment", tags: ["Party Game Rules", "Reference", "Entertainment", "Party"] },
    { id: 90, title: "Mini Pixel Art Drawing Canvas", description: "Simple pixel art drawing tool for creating digital artwork", category: "creative", tags: ["Pixel Art", "Drawing", "Canvas", "Creativity"] },
    { id: 91, title: "Song Lyric Finder", description: "Find and display song lyrics with search functionality", category: "entertainment", tags: ["Song Lyrics", "Music", "Search", "Entertainment"] },
    
    // Tech & Coding Category
    { id: 92, title: "URL Shortener", description: "Shorten long URLs for easier sharing and tracking", category: "tech", tags: ["URL Shortener", "Links", "Sharing", "Tech"] },
    { id: 93, title: "Regex Tester", description: "Test and debug regular expressions with live matching", category: "tech", tags: ["Regex", "Regular Expressions", "Testing", "Programming"] },
    { id: 94, title: "JSON Formatter", description: "Format and validate JSON data with syntax highlighting", category: "tech", tags: ["JSON", "Formatter", "Validation", "Programming"] },
    { id: 95, title: "HTML Color Code Picker", description: "Pick colors and get HTML color codes for web development", category: "tech", tags: ["Color Picker", "HTML Colors", "Web Design", "Development"] },
    { id: 96, title: "Git Command Cheatsheet", description: "Quick reference for common Git commands and workflows", category: "tech", tags: ["Git", "Commands", "Cheatsheet", "Version Control"] },
    { id: 97, title: "HTTP Status Code Reference", description: "Complete reference for HTTP status codes and their meanings", category: "tech", tags: ["HTTP", "Status Codes", "Reference", "Web Development"] },
    { id: 98, title: "CSS Gradient Generator", description: "Create beautiful CSS gradients with visual preview", category: "tech", tags: ["CSS", "Gradients", "Generator", "Web Design"] },
    { id: 99, title: "ASCII Art Generator", description: "Convert text to ASCII art with various font styles", category: "tech", tags: ["ASCII Art", "Text Art", "Generator", "Creativity"] },
    { id: 100, title: "Password Strength Tester", description: "Test password strength and get security recommendations", category: "tech", tags: ["Password", "Security", "Strength Tester", "Safety"] },
    { id: 101, title: "Guitar Tuner", description: "Professional guitar tuner with microphone input and visual feedback", category: "music", tags: ["Guitar", "Tuner", "Music", "Audio", "Microphone", "Frequency"] }
];

// Extensibility functions for unlimited pages
function addNewPage(title, description, category, tags) {
    const newId = Math.max(...pagesData.map(p => p.id)) + 1;
    const newPage = {
        id: newId,
        title: title,
        description: description,
        category: category,
        tags: tags || []
    };
    pagesData.push(newPage);
    updateStats();
    renderPages();
    return newPage;
}

function addMultiplePages(pagesArray) {
    pagesArray.forEach(page => {
        if (!page.id) {
            page.id = Math.max(...pagesData.map(p => p.id)) + 1;
        }
        pagesData.push(page);
    });
    updateStats();
    renderPages();
}

function removePage(pageId) {
    const index = pagesData.findIndex(p => p.id === pageId);
    if (index > -1) {
        pagesData.splice(index, 1);
        updateStats();
        renderPages();
        return true;
    }
    return false;
}

function updatePage(pageId, updates) {
    const page = pagesData.find(p => p.id === pageId);
    if (page) {
        Object.assign(page, updates);
        renderPages();
        return true;
    }
    return false;
}

// Pagination system for large numbers of pages
let currentPage = 1;
const itemsPerPage = 24; // Show 24 pages per page (6 rows of 4)

function getPaginatedPages(pages = filteredPages) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return pages.slice(startIndex, endIndex);
}

function renderPagination(pages = filteredPages) {
    const totalPages = Math.ceil(pages.length / itemsPerPage);
    if (totalPages <= 1) return;
    
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination';
    paginationContainer.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 40px 0;
        flex-wrap: wrap;
    `;
    
    // Previous button
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Previous';
        prevBtn.className = 'pagination-btn';
        prevBtn.onclick = () => {
            currentPage--;
            renderPages();
        };
        paginationContainer.appendChild(prevBtn);
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
            pageBtn.onclick = () => {
                currentPage = i;
                renderPages();
            };
            paginationContainer.appendChild(pageBtn);
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.cssText = 'padding: 8px 12px; color: var(--text-muted);';
            paginationContainer.appendChild(ellipsis);
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
        nextBtn.className = 'pagination-btn';
        nextBtn.onclick = () => {
            currentPage++;
            renderPages();
        };
        paginationContainer.appendChild(nextBtn);
    }
    
    return paginationContainer;
}

// DOM elements
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const filterTabs = document.querySelectorAll('.filter-tab');
const pagesGrid = document.getElementById('pagesGrid');
const totalPagesEl = document.getElementById('totalPages');
const filteredPagesEl = document.getElementById('filteredPages');
const searchResultsEl = document.getElementById('searchResults');

// State variables
let currentCategory = 'all';
let currentSearch = '';
let filteredPages = [...pagesData];

// Filter pages to only show those with existing HTML files
async function filterExistingPages() {
    const existingPages = [];
    console.log('Starting to filter existing pages...');
    
    // Try to detect pages automatically first
    let autoDetected = false;
    
    try {
        // Test if we can fetch local files (works when served from a web server)
        for (const page of pagesData) {
            const pageFileName = generatePageFileName(page);
            const pagePath = `pages/${pageFileName}`;
            
            try {
                console.log(`Checking: ${pagePath} for "${page.title}"`);
                const response = await fetch(pagePath);
                if (response.ok) {
                    console.log(`✅ Found: ${pagePath}`);
                    existingPages.push(page);
                    autoDetected = true;
                } else {
                    console.log(`❌ Not found: ${pagePath} (${response.status})`);
                }
            } catch (error) {
                console.log(`❌ Error checking ${pagePath}:`, error.message);
            }
        }
    } catch (error) {
        console.log('Auto-detection failed, using fallback list');
    }
    
    // Fallback to hardcoded list if auto-detection didn't work
    if (!autoDetected || existingPages.length === 0) {
        console.log('Using fallback list of existing pages...');
        const existingPageIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101]; // All existing pages (1-101)
        
        for (const page of pagesData) {
            if (existingPageIds.includes(page.id)) {
                console.log(`✅ Found: ${page.title} (ID: ${page.id})`);
                existingPages.push(page);
            } else {
                console.log(`❌ Not found: ${page.title} (ID: ${page.id})`);
            }
        }
    }
    
    console.log(`Total existing pages found: ${existingPages.length}`);
    console.log('Existing pages:', existingPages.map(p => p.title));
    return existingPages;
}

// Initialize the application
async function init() {
    console.log('Initializing application...');
    console.log('Total pages in pagesData:', pagesData.length);
    
    // Show loading state for better UX
    const loadingMessage = document.getElementById('loadingMessage');
    if (loadingMessage) {
        loadingMessage.classList.remove('hidden');
    }
    
    // Filter to only show existing pages
    const existingPages = await filterExistingPages();
    
    // Update the filtered pages array
    filteredPages = existingPages;
    console.log('Updated filteredPages:', filteredPages.length);
    
    // Small delay to show loading state (optional, for better UX)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    renderPages();
    setupEventListeners();
    updateStats();
    
    // Ensure loading message is hidden
    if (loadingMessage) {
        loadingMessage.classList.add('hidden');
    }
    
    console.log('Initialization complete!');
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => handleCategoryFilter(tab.dataset.category));
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Handle search input
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase().trim();
    clearSearchBtn.style.display = currentSearch ? 'block' : 'none';
    filterPages();
}

// Clear search
function clearSearch() {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.style.display = 'none';
    filterPages();
}

// Handle category filtering
function handleCategoryFilter(category) {
    currentCategory = category;
    
    // Update active tab
    filterTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    filterPages();
}

// Filter pages based on search and category
function filterPages() {
    // Start with the existing pages (not all pagesData)
    let filtered = [...filteredPages];
    
    // Apply category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(page => page.category === currentCategory);
    }
    
    // Apply search filter
    if (currentSearch) {
        filtered = filtered.filter(page => 
            page.title.toLowerCase().includes(currentSearch) ||
            page.description.toLowerCase().includes(currentSearch) ||
            page.tags.some(tag => tag.toLowerCase().includes(currentSearch))
        );
    }
    
    // Update the filtered results for display
    const displayFilteredPages = filtered;
    currentPage = 1;
    renderPages(displayFilteredPages);
    updateStats(displayFilteredPages);
}

// Update page information display
function updatePageInfo(pages = filteredPages) {
    const totalPages = Math.ceil(pages.length / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, pages.length);
    
    // Add page info below the grid
    let pageInfo = document.querySelector('.page-info');
    if (!pageInfo) {
        pageInfo = document.createElement('div');
        pageInfo.className = 'page-info';
        pageInfo.style.cssText = `
            text-align: center;
            margin: 20px 0;
            color: var(--text-secondary);
            font-size: 0.9rem;
        `;
        pagesGrid.parentNode.appendChild(pageInfo);
    }
    
    if (totalPages > 1) {
        pageInfo.innerHTML = `
            Showing ${startItem}-${endItem} of ${filteredPages.length} pages 
            (Page ${currentPage} of ${totalPages})
        `;
    } else {
        pageInfo.innerHTML = `Showing all ${filteredPages.length} pages`;
    }
}

// Render pages in the grid with pagination
function renderPages(pagesToRender = filteredPages) {
    // Hide loading message when pages start rendering
    const loadingMessage = document.getElementById('loadingMessage');
    if (loadingMessage) {
        loadingMessage.classList.add('hidden');
    }
    
    if (pagesToRender.length === 0) {
        pagesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <h3>No pages found</h3>
                <p>Try adjusting your search terms or category filter</p>
            </div>
        `;
        return;
    }
    
    // Reset to first page when filtering
    if (currentPage > Math.ceil(pagesToRender.length / itemsPerPage)) {
        currentPage = 1;
    }
    
    // Get paginated pages
    const pagesToShow = getPaginatedPages(pagesToRender);
    
    pagesGrid.innerHTML = pagesToShow.map(page => `
        <div class="page-card" data-page-id="${page.id}">
            <div class="page-number">${page.id}</div>
            <h3 class="page-title">${page.title}</h3>
            <p class="page-description">${page.description}</p>
            <span class="page-category ${page.category}">${getCategoryDisplayName(page.category)}</span>
        </div>
    `).join('');
    
    // Add click event listeners to page cards
    document.querySelectorAll('.page-card').forEach(card => {
        card.addEventListener('click', () => {
            const pageId = card.dataset.pageId;
            const page = pagesData.find(p => p.id == pageId);
            
            // Since we're already filtering to only show existing pages, 
            // we can directly navigate without checking again
            const pageFileName = generatePageFileName(page);
            const pagePath = `pages/${pageFileName}`;
            
            // Navigate to the page
            window.location.href = pagePath;
        });
    });
    
    // Add pagination if needed
    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) {
        existingPagination.remove();
    }
    
    const pagination = renderPagination(pagesToRender);
    if (pagination) {
        pagesGrid.parentNode.appendChild(pagination);
    }
    
    // Update page info
    updatePageInfo(pagesToRender);
}

// Get display name for category
function getCategoryDisplayName(category) {
    const categoryNames = {
        'personal': 'Personal Tools',
        'finance': 'Finance & Money',
        'health': 'Health & Fitness',
        'education': 'Education & Learning',
        'creative': 'Writing & Creativity',
        'travel': 'Travel & Navigation',
        'productivity': 'Work & Productivity',
        'lifestyle': 'Home & Lifestyle',
        'entertainment': 'Fun & Entertainment',
        'tech': 'Tech & Coding'
    };
    return categoryNames[category] || category;
}

// Update statistics
function updateStats(pages = filteredPages) {
    totalPagesEl.textContent = pagesData.length;
    filteredPagesEl.textContent = pages.length;
    searchResultsEl.textContent = currentSearch ? pages.length : 0;
}

// Handle keyboard shortcuts
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && currentSearch) {
        clearSearch();
    }
}

// Add some CSS for no results
const style = document.createElement('style');
style.textContent = `
    .no-results {
        text-align: center;
        padding: 80px 20px;
        color: var(--text-secondary);
        grid-column: 1 / -1;
    }
    
    .no-results h3 {
        margin-bottom: 12px;
        color: var(--text-primary);
    }
    
    .no-results p {
        font-size: 1.1rem;
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init().catch(error => {
        console.error('Error initializing:', error);
        // Fallback: show all pages if initialization fails
        filteredPages = [...pagesData];
        renderPages();
        setupEventListeners();
        updateStats();
    });
});

// Add some fun interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to page cards
    const cards = document.querySelectorAll('.page-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Page file management functions
function generatePageFileName(page) {
    // Convert title to URL-friendly filename
    const sanitizedTitle = page.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim();
    
    return `${page.id}-${sanitizedTitle}.html`;
}

async function pageExists(pagePath) {
    try {
        const response = await fetch(pagePath);
        return response.ok;
    } catch (error) {
        return false;
    }
}

async function createPageTemplate(page) {
    // This function would create the actual HTML file
    // In a browser environment, we can't create files directly
    // So we'll redirect to a template page that can be customized
    console.log(`Creating template for page: ${page.title}`);
}

// Export for potential external use
window.GPTIdeasHub = {
    pagesData,
    filterPages,
    searchPages: (query) => {
        currentSearch = query.toLowerCase().trim();
        searchInput.value = query;
        filterPages();
    },
    // Extensibility functions
    addNewPage,
    addMultiplePages,
    removePage,
    updatePage,
    getTotalPages: () => pagesData.length,
    getPageById: (id) => pagesData.find(p => p.id === id),
    getPagesByCategory: (category) => pagesData.filter(p => p.category === category),
    getPagesByTag: (tag) => pagesData.filter(p => p.tags.includes(tag)),
    // Pagination functions
    setItemsPerPage: (count) => {
        itemsPerPage = count;
        currentPage = 1;
        renderPages();
    },
    getCurrentPage: () => currentPage,
    getTotalFilteredPages: () => Math.ceil(filteredPages.length / itemsPerPage)
};
