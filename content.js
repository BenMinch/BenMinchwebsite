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
    {
        id: 'SPOT',
        type: 'publication',
        title: 'Phylogenetic proximity drives temporal succession of marine giant viruses in a five-year metagenomic time-series',
        authors: 'Sarah Laperriere and Benjamin Minch et al.',
        venue: 'bioRxviv',
        date: '2024',
        link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11343133/',
        abstract: `
Nucleocytoplasmic Large DNA Viruses (NCLDVs, also called giant viruses) are widespread in marine systems and infect a broad range of microbial eukaryotes (protists). Recent biogeographic work has provided global snapshots of NCLDV diversity and community composition across the world’s oceans, yet little information exists about the guiding ‘rules’ underpinning their community dynamics over time. We leveraged a five-year monthly metagenomic time-series to quantify the community composition of NCLDVs off the coast of Southern California and characterize these populations’ temporal dynamics. NCLDVs were dominated by Algavirales (Phycodnaviruses, 59%) and Imitervirales (Mimiviruses, 36%). We identified clusters of NCLDVs with distinct classes of seasonal and non-seasonal temporal dynamics. Overall, NCLDV population abundances were often highly dynamic with a strong seasonal signal. The Imitervirales group had highest relative abundance in the more oligotrophic late summer and fall, while Algavirales did so in winter. Generally, closely related strains had similar temporal dynamics, suggesting that evolutionary history is a key driver of the temporal niche of marine NCLDVs. However, a few closely-related strains had drastically different seasonal dynamics, suggesting that while phylogenetic proximity often indicates ecological similarity, occasionally phenology can shift rapidly, possibly due to host-switching. Finally, we identified distinct functional content and possible host interactions of two major NCLDV orders-including connections of Imitervirales with primary producers like the diatom Chaetoceros and widespread marine grazers like Paraphysomonas and Spirotrichea ciliates. Together, our results reveal key insights on season-specific effect of phylogenetically distinct giant virus communities on marine protist metabolism, biogeochemical fluxes and carbon cycling.
        `
    },
    {
        id: 'brinepool',
        type: 'publication',
        title: 'Active prokaryotic and eukaryotic viral ecology across spatial scale in a deep-sea brine pool',
        authors: 'Benjamin Minch, Morgan Chakraborty, Sam Purkis, Mattie Rodrigue, Mohammad Moniruzzaman',
        venue: 'ISME Communications',
        date: '2024',
        link: 'https://academic.oup.com/ismecommun/article/4/1/ycae084/7693284',
        abstract: `
Deep-sea brine pools represent rare, extreme environments, providing unique insight into the limits of life on Earth, and by analogy, the plausibility of life beyond it. A distinguishing feature of many brine pools is presence of thick microbial mats that develop at the brine–seawater interface. While these bacterial and archaeal communities have received moderate attention, viruses and their host interactions in these environments remain underexplored. To bridge this knowledge gap, we leveraged metagenomic and metatranscriptomic data from three distinct zones within the NEOM brine pool system (Gulf of Aqaba) to reveal the active viral ecology around the pools. We report a remarkable diversity and activity of viruses infecting microbial hosts in this environment, including giant viruses, RNA viruses, jumbo phages, and Polinton-like viruses. Many of these form distinct clades—suggesting presence of untapped viral diversity in this ecosystem. Brine pool viral communities exhibit zone-specific differences in infection strategy—with lysogeny dominating the bacterial mat further away from the pool’s center. We linked viruses to metabolically important prokaryotes—including association between a jumbo phage and a key manganese-oxidizing and arsenic-metabolizing bacterium. These foundational results illuminate the role of viruses in modulating brine pool microbial communities and biogeochemistry through revealing novel viral diversity, host associations, and spatial heterogeneity in viral dynamics.
        `
    },
    {
        id: 'bayofbengal',
        type: 'publication',
        title: 'Phylogenetic diversity and functional potential of large and cell-associated viruses in the Bay of Bengal',
        authors: 'Benjamin Minch, Salma Akter, Mohammad Moniruzzaman et al.',
        venue: 'mSphere',
        date: '2023',
        link: 'https://journals.asm.org/doi/full/10.1128/msphere.00407-23',
        abstract: `
The Bay of Bengal (BoB) is the world’s largest bay, offering essential services like fishing and recreation while holding significant economic value for coastal communities. However, the BoB faces environmental challenges from monsoons, freshwater inputs, rising sea levels, and intensified cyclones due to climate change. Human activities such as tourism and development also impact the region, necessitating a global change perspective. Despite its importance, microbial diversity and ecology in the BoB remain largely unexplored. We focused on large and cell-associated viruses (i.e., originating from the cellular size fraction), particularly giant viruses and large phages in two BoB coastal sites: Cox’s Bazar, a populated beach with freshwater influences, and Saint Martin Island, a less affected resort island. Metagenomic sequencing reveals a higher abundance and diversity of viruses in Cox’s Bazar and presence of viruses that suggest freshwater intrusion and runoff. We identified 1962 putative phage genomes (10–655 kbp). Notably, 16 “large” phages >100 kbp were found in Saint Martin, and a terminase large subunit marker gene phylogeny revealed substantial diversity of large phages along the BoB coast. The BoB virome encodes diverse functionalities, with a greater presence of auxiliary metabolic genes in the Cox’s Bazar viral community. Additionally, five giant virus genomes (phylum Nucleocytoviricota) encoding various functionalities are reconstructed from Cox’s Bazar (83–876 kbp). This pioneering study revealing the viral diversity and host interactions in coastal BoB lays the foundation for future investigations into viral impact on biogeochemical cycles and the microbial food web in this understudied environment.
        `
    },
    {
        id: 'virologs',
        type: 'publication',
        title: 'Virologs, viral mimicry, and virocell metabolism: the expanding scale of cellular functions encoded in the complex genomes of giant viruses',
        authors: 'Mohammad Moniruzzaman, Maria Paula Erazo Garcia , Roxanna Farzad , Anh D Ha , Abdeali Jivaji , Sangita Karki , Uri Sheyn , Joshua Stanton , Benjamin Minch, Frank Aylward et al. ',
        venue: 'FEMS Microbiology Reviews',
        date: '2023',
        link: 'https://academic.oup.com/femsre/article/47/5/fuad053/7280998',
        abstract: `
The phylum Nucleocytoviricota includes the largest and most complex viruses known. These “giant viruses” have a long evolutionary history that dates back to the early diversification of eukaryotes, and over time they have evolved elaborate strategies for manipulating the physiology of their hosts during infection. One of the most captivating of these mechanisms involves the use of genes acquired from the host—referred to here as viral homologs or “virologs”—as a means of promoting viral propagation. The best-known examples of these are involved in mimicry, in which viral machinery “imitates” immunomodulatory elements in the vertebrate defense system. But recent findings have highlighted a vast and rapidly expanding array of other virologs that include many genes not typically found in viruses, such as those involved in translation, central carbon metabolism, cytoskeletal structure, nutrient transport, vesicular trafficking, and light harvesting. Unraveling the roles of virologs during infection as well as the evolutionary pathways through which complex functional repertoires are acquired by viruses are important frontiers at the forefront of giant virus research.
        `
    },


    // === BLOG POSTS ===
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
    // === Teaching ===
    {
        id: 'protein-prediction',
        type: 'teaching',
        title: 'Protein Prediction',
        date: '2025-06-24',
        description: 'How to predict microbial proteins and determine their function',
        markdownUrl: 'teaching/Predicting_and_annotating.md'
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
        id: 'size-compare',
        type: 'interactive',
        title: 'How big are giant viruses?',
        date: '2025-06-27',
        description: 'An interactive size chart to see the relative size of giant viruses.',
        htmlFile: 'interactive/size-compare.html'
    },
    {
        id: 'umap',
        type: 'interactive',
        title: 'Umap-Visualizer',
        date: '2025-06-27',
        description: 'A tool for visualizing umap data',
        htmlFile: 'interactive/umap_viewer.html'
    },
    {
        id: 'capsid_visual',
        type: 'interactive',
        title: 'Interactive Virus Viewer',
        date: '2025-06-27',
        description: 'A fun visualization of viral capsids',
        htmlFile: 'interactive/virus_capsid.html'
    },
    {
        id: 'textguesser',
        type: 'interactive',
        title: 'TextGuesser',
        date: '2025-06-27',
        description: 'A text-based geoguesser',
        htmlFile: 'interactive/textguesser.html'
    },
    {
        id: 'protist-defense',
        type: 'interactive',
        title: 'Protist and Giant Virus Arms race',
        date: '2025-06-23',
        description: 'An overview of giant virus entry mechanisms and protist defences.',
        htmlFile: 'interactive/protist-defense.html'
    },
    {
        id: 'volcano-plotter',
        type: 'interactive',
        title: 'Volcano Plot Viewer for RNA-SEQ',
        date: '2025-07-23',
        description: 'A tool to create volcano plots from RNA-SEQ data.',
        htmlFile: 'interactive/volcanoplotter.html'
    },
    {
        id: 'virtual-bioinformatics',
        type: 'interactive',
        title: 'Virtual Bioinformatics Terminal',
        date: '2025-07-23',
        description: 'A bioinformatics-ready environment to learn command line tools.',
        htmlFile: 'https://mybinder.org/v2/gh/BenMinch/bioinformatic-teaching-environment/HEAD?urlpath=%2Fdoc%2Ftree%2Flab'
    },
    // === Videos ===
    {
    id: 'Genomic-islands',
    type: 'video',
    title: 'The Genomic Island Landscape of Giant Viruses',
    date: '2025-10-24',
    description: 'An overview of my research into the genomic islands of giant viruses.',
    youtubeId: 'AXeiHifZ3kM' // 👈 Replace with your actual YouTube video ID
    },
    {
    id: 'Metagenomics-workshop',
    type: 'video',
    title: 'Intro to Metagenomics Workshop',
    date: '2025-09-22',
    description: 'An introductory metagenomic workshop for those interested in getting into it.',
    youtubeId: 'Mlp0dE7sQAo' // Replace with your actual video ID
    },
].sort((a, b) => new Date(b.date) - new Date(a.date));

