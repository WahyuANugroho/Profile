# Deployment Guide

This guide will help you deploy your portfolio application with Express.js backend and Neon database to Vercel.

## Prerequisites

1. **Neon Database Account**
   - Sign up at [neon.tech](https://neon.tech)
   - Create a new project
   - Get your connection string

2. **Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)
   - Connect your GitHub repository

3. **GitHub Repository**
   - Push your code to GitHub

## Step 1: Set Up Neon Database

1. **Create Neon Project**
   - Go to [neon.tech](https://neon.tech) and create an account
   - Create a new project
   - Note down your connection string

2. **Initialize Database Schema**
   ```bash
   # Navigate to the api directory
   cd api
   
   # Install dependencies
   npm install
   
   # Create .env file
   cp env.example .env
   
   # Edit .env and add your Neon connection string
   DATABASE_URL=postgresql://username:password@host:port/database
   
   # Initialize the database schema
   npm run init-db
   ```

## Step 2: Deploy to Vercel

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   - Vercel will automatically detect the configuration from `vercel.json`
   - The frontend will be built from `frontend/package.json`
   - The backend API will be deployed from `api/index.js`

3. **Add Environment Variables**
   - In your Vercel project dashboard, go to Settings > Environment Variables
   - Add the following variables:
     - `DATABASE_URL`: Your Neon database connection string
     - `NODE_ENV`: `production`

4. **Deploy**
   - Click "Deploy" in Vercel
   - Wait for the build to complete

## Step 3: Verify Deployment

1. **Test API Endpoints**
   - Health check: `https://your-domain.vercel.app/api/health`
   - Projects: `https://your-domain.vercel.app/api/projects`
   - Skills: `https://your-domain.vercel.app/api/skills`

2. **Test Frontend**
   - Visit your domain to see the portfolio website
   - Test the contact form functionality

## Step 4: Update Frontend (Optional)

If you want to connect your frontend to the deployed API, update the API base URL in your frontend code:

```javascript
// In your frontend API calls, use the deployed URL
const API_BASE_URL = 'https://your-domain.vercel.app/api';
```

## Environment Variables

### Required for Production
- `DATABASE_URL`: Neon PostgreSQL connection string
- `NODE_ENV`: Set to `production`

### Optional
- `PORT`: Server port (Vercel handles this automatically)

## Troubleshooting

### Database Connection Issues
1. Verify your `DATABASE_URL` is correct
2. Ensure your Neon database is accessible from Vercel
3. Check that SSL is properly configured

### Build Failures
1. Check that all dependencies are in `package.json`
2. Verify Node.js version compatibility
3. Check build logs in Vercel dashboard

### API Not Working
1. Verify the API routes are correct
2. Check CORS configuration
3. Test endpoints individually

## Local Development

1. **Start Backend**
   ```bash
   cd api
   npm install
   npm run dev
   ```

2. **Start Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Test Locally**
   - Backend: `http://localhost:3001`
   - Frontend: `http://localhost:5173`

## Monitoring

- **Vercel Analytics**: Monitor performance and usage
- **Neon Dashboard**: Monitor database performance
- **Vercel Logs**: Check for errors and issues

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **Database Access**: Use connection pooling and proper SSL
3. **CORS**: Configure CORS properly for production
4. **Input Validation**: Validate all API inputs

## Performance Optimization

1. **Database Indexes**: Already included in the schema
2. **Connection Pooling**: Configured in the Express app
3. **Caching**: Consider adding Redis for caching
4. **CDN**: Vercel provides global CDN automatically 