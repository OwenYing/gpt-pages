#!/usr/bin/env node

/**
 * GPT Ideas Hub - Static Page Generator
 * 
 * This script helps you create new static pages for the GPT Ideas Hub.
 * Usage: node create-page.js "Page Title" "category" "description" "tag1,tag2,tag3"
 */

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 4) {
    console.log(`
🚀 GPT Ideas Hub - Static Page Generator

Usage: node create-page.js "Page Title" "category" "description" "tag1,tag2,tag3"

Examples:
  node create-page.js "AI Image Generator" "tech" "Create AI-powered images with text prompts" "AI,Image Generation,Creative"
  node create-page.js "Mindful Meditation" "lifestyle" "Learn meditation techniques for daily wellness" "Meditation,Wellness,Mindfulness"
  node create-page.js "Startup Funding" "business" "Guide to securing funding for your startup" "Startup,Funding,Business"

Categories: tech, creative, business, lifestyle, education
    `);
    process.exit(1);
}

const [title, category, description, tags] = args;

// Validate category
const validCategories = ['tech', 'creative', 'business', 'lifestyle', 'education'];
if (!validCategories.includes(category)) {
    console.error(`❌ Invalid category: ${category}`);
    console.error(`Valid categories: ${validCategories.join(', ')}`);
    process.exit(1);
}

// Parse tags
const tagArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);

// Generate filename
const sanitizedTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

// Get next available ID (you'll need to update this manually for now)
const nextId = getNextPageId();
const filename = `${nextId}-${sanitizedTitle}.html`;
const filepath = path.join(__dirname, 'pages', filename);

// Generate page content
const pageContent = generatePageTemplate(title, category, description, tagArray, nextId);

// Create pages directory if it doesn't exist
const pagesDir = path.join(__dirname, 'pages');
if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
}

