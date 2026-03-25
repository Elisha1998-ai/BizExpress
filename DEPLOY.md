# Firebase Deployment Guide

## Quick Deploy Steps

### Option 1: Using Firebase CLI (Recommended)

1. **Install Firebase Tools globally:**
```powershell
npm install -g firebase-tools
```

2. **Login to Firebase:**
```powershell
firebase login
```

3. **Initialize Firebase (if prompted):**
```powershell
firebase init hosting
```
- Select your existing project: `bizexpress-blog-backend`
- Use current directory: Yes
- Public directory: dist (already configured)
- Configure as SPA: Yes
- GitHub integration: No

4. **Deploy:**
```powershell
firebase deploy --only hosting
```

Your site will be live at: `https://bizexpress-blog-backend.web.app`

---

### Option 2: Manual Upload via Firebase Console

If CLI installation fails:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **bizexpress-blog-backend**
3. Navigate to **Hosting** in the left sidebar
4. Click **Get started** or **Add site**
5. Download the Firebase CLI or use manual upload
6. Upload the contents of the `dist` folder

---

### Option 3: Using Firebase Hosting GitHub Action

Create `.github/workflows/firebase-deploy.yml`:

```yaml
name: Deploy to Firebase Hosting
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: bizexpress-blog-backend
```

Then add these secrets to your GitHub repo:
- `FIREBASE_SERVICE_ACCOUNT`: Generate from Firebase Console > Project Settings > Service Accounts

---

## Your Firebase Project Details

- **Project ID**: bizexpress-blog-backend
- **Hosting URL**: https://bizexpress-blog-backend.web.app
- **Custom Domain**: Can be added in Firebase Console

---

## Troubleshooting

### "firebase command not found"
```powershell
# Try installing with admin privileges
Start-Process powershell -Verb RunAs -ArgumentList "npm install -g firebase-tools"
```

### Permission errors on Windows
```powershell
# Set execution policy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then reinstall
npm uninstall -g firebase-tools
npm install -g firebase-tools
```

### Build fails
```powershell
# Clear cache and rebuild
rm -r node_modules\.cache
npm run build
```

---

## Already Built ✅

Your project is already built and ready in the `dist` folder!
Just need to authenticate and deploy with Firebase.
