# Portfolio Structure and Guidelines

This document provides the required structure, IDs, and classes for your portfolio project. Follow these carefully to ensure proper rendering on the system.

---

## Navbar

- **Navbar element:** `id="nav-menu"`
- **Links inside navbar:**
  - Home: `class="nav-link home"`
  - About: `class="nav-link about"`
  - Skills: `class="nav-link skills"`
  - Projects: `class="nav-link projects"`
  - Contact: `class="nav-link contact"`
  - Resume: `class="nav-link resume"`

---

## Sections

### Home Section
- `id="home"`
- Must include:
  - Name: `id="user-detail-name"`
  - Formal introduction: `id="user-detail-intro"`
  - Professional image: `class="home-img"`
  - Resume button (optional in Home/About section):
    - `id="resume-button-2"` (or anchor `id="resume-link-2"`)

### About Section
- `id="about"` and `class="about section"`
- Resume button (if needed):
  - `id="resume-button-2"` (or anchor `id="resume-link-2"`)

### Skills Section
- `id="skills"`
- Each skill card:
  - `class="skills-card"`
  - Image: `class="skills-card-img"`
  - Name: `class="skills-card-name"`

### Projects Section
- `id="projects"`
- Each project card:
  - `class="project-card"`
  - Project image
  - Title: `class="project-title"`
  - Description: `class="project-description"`
  - Tech stack: `class="project-tech-stack"`
  - GitHub link: `class="project-github-link"`
  - Deployed link or video link: `class="project-deployed-link"`

### Experience Section
- `id="experience"`
- Must include timeline items:
  - Each timeline item: `class="timeline-item"` (can have `left` or `right`)
  - Timeline content container: `class="timeline-content"`
  - Timeline date: `class="timeline-date"`
  - Tech stack used: `class="tech-stack"`
- Example timeline items:
  1. **Evervent | Mohali**  
     - Role: Software Developer  
     - Duration: July 2025 - Present  
     - Description: Co-developed Insurance Booker (React, Next.js). Improved booking efficiency by 25% and reduced load time by 35%.  
     - Tech: React, Next.js, Redux, TypeScript, MongoDB, Node.js
  2. **Dezign Shark | Hyderabad**  
     - Role: Full Stack Developer  
     - Duration: Feb 2025 - July 2025  
     - Description: Built project listings, SEO improvements & admin dashboards. Boosted traffic by 30%.  
     - Tech: React, Redux, TypeScript, Material UI, Node, MongoDB
  3. **upGrad Education | Hyderabad**  
     - Role: Software Developer  
     - Duration: Dec 2023 - Jan 2025  
     - Description: Built Kafka-based Email & WhatsApp automation. Increased engagement by 35%.  
     - Tech: React, Redux, GraphQL, NestJS, MongoDB

### Contact Section
- `id="contact"`
- Must include:
  - GitHub profile link: `id="contact-github"`
  - LinkedIn profile link: `id="contact-linkedin"`
  - Phone number: `id="contact-phone"`
  - Email address: `id="contact-email"`

---

## Resume Buttons

- **Resume section button:** `id="resume-button-1"` (or anchor `id="resume-link-1"`)
- **Home/About section button:** `id="resume-button-2"` (or anchor `id="resume-link-2"`)
- Buttons must:
  - Open resume in a new tab
  - Download resume as PDF

---

## GitHub Integration

- **GitHub calendar:** `class="react-activity-calendar"` (if using `react-github-calendar` package)
- **GitHub statistics images:**
  - Streak stats: `id="github-streak-stats"`  
    [Demo](https://github-readme-streak-stats.herokuapp.com/demo/)
  - Top languages: `id="github-top-langs"`  
    [GitHub repo](https://github.com/anuraghazra/github-readme-stats)
  - GitHub stats card: `id="github-stats-card"`  
    [GitHub repo](https://github.com/anuraghazra/github-readme-stats)

---

## Important Guidelines

- Do **not** repeat any of the above IDs or class names for other elements.
- Read the problem carefully and debug before submission.
- Submit one at a time; avoid last-minute submissions.
- The system may take 1-20 minutes to respond, so plan accordingly.
