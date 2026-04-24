<h1 align="center">MEVN Portfolio</h1>

<p align="center">
  A full-stack MEVN portfolio app built with Vue 3 + Naive UI, powered by an Express API and MongoDB.
</p>

<p align="center">
  <a href="" target="_blank"><b>Live Demo: Todo URL Coming Soon!</b></a>
  ·
  <a href="" target="_blank"><b>React Demo: Todo URL Coming Soon!</b></a>
</p>

---

## Tech Stack

- **Frontend:** Vue 3, Vue Router, Naive UI
- **State:** Pinia
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (NoSQL)
- **Deployment:** Render

---

## Project Structure (high level)

- `frontend/` — Vue 3 client (Vite + Naive UI)
- `/` (root) — Express API + build/start scripts

---

## Prerequisites

- **Node.js** (LTS recommended)
- **MongoDB** (Atlas or local)
- **npm**

---

## Environment Variables

Create a `.env` file in the project root:

```bash
MONGO_URI=your_mongo_uri
PORT=5000
```

> Keep `.env` private (do not commit it).

---

## Install & Run Locally

From the project root:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Start the app (production-style using the built frontend):

```bash
# from project root
npm run build
npm run start
```

Then open: `http://localhost:5000`

---

## Common Dependency Notes

If you're setting up from scratch and you see missing-package errors, these are used in the frontend:

```bash
cd frontend
npm i vue-router pinia
```

On Windows, you may need `cross-env`:

```bash
npm i -D cross-env
```

---

## Deployment (Render)

Typical build/start flow:

```bash
cd frontend
npm run build

cd ..
npm run build
npm run start
```

If `npm audit` suggests safe fixes:

```bash
npm audit fix
```

---

## About

My name is **Christopher Peterson**. I'm a full-stack software engineer focused on delivering polished UI/UX experiences along with reliable backend systems.

- **React demo:** (Todo) 
- **GitHub:** https://github.com/RocketDelivery2/  
- **LinkedIn:** https://www.linkedin.com/in/christopher-peterson-2ba8243b6/
- **Email:** codingcowboy2026@gmail.com  
- **Phone:** (517) 719-0029

---

## References / Credits

- Public domain images: https://free-images.com/
- Naive UI docs: https://www.naiveui.com/
- freeCodeCamp.org
