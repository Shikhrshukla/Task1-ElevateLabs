# Node.js CI/CD Sample App

## 🚀 Project Overview
This repository demonstrates a complete **CI/CD pipeline** for a Node.js application using **GitHub Actions** and **Docker**. The pipeline automates the steps from testing to building a Docker image and pushing it to DockerHub.

**Objective:** Automate code deployment using CI/CD principles for a Node.js web app.

---

## 📁 Repository Structure

```
nodejs-demo-app/
│
├── .github/workflows/
│ └── main.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── test/jest.config.final.js
├── scripts/codesandbox-page.js
├── src/
├── README.md # This file
└── .dockerignore 
```

---

## 🛠 Tools & Technologies
- **GitHub** – Version control and CI/CD hosting  
- **GitHub Actions** – Automate workflow: test → build → push  
- **Node.js** – Web application runtime  
- **Docker** – Containerization of the Node.js app  
- **DockerHub** – Hosting Docker images  

---

## ⚙️ CI/CD Pipeline Workflow
The pipeline is defined in `.github/workflows/main.yml` and performs the following steps:

1. **Trigger:** On `push` to the `main` branch.  
2. **Checkout:** Pull the repository code using `actions/checkout`.  
3. **Setup Node.js:** Using `actions/setup-node@v4` with Node 18.  
4. **Install Dependencies:** `npm ci` installs all packages.  
5. **Run Tests:** Execute `npm run test:final:coverage` to ensure code correctness.  
6. **Docker Login:** Logs in to DockerHub using secrets (`DOCKERHUB_USERNAME` & `DOCKERHUB_TOKEN`).  
7. **Build Docker Image:** Builds image with tag:  
8. **Push Docker Image:** Pushes image to DockerHub repository.  

---

## 🔐 Secrets & Environment Setup
1. Create **GitHub Secrets** in your repo or environment:  
- `DOCKERHUB_USERNAME` – DockerHub username  
- `DOCKERHUB_TOKEN` – DockerHub access token with push permissions  

2. Use them securely in GitHub Actions workflow:  

```yaml
with:
username: ${{ secrets.DOCKERHUB_USERNAME }}
password: ${{ secrets.DOCKERHUB_TOKEN }}
```

---

## 🏃 Running Locally

To run the app locally:

1. **Install dependencies and run:**

```bash
node setup
npm install
ls
http://localhost:8090
npm run validate > /dev/null 2>&1
```

2. **Docker Usage**

```bash
docker build -t nodejs-demo-app .
docker run --rm -d -p 8090:8090 nodejs-demo-app
```

---

## 📸 Screenshots

### 1. GitHub Actions Workflow Run
<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/d7f1386b-6fe5-4136-bb0c-34a17d1a0f30" />
<img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/48b1243e-2ce5-4f37-bbc4-dcd057f050f9" />
<img width="1920" height="1080" alt="3" src="https://github.com/user-attachments/assets/5a01f202-ccc9-4dab-9098-4f2caa9a2951" />

### 2. GitHub Actions Workflow Test
<img width="1920" height="1080" alt="4" src="https://github.com/user-attachments/assets/f30eb742-2016-4ea3-ba37-3a5321652056" />

### 3. Docker Image on DockerHub
<img width="1920" height="1080" alt="5" src="https://github.com/user-attachments/assets/42ca9b89-8890-40f4-ba40-a6b94c8d4461" />

---

## ✅ Key Learnings

- Understanding **CI/CD automation** from code push to deployment
- Setting up **GitHub Actions** workflows with jobs and steps
- Using **Docker** for containerization
- Managing **secrets securely** for deployment
- Running **Node.js tests** automatically as part of CI
