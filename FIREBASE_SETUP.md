# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `community-notice-board`
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

## Step 3: Get Firebase Configuration

1. In Firebase Console, go to "Project settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select "Web" (</>)
4. Register app with name: "Community Notice Board"
5. Copy the Firebase config object

## Step 4: Update Firebase Config

Replace the placeholder config in `src/firebase.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## Step 5: Set Firestore Rules (Optional)

In Firebase Console > Firestore Database > Rules, update rules for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notices/{document} {
      allow read, write: if true; // For demo - allow all access
    }
  }
}
```

## Step 6: Test the App

1. Start the development server: `npm start`
2. Try posting a notice
3. Check if it appears in Firebase Console > Firestore Database

## Features Now Available

✅ **Real-time notices** - Visible to all users across devices  
✅ **Cloud storage** - No more localStorage limitations  
✅ **Admin controls** - Delete notices from anywhere  
✅ **Scalable** - Can handle thousands of notices  

## Deployment

When deploying to Vercel/Netlify, the Firebase config will work automatically since it's client-side.

---

**Note:** The free Firebase tier includes:
- 1GB storage
- 50,000 reads/day
- 20,000 writes/day
- Perfect for student projects! 