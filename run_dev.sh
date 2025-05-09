#!/bin/bash

# Exit on error
set -e

echo "Activating virtual environment..."
cd backend
source venv/bin/activate            # Activates Python virtual environment

echo "Starting Flask backend on http://localhost:5000 ..."
flask run &                         # Runs in the background
cd ..

echo "Starting React frontend on http://localhost:3000 ..."
cd frontend
npm start                           # React development server