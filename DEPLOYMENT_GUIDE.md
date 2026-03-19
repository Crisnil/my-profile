# Deployment Guide - Portfolio to GitHub Pages

This guide will walk you through deploying your portfolio to GitHub Pages in just a few steps.

## Quick Start (5 minutes)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **For User Site**: Create a repository named `<your-username>.github.io`
   - Example: `john-doe-portfolio.github.io`
3. **For Project Site**: Create any repository name
   - Example: `my-portfolio`

### Step 2: Initialize Git & Push Code

```bash
# In the my-profile folder
git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** section (on the left)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - That's it! GitHub Actions will automatically deploy your site

### Step 4: Access Your Site

- **User Site**: Wait 1-2 minutes, then visit `https://<your-username>.github.io`
- **Project Site**: Visit `https://<your-username>.github.io/<repository-name>`

## For Project Repository (Not User Site)

If you're using a project repository instead of `username.github.io`, update the `next.config.ts`:

```typescript
basePath: "/repository-name",
```

Replace `repository-name` with your actual repository name.

## Manual Deployment (Without GitHub Actions)

If you prefer to deploy manually:

### Step 1: Build the Project

```bash
npm run build
```

This creates an `out` folder with all static files.

### Step 2: Deploy Using gh-pages Package

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Update package.json scripts:
# "deploy": "npm run build && gh-pages -d out"

# Run deployment
npm run deploy
```

## Troubleshooting

### Site Not Appearing

1. **Check GitHub Actions**: Go to repository → Actions tab
   - Look for the "Deploy to GitHub Pages" workflow
   - Check if it's running successfully (green checkmark)
   - If red, click to see error details

2. **Verify Pages Settings**: Settings → Pages
   - Ensure "GitHub Actions" is selected as source
   - Check the branch is `main`

3. **Clear Browser Cache**: 
   - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - Try incognito/private window

### Wrong Base Path for Project Repos

If images don't load, you likely need the `basePath` config:

```typescript
// In next.config.ts
basePath: "/your-repo-name",
```

Then rebuild and push.

## Updating Your Portfolio

After making changes:

```bash
# Test locally
npm run dev

# Deploy to GitHub
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Actions will automatically redeploy your site within 1-2 minutes.

## Custom Domain (Optional)

To use a custom domain like `yourname.com`:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Go to your repository → Settings → Pages
3. Under "Custom domain", enter your domain
4. Update DNS settings at your registrar:
   - Add CNAME record pointing to `<username>.github.io`
   - Or set A records to GitHub IP addresses

## Performance Tips

- **First Load**: May take 1-2 minutes for GitHub to build and deploy
- **Updates**: Usually propagate within 30 seconds to 2 minutes
- **Caching**: GitHub Pages uses CDN for fast delivery worldwide

## Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

## Security

- GitHub Pages supports HTTPS automatically
- Your site is secure by default with the green :lock: icon
- No additional setup needed for SSL/TLS

---

**You're all set!** Your portfolio will be live on GitHub Pages and update automatically with every push to the main branch.
