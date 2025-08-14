// Page data structure with 100 creative pages
const pagesData = [
    // Technology Category
    { id: 1, title: "Compare Text Diff", description: "Interactive tool to compare differences between two pieces of text with highlighted changes", category: "tech", tags: ["Text Comparison", "Diff Tool", "Code Review", "Document Editing"] },
    { id: 2, title: "Blockchain Beyond Cryptocurrency", description: "Real-world applications of blockchain technology in supply chain and voting systems", category: "tech", tags: ["Blockchain", "Supply Chain", "Voting"] },
    { id: 3, title: "Quantum Computing Explained", description: "Understanding the principles and potential of quantum computing for everyday developers", category: "tech", tags: ["Quantum", "Computing", "Physics"] },
    { id: 4, title: "The Rise of Edge Computing", description: "How edge computing is changing the landscape of data processing and IoT", category: "tech", tags: ["Edge Computing", "IoT", "Data"] },
    { id: 5, title: "Cybersecurity in the Age of AI", description: "Modern security challenges and AI-powered defense mechanisms", category: "tech", tags: ["Security", "AI", "Cyber"] },
    { id: 6, title: "Sustainable Tech Solutions", description: "Green technology innovations for a more sustainable future", category: "tech", tags: ["Sustainability", "Green Tech", "Innovation"] },
    { id: 7, title: "The Metaverse Revolution", description: "Understanding virtual worlds and their impact on society and business", category: "tech", tags: ["Metaverse", "VR", "Social"] },
    { id: 8, title: "5G and Beyond", description: "Next-generation wireless technology and its transformative potential", category: "tech", tags: ["5G", "Wireless", "Connectivity"] },
    { id: 9, title: "Machine Learning for Beginners", description: "A comprehensive guide to getting started with machine learning", category: "tech", tags: ["ML", "Beginner", "Guide"] },
    { id: 10, title: "The Internet of Things", description: "How connected devices are reshaping our homes and cities", category: "tech", tags: ["IoT", "Smart Home", "Cities"] },
    { id: 11, title: "Cloud Computing Strategies", description: "Best practices for cloud migration and optimization", category: "tech", tags: ["Cloud", "Migration", "Strategy"] },
    { id: 12, title: "Data Science Fundamentals", description: "Essential concepts and tools for modern data analysis", category: "tech", tags: ["Data Science", "Analysis", "Tools"] },
    { id: 13, title: "DevOps Best Practices", description: "Streamlining software development and deployment processes", category: "tech", tags: ["DevOps", "Development", "Deployment"] },
    { id: 14, title: "API Design Principles", description: "Creating robust and user-friendly application programming interfaces", category: "tech", tags: ["API", "Design", "Development"] },
    { id: 15, title: "Mobile App Development Trends", description: "Latest innovations in mobile application development", category: "tech", tags: ["Mobile", "Apps", "Trends"] },
    { id: 16, title: "Web3 and Decentralization", description: "The future of the internet and decentralized applications", category: "tech", tags: ["Web3", "Decentralized", "Internet"] },
    { id: 17, title: "Augmented Reality Applications", description: "Real-world uses of AR in education, healthcare, and entertainment", category: "tech", tags: ["AR", "Education", "Healthcare"] },
    { id: 18, title: "Natural Language Processing", description: "How computers understand and process human language", category: "tech", tags: ["NLP", "Language", "AI"] },
    { id: 19, title: "Computer Vision Advances", description: "Latest developments in image recognition and computer vision", category: "tech", tags: ["Computer Vision", "Image Recognition", "AI"] },
    { id: 20, title: "Robotics and Automation", description: "The future of work and automated systems", category: "tech", tags: ["Robotics", "Automation", "Future of Work"] },

    // Creative Category
    { id: 21, title: "Digital Art Revolution", description: "How technology is transforming artistic expression and creativity", category: "creative", tags: ["Digital Art", "Creativity", "Technology"] },
    { id: 22, title: "Creative Writing in the AI Era", description: "Balancing human creativity with AI-assisted writing tools", category: "creative", tags: ["Writing", "AI", "Creativity"] },
    { id: 23, title: "Music Production with AI", description: "Exploring AI-powered music creation and production techniques", category: "creative", tags: ["Music", "AI", "Production"] },
    { id: 24, title: "Photography in the Digital Age", description: "Modern photography techniques and post-processing workflows", category: "creative", tags: ["Photography", "Digital", "Techniques"] },
    { id: 25, title: "Graphic Design Trends", description: "Current and emerging trends in visual design and branding", category: "creative", tags: ["Design", "Trends", "Branding"] },
    { id: 26, title: "Animation and Motion Graphics", description: "Creating compelling animated content for modern media", category: "creative", tags: ["Animation", "Motion Graphics", "Media"] },
    { id: 27, title: "Creative Problem Solving", description: "Innovative approaches to complex challenges and design thinking", category: "creative", tags: ["Problem Solving", "Innovation", "Design Thinking"] },
    { id: 28, title: "Storytelling in Marketing", description: "Crafting compelling narratives that connect with audiences", category: "creative", tags: ["Storytelling", "Marketing", "Narrative"] },
    { id: 29, title: "Color Theory in Design", description: "Understanding color psychology and effective color combinations", category: "creative", tags: ["Color Theory", "Psychology", "Design"] },
    { id: 30, title: "Typography and Readability", description: "The art of choosing and arranging type for maximum impact", category: "creative", tags: ["Typography", "Readability", "Design"] },
    { id: 31, title: "Creative Collaboration Tools", description: "Digital platforms that enhance team creativity and productivity", category: "creative", tags: ["Collaboration", "Tools", "Productivity"] },
    { id: 32, title: "Visual Storytelling", description: "Using images and graphics to tell compelling stories", category: "creative", tags: ["Visual", "Storytelling", "Graphics"] },
    { id: 33, title: "Creative Entrepreneurship", description: "Turning creative ideas into successful business ventures", category: "creative", tags: ["Entrepreneurship", "Business", "Creativity"] },
    { id: 34, title: "Art and Technology Fusion", description: "Where traditional art meets cutting-edge technology", category: "creative", tags: ["Art", "Technology", "Fusion"] },
    { id: 35, title: "Creative Content Strategy", description: "Planning and executing engaging content across platforms", category: "creative", tags: ["Content Strategy", "Planning", "Execution"] },
    { id: 36, title: "Design Systems", description: "Creating consistent and scalable design frameworks", category: "creative", tags: ["Design Systems", "Frameworks", "Consistency"] },
    { id: 37, title: "Creative Portfolio Building", description: "Showcasing your creative work effectively online", category: "creative", tags: ["Portfolio", "Showcase", "Online"] },
    { id: 38, title: "Creative Inspiration Sources", description: "Finding and cultivating creative ideas and motivation", category: "creative", tags: ["Inspiration", "Ideas", "Motivation"] },
    { id: 39, title: "Creative Time Management", description: "Balancing creativity with productivity and deadlines", category: "creative", tags: ["Time Management", "Productivity", "Creativity"] },
    { id: 40, title: "Creative Feedback and Critique", description: "Giving and receiving constructive creative feedback", category: "creative", tags: ["Feedback", "Critique", "Growth"] },

    // Business Category
    { id: 41, title: "Startup Success Strategies", description: "Essential steps for launching and growing a successful startup", category: "business", tags: ["Startup", "Success", "Growth"] },
    { id: 42, title: "Digital Marketing Mastery", description: "Comprehensive guide to modern digital marketing strategies", category: "business", tags: ["Digital Marketing", "Strategy", "Online"] },
    { id: 43, title: "Customer Experience Design", description: "Creating exceptional customer journeys and experiences", category: "business", tags: ["Customer Experience", "Design", "Journey"] },
    { id: 44, title: "Business Model Innovation", description: "Redesigning business models for the digital economy", category: "business", tags: ["Business Model", "Innovation", "Digital"] },
    { id: 45, title: "Remote Team Management", description: "Leading and managing distributed teams effectively", category: "business", tags: ["Remote Work", "Management", "Teams"] },
    { id: 46, title: "Data-Driven Decision Making", description: "Using analytics and insights to inform business strategy", category: "business", tags: ["Data", "Analytics", "Strategy"] },
    { id: 47, title: "Sustainable Business Practices", description: "Implementing eco-friendly and socially responsible business operations", category: "business", tags: ["Sustainability", "Responsibility", "Operations"] },
    { id: 48, title: "Financial Planning for Entrepreneurs", description: "Essential financial management for business owners", category: "business", tags: ["Financial Planning", "Entrepreneurs", "Management"] },
    { id: 49, title: "Brand Building Strategies", description: "Creating memorable and valuable brand identities", category: "business", tags: ["Branding", "Identity", "Strategy"] },
    { id: 50, title: "Sales Psychology and Techniques", description: "Understanding customer behavior and improving sales performance", category: "business", tags: ["Sales", "Psychology", "Performance"] },
    { id: 51, title: "Supply Chain Optimization", description: "Streamlining operations and reducing costs in supply chains", category: "business", tags: ["Supply Chain", "Optimization", "Operations"] },
    { id: 52, title: "Business Process Automation", description: "Using technology to automate repetitive business tasks", category: "business", tags: ["Automation", "Processes", "Technology"] },
    { id: 53, title: "International Business Expansion", description: "Strategies for expanding business operations globally", category: "business", tags: ["International", "Expansion", "Global"] },
    { id: 54, title: "Crisis Management", description: "Preparing for and responding to business crises effectively", category: "business", tags: ["Crisis Management", "Preparedness", "Response"] },
    { id: 55, title: "Employee Engagement", description: "Building motivated and productive workplace cultures", category: "business", tags: ["Employee Engagement", "Culture", "Productivity"] },
    { id: 56, title: "Strategic Planning", description: "Long-term planning and goal setting for business success", category: "business", tags: ["Strategic Planning", "Goals", "Success"] },
    { id: 57, title: "Business Intelligence", description: "Leveraging data for competitive advantage and insights", category: "business", tags: ["Business Intelligence", "Data", "Insights"] },
    { id: 58, title: "Partnership Development", description: "Building strategic partnerships and business relationships", category: "business", tags: ["Partnerships", "Relationships", "Strategy"] },
    { id: 59, title: "Innovation Management", description: "Fostering creativity and managing innovation processes", category: "business", tags: ["Innovation", "Creativity", "Management"] },
    { id: 60, title: "Business Ethics and Compliance", description: "Maintaining ethical standards and regulatory compliance", category: "business", tags: ["Ethics", "Compliance", "Standards"] },

    // Lifestyle Category
    { id: 61, title: "Mindful Living Practices", description: "Incorporating mindfulness into daily life for better well-being", category: "lifestyle", tags: ["Mindfulness", "Well-being", "Daily Life"] },
    { id: 62, title: "Sustainable Living Guide", description: "Practical steps for reducing environmental impact in everyday life", category: "lifestyle", tags: ["Sustainability", "Environment", "Practical"] },
    { id: 63, title: "Digital Wellness", description: "Balancing technology use with mental and physical health", category: "lifestyle", tags: ["Digital Wellness", "Health", "Balance"] },
    { id: 64, title: "Home Organization Systems", description: "Creating organized and functional living spaces", category: "lifestyle", tags: ["Organization", "Home", "Functionality"] },
    { id: 65, title: "Healthy Eating Habits", description: "Building sustainable and nutritious eating patterns", category: "lifestyle", tags: ["Nutrition", "Habits", "Health"] },
    { id: 66, title: "Fitness for Busy People", description: "Efficient workout routines for hectic schedules", category: "lifestyle", tags: ["Fitness", "Workouts", "Busy Schedule"] },
    { id: 67, title: "Sleep Optimization", description: "Improving sleep quality for better health and productivity", category: "lifestyle", tags: ["Sleep", "Health", "Productivity"] },
    { id: 68, title: "Stress Management Techniques", description: "Effective strategies for managing daily stress and anxiety", category: "lifestyle", tags: ["Stress Management", "Anxiety", "Techniques"] },
    { id: 69, title: "Time Management for Life", description: "Balancing work, personal life, and self-care effectively", category: "lifestyle", tags: ["Time Management", "Work-Life Balance", "Self-Care"] },
    { id: 70, title: "Personal Finance Basics", description: "Essential money management skills for financial security", category: "lifestyle", tags: ["Personal Finance", "Money Management", "Security"] },
    { id: 71, title: "Travel Planning Tips", description: "Smart strategies for planning memorable and affordable trips", category: "lifestyle", tags: ["Travel", "Planning", "Affordable"] },
    { id: 72, title: "Social Media Balance", description: "Using social media mindfully and maintaining real connections", category: "lifestyle", tags: ["Social Media", "Mindfulness", "Connections"] },
    { id: 73, title: "Creative Hobbies", description: "Finding and developing creative interests for personal growth", category: "lifestyle", tags: ["Hobbies", "Creativity", "Personal Growth"] },
    { id: 74, title: "Relationship Building", description: "Developing meaningful connections with family, friends, and colleagues", category: "lifestyle", tags: ["Relationships", "Connections", "Social Skills"] },
    { id: 75, title: "Personal Development", description: "Continuous learning and self-improvement strategies", category: "lifestyle", tags: ["Personal Development", "Learning", "Self-Improvement"] },
    { id: 76, title: "Work-Life Integration", description: "Creating harmony between professional and personal responsibilities", category: "lifestyle", tags: ["Work-Life Integration", "Harmony", "Balance"] },
    { id: 77, title: "Mental Health Awareness", description: "Understanding and supporting mental health in daily life", category: "lifestyle", tags: ["Mental Health", "Awareness", "Support"] },
    { id: 78, title: "Productivity Systems", description: "Organizing life with effective productivity and organization methods", category: "lifestyle", tags: ["Productivity", "Organization", "Systems"] },
    { id: 79, title: "Personal Branding", description: "Building and maintaining your personal and professional reputation", category: "lifestyle", tags: ["Personal Branding", "Reputation", "Professional"] },
    { id: 80, title: "Life Goal Setting", description: "Setting and achieving meaningful life goals and aspirations", category: "lifestyle", tags: ["Goal Setting", "Aspirations", "Achievement"] },

    // Education Category
    { id: 81, title: "Learning in the Digital Age", description: "Adapting to modern learning methods and online education", category: "education", tags: ["Digital Learning", "Online Education", "Modern Methods"] },
    { id: 82, title: "Critical Thinking Skills", description: "Developing analytical and logical reasoning abilities", category: "education", tags: ["Critical Thinking", "Analytical", "Reasoning"] },
    { id: 83, title: "Study Techniques", description: "Effective methods for learning and retaining information", category: "education", tags: ["Study Techniques", "Learning", "Retention"] },
    { id: 84, title: "Online Course Creation", description: "Designing and delivering effective online learning experiences", category: "education", tags: ["Online Courses", "Design", "Delivery"] },
    { id: 85, title: "Educational Technology", description: "Innovative tools and platforms for enhanced learning", category: "education", tags: ["EdTech", "Tools", "Innovation"] },
    { id: 86, title: "Adult Learning Strategies", description: "Effective learning approaches for adult learners", category: "education", tags: ["Adult Learning", "Strategies", "Approaches"] },
    { id: 87, title: "Memory Improvement", description: "Techniques for enhancing memory and cognitive function", category: "education", tags: ["Memory", "Cognitive Function", "Techniques"] },
    { id: 88, title: "Language Learning Methods", description: "Efficient approaches to learning new languages", category: "education", tags: ["Language Learning", "Methods", "Efficiency"] },
    { id: 89, title: "Research Skills", description: "Conducting effective research and evaluating sources", category: "education", tags: ["Research", "Sources", "Evaluation"] },
    { id: 90, title: "Academic Writing", description: "Improving writing skills for academic and professional contexts", category: "education", tags: ["Academic Writing", "Skills", "Professional"] },
    { id: 91, title: "Presentation Skills", description: "Delivering engaging and effective presentations", category: "education", tags: ["Presentations", "Communication", "Engagement"] },
    { id: 92, title: "Time Management for Students", description: "Balancing academic responsibilities with personal life", category: "education", tags: ["Time Management", "Students", "Balance"] },
    { id: 93, title: "Note-Taking Strategies", description: "Effective methods for capturing and organizing information", category: "education", tags: ["Note-Taking", "Organization", "Information"] },
    { id: 94, title: "Test Preparation", description: "Strategies for successful test-taking and exam preparation", category: "education", tags: ["Test Preparation", "Exams", "Strategies"] },
    { id: 95, title: "Learning Disabilities Support", description: "Understanding and supporting diverse learning needs", category: "education", tags: ["Learning Disabilities", "Support", "Diversity"] },
    { id: 96, title: "Career Development", description: "Planning and advancing your professional career path", category: "education", tags: ["Career Development", "Planning", "Advancement"] },
    { id: 97, title: "Financial Literacy Education", description: "Teaching essential money management skills", category: "education", tags: ["Financial Literacy", "Money Management", "Skills"] },
    { id: 98, title: "Digital Citizenship", description: "Responsible and ethical use of technology and the internet", category: "education", tags: ["Digital Citizenship", "Ethics", "Technology"] },
    { id: 99, title: "Project-Based Learning", description: "Learning through hands-on projects and real-world applications", category: "education", tags: ["Project-Based Learning", "Hands-On", "Real-World"] },
    { id: 100, title: "Lifelong Learning", description: "Embracing continuous education throughout your life", category: "education", tags: ["Lifelong Learning", "Continuous Education", "Growth"] }
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

function getPaginatedPages() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPages.slice(startIndex, endIndex);
}

