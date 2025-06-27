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
        title: 'An introduction',
        date: '2025-06-25',
        description: 'An introduction to myself and what I research.',
        content: `
## Welcome!
Coming soon.
        `
    },
    {
        id: 'news-npj',
        type: 'blog',
        title: 'News articles for Expansion of GV diversity NPJ paper',
        date: '2025-06-25',
        description: 'Our recent paper "Expansion of the genomic and functional diversity of global ocean giant viruses" has been picked up by many local and international news sources. Read about it here.',
        content: `
## News coverage for Expansion of the genomic and functional diversity of global ocean giant viruses.
* [Scientists discover 230 new giant viruses that shape ocean life and health](https://www.msn.com/en-us/health/other/scientists-discover-230-new-giant-viruses-that-shape-ocean-life-and-health/ar-AA1Gghcv) by MSN
* [Scientists discover hundreds of mysterious giant VIRUSES lurking in the ocean](https://www.dailymail.co.uk/sciencetech/article-14816775/hundreds-mysterious-giant-VIRUSES-lurking-ocean.html) by DailyMail UK
* [Hundreds of Mysterious Giant Viruses Discovered Lurking in The Ocean](https://www.yahoo.com/news/hundreds-mysterious-giant-viruses-discovered-064150617.html?guce_referrer=aHR0cHM6Ly9uYXR1cmUuYWx0bWV0cmljLmNvbS9kZXRhaWxzLzE3NjMwNjEzNi9uZXdz&guce_referrer_sig=AQAAADwpfheHLkPrB9fArV-VjbWBtTvbqkTDTPXRymZaaR0o_MPIkB128mJfeAjq_50Gut6hAmTN9km63ol940Wakt2wDCMWahCYkmy_h8nYQrvYzRfA0vP2KJc0CmbsPfNh4aFERq_u-a1O7HwrAmv3fMv_E_wGes_qf-FlpPamfVfU) by Yahoo News
* [230 New Giant Viruses Discovered That Shape Earth’s Oceans](https://astrobiology.com/2025/06/230-new-giant-viruses-discovered-that-shape-earths-oceans.html) by Astrobiology
* [Are Giant Ocean Viruses Behind Algal Blooms and Food Chain Shifts?](https://www.medindia.net/news/healthwatch/are-giant-ocean-viruses-behind-algal-blooms-and-food-chain-shifts-220095-1.htm) by MedIndia
* [Scientists uncover 230 giant ocean viruses that hijack photosynthesis](https://www.sciencedaily.com/releases/2025/06/250606193228.htm) by ScienceDaily
        `
    },

    // === PODCASTS ===
    {
        id: 'episode-1-the-start',
        type: 'podcast',
        title: 'Viruses in a deep sea brine pool',
        date: '2025-06-28',
        description: 'An overview podcast (notebookLM) of one of my research papers on viruses in deep sea brine pools',
        audioUrl: 'https://archive.org/download/brine-pool-viral-ecology-and-spatial-dynamics/Brine%20Pool%20Viral%20Ecology%20and%20Spatial%20Dynamics.mp3',
        showNotes: `
### In this episode:
* The diversity of both prokaryotic and eukaryotic viruses in deep sea brine pools.
* The different life strategies that shape these viral communities.
* How these viruses may be influencing the chemistry of the pools.
        `
    },

    // === INTERACTIVE PAGES ===
    {
        id: 'Polinton-like-viruses',
        type: 'interactive',
        title: 'Preplasmiviricota Viruses',
        date: '2025-06-24',
        description: 'An exploration of Preplasmiviricota viruses',
        htmlFile: 'interactive/Preplasmiviricota.html'
    },
    {
        id: 'protist-defense',
        type: 'interactive',
        title: 'Protist and Giant Virus Arms race',
        date: '2025-06-23',
        description: 'An overview of giant virus entry mechanisms and protist defences.',
        htmlFile: 'interactive/protist-defense.html'
    }
].sort((a, b) => new Date(b.date) - new Date(a.date));

