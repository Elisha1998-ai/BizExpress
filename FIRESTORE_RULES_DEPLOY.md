# Firebase Firestore Rules Deployment Instructions

## Issue Fixed
The "missing or insufficient permissions" error occurs because Firebase Firestore security rules need to be deployed to allow authenticated users to create/update blog posts.

## Steps to Deploy Firestore Rules

### Option 1: Using Firebase CLI (Recommended)

1. **Install Firebase CLI** (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Deploy the Firestore rules**:
   ```bash
   firebase deploy --only firestore:rules
   ```

### Option 2: Using Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Firestore Database** in the left sidebar
4. Click on the **Rules** tab
5. Copy the contents of `firestore.rules` file
6. Paste it into the rules editor
7. Click **Publish**

## What the Rules Do

The deployed rules will:

### Blog Posts Collection (`blogPosts`)
- ✅ **Anyone can READ** blog posts (public access)
- ✅ **Only authenticated users** can CREATE, UPDATE, and DELETE posts

### Contact Submissions Collection (`contactSubmissions`)
- ✅ **Only authenticated users** can READ submissions (admin only)
- ✅ **Anyone** can CREATE submissions (public contact form)
- ✅ **Only authenticated users** can UPDATE or DELETE

## Verify Authentication is Working

Make sure:
1. You are logged in on the `/auth` page before accessing the admin dashboard
2. Your Firebase project has Authentication enabled with Email/Password provider
3. The admin account is created in Firebase Authentication

## Test the Setup

1. **Test Blog Publishing**:
   - Go to `/auth` and login
   - Navigate to `/admin`
   - Click "New Post" and try to publish
   - Should work without permission errors

2. **Test Contact Form**:
   - Go to `/contact`
   - Fill out the form and submit
   - Check the admin dashboard under "Contact Submissions" tab
   - The submission should appear there

## Troubleshooting

If you still get permission errors:

1. **Check if you're authenticated**:
   - Open browser console
   - Run: `firebase.auth().currentUser`
   - Should return user object, not null

2. **Check Firestore rules are deployed**:
   - Go to Firebase Console > Firestore > Rules
   - Verify the rules match the `firestore.rules` file

3. **Check browser console for detailed errors**

## Environment Variables

Make sure your `.env` file has the correct Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```
