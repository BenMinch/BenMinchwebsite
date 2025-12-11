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

## 📦 2. Installation

### **Option A: Install via Conda (recommended)**

```bash
conda install -c bioconda prodigal
```

### **Option B: Manual Install**

1. Download from: [https://github.com/hyattpd/Prodigal](https://github.com/hyattpd/Prodigal)
2. Compile:

```bash
make
```

3. Move executable into your PATH:

```bash
sudo mv prodigal /usr/local/bin/
```

### Confirm installation

```bash
prodigal -v
```

---

## 📁 3. Input Data

Prodigal requires an assembly in **FASTA format**.

Example:

```
metagenome_assembly.fasta
```

Ensure that:

* Contigs are reasonably long (e.g., >1kb)
* File contains only DNA sequences
* Headers follow FASTA conventions

---

## ▶️ 4. Running Prodigal in Metagenome Mode

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

## 📊 5. Understanding the Output Files

### **1. Protein file (proteins.faa)**

Headers look like:

```
>1_1 # 1 # 100 # 900 # + # 0.89
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

## 🔧 6. Common Downstream Tasks

### **A. Count the number of predicted proteins**

```bash
grep -c ">" proteins.faa
```

### **B. Filter out short proteins (<100 aa)**

```bash
awk '/^>/ {if (seqlen){print seqlen}; print; seqlen=0; next;} {seqlen += length($0)} END {print seqlen}' proteins.faa |
awk 'NR%2==1 {header=$0} NR%2==0 {if ($0 >= 300) print header"\n"$0}' > proteins_100aa.faa
```

### **C. Use predicted proteins for functional annotation**

Tools include:

* **Diamond BLASTp** against UniProt or NR
* **HMMER** against PFAM or TIGRFAM
* **eggNOG-mapper**
* **InterProScan**

### **D. Generate gene statistics** (length, GC%)

Use scripts or tools like: seqkit, bioawk, or custom Python.

---

## 🔁 7. Running Prodigal on Many Samples

Loop example:

```bash
for f in *.fasta; do
    base=$(basename $f .fasta)
    prodigal -i $f -a ${base}_prot.faa -d ${base}_genes.fna -o ${base}.gff -p meta
done
```

---

## 🧪 8. Troubleshooting

### **"No genes found"**

* Assembly might be too fragmented
* Check for mixed nucleotide/amino acid content

### **Strange headers**

Prodigal compresses information into the header—this is expected.

### **Very short ORFs**

Use `grep`/awk filters to remove tiny genes.

---

## 🎯 9. Summary

In this tutorial, you learned how to:

* Install Prodigal
* Run Prodigal on a metagenome (`-p meta`)
* Interpret protein, nucleotide, and GFF outputs
* Automate predictions across many samples
* Perform common downstream analyses

Prodigal remains one of the most efficient and accurate ORF finders in microbial metagenomics—an essential first step before annotation, metabolic reconstruction, or binning.

---

## 📚 10. References

* Hyatt, D. et al. (2010). *Prodigal: prokaryotic gene recognition and translation initiation site identification.* BMC Bioinformatics.
* Prodigal GitHub repository.

---
