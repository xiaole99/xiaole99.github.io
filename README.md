# Personal Academic Website for Xiaole Yin (Revised)

This repository contains the source code for Xiaole Yin's revised personal academic website, designed for hosting on GitHub Pages. The website features a clean, professional, modern, and responsive two-column layout (sidebar and main content), a smooth entrance animation, and a vivid light color theme.

## Website Structure

The website consists of the following main files and directories:

- `index.html`: The main homepage with the two-column layout.
- `people.html`: The page listing lab members, also with the two-column layout.
- `css/style.css`: Contains all styling rules, including the entrance animation, two-column layout, color theme, and responsive design adjustments.
- `js/main.js`: Contains JavaScript, currently for the meteor animation (if kept) and potentially for future dynamic elements. The main entrance animation is CSS-based.
- `images/`: Contains images used on the website.
    - `profile.png`: The main profile photo displayed in the sidebar.
- `content/`: This directory still holds Markdown files (`biography.md`, `research_interests.md`, `publications.md`). However, in the current implementation, the content from these files has been directly integrated into the `index.html`. For future major content updates, you can refer to these Markdown files as a source and then update the corresponding sections in `index.html`.

## Editing Content

Most content updates will involve editing the HTML files directly, particularly `index.html` and `people.html`.

### 1. Homepage (`index.html`):

*   **Profile Photo**: The profile photo is `images/profile.png`. To change it, replace this file with your new photo, ensuring the filename remains the same or update the `src` attribute in the `<img>` tag within the `<aside class="sidebar">` section of `index.html` and `people.html`.
*   **Contact Information (Sidebar)**: 
    *   Edit the `ul class="contact-info"` list within the `<aside class="sidebar">` section. 
    *   Update email addresses, physical address, and links for LinkedIn, Google Scholar, GitHub, ORCID, and ResearchGate. 
    *   Icons are provided by Font Awesome (ensure the CDN link in the `<head>` of HTML files is present).
*   **Hero Section (Name, Title, Affiliation)**: Edit the content within `<section id="hero">` in the `<main class="main-content">` area.
*   **About Me (Biography)**: Edit the paragraphs within `<section id="biography">`.
*   **Research Interests**: Edit the paragraphs within `<section id="research-interests">`.
*   **PhD Student Opportunities**: This section is within `<section id="research-interests">`. Update the start date, application deadline, university, and benefits as needed.
*   **Publications**: Edit the list items (`<li>`) within the `<ul>` in `<section id="publications">`.

### 2. People Page (`people.html`):

*   **Sidebar**: The sidebar (profile photo, contact info) is structured similarly to `index.html` and can be edited in the same way if you want it to be identical or customized per page.
*   **Team Members**: 
    *   Each person is in a `<div class="person">` within `<section id="people-list">`.
    *   Edit the `<h3>` for the name, and the `<p>` tags for the role and description.
    *   To add new members, copy an existing `<div class="person">` block and modify its content.

### 3. Markdown Files (`content/` directory):

While the website currently has content directly in HTML, the `content/` directory contains the Markdown source for key sections (`biography.md`, `research_interests.md`, `publications.md`). You can use these files to draft and manage your text-based content. To update the website, you would then copy the relevant text from these Markdown files and paste it into the appropriate HTML sections in `index.html`.

## Animations

*   **Entrance Animation**: A smooth fade-in and zoom-in animation is applied to the entire page content on load. This is defined in `css/style.css` using `@keyframes fadeInZoom` and applied to the `.entrance-animation` class that wraps the `<body>` content. No JavaScript is needed for this specific animation.
*   **Meteor Animation**: The previous meteor animation is still present in the CSS. If you wish to remove it, delete the `.meteor` class styles and the `@keyframes fall` from `css/style.css`, and remove the `<div class="meteor"></div>` elements from `index.html` (likely within the `#hero` section if they were kept).

## Deployment to GitHub Pages

This website is intended to be hosted on GitHub Pages. If your GitHub username is `xiaole99`, your GitHub Pages site will be available at `https://xiaole99.github.io/` if you create a repository named `xiaole99.github.io`.

**Steps for Initial Deployment or Updating:**

1.  **Create/Use GitHub Repository**: 
    *   If you haven't already, create a new public GitHub repository named `xiaole99.github.io`.
    *   If you have an existing repository for the previous version, you can push updates to it.
2.  **Add Files to Repository**: Place all the website files and folders (`index.html`, `people.html`, `css/`, `js/`, `images/`, `content/`, `README.md`) into the root of this repository.
3.  **Commit and Push Changes**: 
    *   Use Git to add, commit, and push your files to the `main` (or `master`) branch of your repository.
    ```bash
    git add .
    git commit -m "Update website with new design and content"
    git push origin main  # Or master
    ```
4.  **Enable GitHub Pages**: 
    *   Go to your repository settings on GitHub.
    *   Navigate to the "Pages" section in the left sidebar.
    *   Ensure the source is set to "Deploy from a branch" and select the `main` (or `master`) branch and `/ (root)` folder.
    *   Your website should be live at `https://xiaole99.github.io/` within a few minutes. Updates will also trigger an automatic rebuild.

## Custom Domain & Google Analytics (Optional)

Refer to the previous `README.md` or official GitHub/Google Analytics documentation for setting these up.

This guide should help you maintain and update your revised academic website. If you encounter any issues, refer to the official [GitHub Pages documentation](https://docs.github.com/en/pages).

