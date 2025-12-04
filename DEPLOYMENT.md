# Deployment Guide for GitHub Pages

This guide will help you deploy the Fuh Deh Food App to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Repository pushed to GitHub

## Step-by-Step Deployment

### 1. Verify Your Changes

First, make sure all the configuration changes are committed:

```bash
git status
```

You should see the following modified/new files:
- `.github/workflows/deploy.yml` (new)
- `public/.nojekyll` (new)
- `vite.config.ts` (modified)
- `package.json` (modified)
- `index.html` (modified)
- `README.md` (modified)

### 2. Commit Your Changes

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
```

### 3. Push to GitHub

```bash
git push origin main
```

**Note:** If your default branch is named differently (e.g., `master`), use that name instead of `main`.

### 4. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/deshawnmitchell/Fuh-Deh-Food-App`
2. Click on **Settings** (top navigation)
3. Scroll down and click on **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the changes

### 5. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the progress
4. Wait for both "build" and "deploy" jobs to complete (green checkmarks)

### 6. Access Your Site

Once deployment is complete, your site will be available at:
```
https://deshawnmitchell.github.io/Fuh-Deh-Food-App/
```

## Automatic Deployments

After the initial setup, every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your application
2. Deploy it to GitHub Pages

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
npm run deploy
```

This will:
1. Build the project
2. Push the `dist` folder to the `gh-pages` branch
3. GitHub Pages will serve from that branch

**Note:** For manual deployment, you need to change the GitHub Pages source to "Deploy from a branch" and select the `gh-pages` branch.

## Troubleshooting

### Deployment Failed

If the GitHub Actions workflow fails:
1. Check the Actions tab for error messages
2. Ensure all dependencies are correctly listed in `package.json`
3. Verify the build works locally: `npm run build`

### 404 Error on Deployed Site

If you get a 404 error:
1. Verify the `base` path in `vite.config.ts` matches your repository name
2. Check that GitHub Pages is enabled and set to "GitHub Actions"
3. Ensure the `.nojekyll` file exists in the `public` directory
4. Wait a few minutes - GitHub Pages can take time to propagate

### Assets Not Loading

If CSS/JS files aren't loading:
1. Check browser console for errors
2. Verify the `base` path in `vite.config.ts` is correct
3. Ensure `publicDir: 'public'` is set in `vite.config.ts`

### Workflow Not Triggering

If pushing to main doesn't trigger deployment:
1. Check the `.github/workflows/deploy.yml` file exists
2. Verify the branch name in the workflow matches your default branch
3. Check repository permissions allow GitHub Actions

## Configuration Details

### Base Path

The `base` configuration in `vite.config.ts` must match your repository name:
```typescript
base: '/Fuh-Deh-Food-App/'
```

If your repository name changes, update this value.

### Build Output

The build outputs to the `dist` directory, which is what gets deployed to GitHub Pages.

### Environment Variables

If you need environment variables:
1. Add them to GitHub repository secrets
2. Reference them in the workflow file
3. Use them in your Vite config with `import.meta.env`

## Updating the Site

To update your deployed site:

1. Make your changes locally
2. Test with `npm run dev`
3. Build and verify: `npm run build && npm run preview`
4. Commit and push:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
5. GitHub Actions will automatically deploy the changes

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Check the Actions tab for detailed error logs
