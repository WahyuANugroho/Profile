# Profile Backend API

A Node.js/Express.js backend API integrated with Neon PostgreSQL database for the portfolio profile application.

## Features

- RESTful API endpoints for projects, skills, and contact messages
- PostgreSQL database integration with Neon
- CORS enabled for frontend integration
- Error handling and validation
- Ready for Vercel deployment

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Education
- `GET /api/education` - Get all education history
- `POST /api/education` - Create new education entry

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create new skill

### Contact
- `POST /api/contact` - Submit contact form

### Health Check
- `GET /api/health` - Health check endpoint

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `env.example`:
```bash
cp env.example .env
```

3. Add your Neon database connection string to `.env`:
```
DATABASE_URL=postgresql://username:password@host:port/database
```

4. Run the database schema:
```sql
-- Execute the contents of database.sql in your Neon database
```

5. Start the development server:
```bash
npm run dev
```

## Database Schema

The application uses four main tables:

- **projects**: Store portfolio projects with title, description, technologies, and links
- **skills**: Store technical skills with categories and proficiency levels
- **education**: Store education history with period, institution, and major
- **contact_messages**: Store contact form submissions

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`: Your Neon database connection string
4. Deploy

### Environment Variables

- `DATABASE_URL`: Neon PostgreSQL connection string
- `PORT`: Server port (optional, defaults to 3001)
- `NODE_ENV`: Environment (development/production)

## Development

- `npm run dev`: Start development server with nodemon
- `npm start`: Start production server

## Database Connection

The application automatically handles SSL connections for production environments when connecting to Neon database. 