# Portfolio Customization Guide

Follow this guide to customize the portfolio with your own information, projects, and skills.

## 1. Update Personal Information

### Hero Section

**File**: [src/components/Hero.tsx](src/components/Hero.tsx)

Replace these sections:

```typescript
<h1>Senior Full Stack Developer</h1>
<p>Building scalable, modern web applications with React, TypeScript, and cloud technologies.</p>
<p>Specialized in API integration, responsive design, and deploying production-ready solutions.</p>
```

With your own headline and description.

### Example:
```typescript
<h1>Your Name - Full Stack Developer</h1>
<p>Building innovative web applications with modern technologies.</p>
<p>Specializing in React, Node.js, and cloud-native solutions.</p>
```

## 2. Add Your Projects

**File**: [src/components/Projects.tsx](src/components/Projects.tsx)

Find the `projects` array and replace with your actual projects:

```typescript
const projects: Project[] = [
  {
    title: 'Your Project Name',
    description: 'What does this project do? Who does it help?',
    technologies: ['React', 'TypeScript', 'Node.js'],
    link: 'https://github.com/yourname/project-name',
  },
  // Add more projects...
];
```

### Tips for Project Descriptions:
- **Be concise**: 1-2 sentences explaining the project
- **Show impact**: What problem does it solve?
- **Mention integrations**: "Integrated Stripe for payments"
- **Highlight tech**: Include relevant technologies used

### Example Project:
```typescript
{
  title: 'E-Commerce Platform',
  description:
    'Full-stack marketplace with React frontend and Node.js backend. Integrated Stripe for payments and Firebase for real-time inventory updates.',
  technologies: ['React', 'Node.js', 'Stripe API', 'Firebase', 'Tailwind CSS'],
  link: 'https://github.com/username/ecommerce-platform',
}
```

## 3. Update Skills

**File**: [src/components/Skills.tsx](src/components/Skills.tsx)

Update the `skills` array with your expertise:

```typescript
const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL'],
  },
  // Add more categories...
];
```

### Also update the Experience section:

Find and replace:
```typescript
<div className="border-l-2 border-purple-500 pl-6">
  <h4 className="text-xl font-bold text-blue-300">Senior Developer</h4>
  <p className="text-gray-400 text-sm">2022 - Present</p>
  <p className="text-gray-300 mt-2">Your description here</p>
</div>
```

## 4. Update Contact Information

**File**: [src/components/Contact.tsx](src/components/Contact.tsx)

Replace placeholder links and email:

```typescript
<a href="mailto:your.email@example.com" className="...">
  your.email@example.com
</a>

<a href="https://linkedin.com/in/yourprofile" className="...">
  → LinkedIn Profile
</a>

<a href="https://github.com/yourname" className="...">
  → GitHub Portfolio
</a>
```

## 5. Update Social Links in Footer

**File**: [src/components/Footer.tsx](src/components/Footer.tsx)

Replace the social links:

```typescript
<a href="https://github.com/yourname">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://twitter.com/yourhandle">Twitter</a>
```

## 6. Update Browser Title and Meta Info

**File**: [src/app/layout.tsx](src/app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer | Portfolio",
  description: "Professional portfolio showcasing React, Next.js, and full-stack expertise.",
  keywords: ["React", "Full-Stack", "Developer", "Your Name"],
};
```

## 7. Customize Colors (Optional)

The portfolio uses Tailwind CSS color classes. To change the color scheme:

1. Look for color classes like `bg-blue-900`, `text-purple-400`
2. Replace with different colors:
   - Blue → Purple, Emerald, Cyan, etc.
   - Adjust with numbers: 400, 500, 600, 700, 800, 900

### Color Resources:
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)

Example theme change (Blue → Purple):
```typescript
// From:
className="bg-blue-900 text-blue-400"

// To:
className="bg-purple-900 text-purple-400"
```

## 8. Add API Integration to Contact Form

The contact form is ready for backend integration. Here are options:

### Option A: Email Service (Formspree)

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};
```

### Option B: Your Own Backend API

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: {
    'Content-Type': 'application/json'
  }
});
```

### Option C: Firebase or Supabase

```typescript
import { addDoc, collection } from 'firebase/firestore';

const docRef = await addDoc(collection(db, "messages"), formData);
```

## 9. Add Project Images (Optional)

To add images to your projects:

### Step 1: Add Image File
- Place images in `/public/projects/`
- Name them descriptively: `ecommerce-dashboard.png`

### Step 2: Update Projects Component

Add an image field to Project interface:
```typescript
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;  // Add this
}
```

### Step 3: Display Image

```typescript
{project.image && (
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
)}
```

## 10. Testing Your Changes

After making updates:

```bash
# Start development server
npm run dev

# Visit http://localhost:3000 in your browser
# Changes auto-refresh as you save

# When ready to deploy
npm run build
```

## Common Customizations Checklist

- [ ] Update hero section headline
- [ ] Replace projects with your own
- [ ] Update skills and experience
- [ ] Add your contact email
- [ ] Add LinkedIn and GitHub links
- [ ] Update page title in browser
- [ ] Change color scheme (optional)
- [ ] Integrate contact form API
- [ ] Test on mobile devices
- [ ] Deploy to GitHub Pages

## Need Help?

### Stuck on TypeScript Errors?
- Check the exact error message in terminal
- Ensure types match the interface definitions
- Hover over the red squiggly line in VS Code for hints

### Component Not Updating?
- Save the file (Ctrl+S or Cmd+S)
- Check browser console for errors (F12)
- Try refreshing the page (F5)

### Ready to Deploy?
- See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

**Pro Tips:**
- Keep project descriptions focused on what users care about
- Use action verbs: "Built", "Created", "Designed", "Integrated"
- Include real metrics when possible: "Reduced load time by 40%"
- Update your portfolio quarterly with new projects

Good luck with your portfolio! 🚀
