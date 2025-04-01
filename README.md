# Recipe Finder App

## Overview

Recipe Finder App is a web application built with **Next.js, TypeScript, and Tailwind CSS** that allows users to search for recipes based on various criteria such as ingredients, cuisine type, and preparation time.

## Features

- **Recipe Search**: Users can search for recipes by entering keywords.
- **Filters**: Filter recipes by cuisine and maximum preparation time.
- **Responsive UI**: Responsive design using **Tailwind CSS**.
- **Dynamic Routing**: Each recipe has a dedicated page.
- **Optimized Performance**: Utilizes **Next.js App Router** for server-side rendering and caching.

## Technologies Used

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: Server-side fetching with fetch API
- **Routing**: Next.js App Router

## Installation & Setup

### 1. Clone the repository

```sh
git clone https://github.com/47codemonkey/recipe-finder-app
cd recipe-finder-app
```

### 2. Install dependencies

```sh
yarn install  # or npm install
```

### 3. Create an `.env.local` file and add your API key or use mine API key in file .env.local

```sh
NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
```

### 4. Run the development server

```sh
yarn dev  # or npm run dev
```

The application will be available at `http://localhost:3000`

## Build & Deployment

### Build for production

```sh
yarn build  # or npm run build
```

### Run production server

```sh
yarn start  # or npm start
```

## ESLint & Code Formatting

### Run ESLint to check for errors

```sh
yarn lint  # or npm run lint
```

### Format code with Prettier

```sh
yarn format  # or npm run format
```

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes with meaningful commit messages.
4. Push your changes and create a pull request.

---

For any issues or feature requests, please open an issue on GitHub.
