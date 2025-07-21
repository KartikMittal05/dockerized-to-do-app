
# ✅ To-Do App – Enterprise-Grade MERN Stack Project

A professional, production-ready **To-Do List Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). Designed with scalable architecture, Dockerized for cross-environment deployments, tested via Postman, and deployed to **IBM Cloud Container Registry**. Ideal for showcasing full-stack proficiency, DevOps fluency, and clean code practices.

> ⚠️ **Note**: Images have been pushed to IBM Cloud Container Registry, but not yet deployed on IBM Code Engine.

---

## 🚀 Live Demo
- 🌐 Frontend: _Pending Code Engine Deployment_
- 🌐 Backend: _Pending Code Engine Deployment_

---

## 🎯 Features

- ✅ Full CRUD operations for tasks
- 👨‍💻 Clean React-based UI with responsive design
- 🔗 RESTful API with robust error handling
- 🔐 MongoDB integration with schema validation
- 🐳 Dockerized Microservices Architecture
- ☁️ IBM Cloud Container Registry for scalable image hosting
- 🧪 Postman API test suite ready (manual and exportable)
- 📊 Ready for enhancements like auth, analytics, and CI/CD

---

## 🛠️ Tech Stack

| Layer       | Tech                 |
|-------------|----------------------|
| Frontend    | React + Nginx        |
| Backend     | Node.js + Express    |
| Database    | MongoDB              |
| Testing     | Postman              |
| Container   | Docker               |
| Deployment  | IBM Cloud (ICR only) |

---

## 📁 Project Structure
```

to-do-app/
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection logic
│   ├── models/
│   │   └── todo.model.js          # Mongoose schema for Todos
│   ├── routes/
│   │   └── todo.route.js          # API routes for CRUD
│   ├── server.js                  # Express server entry point
│   └── Dockerfile                 # Docker config for backend
├── frontend/
│   ├── public/                    # Static files & index.html
│   ├── src/
│   │   └── App.jsx                # React main component
│   └── Dockerfile                 # Docker config for frontend
├── .env                           # Environment variables
├── docker-compose.yml             # Multi-container config
├── package.json                   # Root dependency config
└── README.md                      # Project documentation


````
---
## 🖼️ Frontend Application – UI Screenshots

🏠 **Home Page (Task List Overview)**
<img width="1920" height="1080" alt="Screenshot (473)" src="https://github.com/user-attachments/assets/c5a72590-c71a-4655-948b-4ed410c21dce" />


➕ **Add New Task**

Add ride bike task


<img width="1920" height="1080" alt="Screenshot (474)" src="https://github.com/user-attachments/assets/3b3f6206-0622-4e01-8959-3dfbf14a108f" />


✅ **Mark as Completed / ❌ Delete Task**


Mark complete to Buy Milk task


<img width="1920" height="1080" alt="Screenshot (475)" src="https://github.com/user-attachments/assets/20961a7b-116d-4735-bb02-3d59604b520f" />


Delete Buy Milk Task


<img width="1920" height="1080" alt="Screenshot (476)" src="https://github.com/user-attachments/assets/56713877-ceeb-4f04-9577-2969ce37bd97" />



🔄 **Update ride bike to ride cycle**


<img width="1920" height="1080" alt="Screenshot (477)" src="https://github.com/user-attachments/assets/f85a1877-1967-448f-8859-c6da8e6f7eb2" />




---

## 🔒 MongoDB Configuration

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-app
```

📸 **MongoDB Screenshots:**

todos Collection

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1916cda1-5395-4809-ae62-e440eedb7a94" />

  
---
## 🧪 Postman API Testing

> 🛠 If `postman-collection.json` is not available, follow this setup:

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | /api/todos         | List all todos      |
| POST   | /api/todos         | Create a new todo   |
| PUT    | /api/todos/:id     | Update a todo       |
| DELETE | /api/todos/:id     | Delete a todo       |

