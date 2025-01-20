# News Explorer

News Explorer is a web application that allows users to search for news articles by keywords. Registered and authorized users can save articles to their favorites and remove them as needed.

## Features
- Search for news articles by keywords
- User registration and authorization
- Bookmark articles
- Remove articles bookmarked

## Prerequisites
To run this project locally, you'll need:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- A running backend server. You can find the backend repository and setup instructions here: [LINK](https://github.com/NikitaStambul/news-explorer-backend)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NikitaStambul/news-explorer-frontend.git
   cd news-explorer-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Access the application:**
  Add .env file with
  ```txt
  VITE_BACKEND_URL=[your backend link]
  ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   If it didn't open automatically - open your browser and go to `http://localhost:3000`.

## Project Structure
- `src/` contains all the source code, including components, hooks, and styles.
- `public/` contains static assets.
- `vite.config.ts` contains Vite configuration.

## Scripts
- `npm run dev`: Starts the development server
- `npm run build`: Builds the project for production
- `npm run preview`: Previews the production build locally

## Backend Requirements
To fully utilize the application, ensure you have a backend server running. The backend handles user authentication, article saving, and retrieval. Refer to the backend repository for setup instructions: [LINK](https://github.com/NikitaStambul/news-explorer-backend).

## Technologies Used
- **Frontend:** Vite, React, TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Context API

## Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request.

### [Deployed project](https://news.explorer.strangled.net/)

### If you want to test app without registering, try out these credentials:

Email: 123456@mail.com
Password: 123456