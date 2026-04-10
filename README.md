# VStep Consultancy - Static Website

A pixel-perfect static website conversion of the VStep Consultancy React application, built with pure HTML and Tailwind CSS.

## Features

- **Single Page Application**: All sections (Home, About, Services, Contact) in one HTML file
- **Responsive Design**: Fully responsive across all devices
- **Smooth Scrolling**: JavaScript-powered smooth scrolling navigation
- **Mobile Menu**: Hamburger menu for mobile devices
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Google Fonts**: Outfit font family for consistent typography

## Project Structure

```
project/
├── index.html          # Main HTML file
├── assets/             # Images and assets
│   ├── logo.png
│   ├── hero-img1.png
│   └── ...
├── favicon.png         # Site favicon
└── icons.svg           # Additional icons
```

## How to Run

1. Open `index.html` in any modern web browser
2. Or serve with any static file server:

   ```bash
   # Using Python (if installed)
   cd project
   python -m http.server 8000

   # Using Node.js (if installed)
   npx serve project

   # Or any other static server
   ```

3. Open `http://localhost:8000` in your browser

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Via CDN for styling
- **Vanilla JavaScript**: For interactivity (smooth scroll, mobile menu)
- **Google Fonts**: Outfit font family
- **Google Maps Embed**: For location display

## Sections

1. **Navigation**: Fixed header with logo and menu
2. **Hero**: Main banner with call-to-action buttons
3. **About**: Company information and services overview
4. **Services**: Detailed course categories and programs
5. **Contact**: Contact information and embedded map
6. **Footer**: Links and additional contact details

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Notes

- All assets are properly linked with relative paths
- Responsive breakpoints match the original React design
- JavaScript is minimal and vanilla (no frameworks)
- Pixel-perfect match to the original React version
