# Bongsho 🌳

An interactive Bengali family tree platform built with the MERN stack.

Bongsho helps families visualize genealogy, ancestry, lineage, and family relationships through a modern, responsive, and interactive tree interface.

---

# 🚀 Features

## 🌳 Interactive Family Tree
- Dynamic family tree visualization
- Parent-child relationship mapping
- Interactive node-based UI
- Automatic graph layout using Dagre
- Smooth tree rendering with ReactFlow

## 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (RBAC)
- Protected admin/owner actions
- Public read-only access for visitors

## 👥 Person Management
- Add family members
- Edit member details
- Delete members
- Select parent relationships
- Dynamic tree refresh after updates

## 📱 Responsive User Experience
- Mobile-friendly design
- Zoom & pan support
- Responsive family nodes
- Better mobile spacing & scaling
- Dark modern UI

## ⚡ Performance & Architecture
- Optimized React rendering
- Auto-generated graph layout
- Reusable component architecture
- Protected backend routes
- Scalable MERN structure

---

# 🛠️ Tech Stack

## Frontend
- React.js
- ReactFlow
- Tailwind CSS
- Axios
- SweetAlert2
- Dagre
- Context API

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Deployment & Tools
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas
- Git & GitHub

---

# 📂 Project Structure

```bash
bongsho/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── assets/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Samiul2024/bongsho.git
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend/server directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# ▶️ Run Project

## Start Backend

```bash
node index.js
```

## Start Frontend

```bash
npm run dev
```

---

# 🔒 Role-Based Access

| Role | Permissions |
|------|-------------|
| Visitor | View family tree only |
| Admin | Add/Edit/Delete members |
| Owner | Full control |

---

# 🌐 Live Demo

Frontend:
https://bongsho.vercel.app/

---

# 📸 Screenshots

## Home Page
( screenshot here)

## Family Tree
( screenshot here)

## Admin Panel
( screenshot here)

---

# 🌱 Future Improvements

- Spouse relationship connections
- Family search system
- Person profile pages
- Profile image upload
- Expand/collapse nodes
- Audit logs
- Multi-family support
- Export family tree as image/PDF
- Advanced filtering
- Timeline-based ancestry view

---

# 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss your ideas.

---

# 📄 License

MIT License

---

# 👨‍💻 Developer

Built with ❤️ by MD. Samiulla Hossen

## Connect With Me

GitHub:
https://github.com/Samiul2024

Portfolio:
https://mdsamiullahossen.vercel.app/