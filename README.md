# Leatile King Baaitse's Digital Blog Portfolio

This project demonstrates academic journey reflection, professional development, and technical skills through a modern web application I built with Next.js, React, TypeScript, and Tailwind CSS.

## Assignment Requirements & Implementation

### Blog Structure, Layout, and Ease of Navigation
- **Responsive Design**: Mobile-first approach with brutalist aesthetic.
- **Intuitive Navigation**: Clear menu structure with smooth scrolling.
- **Consistent Layout**: Unified design system across all pages.
- **Accessibility**: Semantic HTML and proper heading hierarchy.

### About Me Page Professionalism
- **Professional Introduction**: Personal background and academic goals.
- **Contact Information**: Updated email and phone details.
- **Professional Photo**: High-quality profile image.
- **Clean Presentation**: Well-organized content sections.

### Reflective Writing on Academic Journey
- **Blog Post**: `/blog/learning-journey/`
- **Content**: Personal growth, challenges, and achievements.
- **Critical Thinking**: Analysis of learning experiences.
- **Future Goals**: Academic and career aspirations.

### Reflective Writing on Group Work Experience
- **Blog Post**: `/blog/group-work-reflection/`
- **Tuckman's Model**: Analysis of forming, storming, norming, performing stages.
- **Team Dynamics**: Reflection on collaboration and communication
- **Lessons Learned**: Insights from group project experiences

### Skills/Projects Showcased
- **Technical Skills**: Programming languages, tools, and technologies.
- **Featured Projects**: Three detailed project showcases with:
  - Social Media Calendar (React, Node.js, MongoDB).
  - Student Data Dashboard (Power BI, SQL, Python).
  - Web Scraping Tool (Python, BeautifulSoup, Pandas).
- **Soft Skills**: Communication, teamwork, problem-solving.
- **Certifications**: Microsoft Power BI, Data Science Fundamentals.

### Application Letter
 **Location**: `public\baaitse_leatile_november2025_A03_(industrial_attachment_letter).pdf`
- **Professional Format**: Proper business letter structure.
- **Personalization**: Tailored content for specific opportunities.
- **Clear Objectives**: Career goals and availability.
- **Contact Integration**: Easy access to contact information.

### Email Template
- **Location**: `public\baaitse_leatile_november2025_A03_(email_template).pdf`
- **Professional Format**: Proper business letter structure.
- **Personalization**: Tailored content for specific opportunities.
- **Clear Objectives**: Career goals and availability.
- **Contact Integration**: Easy access to contact information.

### CV Presentation and Formatting
- **Location**: `public\baaitse_leatile_november2025_A03_(cv).pdf`
- **Downloadable CV**: PDF download functionality.
- **Professional Layout**: Clean, organized sections.
- **Complete Information**: Education, experience, skills, certifications.
- **Modern Design**: Brutalist aesthetic with professional presentation.

### Overall Blog Presentation and Creativity
- **Unique Design**: Brutalist design philosophy.
- **Visual Elements**: Custom illustrations and icons.
- **Interactive Features**: Smooth animations and transitions.
- **Creative Content**: Engaging and original writing style.

## Features

### Core Pages
- **Home/About Me** - Personal introduction and professional background.
- **CV/Resume** - Comprehensive curriculum vitae with download functionality.
- **Blog** - Reflective posts on academic journey and group work.
- **Skills & Projects** - Technical abilities and project showcase
- **Resources** - Study tips and learning resources.
- **Contact** - Professional contact form and information.

### Design Elements
- **Brutalist Aesthetic** - Bold, geometric design with strong visual hierarchy.
- **Google Product Sans Font** - Modern, clean typography.
- **Responsive Layout** - Mobile-first design that works on all devices.
- **Interactive Components** - Smooth animations and micro-interactions.

## Tech Stack

- **Framework:** Next.js 14 (React 18).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **Icons:** Lucide React.
- **Font:** Google Product Sans.
- **Form Handling:** FormSubmit.co.


## Project Structure

```
personal-blog-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home/About Me page
│   ├── globals.css         # Global styles and brutalist design
│   ├── cv/
│   │   └── page.tsx        # CV/Resume page with download
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   ├── learning-journey/
│   │   │   └── page.tsx    # Academic journey reflection
│   │   └── group-work-reflection/
│   │       └── page.tsx    # Group work analysis
│   ├── skills/
│   │   └── page.tsx        # Skills and projects showcase
│   ├── resources/
│   │   └── page.tsx        # Study tips and resources
│   └── contact/
│       └── page.tsx        # Contact form and information
├── components/
│   ├── Navigation.tsx      # Navigation component
│   ├── ScrollReveal.tsx    # Animation component
│   └── illustrations/      # Custom SVG illustrations
├── public/
│   └── images/             # Static assets
│   └── baaitse_leatile_november2025_A03_(cv).pdf     # CV PDF
│   └── baaitse_leatile_november2025_A03_(email_template).pdf     # Email Template PDF
│   └── baaitse_leatile_november2025_A03_(application_letter).pdf     # Application Letter PDF
├── hooks/
│   └── useScrollAnimation.ts # Custom hook for animations
└── Configuration files
```

## Deployment
- **GitHub Pages**: With static export