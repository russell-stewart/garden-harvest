# Welcome Garden Produce Weight Calculator
## Purpose
- To be a lightweight, no-Excel web app for garden volunteers to track weekly CSA harvests and coordinate distributions
- Intended to replace a prior method of entry through Google Forms and tabulation in Google Sheets
## Contents of this Project
- `Gemfile`: Builds Jekyll web app
- `config.yml`: Configuration for the Jekyll web app
- `index.html`: Contains the HTML and front-end Javascript needed to run the web app
- `/static`: Directory of images for use on the website
- The following directories _override_ components of the Jekyll minima theme:
- `/layouts/home.html`: Simplified to remove header and footer for clarity
- `/assets/main.scss`: Stylesheet for website; I've worked a hair on refining how HTML forms and tables look relative to vanilla Minima theme
## Hosting
- This website is live at [https://russell-stewart.github.io/garden-harvest/](https://russell-stewart.github.io/garden-harvest/)
- The most recent commit of branch `gh-pages` is the live version of this webpage.
    - **Caution: Any pushes to this branch launch a rebuild of the Jekyll app.**
## Testing locally on your device
- Reference [the github pages docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
## Issues
- See the "Issues" page in Github!