function renderPagination() {
    const totalPages = Math.ceil(filteredPages.length / itemsPerPage);
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

// Initialize the application
function init() {
    renderPages();
    setupEventListeners();
    updateStats();
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
    filteredPages = pagesData.filter(page => {
        const matchesCategory = currentCategory === 'all' || page.category === currentCategory;
        const matchesSearch = !currentSearch || 
            page.title.toLowerCase().includes(currentSearch) ||
            page.description.toLowerCase().includes(currentSearch) ||
            page.tags.some(tag => tag.toLowerCase().includes(currentSearch));
        
        return matchesCategory && matchesSearch;
    });
    
    // Reset to first page when filtering
    currentPage = 1;
    
    renderPages();
    updateStats();
}

// Update page information display
function updatePageInfo() {
    const totalPages = Math.ceil(filteredPages.length / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, filteredPages.length);
    
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
function renderPages() {
    if (filteredPages.length === 0) {
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
    if (currentPage > Math.ceil(filteredPages.length / itemsPerPage)) {
        currentPage = 1;
    }
    
    // Get paginated pages
    const pagesToShow = getPaginatedPages();
    
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
            
            // Redirect to the static page file
            const pageFileName = generatePageFileName(page);
            const pagePath = `pages/${pageFileName}`;
            
            // Check if the page exists, if not, create a template
            if (!pageExists(pagePath)) {
                createPageTemplate(page);
            }
            
            // Navigate to the page
            window.location.href = pagePath;
        });
    });
    
    // Add pagination if needed
    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) {
        existingPagination.remove();
    }
    
    const pagination = renderPagination();
    if (pagination) {
        pagesGrid.parentNode.appendChild(pagination);
    }
    
    // Update page info
    updatePageInfo();
}

// Get display name for category
function getCategoryDisplayName(category) {
    const categoryNames = {
        'tech': 'Technology',
        'creative': 'Creative',
        'business': 'Business',
        'lifestyle': 'Lifestyle',
        'education': 'Education'
    };
    return categoryNames[category] || category;
}

// Update statistics
function updateStats() {
    totalPagesEl.textContent = pagesData.length;
    filteredPagesEl.textContent = filteredPages.length;
    searchResultsEl.textContent = currentSearch ? filteredPages.length : 0;
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
document.addEventListener('DOMContentLoaded', init);

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

function pageExists(pagePath) {
    // This is a simple check - in a real implementation, you might want to use fetch
    // For now, we'll assume pages don't exist and create them
    return false;
}

function createPageTemplate(page) {
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
