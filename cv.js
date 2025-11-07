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
      years: "June 2022 - Aug. 2022",
      title: "Research Assistant for Nanomedice and Genomics summer internship",
      organization: "Biola University",
      description: "Led a research group of 5 undergraduate students in two different research projects relating to the usage of plant phytochemicals to inhibit cancer growth. I was advised by Dr. Richard Gunasekara."
    },
    {
      years: "Jan 2022 - May 2022",
      title: "Biology Department Research Assistant",
      organization: "Biola University",
      description: "Main duties involved managing laboratories in the Biology department as well as conducting research, managing cell cultures, and assisting with undergraduate research courses."
    },
    {
      years: "May 2021 - Sep 2021",
      title: "Fisheries Biologist Intern",
      organization: "NOAA Northeast Fisheries Science Center",
      description: "I worked under Dr. Chris Chambers on a project analyzing the functional response of white perch to a broad range of thermal regimes. During this work I used ImageJ for image analysis, R for statistics. This work was presented at the American Fisheries Society national conference in Fall 2021."
    },
    {
      years: "Jan 2019 - Dec 2021",
      title: "Undergraduate Research Assistant",
      organization: "Biola University",
      description: "I worked in a cancer methylation cell biology lab doing research under the guidance of Dr. Jinsil Kim. We employed a range of cellular biology techniques such as cell culture, qPCR, western blots, and RNA-SEQ to analyze the potential links between diabetes and cancer through methylation pathways. Throughout my time here, I became the lab manager and was responsable for training new lab members."
    },
    {
      years: "Sep 2019 - May 2020",
      title: "Founder of WBL Lab",
      organization: "Biola University",
      description: "I applied and obtained an internal grant to start my own lab group and research project. I managed a group of 4 other students with diverse majors towards the goal of studying Tardigrade genomics. This research was unfortunately cut short due to COVID."
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
      years: "2019-202",
      title: "NOAA Ernest F. Hollings Scholarship",
      organization: "National Oceanic and Atmospheric Administration",
      description: "Awarded as one of 120 nationally, this award recognizes academic achievement in the earth sciences and provides support for two years of schooling."
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
      years: "2023-2025",
      title: "Metagenomic Workshop Instructor",
      organization: "University of Miami",
      description: "During my time at Miami, I organized, planned, and executed 5 free metagenomics workshops for graduate and undergraduate students in the university. These workshops contained lecture and hands-on exercises that I created and had an overall attendance of over 50 students."
    },
    {
      years: "Summer 2024",
      title: "Guest lecturer for the IMPACT program",
      organization: "Frost Museum of Science",
      description: "I worked as a guest lecturer for the Frost Museum of Science's IMPACT program, helping students from under-resourced communities gain experience in science. I gave a lecture on marine microbiology to 80 highschool students."
    },
    {
      years: "2023-Present",
      title: "Guest Speaker at various Miami Highschools",
      organization: "Students4Students, University of Miami",
      description: "I was involved with the Students4Students outreach club on campus. Through this club, I was paired up with various high schools to give guest lectures on ocean microbes and viruses. Throughout my time, I gave a total of 8 lectures to a total of 193 students at 3 different highschools."
    },
    {
      years: "January 2022 – May 2022",
      title: "Adjunct Professor of Cell and Molecular Biology",
      organization: "Biola University",
      description: "Taught an upper-division lab course in cell and molecular biology. This involved lesson prep, CRISPR-Cas9 experimentation, bacterial culturing, and extensive teaching/guidance."
    },
    {
      years: "2020-2021",
      title: "Teaching assistant for Cell and Molecular Biology",
      organization: "Biola University",
      description: "I worked as the TA for the upper division cell and molecular biology class for 4 semesters. Duties included leading study session, private tutoring, grading, and teaching when the teacher was away at a conference."
    },
    {
      years: "Aug 2021",
      title: "Teaching assistant for Ecology",
      organization: "Biola University",
      description: "As a TA for general ecology, I assisted the professor in grading research papers and assignments, as well as leading tutoring sessions and input on student research projects."
    },
    {
      years: "Jan 2021",
      title: "Teaching assistant for Organic Chemistry",
      organization: "Biola University",
      description: "Duties included twice-weekly review session remotely, as well as grading assignments."
    },
    {
      years: "Aug 2020",
      title: "Teaching assistant for General Chemistry",
      organization: "Biola University",
      description: "Duties included twice-weekly instructional session where I would review material that was taught in class."
    }
  ]
  // --- ADD MORE SECTIONS AS NEEDED ---
  // e.g., teaching, publications, presentations...
  // publications: [ ... ],
  // presentations: [ ... ],

};
