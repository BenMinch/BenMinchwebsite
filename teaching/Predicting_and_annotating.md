# Tutorial: Predicting Proteins from a Microbial Metagenome Using Prodigal

This tutorial provides a complete, step-by-step guide for using **Prodigal** to predict protein-coding genes from a microbial metagenome. It covers installation, running Prodigal in metagenomic mode, understanding outputs, and performing common downstream tasks.

---

## 🧬 1. Introduction

**Prodigal** (Prokaryotic Dynamic Programming Gene-finding Algorithm) is one of the most widely used tools for predicting open reading frames (ORFs) and proteins in microbial genome and metagenome assemblies.

Key features:

* Accurate gene prediction
* Fast and lightweight
* Supports isolate genomes and metagenomes
* Outputs nucleotide and amino acid sequences
* Produces gene coordinates for downstream analysis

For metagenomes, Prodigal uses the `-p meta` flag, which adjusts the model to avoid relying on genome-wide training.

---

## 📁 2. Input Data

Prodigal requires an assembly in **FASTA format**.

Example:

```
Mock_metagenome.fasta
```

Ensure that:

* Contigs are reasonably long (e.g., >1kb)
* File contains only DNA sequences
* Headers follow FASTA conventions

---

## ▶️ 3. Running Prodigal in Metagenome Mode

To run Prodigal on a metagenome and generate protein predictions:

```bash
prodigal -i metagenome_assembly.fasta \
         -a proteins.faa \
         -d genes.fna \
         -o prodigal_output.gff \
         -p meta
```

### Output files

| File                    | Description                                |
| ----------------------- | ------------------------------------------ |
| **proteins.faa**        | Amino acid sequences of predicted proteins |
| **genes.fna**           | Nucleotide sequences of ORFs               |
| **prodigal_output.gff** | Gene coordinates in GFF format             |

### Explanation of flags

* `-i` → input FASTA
* `-a` → output protein sequences
* `-d` → output nucleotide ORFs
* `-o` → annotation file
* `-p meta` → metagenome mode

---

## 📊 4. Understanding the Output Files

### **1. Protein file (proteins.faa)**

Headers look like:

```
>1_1 # 1 # 100 # 900 # +1 # 0.89
```

Information encoded:

* contig and gene index
* start and stop positions
* strand (+/-)
* score / confidence

### **2. Gene nucleotide file (genes.fna)**

Contains nucleotides of predicted genes in-frame.
Useful for: GC content, codon usage, mapping reads back, etc.

### **3. GFF annotation file**

Contains positions and metadata for each predicted ORF.
Useful for: visualization, integration with downstream tools.

---

## 🔧 5. Common Downstream Tasks

### **A. Count the number of predicted proteins**

```bash
seqkit stats proteins.faa
```

### **B. Filter out short proteins (<100 aa)**

```bash
seqkit seq -m 100 proteins.faa > long_proteins.faa
```


## 🔁 6. Running Prodigal on Many Samples

Loop example:

```bash
for f in *.fasta; do
    base=$(basename $f .fasta)
    prodigal -i $f -a ${base}_prot.faa -d ${base}_genes.fna -o ${base}.gff -p meta
done
```

## 🎯 7. Summary

In this tutorial, you learned how to:

* Install Prodigal
* Run Prodigal on a metagenome (`-p meta`)
* Interpret protein, nucleotide, and GFF outputs
* Automate predictions across many samples
* Perform common downstream analyses

Prodigal remains one of the most efficient and accurate ORF finders in microbial metagenomics—an essential first step before annotation, metabolic reconstruction, or binning.

---

## 📚 8. Further Reading

* Hyatt, D. et al. (2010). *Prodigal: prokaryotic gene recognition and translation initiation site identification.* BMC Bioinformatics.
* Prodigal GitHub repository.

---
