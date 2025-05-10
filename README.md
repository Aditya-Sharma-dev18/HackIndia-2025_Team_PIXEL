
# RAGify India – Legal Assistant for Indian Laws

## Overview
**RAGify India** is an AI-powered legal assistant that helps users understand and query Indian laws—including IPC, RTI, and labor regulations—through a conversational chatbot. It utilizes **Retrieval-Augmented Generation (RAG)** for accurate, context-aware responses, with support for **multilingual queries** and **citations for transparency**.

## Table of Contents
- [Problem Statement](#problem-statement)
- [Our Solution](#our-solution)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [How to Use](#how-to-use)
- [Team Members](#team-members)
- [Future Scope](#future-scope)

## Problem Statement
Legal information in India is often:
- Scattered across different government portals and documents
- Difficult for laypersons to understand
- Unavailable in regional languages

There’s a clear need for a **user-friendly, accessible, and intelligent system** to bridge the gap between legal text and public understanding.

## Our Solution
**RAGify India** combines **Retrieval-Augmented Generation (RAG)** with a curated legal corpus to provide:
- Fast and accurate legal responses
- Source citations for every answer
- Multi-language query handling (Hindi, English, more)
- Plain-language summaries of complex legal jargon

## Key Features
- **RAG-based Legal QA**: Combines vector search with generative models
- **Multi-lingual Input**: Ask legal queries in Hindi or English
- **Citations & Source Links**: Each response includes references to laws
- **Chat Interface**: User-friendly chatbot UI
- **Realtime Updates**: Easy corpus updates for new laws or amendments

## Future Scope
- Add voice-based legal queries  
- Integration with official govt APIs (e.g., RTI portal)  
- More regional languages (Tamil, Bengali, Telugu)  
- Daily legal news summaries using LLM

## Architecture
 
- **Frontend**: React / Next.js  
- **Backend**: Python (FastAPI)  
- **RAG Pipeline**:
  - Embedding Model: `sentence-transformers`
  - Vector Store: FAISS / ChromaDB
  - Retriever: Custom legal document retriever
  - Generator: OpenAI GPT / Mistral / Ollama
- **Data Source**: Curated IPC, RTI, labor laws in .txt/.pdf format

## Tech Stack
- **Frontend**: React /  Tailwind  
- **Backend**: Flask, LangChain  
- **LLM**: OpenAI / Gemini 
- **Vector DB**: FAISS / ChromaDB  
- **NLP Tools**: spaCy, IndicTrans for translation  
- **Hosting**: Local Host


## How to Use
```bash
# Clone repository
git clone https://github.com/your-username/RAGifyIndia.git
cd RAGifyIndia

# Install dependencies
pip install -r requirements.txt

# Run RAG backend
python app.py

# Open frontend in separate terminal
npm install
npm run dev
```

## Team Members
- [Piyush Singh Bhakuni] –  Backend Integration  
- [Aditya Sharma] – Frontend & UI/UX  
- [Ankit Kumar] – NLP & Multilingual Support  
- [Arpit Kumar Prajapati] – Legal Data Curation  
 
