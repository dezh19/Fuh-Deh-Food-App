
# Fuh Deh Food App

A modern food delivery application built with React, TypeScript, and Vite. Order delicious food from local vendors with an intuitive mobile-first interface.

**Original Design:** [Figma Project](https://www.figma.com/design/zu8QEuNwRNutCRV7HKKzF5/Fuh-Deh-Food-App)

## 🚀 Live Demo

Visit the live site: [https://deshawnmitchell.github.io/Fuh-Deh-Food-App/](https://deshawnmitchell.github.io/Fuh-Deh-Food-App/)

## 📋 Features

- Browse local food vendors
- View detailed menus with images and prices
- Add items to cart with quantity management
- User profile management
- Responsive mobile-first design
- Modern UI with Radix UI components

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **UI Components:** Radix UI
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** GitHub Pages with GitHub Actions

## 💻 Local Development

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deshawnmitchell/Fuh-Deh-Food-App.git
cd Fuh-Deh-Food-App
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (requires proper setup)

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. Push your changes to the `main` branch

The GitHub Actions workflow will automatically:
- Install dependencies
- Build the project
- Deploy to GitHub Pages

### Manual Deployment

You can also deploy manually using:
```bash
npm run deploy
```

## 📁 Project Structure

```
Fuh-Deh-Food-App/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── favicon.svg             # App favicon
│   └── .nojekyll              # GitHub Pages config
├── src/
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   └── ...               # Feature components
│   ├── data/                 # Static data
│   ├── styles/               # Global styles
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global CSS
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🔧 Configuration

### Vite Configuration

The project uses Vite with the following key configurations:
- **Base Path:** `/Fuh-Deh-Food-App/` for GitHub Pages
- **Output Directory:** `dist`
- **Public Directory:** `public`

### TypeScript

TypeScript is configured for strict type checking with React support.

## 🐛 Troubleshooting

### 404 Errors on GitHub Pages

If you encounter 404 errors after deployment:
1. Ensure GitHub Pages is enabled in repository settings
2. Verify the `base` path in `vite.config.ts` matches your repository name
3. Check that the `.nojekyll` file exists in the `public` directory

### Build Failures

If the build fails:
1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Ensure you're using Node.js 20.x or higher

## 📝 License

This project is private and proprietary.

## 👤 Author

Deshawn Mitchell

## 🙏 Acknowledgments

- Original design from Figma
- UI components from Radix UI
- Icons from Lucide React
  