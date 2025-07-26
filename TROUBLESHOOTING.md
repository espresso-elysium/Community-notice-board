# Troubleshooting Guide

## 🔧 Common Issues & Solutions

### **1. Firebase Connection Issues**

#### **Problem:** "Firebase initialization failed"
**Solution:**
- Check if Firebase config is correct in `src/firebase.js`
- Verify all required fields are present
- Ensure Firebase project is created and Firestore is enabled

#### **Problem:** "Permission denied" errors
**Solution:**
- Go to Firebase Console > Firestore Database > Rules
- Update rules to allow read/write:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notices/{document} {
      allow read, write: if true;
    }
  }
}
```

### **2. Delete Button Not Working**

#### **Problem:** Delete button does nothing
**Solutions:**
1. **Check Console Errors:**
   - Open DevTools (F12) > Console
   - Look for error messages
   - Check if Firebase is connected

2. **Verify Admin Access:**
   - Ensure you're logged in as admin (password: `admin123`)
   - Check if notice has valid ID

3. **Firestore Rules:**
   - Ensure delete permissions are enabled
   - Check if collection exists

### **3. Real-Time Updates Not Working**

#### **Problem:** Changes don't appear instantly
**Solutions:**
1. **Check Internet Connection:**
   - Look for connection status indicator
   - Ensure stable internet connection

2. **Firebase Quota:**
   - Check Firebase Console > Usage
   - Free tier limits: 50K reads/day, 20K writes/day

3. **Listener Issues:**
   - Refresh page to re-establish connection
   - Check console for listener errors

### **4. Performance Issues**

#### **Problem:** App is slow or unresponsive
**Solutions:**
1. **Limit Data:**
   - App limits to 100 notices maximum
   - Delete old notices if needed

2. **Optimize Queries:**
   - Uses `orderBy` and `limit` for efficiency
   - Real-time listeners are optimized

3. **Browser Issues:**
   - Clear browser cache
   - Try incognito/private mode

### **5. Mobile Responsiveness Issues**

#### **Problem:** Layout breaks on mobile
**Solutions:**
1. **Check Tailwind Classes:**
   - Ensure responsive prefixes (`md:`, `lg:`) are used
   - Test on different screen sizes

2. **Browser Compatibility:**
   - Update browser to latest version
   - Check if JavaScript is enabled

### **6. Data Loss Issues**

#### **Problem:** Notices disappear unexpectedly
**Solutions:**
1. **Check Firebase Console:**
   - Go to Firestore Database
   - Verify data exists in collection

2. **Network Issues:**
   - Check connection status indicator
   - Wait for reconnection

3. **Admin Deletion:**
   - Check if admin accidentally deleted notices
   - Review admin activity

### **7. Form Submission Issues**

#### **Problem:** Can't post new notices
**Solutions:**
1. **Validation Errors:**
   - Ensure all required fields are filled
   - Check date format (YYYY-MM-DD)

2. **Firebase Limits:**
   - Check if daily write limit exceeded
   - Wait for quota reset (24 hours)

3. **Network Issues:**
   - Check internet connection
   - Try again after connection restored

## 🚨 Emergency Recovery

### **If App Completely Breaks:**

1. **Clear Browser Data:**
   - Clear cache and cookies
   - Refresh page

2. **Check Firebase Status:**
   - Visit [Firebase Status Page](https://status.firebase.google.com/)
   - Check if Firebase is down

3. **Fallback Mode:**
   - App will show error messages
   - Connection status will indicate issues

## 📞 Getting Help

### **Debug Information to Collect:**
1. **Browser Console Errors** (F12 > Console)
2. **Network Tab** (F12 > Network)
3. **Firebase Console** > Usage & Billing
4. **Error Messages** from the app

### **Contact Information:**
- **Project:** Community Notice Board
- **Developer:** Kritika Tyagi
- **Framework:** React + Firebase
- **Version:** 1.0.0

---

**Remember:** Most issues are temporary and resolve with a page refresh or waiting for network reconnection. 