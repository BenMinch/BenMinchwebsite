# Introduction to Protein Prediction with Prodigal

**Date:** 2025-12-10  
**Author:** Benjamin Minch

Prodigal (Prokaryotic Dynamic Programming Genefinding Algorithm) is widely considered the gold standard for identifying protein-coding genes in microbial genomes. Whether you are working with a complete bacterial genome or a complex metagenome from the ocean, Prodigal is efficient, robust, and highly accurate.

In this tutorial, we will walk through how to use Prodigal to predict genes from a mock metagenome.

---

## 1. What is Prodigal?

Prodigal is a gene prediction tool tailored for prokaryotes (bacteria and archaea). It reads raw DNA sequences and outputs the coordinates of potential genes (open reading frames, or ORFs) and their corresponding protein translations.

**Key Features:**
* **Fast:** Can analyze large datasets quickly.
* **Accurate:** Uses a highly tuned algorithm to find translation initiation sites.
* **Versatile:** Runs in two main modes: *Single Genome* (normal) and *Metagenomic* (anonymous).

---

## 2. Installation

If you haven't installed Prodigal yet, you can typically install it via Conda (bioconda) or standard package managers.

**Option A: Conda (Recommended)**
```bash
conda install -c bioconda prodigal
