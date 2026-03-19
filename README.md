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
