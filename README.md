# BloodConnect

**Smart Blood Donation & Volunteer Coordination Platform**

BloodConnect is a full-stack web application designed to connect **patients, donors, and volunteers** in real time.
It helps hospitals and emergency services quickly find suitable blood donors and assign volunteers automatically.

The goal of this project is simple:
**reduce response time and save lives through smart coordination.**

---

##  Key Features

### 🧠 Smart Volunteer Assignment

* Automatically assigns the best available volunteer
* Based on:

  * City match
  * Availability status
  * Performance score

### 🩸 Donor Management

* Store donor details
* Blood group filtering
* City-wise donor search

###  Blood Request System

* Create emergency or normal requests
* Assign volunteers automatically
* Track request status

###  Operations Dashboard

* Total volunteers
* Total donors
* Active requests
* Completed requests
* Real-time statistics

###  Role-Based Login (UI)

* Admin
* Manager
* HR
* Outreach
* Volunteer

---

## Tech Stack

**Frontend**

* HTML
* Tailwind CSS
* Vanilla JavaScript

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB
* Mongoose ODM

**Deployment**

* Render (backend hosting)
* GitHub (source control)

---

##  Project Structure

```
bloodconnect-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── dashboardController.js
│   ├── donorController.js
│   ├── requestController.js
│   └── volunteerController.js
│
├── models/
│   ├── donor.js
│   ├── request.js
│   ├── user.js
│   └── volunteer.js
│
├── routes/
│   ├── dashboardRoutes.js
│   ├── donorRoutes.js
│   ├── requestRoutes.js
│   └── volunteerRoutes.js
│
├── utils/
│   └── smartAssign.js
│
├── public/
│   ├── login.html
│   ├── dashboard.html
│   └── app.html
│
├── server.js
├── package.json
└── .env
```

---


## Project Vision

BloodConnect is built with the idea that:

> **Technology should reduce the time between a blood request and a life-saving response.**

By combining smart assignment, real-time dashboards, and role-based workflows, this system can be used by:

* Hospitals
* NGOs
* Blood banks
* Emergency service

##  Author

**Lalit Kumar**
First-year student, IIT Jodhpur
Interested in Data Science, AI, and real-world problem solving.

---

## Future Improvements

* Real authentication with JWT
* SMS/WhatsApp donor alerts
* Geolocation-based matching
* Mobile app version
* AI-based demand prediction

If you like this project, consider giving it a ⭐ on GitHub.
