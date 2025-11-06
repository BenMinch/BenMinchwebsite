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
  website: "https://github.com/BenMinch", // Or your custom domain
  // You can link to a PDF version here if you have one
  pdf: "path/to/your/cv.pdf", 

  // --- EDUCATION ---
  education: [
    {
      years: "2022 – Present",
      title: "Ph.D. in Marine Biology and Ecology",
      organization: "University of Miami, Rosenstiel School",
      description: "Advisor: Dr. Mohammad Moniruzzaman. Focusing on the ecology and genomics of giant viruses in the global oceans through bioinformatics, lab experimentation, and field research."
    },
    {
      years: "2018 – 2021",
      title: "B.S. in Biology, Summa cum laude",
      organization: "Biola University",
      description: "Minor in Biblical studies. 3.98 GPA."
    }
  ],

  // --- EXPERIENCE ---
  experience: [
    {
      years: "2022 – Present",
      title: "Graduate Research Assistant",
      organization: "University of Miami",
      description: "Conducting Ph.D. research. Includes fieldwork, algal-virus culture experimentation, next-generation sequencing (nanopore), and bioinformatic analysis."
    },
    {
      years: "January 2022 – May 2022",
      title: "Adjunct Professor of Cell and Molecular Biology",
      organization: "Biola University",
      description: "Taught an upper-division lab course in cell and molecular biology. This involved lesson prep, CRISPR-Cas9 experimentation, bacterial culturing, and extensive teaching/guidance."
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
      items: "DNA/RNA extraction, PCR/qPCR, Nanopore sequencing, flow cytometry, algal and cell culture, microscopy."
    },
    {
      category: "Computational",
      items: "Proficient in Python, R, and Bash/Shell scripting, as well as bioinformatic tool development and pipeline implementation."
    },
    {
      category: "Fieldwork",
      items: "Water/soil sampling, filtration and sample processing, CTD casting."
    }
  ],

  // --- AWARDS & GRANTS ---
  awards: [
    {
      years: "2020",
      title: "NOAA Hollings Scholarship",
      organization: "National Oceanic and Atmospheric Administration",
      description: "Awarded for proposed research on viral impacts on coral holobiont health."
    },
    {
      years: "2018",
      title: "Stuart Science Honors recipient",
      organization: "Biola University",
      description: "A four-year program with an associated scholarship to conduct research and present that research at a conference."
    }
  ],
  // --- Teaching ---
  teaching: [
    {
      years: "Fall 2023-2024",
      title: "TA for Saltwater Semester",
      organization: "University of Miami",
      description: "Assisted with the teaching of the Conservation genomics course taught to upper-division marine biology students."
    },
    {
      years: "2018",
      title: "Stuart Science Honors recipient",
      organization: "Biola University",
      description: "A four-year program with an associated scholarship to conduct research and present that research at a conference."
    }
  ]
  // --- ADD MORE SECTIONS AS NEEDED ---
  // e.g., teaching, publications, presentations...
  // publications: [ ... ],
  // presentations: [ ... ],

};
