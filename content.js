// This file acts as your "database".
// To add a new blog post, podcast, or interactive page, you just need to add a new object to this array.

const contentData = [
    // === PUBLICATIONS ===
    {
        id: 'expansion-ncldv', // Must be unique for publications
        type: 'publication',
        title: 'Expansion of the genomic and functional diversity of global ocean giant viruses',
        authors: 'Benjamin Minch and Mohammad Moniruzzaman',
        venue: 'Nature NPJ Viruses',
        date: '2025', // Just the year is fine for publications
        link: 'https://www.nature.com/articles/s44298-025-00122-z', // Link to the paper (PDF, DOI, or a page)
        abstract: `
Giant viruses (GVs) play crucial roles in the global ocean microbial food web and biogeochemistry. Recent metagenomic advances have uncovered >1800 new GV genomes from the world’s oceans. While this rapid increase in genomic information is impressive, it is nowhere close to the extensive genomic information available for other marine entities—e.g., prokaryotes and their “virome”. We present 230 new high-quality GV genomes (genomes with 4 or more marker genes) and 398 partial genomes from nine global ocean datasets. Notably, we identified numerous GV genomes from the Baltic Sea, offering insights into their phylogenomics, metabolic potential, and environmental drivers in one of the largest brackish water ecosystems. We discovered new GV functions and identified a significant functional divide between the Imitervirales and Algavirales orders. Additionally, we evaluated factors affecting GV abundance through a case study on the Baltic Sea dataset. Our study significantly expands the marine GV genomic and functional diversity, broadening our understanding of their roles in the food web and biogeochemistry.
        `
    },
    {
        id: 'BEREN',
        type: 'publication',
        title: 'BEREN: A bioinformatic tool for recovering Giant viruses, Polinton-like Viruses, and Virophages in metagenomic data',
        authors: 'Benjamin Minch and Mohammad Moniruzzaman',
        venue: 'bioRxviv',
        date: '2024',
        link: 'https://www.biorxiv.org/content/10.1101/2024.10.09.617401v1.abstract',
        abstract: `
Viruses in the kingdom Bamfordvirae, specifically giant viruses (NCLDVs) in the phylum Nucleocytoviricota and smaller members in the Preplasmiviricota phylum, are widespread and important groups of viruses that infect eukaryotes. While viruses in this kingdom such as giant viruses, polinton-like viruses, and virophages have gained large interest from researchers in recent years, there is still a lack of streamlined tools for the recovery of their genomes from metagenomic datasets. Here, we present BEREN, a comprehensive bioinformatic tool to unlock the diversity of these viruses in metagenomes through five modules for NCLDV genome, contig, and marker gene recovery, metabolic protein annotation, and Preplasmiviricota genome identification and annotation. BEREN’s performance was benchmarked against other mainstream virus recovery tools using a mock metagenome, demonstrating superior recovery rates of NCLDV contigs and Preplasmiviricota genomes. Applied to a real-world dataset from the Baltic Sea, BEREN identified diverse Bamfordvirae members, giving insight into viral interactions and metabolic functions in this region. Overall, BEREN offers a user-friendly, transparent bioinformatic solution for studying the ecological and functional roles of these eukaryotic viruses, facilitating broader access to their metagenomic analysis.
        `
    },

    // === BLOG POSTS ===
    {
        id: 'my-first-post',
        type: 'blog',
        title: 'My First Post: The Journey Begins',
        date: '2025-06-27',
        description: 'An introduction to my new website and what I plan to write about. Exploring topics from web development to creative hobbies.',
        content: `
## Welcome!
This is my first post on my new website. I'm excited to have a space to share my thoughts, projects, and discoveries.
        `
    },
    {
        id: 'understanding-ssg',
        type: 'blog',
        title: 'Understanding Static Site Generators',
        date: '2025-07-02',
        description: 'A deep dive into what Static Site Generators (SSGs) are, how they work, and why they are so powerful.',
        content: `
## What is a Static Site Generator?
A Static Site Generator (SSG) is a tool that generates a full static HTML website based on raw data and a set of templates.
        `
    },

    // === PODCASTS ===
    {
        id: 'episode-1-the-start',
        type: 'podcast',
        title: 'Episode 1: The Start of Something New',
        date: '2025-06-28',
        description: 'In the inaugural episode, I discuss the motivations behind starting this new project.',
        audioUrl: 'https://archive.org/download/MIT18.06S05_L1_preview/MIT18_06S05_L1_300k.mp3',
        showNotes: `
### In this episode:
* Why I decided to start a podcast.
        `
    },

    // === INTERACTIVE PAGES ===
    {
        id: 'simple-color-picker',
        type: 'interactive',
        title: 'Interactive Color Picker',
        date: '2025-06-25',
        description: 'A simple, clean color picker tool built with HTML and JavaScript.',
        htmlFile: 'interactive/color-picker.html'
    },
    {
        id: 'Polinton-like-viruses',
        type: 'interactive',
        title: 'Preplasmiviricota Viruses',
        date: '2025-06-24',
        description: 'An exploration of Preplasmiviricota viruses',
        htmlFile: 'interactive/Preplasmiviricota.html'
    }
].sort((a, b) => new Date(b.date) - new Date(a.date));

