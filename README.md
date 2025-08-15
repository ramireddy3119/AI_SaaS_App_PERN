Here’s a concise but professional **README.md** content for your PromptlyAI project:

---

# PromptlyAI

**Live Demo:** [https://ai-saa-s-app-pern.vercel.app/](https://ai-saa-s-app-pern.vercel.app/)

A full-stack AI SaaS application built with the **PERN stack** (PostgreSQL, Express, React, Node.js), providing intelligent AI-driven prompt generation and content creation.

## 🚀 Features

* **AI-Powered Prompts** – Integrated with OpenAI GPT models for intelligent content generation.
* **User Authentication** – Secure sign-in/sign-up using [Clerk](https://clerk.com/).
* **Media Management** – File uploads with **Multer** and cloud storage via **Cloudinary**.
* **Database** – Scalable serverless **PostgreSQL** on [Neon](https://neon.tech/).
* **Deployment** – Backend on **Render**, frontend on **Vercel**, with CI/CD workflows.
* **Security** – CORS-enabled, environment-based configuration, secure API handling.

## 🛠️ Tech Stack

* **Frontend:** React.js, Axios, Clerk Auth
* **Backend:** Node.js, Express.js, Multer, CORS
* **Database:** PostgreSQL (Neon)
* **AI Integration:** OpenAI API
* **Media:** Cloudinary
* **Deployment:** Vercel (Frontend), Render (Backend)

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ramireddy3119/promptlyai.git
   cd promptlyai
   ```
2. Install dependencies for both frontend & backend:

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. Create a `.env` file in the server with:

   ```
   OPENAI_API_KEY=your_openai_api_key
   CLERK_API_KEY=your_clerk_api_key
   DATABASE_URL=your_neon_db_url
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
4. Start development:

   ```bash
   cd server && npm run dev
   cd ../client && npm start
   ```

## 📜 License

This project is licensed under the MIT License.
---

