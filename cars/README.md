Car Dealer App 🚗

VersionLicenseNext.jsReact

A Next.js application that allows users to filter vehicles by make and model year, and view the results on a separate page. Built with modern web technologies for a seamless user experience.

Table of Contents
About
Features
Installation
Usage
Technologies Used
Contributing
License
About
The Car Dealer App is a web application designed to help users explore car models by filtering them based on make and year. It fetches data from the NHTSA Vehicle API and displays the results in a clean, user-friendly interface.

Features
Filter Cars by Make and Year: Users can select a car make and year to view available models.
Responsive Design: Works seamlessly on both desktop and mobile devices.
Dynamic Routing: Uses Next.js dynamic routes to display results for specific make and year combinations.
Error Handling: Includes error pages for better user experience.
Optimized Fonts: Uses Geist font for a modern and clean look.
Installation
Follow these steps to set up the project locally:

Prerequisites
Node.js (v16 or higher)
npm, yarn, pnpm, or bun (package manager of your choice)
Steps
Clone the repository:
bash
Insert Code
Run
Copy code
git clone https://github.com/OmniaCrystalline/Car-Dealer-App.git
Navigate to the project directory:
bash
Insert Code
Run
Copy code
cd Car-Dealer-App/cars
Install dependencies:
bash
Insert Code
Run
Copy code
npm install

# or

yarn install

# or

pnpm install

# or

bun install
Start the development server:
bash
Insert Code
Run
Copy code
npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
Open your browser and visit:
Insert Code
Run
Copy code
http://localhost:3000
Usage
On the homepage, select a car make and year from the dropdown menus.
Click the Next button to view the results.
The results page will display all car models for the selected make and year.
Example Screenshots
Homepage
Replace with an actual screenshot of the homepage.

Results Page
Replace with an actual screenshot of the results page.

Technologies Used
Frontend:
Next.js (v15.1.3)
React (v19.0.0)
Tailwind CSS (v3.4.1)
API:
NHTSA Vehicle API
Fonts:
Geist (optimized with next/font)
Tools:
ESLint (v9) for linting
PostCSS (v8) for CSS processing
Contributing
We welcome contributions! Here’s how you can help:

Fork the repository.
Create a new branch:
bash
Insert Code
Run
Copy code
git checkout -b feature/YourFeatureName
Commit your changes:
bash
Insert Code
Run
Copy code
git commit -m 'Add some feature'
Push to the branch:
bash
Insert Code
Run
Copy code
git push origin feature/YourFeatureName
Open a pull request.
Please read our Contributing Guidelines for more details.

License
This project is licensed under the MIT License. See the LICENSE file for details.



