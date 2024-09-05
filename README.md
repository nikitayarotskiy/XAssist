# XAssist

### Developed by a student for students

## Description
XAssist is a web application designed to help students manage their course information and track their academic performance.

## Features
- View detailed course information
- Track and display student marks
- Access additional resources such as Teacher Assist

## Prerequisites
Before running the application, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## How to Run
1. **Download the Code**
   - You can either download the code as a ZIP file or clone the repository:
     ```sh
     git clone https://github.com/nikitayarotskiy/xassist.git
     ```

2. **Navigate to the Project Directory**
   - Open your terminal or command prompt and navigate to the project directory:
     ```sh
     cd xassist
     ```

3. **Install Dependencies**
   - Run the following command to install the necessary dependencies:
     ```sh
     npm install
     ```

4. **Start the Application**
   - Once the dependencies are installed, start the application with:
     ```sh
     npm start
     ```
   - This will launch the application in your default web browser. The default URL is usually `http://localhost:3000`.

## Troubleshooting
- **Missing Dependencies**: If you encounter issues with missing dependencies, make sure you have Node.js and npm installed correctly.
- **Port Conflicts**: If port 3000 is in use, you can change the port by setting the `PORT` environment variable before starting the application:
  ```sh
  PORT=4000 npm start
