# Personal Academic Website for Xiaole Yin

This repository contains the source code for Xiaole Yin's personal academic website, hosted on GitHub Pages. The website is designed to be clean, professional, modern, and responsive, showcasing academic background, research interests, publications, and contact information.

## Website Structure

The website consists of the following main files and directories:

- `index.html`: The main homepage.
- `people.html`: The page listing lab members and personnel.
- `css/style.css`: Contains all the styling rules for the website, including the meteor animation.
- `js/main.js`: Contains JavaScript for dynamic elements, such as the meteor animation and potentially for loading content dynamically in the future.
- `content/`: This directory holds the editable content for the website in Markdown format.
    - `biography.md`: Contains the text for the "About Me" section on the homepage.
    - `research_interests.md`: Contains the text for the "Research Interests" section on the homepage.
    - `publications.md`: Contains the list of publications for the homepage.
- `images/`: Placeholder directory for any images used on the website (e.g., profile photo).

## Editing Content

The primary content of the website (biography, research interests, publications) is managed through Markdown files located in the `content/` directory. This allows for easy updates without needing to directly edit HTML code.

### How to Edit Sections:

1.  **Biography**: To update the "About Me" section, edit the `/home/ubuntu/xiaole_yin_website/content/biography.md` file. Use standard Markdown syntax.
2.  **Research Interests**: To update the research interests, edit the `/home/ubuntu/xiaole_yin_website/content/research_interests.md` file. Use standard Markdown syntax.
3.  **Publications**: To update the list of publications, edit the `/home/ubuntu/xiaole_yin_website/content/publications.md` file. Each publication should be a list item in Markdown (e.g., starting with `- `).
4.  **People Page**: To update information on the `people.html` page (e.g., add new lab members, update existing member details):
    *   Open the `/home/ubuntu/xiaole_yin_website/people.html` file.
    *   Locate the `<div class="person">` section for the person you want to edit or add a new similar div structure for a new person.
    *   Update the `<h3>` for the name, and the `<p>` tags for the role and description directly within the HTML.
5.  **Contact Information & Links**: To update contact details or external profile links (LinkedIn, Google Scholar, ORCID, ResearchGate, GitHub) on the homepage:
    *   Open the `/home/ubuntu/xiaole_yin_website/index.html` file.
    *   Locate the `<section id="contact">`.
    *   Edit the email address, office address, or the `href` attributes of the `<a>` tags for the profile links.
    *   The ORCID link is dynamically updated via `js/main.js` if the ORCID ID is changed there. Other links are currently static placeholders in `index.html` but can be made dynamic if their IDs are added to `js/main.js`.

### Placeholder Profile Photo:
The website currently uses a placeholder for the profile photo. To add an actual photo:
1. Add your photo (e.g., `profile.jpg` or `profile.png`) to the `/home/ubuntu/xiaole_yin_website/images/` directory.
2. Open `index.html` and find the `<section id="hero">` or create an `<img>` tag within the biography section.
3. Update the `src` attribute of an `<img>` tag to point to your photo, for example: `<img src="images/profile.jpg" alt="Xiaole Yin">`.

## Deployment to GitHub Pages

This website is intended to be hosted on GitHub Pages. Your GitHub Pages site will be available at `https://xiaole99.github.io/` if you create a repository named `xiaole99.github.io`.

**Steps for Initial Deployment:**

1.  **Create a GitHub Repository**: 
    *   Go to [GitHub](https://github.com) and create a new public repository.
    *   **Crucially, name this repository `xiaole99.github.io`**. This specific naming convention is required for a user/organization GitHub Pages site.
2.  **Initialize Git in Your Local Project Folder** (if you were developing locally and not cloning an existing repo):
    *   Navigate to the root directory of your website project (`/home/ubuntu/xiaole_yin_website/` in this environment).
    *   Run the following commands:
        ```bash
        git init
        git add .
        git commit -m "Initial commit of academic website"
        ```
3.  **Link Your Local Repository to GitHub**:
    *   Add the remote repository URL (you can find this on your GitHub repository page):
        ```bash
        git remote add origin https://github.com/xiaole99/xiaole99.github.io.git
        ```
    *   Verify the remote URL:
        ```bash
        git remote -v
        ```
4.  **Push Your Code to GitHub**:
    *   Push your local `main` (or `master`) branch to GitHub:
        ```bash
        git push -u origin main  # Or 'master' if that's your default branch name
        ```
5.  **Enable GitHub Pages** (usually automatic for `username.github.io` repos):
    *   Go to your repository settings on GitHub.
    *   Scroll down to the "GitHub Pages" section.
    *   Ensure the source is set to deploy from the `main` (or `master`) branch and the `/ (root)` folder.
    *   Your website should be live at `https://xiaole99.github.io/` within a few minutes.

**Making Updates After Initial Deployment:**

1.  Make your changes to the content (Markdown files) or structure (HTML/CSS/JS files) locally.
2.  Commit your changes using Git:
    ```bash
    git add .
    git commit -m "Description of your updates (e.g., updated publications)"
    ```
3.  Push the changes to GitHub:
    ```bash
    git push origin main # Or 'master'
    ```
4.  GitHub Pages will automatically rebuild and redeploy your site with the new changes. This might take a minute or two.

## Custom Domain (Optional)

If you have a custom domain, you can configure it in your GitHub repository settings under the "GitHub Pages" section.

## Google Analytics (Optional)

To integrate Google Analytics:
1.  Sign up for Google Analytics and get your tracking ID (e.g., `UA-XXXXXXXXX-X` or `G-XXXXXXXXXX`).
2.  Add the Google Analytics tracking code snippet to the `<head>` section of your `index.html` and `people.html` files. You can find the appropriate snippet in your Google Analytics account.

This guide should help you maintain and update your academic website. If you encounter any issues, refer to the official [GitHub Pages documentation](https://docs.github.com/en/pages).

