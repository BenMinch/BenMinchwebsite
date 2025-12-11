# Tutorial: Predicting Proteins from a Microbial Metagenome Using Prodigal (with Figures)

## 1. Overview
Prodigal is a fast and accurate tool for predicting protein-coding genes (ORFs) from microbial genomes and metagenomes.

---

## 2. Workflow Diagram

```
+----------------------+       +-------------------+       +---------------------+
|  Metagenome Assembly | --->  |     Prodigal      | --->  |  Predicted Proteins |
|    (FASTA file)      |       |  Gene Prediction  |       |   (FAA / FNA / GFF) |
+----------------------+       +-------------------+       +---------------------+
```

---

## 3. Example of Gene Prediction on a Contig

```
Contig Sequence:
ATGACCATGATTACGCCA...TAGGCTGA

Detected ORF:
ATG----------------------TGA
 |                        |
Start Codon          Stop Codon
```

---

## 4. Command Diagram

```
prodigal -i metagenome.fasta          -a proteins.faa          -d genes.fna          -o annotations.gff          -p meta

 Inputs:
   - metagenome.fasta  -> Assembled contigs

 Outputs:
   - proteins.faa -> amino acids
   - genes.fna    -> nucleotide ORFs
   - annotations.gff -> coordinates
```

---

## 5. Output Structure Diagram

```
proteins.faa
>gene_1 # 100 # 900 # + # 0.95
MKTIIALSYIFCLVFA...

genes.fna
>gene_1
ATGAAAACC...

prodigal_output.gff
contig1  Prodigal  CDS  100 900  .  +  0  ID=1
```

---

## 6. Summary Figure

```
+----------------------+
|      START HERE      |
+----------------------+
           |
           v
+----------------------+        +------------------------+
|  Input FASTA Assembly| -----> | Run Prodigal (-p meta) |
+----------------------+        +------------------------+
           |                                |
           v                                v
   +---------------+             +------------------------------+
   | genes.fna     |             | proteins.faa                 |
   | nucleotides   |             | amino acids (functional use) |
   +---------------+             +------------------------------+
           |
           v
   +---------------+
   | annotations   |
   | (GFF file)    |
   +---------------+
```

---
