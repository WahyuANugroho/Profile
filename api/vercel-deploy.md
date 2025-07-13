# Vercel Deployment Instructions

## Environment Variables Setup

Di Vercel Dashboard, pastikan environment variables berikut sudah diset:

```
DATABASE_URL = postgres://neondb_owner:npg_fhlToFzJ3Y6i@ep-empty-cloud-a1scpv9d-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
NODE_ENV = production
```

## Deployment Steps

1. Push code ke GitHub
2. Deploy di Vercel
3. Set environment variables
4. Redeploy

## Test Endpoints

Setelah deploy, test endpoint:
- https://wahyuadi-cv.vercel.app/api/health
- https://wahyuadi-cv.vercel.app/api/projects
- https://wahyuadi-cv.vercel.app/api/skills
- https://wahyuadi-cv.vercel.app/api/education

## Troubleshooting

Jika masih 404:
1. Check Vercel Functions logs
2. Verify environment variables
3. Check build logs
4. Redeploy project 