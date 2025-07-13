# Profile Frontend

A modern Vue.js portfolio website with Neon database integration.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🗄️ Neon PostgreSQL database integration
- 📱 Mobile-first responsive design
- ⚡ Fast loading with Vite
- 🎭 Smooth animations and transitions
- 🔄 Real-time data from database

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Neon database account

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the frontend directory:

```env
# Neon Database Configuration
VITE_NEON_DATABASE_URL=your_neon_database_url_here
VITE_NEON_API_KEY=your_neon_api_key_here

# Development Configuration
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_ENV=development
```

### 3. Neon Database Setup

1. Create a Neon account at [neon.tech](https://neon.tech)
2. Create a new project
3. Get your database connection string
4. Update the `VITE_NEON_DATABASE_URL` in your `.env.local` file

The database will be automatically initialized with sample data when you first run the application.

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

## Database Schema

The application uses three main tables:

### education_history
- `id` (SERIAL PRIMARY KEY)
- `institution` (VARCHAR(255))
- `major` (VARCHAR(255))
- `start_year` (INTEGER)
- `end_year` (INTEGER)
- `description` (TEXT)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### skills
- `id` (SERIAL PRIMARY KEY)
- `name` (VARCHAR(255))
- `proficiency_level` (VARCHAR(50))
- `category` (VARCHAR(100))
- `description` (TEXT)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### projects
- `id` (SERIAL PRIMARY KEY)
- `title` (VARCHAR(255))
- `description` (TEXT)
- `image_url` (VARCHAR(500))
- `github_url` (VARCHAR(500))
- `live_url` (VARCHAR(500))
- `technologies` (TEXT[])
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Project Structure

```
frontend/
├── src/
│   ├── components/          # Vue components
│   ├── composables/         # Vue composables (useDatabase)
│   ├── services/           # Database services
│   │   ├── database.js     # Main database service
│   │   └── initDatabase.js # Database initialization
│   ├── assets/             # Static assets
│   ├── router/             # Vue Router configuration
│   └── views/              # Page components
├── public/                 # Public assets
├── .env.local             # Environment variables
└── package.json           # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Database Operations

The application provides full CRUD operations for all data:

### Education History
- View all education entries
- Add new education entry
- Update existing entry
- Delete entry

### Skills
- View all skills
- Add new skill
- Update existing skill
- Delete skill

### Projects
- View all projects
- Add new project
- Update existing project
- Delete project

## Troubleshooting

### Database Connection Issues

1. Verify your Neon database URL is correct
2. Check if your Neon database is active
3. Ensure your IP is not blocked by Neon
4. Check browser console for detailed error messages

### Build Issues

1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear Vite cache: `npm run dev -- --force`
3. Check for environment variable issues

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
