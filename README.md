# Biodata Management App (MERN)

A simple MERN stack app to add and view user biodata with a profile image.  

---

## Features

- Add biodata with name, email, phone, DOB, gender, address, and profile image  
- List all biodata in a simple card view  
- Validations: all fields required, email valid, Only image files allowed for upload

---

## Tech Used

- Frontend: React.js, Axios, CSS  
- Backend: Node.js, Express.js, MongoDB  
- Image Upload: Multer  

---

## Setup

1. Clone the repository:

bash
git clone <https://github.com/THENAMEISANOOP/Bio-Data-Application.git>

cd <project-folder>

2.Backend setup:
cd backend
npm install

3.Run backend:
npm run dev


4.Frontend setup

cd frontend
npm install
npm run dev

-----------API Endpoints---------

1. Create Biodata

POST /api/biodata

Form Data:
- fullName (string)
- email (string, unique)
- phone (string, 10 digits)
- dob (date)
- gender (string)
- address (string)
- image (file)

2. Get All Biodata

GET /api/biodata
Response: JSON array of biodata

<img width="1299" height="793" alt="Screenshot 2026-01-03 174603" src="https://github.com/user-attachments/assets/816bd50f-3e6b-4a2b-bd89-e47fb6bd9190" />
<img width="1266" height="768" alt="Screenshot 2026-01-03 174638" src="https://github.com/user-attachments/assets/4eca22dd-dc40-43fd-9e68-d7345b375b31" />






