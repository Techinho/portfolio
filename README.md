# Ilyass Ezzaouya - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, projects, and experience as a Full Stack Developer specializing in MERN stack and Laravel.

## 🚀 Features

- **Modern Design**: Clean, minimal design with purple accent colors
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Easy Customization**: All data separated in data files for easy updates

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Components**: Shadcn/ui components
- **Build Tool**: Vite
- **Font**: Inter (Google Fonts)

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section  
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Contact.tsx     # Contact form
│   ├── Navigation.tsx  # Navigation bar
│   └── Footer.tsx      # Footer
├── data/
│   └── portfolio.ts    # All portfolio data (easy to customize)
├── pages/
│   └── Index.tsx       # Main page
└── styles/
    └── index.css       # Design system & global styles
```

## 🎨 Design System

The portfolio uses a carefully crafted design system with:

- **Colors**: White, black, and purple (#8B5CF6) accent
- **Typography**: Inter font family
- **Animations**: Smooth transitions and micro-interactions
- **Components**: Reusable UI components with variants
- **Responsive**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Customization

### Updating Personal Information

Edit `src/data/portfolio.ts` to update:

- Personal information (name, title, contact details)
- Skills and technologies
- Projects and their details
- Experience and education
- Social links

### Updating Project Images

Replace the project images in the `public/` directory:
- `public/project-sgrf.jpg`
- `public/project-techedu.jpg` 
- `public/project-forever.jpg`

### Adding Your Resume

Replace `public/resume.pdf` with your actual resume file.

### Customizing Colors

The design system is defined in `src/index.css`. Update the CSS variables to change colors:

```css
:root {
  --primary: 262 83% 58%;        /* Main purple color */
  --primary-light: 262 83% 65%;  /* Lighter purple */
  --primary-dark: 262 83% 45%;   /* Darker purple */
  /* ... other colors */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to the main page in `src/pages/Index.tsx`
3. Update the navigation in `src/components/Navigation.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Performance Optimizations

- Lazy loading for animations
- Optimized images
- Minimal JavaScript bundle
- Font loading optimization
- Smooth scroll behavior

## 📧 Contact Form

The contact form is currently set up with a demo implementation. To make it functional:

1. Set up a backend service (Node.js, PHP, etc.)
2. Update the form submission logic in `src/components/Contact.tsx`
3. Or integrate with services like Formspree, Netlify Forms, or EmailJS

## 🌟 Features to Customize

- **Social Links**: Update in `src/data/portfolio.ts`
- **Project Links**: Add your actual GitHub and live demo URLs
- **Resume Download**: Replace `public/resume.pdf`
- **Meta Tags**: Update in `index.html` for SEO
- **Favicon**: Replace `public/favicon.ico`

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

**Built with ❤️ by Ilyass Ezzaouya**

*Ready to collaborate or have a question? Let's connect!*