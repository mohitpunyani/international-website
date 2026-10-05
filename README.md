# Tantia University – International Website

## Tech Stack
- **Backend**: Laravel 11 (PHP 8.5) – REST API
- **Frontend**: React.js 18 + Vite
- **Database**: MySQL 9

## Project Structure
```
International-website/
├── backend/          # Laravel API (PHP)
├── frontend/         # React.js (Vite)
└── assets/           # Original images (used by frontend)
```

## Setup Guide

### 1. Backend (Laravel)
```bash
cd backend
cp .env.example .env
# Edit .env — set DB_DATABASE, DB_USERNAME, DB_PASSWORD
php artisan key:generate
php artisan migrate --seed
php artisan serve --port=8000
```

### 2. Frontend (React)
```bash
cd frontend
npm install
npm run dev   # runs on http://localhost:5173
```

### 3. Database
Create a MySQL database:
```sql
CREATE DATABASE tantia_university;
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/programs | List all programs |
| POST | /api/programs | Create program (admin) |
| PUT | /api/programs/{id} | Update program (admin) |
| DELETE | /api/programs/{id} | Delete program (admin) |
| GET | /api/news | List all news |
| POST | /api/contact | Submit contact form |
| GET | /api/testimonials | List testimonials |
| POST | /api/admin/login | Admin login |
