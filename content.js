// This file acts as your "database".
// To add a new blog post, podcast, or interactive page, you just need to add a new object to this array.

const contentData = [
    // === BLOG POSTS ===
    {
        id: 'my-first-post', // Must be unique for blog posts
        type: 'blog',
        title: 'My First Post: The Journey Begins',
        date: '2025-06-27', // Use YYYY-MM-DD format
        description: 'An introduction to my new website and what I plan to write about. Exploring topics from web development to creative hobbies.',
        content: `
## Welcome!

This is my first post on my new website. I'm excited to have a space to share my thoughts, projects, and discoveries.

### What to Expect

I plan to write about a few key areas:

* **Technology:** Especially modern web development with tools like React, Vue, and of course, plain old HTML/CSS/JS.
* **Creative Projects:** From digital art to woodworking, I love to make things.
* **Podcasting:** I'll be sharing my journey into the world of audio content creation.

> "The secret of getting ahead is getting started." - Mark Twain

I'm looking forward to building this space. Thanks for stopping by!
        `
    },
    {
        id: 'understanding-ssg', // Must be unique for blog posts
        type: 'blog',
        title: 'Understanding Static Site Generators',
        date: '2025-07-02',
        description: 'A deep dive into what Static Site Generators (SSGs) are, how they work, and why they are so powerful for modern web development.',
        content: `
## What is a Static Site Generator?

A Static Site Generator (SSG) is a tool that generates a full static HTML website based on raw data and a set of templates. Essentially, you give it your content (like Markdown files for blog posts) and your design (like HTML/CSS templates), and it spits out a complete website made of plain HTML files that are ready to be served to users.

This website itself is built on this principle!

### Key Advantages

1.  **Performance:** Since the pages are pre-built, they load incredibly fast. There's no database to query or server-side rendering to wait for.
2.  **Security:** With no database or complex server-side code, the attack surface for malicious actors is drastically reduced.
3.  **Scalability & Hosting:** Static files are easy to host and scale. You can put them on any simple web server or use a global Content Delivery Network (CDN) for lightning-fast delivery anywhere in the world. Services like Netlify, Vercel, and GitHub Pages are perfect for this.

Here's a simple code block example:

\`\`\`javascript
function helloWorld() {
    console.log("Hello from a static site!");
}
\`\`\`

SSGs represent a powerful way to build fast, secure, and scalable websites.
        `
    },

    // === PODCASTS ===
    {
        id: 'episode-1-the-start', // Must be unique for podcasts
        type: 'podcast',
        title: 'Episode 1: The Start of Something New',
        date: '2025-06-28',
        description: 'In the inaugural episode, I discuss the motivations behind starting this new project and what listeners can expect in future episodes.',
        audioUrl: 'https://archive.org/download/MIT18.06S05_L1_preview/MIT18_06S05_L1_300k.mp3', // Replace with your actual MP3 URL
        showNotes: `
### In this episode:

* Why I decided to start a podcast.
* The technology I'm using to record and produce it.
* A sneak peek at some of the topics for the first few episodes.
* The challenges of finding your voice.

Thank you for tuning in!
        `
    },

    // === INTERACTIVE PAGES ===
    {
        id: 'simple-color-picker', // Must be unique for interactive pages
        type: 'interactive',
        title: 'Interactive Color Picker',
        date: '2025-06-25',
        description: 'A simple, clean color picker tool built with HTML and JavaScript. A great example of an interactive web app.',
        htmlFile: 'interactive/color-picker.html' // Path to the HTML file in the 'interactive' folder
    }
].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sorts all content by date, newest first

