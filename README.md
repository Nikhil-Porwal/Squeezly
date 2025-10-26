# Squeez.ly 

A full-stack URL shortener web application that allows users to **create, manage, and track shortened links** with secure authentication. Built using **Node.js, Express.js, and MongoDB** along with EJS, HTML, CSS, and JavaScript for the frontend.

---

## Features
- User authentication (signup/login/logout)  
- Convert long URLs into short, manageable links  
- Click analytics with visit tracking and timestamps  
- View and manage all your shortened URLs in a dashboard  
- Responsive UI using EJS templates, HTML, CSS, and JavaScript  
- MongoDB database integration for persistent storage  
- Secure routing with cookie-based authentication  

---

## Tech Stack
- **Frontend:** EJS, HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Packages:** shortid, cookie-parser, mongoose

---

## Screenshots

**Signup Page**

<img width="1919" height="973" alt="image" src="https://github.com/user-attachments/assets/7a501b09-d59d-4e26-9bc8-cbb5b9b380b0" />


**About Us Page**

<img width="1919" height="976" alt="image" src="https://github.com/user-attachments/assets/f2eec89e-0068-41aa-a10f-aede74c00e9d" />


**Login Page**

<img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/5fee7c8b-1de7-4a9d-a4d7-17dd510ca202" />


**URL Shortener Dashboard**

<img width="1919" height="972" alt="image" src="https://github.com/user-attachments/assets/5387aec4-c96a-4bfc-82ee-e409e7bca1ea" />


---

## Getting Started

### Prerequisites
Make sure you have installed:  
- [Node.js](https://nodejs.org/) (v14 or higher)  
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)  

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/squeezly.git
   cd squeezly
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Make sure MongoDB is running on your system
   - The app connects to `mongodb://0.0.0.0:27017/short-url` by default
   - Or set a custom MongoDB URI:
     ```bash
     export MONGODB="your-mongodb-connection-string"
     ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:8001
   ```

---

## Usage

### Creating Shortened URLs
1. **Sign up** for a new account or **login** with existing credentials
2. Enter your long URL in the input field on the dashboard
3. Click **Generate** to create a shortened link
4. Copy and share your new short URL: `http://localhost:8001/url/{shortId}`

### Tracking Analytics
- View all your shortened URLs in the dashboard table
- See click counts and visit timestamps for each link
- Monitor which links are performing best

---

**Made with ❤️ by passionate developers who wished to make sharing links easier and more efficient.**
