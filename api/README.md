# Profile Backend API

A Node.js/Express.js backend API integrated with Neon PostgreSQL database for the portfolio profile application.

## 🚀 Features

- RESTful API endpoints for projects, skills, education, and contact messages
- PostgreSQL database integration with Neon
- CORS enabled for frontend integration
- Error handling and validation
- Ready for Vercel deployment
- Database initialization script
- Health check endpoint

## 📋 API Endpoints

### Health Check
- `GET /api/health` - Health check endpoint

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create new skill

### Education
- `GET /api/education` - Get all education history
- `POST /api/education` - Create new education entry

### Contact
- `POST /api/contact` - Submit contact form

### Database (Temporary)
- `POST /api/init-db` - Initialize database schema (remove after first use)

## 🛠️ Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
```bash
# Copy environment example
cp env.example .env

# Edit .env and add your Neon connection string
DATABASE_URL=postgresql://username:password@host:port/database
```

### 3. Initialize Database
```bash
npm run init-db
```

### 4. Start Development Server
```bash
npm run dev
```

## 🗄️ Database Schema

The application uses four main tables:

- **projects**: Store portfolio projects with title, description, technologies, and links
- **skills**: Store technical skills with categories and proficiency levels
- **education**: Store education history with period, institution, and major
- **contact_messages**: Store contact form submissions

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Express.js backend with Neon integration"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `DATABASE_URL`: Your Neon connection string
     - `NODE_ENV`: `production`

3. **Initialize Production Database**
   ```bash
   # Call the initialization endpoint
   curl -X POST https://your-domain.vercel.app/api/init-db
   ```

4. **Remove Temporary Endpoint**
   - After successful initialization, remove `/api/init-db` endpoint for security

### Environment Variables

#### Required for Production
- `DATABASE_URL`: Neon PostgreSQL connection string
- `NODE_ENV`: Set to `production`

#### Optional
- `PORT`: Server port (Vercel handles this automatically)

## 🔧 Development

- `npm run dev`: Start development server with nodemon
- `npm start`: Start production server
- `npm run init-db`: Initialize database schema

## 🧪 Testing

### Local Testing
```bash
# Health check
curl http://localhost:3001/api/health

# Get projects
curl http://localhost:3001/api/projects

# Get skills
curl http://localhost:3001/api/skills

# Get education
curl http://localhost:3001/api/education
```

### Production Testing
```bash
# Replace with your actual domain
curl https://your-domain.vercel.app/api/health
curl https://your-domain.vercel.app/api/projects
```

## 🔒 Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **Database Access**: Use connection pooling and proper SSL
3. **CORS**: Configure CORS properly for production
4. **Input Validation**: Validate all API inputs
5. **Remove Temporary Endpoints**: Remove `/api/init-db` after use

## 🚨 Troubleshooting

### Database Connection Issues
1. Verify your `DATABASE_URL` is correct
2. Ensure your Neon database is accessible
3. Check that SSL is properly configured

### Build Failures
1. Check that all dependencies are in `package.json`
2. Verify Node.js version compatibility
3. Check build logs in Vercel dashboard

### API Not Working
1. Verify the API routes are correct
2. Check CORS configuration
3. Test endpoints individually

## 📊 Performance Optimization

1. **Database Indexes**: Already included in the schema
2. **Connection Pooling**: Configured in the Express app
3. **Caching**: Consider adding Redis for caching
4. **CDN**: Vercel provides global CDN automatically

## 🔗 Links

- **Frontend**: Vue.js portfolio application
- **Database**: Neon PostgreSQL
- **Deployment**: Vercel
- **Documentation**: This README 