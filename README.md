# <img src="./src/assets/furniro-icon.svg" alt="Logotype" style="margin-left: 20px; vertical-align: middle; width: 30px" /> Furniro

This project is a furniture store website built with React.js, TypeScript, and Tailwind CSS, developed for CompassUol's Front-end Scholarship Program.

<img src='./src/furniro-site.gif'>

## Overview

It simulates an online furniture store where users can browse products, add items to the cart, and complete purchases. The application features user authentication, form validation, and a mock API for product data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/furniture-store.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pb-proj3
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the JSON Server:

   ```bash
     npx json-server db.json
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

To use the project, open your browser and navigate to:

```bash
http://localhost:5173
```

## Features

- Browse through products
- Add items to the cart
- Complete purchases
- Sign up, log in and log out

## Technologies

- React.js: a JavaScript library for building user interfaces.
- TypeScript: typed superset of JavaScript that compiles to plain JavaScript, used for type safety and improved developer experience.
- Tailwind CSS: a utility-first CSS framework for rapid UI development.
- Google Firebase: used for user authentication and managing user sessions.
- Zod: a TypeScript-first schema declaration and validation library, used for form validation.
- JSON Server: Used to create a mock API for simulating a database of products.
- React Router DOM: used for navigating between pages.
- Axios: used for making API requests.
