# SIM Card Activation Service

## Overview

This project implements a simple SIM Card Activation service for a telecom company using Node.js, Express, and MongoDB. The service provides APIs to activate, deactivate, and retrieve SIM card details, along with a basic front-end interface for user interaction.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)


## Features

- Activate SIM cards by setting their status to active and recording the activation date.
- Deactivate SIM cards by setting their status to inactive.
- Retrieve details of a SIM card including status and activation date.
- Basic front-end interface for interacting with the service.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing SIM card information.
- **HTML/CSS/JavaScript**: Front-end technologies for user interface.
- **Postman**: (Optional) for testing API endpoints.

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   git clone https://github.com/yourusername/digiit.git
cd digiit
npm install
# Create .env file and add MONGO_URI
npm start
# Open http://localhost:3000 in your browser


## APT ENDPOINTS
1. Activate SIM Card
Endpoint: POST /api/activate/:simNumber
Request Body:


{
  "simNumber": "string"
}
Response:


{
  "message": "SIM card activated successfully."
}


   
   
   