**Example:**
```http
POST http://localhost:5000/api/todos
{
  "text": "Prepare README",
  "completed": false
}
````

📸 **Postman Screenshots:**

Get Method

<img width="1920" height="1080" alt="Screenshot (468)" src="https://github.com/user-attachments/assets/2683df30-cd6d-46ce-ae1b-cf3a607cdadb" />


Create Method

<img width="1920" height="1080" alt="Screenshot (469)" src="https://github.com/user-attachments/assets/6bf75318-642b-4613-8357-ec6512c3256d" />


Update Method

<img width="1920" height="1080" alt="Screenshot (470)" src="https://github.com/user-attachments/assets/f1fb8a8f-1c3d-42b8-be09-b190dc15290a" />


Delete Method

<img width="1920" height="1080" alt="Screenshot (471)" src="https://github.com/user-attachments/assets/e5683f32-c87e-47cd-9f28-8f233bc1dd6b" />




---

## 🐳 Docker Workflow

### Build Images

```bash
docker build -t to-do-app-frontend ./frontend
docker build -t to-do-app-backend ./backend
```

### Run Containers

```bash
docker run -d -p 3000:80 --name frontend to-do-app-frontend
docker run -d -p 5000:5000 --name backend to-do-app-backend
```

### Or use Docker Compose

```bash
docker-compose up --build
```

📸 **Docker Screenshots:**

Docker Running Containers

<img width="1920" height="1080" alt="Screenshot (466)" src="https://github.com/user-attachments/assets/e67dd617-28d8-4b0d-9ce9-318ed681e368" />


Docker Image List

<img width="1920" height="1080" alt="Screenshot (467)" src="https://github.com/user-attachments/assets/5d14cbb8-fefe-4a9e-9f98-f0d3169eae1f" />


---

## ☁️ IBM Cloud Deployment

### Step 1: Push Docker Images to IBM Container Registry

```bash
ibmcloud login
ibmcloud target -r eu-central
ibmcloud cr region-set eu-central
ibmcloud cr namespace-add todoapp-kartik

# Tag & Push
docker tag to-do-app-frontend de.icr.io/todoapp-kartik/to-do-app-frontend:latest
docker tag to-do-app-backend de.icr.io/todoapp-kartik/to-do-app-backend:latest

docker push de.icr.io/todoapp-kartik/to-do-app-frontend:latest
docker push de.icr.io/todoapp-kartik/to-do-app-backend:latest
```

> ✅ Images successfully pushed to IBM Cloud Container Registry.
> ⏳ **Next Step**: Deploy these images to IBM Code Engine.

📸 **IBM Cloud Screenshots:**

ICR Namespace

<img width="1920" height="1080" alt="Screenshot (457)" src="https://github.com/user-attachments/assets/f03b73c2-e4ca-4537-bfa5-e967db560712" />


ICR Repositories

<img width="1920" height="1080" alt="Screenshot (458)" src="https://github.com/user-attachments/assets/716667ae-9ca1-4348-b58f-b6b8d9730127" />


ICR Images

<img width="1920" height="1080" alt="Screenshot (459)" src="https://github.com/user-attachments/assets/1754674e-d5bf-4a36-b58c-26ecb5971626" />

---

## 💬 Challenges Faced

* Docker network communication between services
* Resolving CORS and Nginx reverse proxy
* IBM registry namespace conflict and authentication

---

## ✅ Project Status

| Feature            | Status     |
| ------------------ | ---------- |
| Basic CRUD Todos   | ✅ Done     |
| Dockerization      | ✅ Done     |
| Postman Testing    | ✅ Verified |
| IBM ICR Upload     | ✅ Done     |
| Code Engine Deploy | 🔜 Pending |

---

## 🚀 Future Enhancements

* 🔐 JWT Auth + Role Management
* ⏰ Due dates, Priority Filtering
* 📊 Usage Analytics (Mongo Aggregation)
* ☁️ Code Engine Deployment + CI/CD
* ✅ Unit + Integration Testing (Jest + Supertest)

---

## 🧠 Why This Project Stands Out

✅ Demonstrates practical DevOps (Docker + IBM Cloud)
✅ Implements structured backend + modular frontend
✅ Highlights full SDLC: dev → test → cloud deploy (ICR)
✅ Clean documentation and readiness for real-world scaling
✅ Perfect for enterprise-grade deployment tasks

---

## 👨‍💻 Author – Kartik Mittal

* 🔗 GitHub: [github.com/kartikmittal](https://github.com/kartikmittal)
* 💼 Email: \[available on request]
* 🏆 Looking for full-stack or DevOps engineering roles

---

## 📜 License

Licensed under MIT. Free to use, modify and learn from.





