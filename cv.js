/*
  =================================================================
  YOUR EASY-TO-EDIT CV "BACKEND"
  =================================================================
  
  Instructions:
  - To add a new entry, just copy one of the objects {} and
    paste it at the top of the appropriate list.
  - The website will automatically format it.
  - You can add, remove, or rename sections as you like
    (e.g., add a "grants" or "teaching" section).
*/

const cvData = {
  // Personal Info
  name: "Benjamin Minch",
  email: "bsm122@miami.edu",
  website: "https://bminch.github.io/", // Or your custom domain
  // You can link to a PDF version here if you have one
  pdf: "path/to/your/cv.pdf", 

  // --- EDUCATION ---
  education: [
    {
      years: "2021 – Present",
      title: "Ph.D. in Marine Biology",
      organization: "University of Miami, Rosenstiel School",
      description: "Advisor: Dr. Example Advisor. Focusing on the ecological role of viruses in coral reef ecosystems. Developing computational models to track viral dynamics."
    },
    {
      years: "2017 – 2021",
      title: "B.S. in Marine Science, cum laude",
      organization: "University of Example",
      description: "Minor in Computer Science. Senior Thesis: 'Genetic diversity of Synechococcus in coastal waters.'"
    }
  ],

  // --- EXPERIENCE ---
  experience: [
    {
      years: "2021 – Present",
      title: "Graduate Research Assistant",
      organization: "University of Miami",
      description: "Conducting Ph.D. research. Includes fieldwork, next-generation sequencing, and bioinformatic analysis."
    },
    {
      years: "2020 – 2021",
      title: "Undergraduate Research Fellow",
      organization: "University of Example, Marine Lab",
      description: "Assisted with sample collection and processing for long-term ecological monitoring projects. Maintained lab equipment."
    },
    {
      years: "Summer 2019",
      title: "Reef Ecology Intern",
      organization: "Non-Profit Ocean Institute, Key Largo, FL",
      description: "Led educational snorkeling tours and assisted in coral nursery maintenance and data collection."
    }
  ],

  // --- SKILLS ---
  skills: [
    {
      category: "Laboratory",
      items: "DNA/RNA extraction, PCR/qPCR, Nanopore sequencing, flow cytometry, microscopy."
    },
    {
      category: "Computational",
      items: "Python (Pandas, NumPy, Biopython), R (phyloseq, ggplot2), Bash/Shell scripting, QIIME 2, MATLAB."
    },
    {
      category: "Fieldwork",
      items: "AAUS Scientific Diver (Rescue, Nitrox), small boat handling, collection of water and sediment samples."
    }
  ],

  // --- AWARDS & GRANTS ---
  awards: [
    {
      years: "2022",
      title: "NSF Graduate Research Fellowship Program (GRFP)",
      organization: "National Science Foundation",
      description: "Awarded for proposed research on viral impacts on coral holobiont health."
    },
    {
      years: "2021",
      title: "Rosenstiel School Fellowship",
      organization: "University of Miami",
      description: "Four-year fellowship for incoming graduate students."
    }
  ]
  
  // --- ADD MORE SECTIONS AS NEEDED ---
  // e.g., teaching, publications, presentations...
  // publications: [ ... ],
  // presentations: [ ... ],

};
