# Custom HTML5 Video Player

A simple, lightweight, and customizable JavaScript library for playing videos on the web. Built with vanilla JavaScript and HTML5 video element, this player provides custom controls for an enhanced user experience.

## 🎯 Features

- ▶️ **Play/Pause Control** - Smooth video playback control
- 🔊 **Volume Control** - Increase and decrease volume with visual feedback
- ⏰ **Seek Control** - Jump to any specific time in the video
- 📱 **Responsive Design** - Works seamlessly across all device sizes
- 🚀 **Easy Implementation** - Simple setup with minimal configuration
- 🌐 **Cross-Browser Support** - Compatible with all modern browsers (IE11+)
- 🎨 **Customizable UI** - Easy to style and customize controls

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Custom HTML5 Video Player                │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   HTML5 Video   │  │  Custom Controls │  │   Styling    │ │
│  │    Element      │  │                 │  │    (CSS)     │ │
│  │                 │  │  • Play/Pause   │  │              │ │
│  │  • Video Source │  │  • Volume       │  │  • Responsive│ │
│  │  • Media Events │  │  • Seek Bar     │  │  • Themes    │ │
│  │  • Playback     │  │  • Time Display │  │  • Animations│ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
│           │                     │                   │       │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │              JavaScript Controller                      │ │
│  │                                                         │ │
│  │  • Event Handlers     • State Management               │ │
│  │  • Media API Control  • Progress Tracking              │ │
│  │  • Volume Management  • Responsive Behavior            │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### 1. Include the Files

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/video-player.css">
</head>
<body>
    <!-- Video player container -->
    <div class="video-container">
        <video id="custom-video" width="800" height="450">
            <source src="path/to/your/video.mp4" type="video/mp4">
            <source src="path/to/your/video.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
    </div>
    
    <script src="js/video-player.js"></script>
</body>
</html>
```

### 2. Initialize the Player

```javascript
// Initialize the custom video player
const videoPlayer = new CustomVideoPlayer('custom-video', {
    // Optional configuration
    controls: true,
    responsive: true,
    theme: 'default'
});
```

## 📁 Project Structure

```
Custom-HTML5-Video-Player/
├── index.html          # Demo page
├── css/
│   └── video-player.css # Player styles
├── js/
│   └── video-player.js  # Core functionality
├── assets/
│   └── icons/          # Control icons
└── README.md           # This file
```

## 🎮 Controls Overview

| Control | Function | Keyboard Shortcut |
|---------|----------|------------------|
| Play/Pause | Toggle video playback | Spacebar |
| Volume | Adjust audio level | ↑/↓ Arrow keys |
| Seek | Jump to specific time | ←/→ Arrow keys |
| Fullscreen | Toggle fullscreen mode | F |
| Mute | Toggle audio on/off | M |

## ⚙️ Configuration Options

```javascript
const options = {
    controls: true,           // Show/hide controls
    autoplay: false,          // Auto-start video
    loop: false,              // Loop video
    muted: false,             // Start muted
    responsive: true,         // Responsive design
    theme: 'default',         // UI theme
    showProgress: true,       // Show progress bar
    showVolume: true,         // Show volume control
    showFullscreen: true      // Show fullscreen button
};
```

## 🎨 Customization

### Custom Styling
```css
.video-container {
    /* Customize container */
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.video-controls {
    /* Customize controls */
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}
```

### Event Listeners
```javascript
videoPlayer.on('play', function() {
    console.log('Video started playing');
});

videoPlayer.on('pause', function() {
    console.log('Video paused');
});

videoPlayer.on('ended', function() {
    console.log('Video ended');
});
```

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 11+ |
| Edge | 16+ |
| IE | 11+ |

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 API Reference

### Methods
```javascript
// Playback control
videoPlayer.play()
videoPlayer.pause()
videoPlayer.stop()

// Volume control
videoPlayer.setVolume(0.5)  // 0-1
videoPlayer.mute()
videoPlayer.unmute()

// Seek control
videoPlayer.seek(120)       // seconds
videoPlayer.getCurrentTime()
videoPlayer.getDuration()

// Fullscreen
videoPlayer.enterFullscreen()
videoPlayer.exitFullscreen()
```

### Events
- `play` - Video starts playing
- `pause` - Video is paused
- `ended` - Video playback ended
- `timeupdate` - Progress update
- `volumechange` - Volume changed
- `fullscreenchange` - Fullscreen toggled

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Masudur Rahman Sourav**
- GitHub: [@masudursourav](https://github.com/masudursourav)
- Email: [Contact via GitHub](https://github.com/masudursourav)

## 🙏 Acknowledgments

- HTML5 Video API
- Modern JavaScript ES6+
- CSS3 Flexbox & Grid
- Open source community

## 📈 Performance

- **Lightweight**: < 15KB minified
- **Zero Dependencies**: Pure vanilla JavaScript
- **Fast Loading**: Optimized for performance
- **Memory Efficient**: Proper cleanup and event management

---

⭐ **Star this repository if you found it helpful!**