// Write the file
try {
    fs.writeFileSync(filepath, pageContent);
    console.log(`✅ Created static page: ${filename}`);
    console.log(`📍 Location: ${filepath}`);
    console.log(`🔗 URL: pages/${filename}`);
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Open ${filepath} in your editor`);
    console.log(`   2. Customize the content and functionality`);
    console.log(`   3. Test the page by clicking on it in the main hub`);
    console.log(`   4. Add your page to the pagesData array in script.js`);
} catch (error) {
    console.error(`❌ Error creating page: ${error.message}`);
    process.exit(1);
}

function getNextPageId() {
    // This is a simple implementation - you might want to scan the pages directory
    // or maintain a counter file for more accurate IDs
    const pagesDir = path.join(__dirname, 'pages');
    if (!fs.existsSync(pagesDir)) {
        return 1;
    }
    
    const files = fs.readdirSync(pagesDir);
    const ids = files
        .filter(file => file.endsWith('.html'))
        .map(file => {
            const match = file.match(/^(\d+)-/);
            return match ? parseInt(match[1]) : 0;
        })
        .filter(id => id > 0);
    
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
}

function generatePageTemplate(title, category, description, tags, id) {
    const categoryDisplayName = {
        'tech': 'Technology',
        'creative': 'Creative',
        'business': 'Business',
        'lifestyle': 'Lifestyle',
        'education': 'Education'
    }[category];

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - GPT Ideas Hub</title>
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        .page-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .page-header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px 0;
            background: var(--gradient-primary);
            color: white;
            border-radius: var(--border-radius);
            position: relative;
            overflow: hidden;
        }
        
        .page-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        
        .page-header-content {
            position: relative;
            z-index: 2;
        }
        
        .page-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 16px;
            font-family: 'Space Grotesk', sans-serif;
        }
        
        .page-meta {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .page-category-badge {
            padding: 8px 16px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .page-number-badge {
            padding: 8px 16px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .back-button {
            position: fixed;
            top: 20px;
            left: 20px;
            background: var(--primary-color);
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: var(--border-radius);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .back-button:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }
        
        .content-section {
            background: white;
            padding: 30px;
            border-radius: var(--border-radius);
            margin-bottom: 30px;
            box-shadow: var(--shadow-md);
        }
        
        .content-section h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
            font-family: 'Space Grotesk', sans-serif;
        }
        
        .content-section p {
            line-height: 1.8;
            margin-bottom: 16px;
            color: var(--text-secondary);
        }
        
        .highlight-box {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
            border-left: 4px solid var(--primary-color);
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }
        
        .highlight-box h3 {
            color: var(--primary-color);
            margin-bottom: 12px;
        }
        
        .highlight-box ul {
            margin: 0;
            padding-left: 20px;
        }
        
        .highlight-box li {
            margin-bottom: 8px;
            line-height: 1.6;
        }
        
        .interactive-demo {
            background: var(--bg-tertiary);
            border: 2px dashed var(--border-color);
            padding: 40px;
            text-align: center;
            border-radius: var(--border-radius);
            margin: 20px 0;
            color: var(--text-muted);
        }
        
        .interactive-demo i {
            font-size: 2rem;
            margin-bottom: 10px;
            display: block;
            color: var(--warning-color);
        }
        
        @media (max-width: 768px) {
            .page-title {
                font-size: 2rem;
            }
            
            .back-button {
                position: relative;
                top: auto;
                left: auto;
                margin-bottom: 20px;
                display: inline-flex;
            }
        }
    </style>
</head>
<body>
    <a href="../index.html" class="back-button">
        <i class="fas fa-arrow-left"></i> Back to Hub
    </a>
    
    <div class="container">
        <div class="page-content">
            <!-- Page Header -->
            <div class="page-header">
                <div class="page-header-content">
                    <h1 class="page-title">${title}</h1>
                    <div class="page-meta">
                        <span class="page-category-badge">${categoryDisplayName}</span>
                        <span class="page-number-badge">Page #${id}</span>
                    </div>
                </div>
            </div>
            
            <!-- Introduction -->
            <div class="content-section">
                <h2>About ${title}</h2>
                <p>${description}</p>
                
                <div class="highlight-box">
                    <h3>Key Features</h3>
                    <ul>
                        ${tags.map(tag => `<li>${tag}</li>`).join('\n                        ')}
                    </ul>
                </div>
            </div>
            
            <!-- Interactive Demo -->
            <div class="content-section">
                <h2>Interactive Demo</h2>
                <p>This section will contain your interactive content, tools, or demonstrations.</p>
                
                <div class="interactive-demo">
                    <i class="fas fa-tools"></i>
                    <p><strong>Interactive Content Placeholder</strong><br>
                    Replace this area with your actual interactive content, tools, or demonstrations.</p>
                </div>
            </div>
            
            <!-- How It Works -->
            <div class="content-section">
                <h2>How It Works</h2>
                <p>Explain how your tool, concept, or demonstration works. Add step-by-step instructions, examples, and use cases.</p>
                
                <h3>Step-by-Step Guide:</h3>
                <ol style="padding-left: 20px; line-height: 1.8;">
                    <li><strong>Step 1:</strong> Describe the first step</li>
                    <li><strong>Step 2:</strong> Describe the second step</li>
                    <li><strong>Step 3:</strong> Describe the third step</li>
                    <li><strong>Step 4:</strong> Describe the final step</li>
                </ol>
                
                <div class="highlight-box" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%); border-left: 4px solid var(--success-color);">
                    <h3 style="color: var(--success-color); margin-bottom: 12px;">Pro Tips</h3>
                    <ul style="margin: 0; padding-left: 20px;">
                        <li>Add your first pro tip here</li>
                        <li>Add your second pro tip here</li>
                        <li>Add your third pro tip here</li>
                    </ul>
                </div>
            </div>
            
            <!-- Additional Content -->
            <div class="content-section">
                <h2>Additional Information</h2>
                <p>Add more sections as needed for your specific content. This could include:</p>
                <ul style="padding-left: 20px; line-height: 1.8;">
                    <li>Code examples and snippets</li>
                    <li>Real-world use cases</li>
                    <li>Best practices and guidelines</li>
                    <li>Common pitfalls to avoid</li>
                    <li>Related resources and further reading</li>
                </ul>
            </div>
        </div>
    </div>
    
    <script>
        // Add your JavaScript functionality here
        console.log('Page loaded: ${title}');
        
        // Example: Add event listeners, interactive features, etc.
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize your page functionality here
            console.log('${title} page initialized');
        });
    </script>
</body>
</html>`;
}
