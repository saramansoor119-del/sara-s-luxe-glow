# Sara's Luxe Glow - Environment Setup Guide

## Local Development

### 1. Create `.env.local`
```bash
cp .env.example .env.local
```

### 2. Edit `.env.local` (Never commit this file!)
```env
# Optional: Only set if your app needs an external API
VITE_API_URL=https://api.example.com
```

### 3. Run Development Server
```bash
npm run dev
```

Vite automatically loads `.env.local` and makes variables available via `import.meta.env.VITE_*`

---

## Vercel Production Deployment

### 1. Connect to Vercel
- Go to https://vercel.com
- Click "New Project"
- Select this GitHub repository
- Click "Import"

### 2. Set Environment Variables (IMPORTANT!)
**Do NOT rely on vercel.json for secrets**

1. Click "Project Settings"
2. Go to "Environment Variables"
3. Add your variables:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://your-api-domain.com`
   - **Environment:** Select "Production" (or "All" for all environments)
4. Click "Save"

### 3. Deploy
- Click "Deploy" (Vercel auto-deploys on GitHub push)
- OR manually: `vercel deploy`

### 4. Verify Deployment
```bash
# After deployment, verify env vars are working:
curl https://your-deployed-url.vercel.app

# Check that the app loads without errors
# Verify API calls use correct endpoint
```

---

## Environment Variable Reference

### Available Variables

| Variable | Purpose | Required | Example |
|----------|---------|----------|---------|
| `VITE_API_URL` | External API endpoint | No | `https://api.example.com` |
| `VITE_ANALYTICS_ID` | Analytics tracking ID | No | `UA-XXXXXXXXX` |
| `VITE_CDN_URL` | CDN URL for assets | No | `https://cdn.example.com` |

### Usage in Code

```typescript
// Accessing environment variables
const apiUrl = import.meta.env.VITE_API_URL;
const analyticsId = import.meta.env.VITE_ANALYTICS_ID;

// With fallback
const apiUrl = import.meta.env.VITE_API_URL || 'https://api.example.com';

// Check if production
if (import.meta.env.PROD) {
  console.log('Running in production');
}
```

---

## Security Best Practices

✅ **DO:**
- Store secrets in Vercel Dashboard Environment Variables
- Use `.env.example` as a template (NO secrets in it)
- Ignore `.env.local` in `.gitignore` (already configured)
- Prefix variables with `VITE_` so they're exposed to the browser safely

❌ **DON'T:**
- Commit `.env.local` to Git
- Store secrets in `vercel.json`
- Hardcode API keys in your code
- Use non-`VITE_` prefixes for browser-exposed variables

---

## Troubleshooting

### "undefined" when accessing env variable

**Problem:** `import.meta.env.VITE_API_URL` returns `undefined`

**Solution:**
1. Ensure variable is prefixed with `VITE_`
2. For Vercel: Check Environment Variables in Project Settings
3. For local: Verify `.env.local` exists and has the variable
4. Restart dev server: `npm run dev`

### "Invalid request: Environment Variable references Secret which does not exist"

**Problem:** Vercel can't find a referenced secret

**Solution:**
1. Remove the `env` object from `vercel.json` ✅ (Already fixed)
2. Use Vercel Dashboard → Environment Variables instead
3. Restart deployment after adding variables

### API calls return 404 or fail

**Problem:** App loads but API requests fail

**Solution:**
1. Verify `VITE_API_URL` is set in Vercel Dashboard
2. Check that API endpoint is correct
3. Verify CORS headers on your API
4. Use browser DevTools → Network tab to inspect requests

---

## Next Steps

1. **Test Locally:**
   ```bash
   npm install
   npm run build
   npm run preview
   ```

2. **Deploy to Vercel:**
   ```bash
   git push origin main
   # Vercel auto-deploys
   ```

3. **Set Production Variables:**
   - Visit Vercel Dashboard
   - Project Settings → Environment Variables
   - Add `VITE_API_URL` and any other needed variables

4. **Verify Deployment:**
   - Visit your deployed URL
   - Check browser console for errors
   - Test all app features

---

**Questions?** Check `.env.example` or `vercel.json` for additional configuration options.
