# My Portfolio

A modern, responsive portfolio website showcasing my journey as a Computer Engineer with expertise in Artificial Intelligence, Machine Learning, Deep Learning, IoT Security, and Cyber Security.

## Live Demo

Visit my portfolio: [Salman Jan's Portfolio](https://sjsportfolio.netlify.app/)

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Interactive Animations**: Smooth animations using Lottie and React Reveal
- **Dynamic Content**: GitHub integration to showcase projects and contributions
- **Modern UI/UX**: Clean and professional design
- **Performance Optimized**: Fast loading with lazy loading components

## Technologies Used

- **Frontend**: React.js (v16.10.2)
- **Styling**: SCSS, CSS3
- **Animations**: Lottie React, React Reveal
- **Icons**: Font Awesome
- **Build Tool**: Create React App
- **Deployment**: Netlify
- **Package Manager**: npm

## Project Structure

```
src/
├── assets/          # Images, fonts, and Lottie animations
├── components/      # Reusable UI components
├── containers/      # Page containers and sections
├── contexts/        # React contexts (theme management)
├── hooks/          # Custom React hooks
├── portfolio.js    # Main configuration file
└── utils.js        # Utility functions
```

## Sections

- **Home**: Introduction and hero section
- **Skills**: Technical skills and software proficiency
- **Experience**: Professional work history
- **Education**: Academic background
- **Projects**: Open source and personal projects
- **Achievements**: Certifications and accomplishments
- **Contact**: Get in touch information

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/salmanjan11/MyPortfolio.git
cd MyPortfolio
```

2. Install dependencies
```bash
npm install
```

3. Create environment variables (optional)
```bash
cp env.example .env
# Add your GitHub token for projects section
```

4. Start the development server
```bash
npm start
```

The application will open at `http://localhost:3000`

## Customization

### Personal Information

Edit `src/portfolio.js` to customize:

- Personal details in `greeting` section
- Social media links in `socialMediaLinks`
- Skills in `skillsSection`
- Work experience in `workExperiences`
- Education details in `educationInfo`
- Project information in `openSource` and `bigProjects`

### Styling

- Global colors: Edit `src/_globalColor.scss`
- Component styles: Individual SCSS files in component directories
- Responsive design: Media queries included in SCSS files

### GitHub Integration

To display your GitHub projects:

1. Get a GitHub Personal Access Token
2. Add it to your environment variables
3. The `fetch.js` script will automatically pull your pinned repositories

## Available Scripts

- `npm start`: Run development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm run deploy`: Deploy to GitHub Pages
- `npm run format`: Format code with Prettier

## Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Set up continuous deployment with your GitHub repository

### GitHub Pages

```bash
npm run deploy
```

## Contributing

This is a personal portfolio project, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on the [DeveloperFolio](https://github.com/saadpasta/developerFolio) template
- Icons from [Font Awesome](https://fontawesome.com/)
- Animations from [LottieFiles](https://lottiefiles.com/)

## Contact

- Email: salmanjan.ipb@gmail.com
- LinkedIn: [Salman Jan](https://www.linkedin.com/in/salmanjan11/)
- GitHub: [salmanjan11](https://github.com/salmanjan11)

---

