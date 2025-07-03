# 🧠 Assignment Submission

Hi, I'm **Sai Prasad Reddy**, and this is my submission for the Full Stack Web Application assignment at **Congkong**.

This project demonstrates a responsive, mobile-first dashboard, built with **Next.js**, **TailwindCSS**, **ShadCN UI**, and **Supabase**.

--

## 🌐 Deployed Version

You can view the live app here:  
👉 [https://congkong-dashboard.vercel.app](https://congkong-dashboard.vercel.app)

---

## 📌 Assignment Overview

> **Objective**  
Design and develop a full stack AI dashboard using:
- ✅ **Responsive & mobile-first frontend** with **React/Next.js**
- ✅ **Backend integration** with **Supabase** (PostgreSQL)

---

## 🧱 Tech Stack

| Layer        | Tech             |
|--------------|------------------|
| Frontend     | Next.js 15 (App Router) |
| Styling      | TailwindCSS, ShadCN UI  |
| Backend      | Supabase (PostgreSQL) |
| State/Data   | Server Components + Context API |

---

## 🧠 Key Features

- ⚡ **Fast Server-Side Data Fetching**: Using Supabase queries in server components for better performance and SEO.
- 🧩 **Modular Architecture**: Context-based data sharing across `/dashboard` routes for DRY and scalable layout.
- 📱 **Fully Responsive**: Works flawlessly across mobile, tablet, and desktop.
- 🎯 **Mock KPI Metrics**: Visual representation of AI matching analytics using dummy data.

---

# 🛠️ Run Locally

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**  
   Open your terminal and run:  
   `git clone https://github.com/Prasad48432/congkong-assignment.git`  
   Then navigate to the project folder:  
   `cd congkong-assignment`

2. **Install Dependencies**  
   Make sure you have `pnpm` installed, then run:  
   `pnpm install`

3. **Set Up Environment Variables**  
   Create a `.env.local` file in the root directory and add the following:
   `NEXT_PUBLIC_SUPABASE_URL=your_supabase_url`
   `NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key`

   
Replace with your actual Supabase credentials.

4. **Start the Development Server**  
Run the app locally using:  
`pnpm dev`

5. **Visit the App**  
Open your browser and go to:  
[http://localhost:3000](http://localhost:3000)

---

