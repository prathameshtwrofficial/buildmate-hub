# Vercel Deployment Configuration

## Environment Variables Required for Vercel

Add these environment variables in Vercel dashboard (Project Settings > Environment Variables):

```
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=buildrentajax.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=buildrentajax
VITE_FIREBASE_STORAGE_BUCKET=buildrentajax.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=951120518787
VITE_FIREBASE_APP_ID=1:951120518787:web:62a2b21a877166d0c9c5b6
VITE_FIREBASE_MEASUREMENT_ID=G-023C9WEDBQ
```

## Build Settings for Vercel
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Post-Deployment Steps
1. Configure Firebase Security Rules for production
2. Update any hardcoded URLs if needed
3. Test all features in production environment