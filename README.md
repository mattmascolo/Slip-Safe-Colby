# SlipSafeCo

A modern, responsive web application built with HTML, CSS, JavaScript, HTMX, and Tailwind CSS. This project demonstrates a clean, professional website for a safety-focused company.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: JavaScript-powered counter and form handling
- **HTMX Integration**: Modern web interactions without complex JavaScript frameworks
- **Custom Styling**: Enhanced CSS with animations and custom utilities
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Performance**: Lightweight and fast-loading static site

## 🛠️ Tech Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styles and animations
- **JavaScript (ES6+)**: Interactive functionality
- **HTMX**: Modern web interactions
- **Tailwind CSS**: Utility-first CSS framework
- **Python HTTP Server**: Local development server

## 📁 Project Structure

```
slipsafeco/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Python 3.x (for local development server)
- Modern web browser
- Code editor (VS Code recommended)

### Installation

1. **Clone or download the project**
   ```bash
   cd /Users/mattmascolo/VSCodeProjects/slipsafeco
   ```

2. **Start the development server**
   ```bash
   # Using Python (recommended)
   python -m http.server 8000
   
   # Or using Node.js if you have it installed
   npm start
   ```

3. **Open your browser**
   Navigate to `http://localhost:8000` to view the application

### Alternative Development Servers

If you prefer other development servers:

```bash
# Using Node.js http-server
npx http-server -p 8000

# Using PHP
php -S localhost:8000

# Using Live Server (VS Code extension)
# Right-click index.html and select "Open with Live Server"
```

## 🎨 Customization

### Tailwind CSS Configuration

The project includes a custom Tailwind configuration (`tailwind.config.js`) with:

- Custom color palette for safety themes
- Extended animations and keyframes
- Custom spacing and sizing utilities
- Additional shadow and backdrop utilities

### Adding New Features

1. **HTML Structure**: Add new sections in `index.html`
2. **Styling**: Use Tailwind classes or add custom CSS in `styles.css`
3. **Interactivity**: Add JavaScript functions in `script.js`
4. **HTMX Integration**: Add HTMX attributes for dynamic content

### Color Scheme

The project uses a professional color scheme:

- **Primary Blue**: `#3b82f6` (Tailwind blue-500)
- **Safety Green**: `#22c55e` (Custom safety-500)
- **Neutral Grays**: Various shades for text and backgrounds

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 768px` (md)
- **Desktop**: `768px - 1024px` (lg)
- **Large Desktop**: `> 1024px` (xl)

## 🔧 Development

### Available Scripts

```bash
npm start          # Start development server
npm run dev        # Alternative start command
npm run build      # Build for production (no-op for static site)
npm run serve      # Start production server
```

### Code Organization

- **HTML**: Semantic structure with accessibility in mind
- **CSS**: Utility-first approach with custom enhancements
- **JavaScript**: Modular functions with event delegation
- **HTMX**: Declarative interactions with minimal JavaScript

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@slipsafeco.com or create an issue in the repository.

## 🎯 Roadmap

- [ ] Add more interactive demos
- [ ] Implement backend API integration
- [ ] Add user authentication
- [ ] Create admin dashboard
- [ ] Add multi-language support
- [ ] Implement PWA features

---

**Built with ❤️ for safety and security**