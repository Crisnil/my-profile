# Professional Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS showcasing full-stack development expertise.

## Features

- **Modern Design**: Beautiful gradient backgrounds with smooth animations
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Portfolio Sections**:
  - Hero section with call-to-action buttons
  - Featured projects showcase
  - Skills and experience timeline
  - Contact form with validation
  - Navigation bar with smooth scrolling
- **Performance Optimized**: Static site generation for GitHub Pages
- **SEO Friendly**: Optimized metadata and semantic HTML

## Tech Stack

- **Frontend**: React 19, Next.js 16
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **Tools**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-profile
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Update Personal Information

Edit the following files to customize the portfolio with your information:

1. **[src/components/Hero.tsx](src/components/Hero.tsx)** - Update headline and description
2. **[src/components/Projects.tsx](src/components/Projects.tsx)** - Replace with your actual projects
3. **[src/components/Skills.tsx](src/components/Skills.tsx)** - Update your skills and experience
4. **[src/components/Contact.tsx](src/components/Contact.tsx)** - Add your contact information and links

### Example: Adding Your Project

```typescript
{
  title: 'Your Project Name',
  description: 'Project description',
  technologies: ['React', 'TypeScript', 'Node.js'],
  link: 'https://github.com/yourrepo'
}
```

### Connect APIs

The contact form includes a comment showing where to integrate with email services. Example options:

- **Email Service**: SendGrid, Mailgun, or EmailJS
- **Form Backend**: Formspree, Basin, or your own API
- **Database**: Firebase, Supabase, or your backend

Example with fetch API:
```typescript
// In Contact.tsx handleSubmit function
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
});
```

## Deployment on GitHub Pages

### Option 1: User/Organization Site (username.github.io)

1. Create a repository named `<username>.github.io`
2. Push this code to the repository
3. Run build:
```bash
npm run build
```
4. Push the `out` folder or commit and push
5. Site will be available at `https://<username>.github.io`

### Option 2: Project Repository

1. Create any repository name
2. Update [next.config.ts](next.config.ts):
```typescript
basePath: "/repository-name",
```
3. Build and deploy:
```bash
npm run build
git add .
git commit -m "Deploy portfolio"
git push origin main
```
4. Enable GitHub Pages in repository settings (Settings > Pages)
5. Select source as `main` branch
6. Site will be available at `https://<username>.github.io/repository-name`

### Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - uses: actions/upload-artifact@v3
        with:
          name: portfolio
          path: out
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Build and Export

For static site generation:

```bash
npm run build
```

This creates an `out` folder with the static files ready for deployment.

## Project Structure

```
my-profile/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page
│   ├── components/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Navigation.tsx  # Navigation bar
│   │   └── Footer.tsx      # Footer
│   └── app.css             # Global styles
├── public/                  # Static assets
├── next.config.ts          # Next.js config
└── package.json            # Dependencies
```

## API Integration Examples

### Fetching External Data

```typescript
// Example: Fetch GitHub repositories
const response = await fetch('https://api.github.com/users/username/repos');
const projects = await response.json();
```

### Contact Form Integration

Connect to services like:
- **Formspree**: `https://formspree.io/f/YOUR_FORM_ID`
- **SendGrid**: Integrate via backend API
- **EmailJS**: Client-side JavaScript library

## Performance Tips

- Images are optimized automatically by Next.js
- Tailwind CSS is purged for production
- Static site generation ensures fast loading
- GitHub Pages hosting is free and fast

## Best Practices

1. **Keep descriptions concise** - Users scan portfolios quickly
2. **Use real project links** - Add GitHub and live demo URLs
3. **Update projects regularly** - Show your latest work
4. **Test on mobile** - Ensure responsive design works
5. **Optimize images** - Use optimized formats and dimensions
6. **Add social links** - Make it easy to contact you

## License

This project is open source and available under the MIT License.

## Support

For questions or issues with Next.js, visit the [Next.js documentation](https://nextjs.org/docs)
