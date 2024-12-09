# Healthcare Management System

A comprehensive healthcare management system that integrates various features to streamline patient care and hospital management.

## Features

- 🏥 Nearby Hospital Locator
- 👤 User Authentication & Health Data Storage
- 📋 Health Records Management
- 📅 Appointment Scheduling

## Tech Stack

- Frontend: React
- Backend: FastAPI
- Database: PostgreSQL (planned)
- APIs: Google Maps, FHIR, OAuth, and more

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - Unix/MacOS:
     ```bash
     source venv/bin/activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Run the application:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend Setup (Coming Soon)

## API Documentation

Once the backend server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Security & Compliance

This system is designed with security in mind and aims to comply with healthcare data regulations:
- Secure user authentication
- Encrypted data transmission
- HIPAA compliance measures (planned)
- Regular security audits (planned)

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
