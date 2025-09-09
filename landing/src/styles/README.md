# Local AI Website Styling Guide

This document explains the unified CSS approach for the Local AI website, aligned with the Archon UI design system.

## CSS Structure

The website now uses a single unified CSS file: `src/styles/global.css` that provides:

1. **Tailwind CSS** - For utility-first styling
2. **CSS Custom Properties** - For consistent color management
3. **Component Classes** - Reusable UI components
4. **Animation Utilities** - For enhanced user experience

## Color System

We use a consistent color system based on CSS custom properties:

### Base Colors
- `--background`: Page background
- `--foreground`: Primary text color
- `--muted`: Muted text and backgrounds
- `--border`: Border colors

### Brand Colors
- `--blue-accent`: #3b82f6
- `--purple-accent`: #a855f7
- `--green-accent`: #22c55e
- `--cyan-accent`: #22d3ee
- `--orange-accent`: #f97316
- `--red-accent`: #ef4444
- `--yellow-accent`: #eab308
- `--pink-accent`: #ec4899

### Custom Palette
- `--custom-dark`: #111827 (replaces #95979a)
- `--custom-darker`: #1e2836 (replaces #babcc1)
- `--custom-gray-600`: #3a3b3e
- `--custom-gray-400`: #babcc1

## Glassmorphism Components

We provide several glassmorphism utility classes:

- `.glass` - Base glass effect
- `.glass-blue` - Blue-themed glass
- `.glass-purple` - Purple-themed glass
- `.glass-green` - Green-themed glass
- `.glass-cyan` - Cyan-themed glass
- `.glass-orange` - Orange-themed glass
- `.glass-red` - Red-themed glass

## 3D Card Effects

For interactive cards with depth:

- `.card-3d` - Base 3D container
- `.card-3d-content` - Content layer
- `.card-3d-layer-1` to `.card-3d-layer-3` - Depth layers
- `.card-reflection` - Reflection effect
- `.card-neon-line` - Neon accent line

## Toggle Components

For interactive toggle switches:

- `.toggle-switch` - Base toggle container
- `.toggle-thumb` - Movable thumb
- `.toggle-icon` - Icon inside thumb
- Color variants: `.toggle-blue`, `.toggle-purple`, `.toggle-green`, etc.

## Animation Utilities

Various animation classes for enhanced UX:

- `.luminous-button-glow` - Pulsing glow effect
- `.neon-grid` - Grid background pattern
- `.neon-divider-h/v` - Neon dividers
- Scrollbar utilities: `.custom-scrollbar`, `.scrollbar-thin`

## Usage

All components automatically adapt to light/dark mode based on the user's system preference or manual toggle.

To use any of these styles, simply apply the classes to your components:

```jsx
<div className="glass-purple p-6 rounded-xl">
  <h2 className="text-2xl font-bold text-foreground">Card Title</h2>
  <p className="text-muted-foreground">Card content</p>
</div>
```

## Migration from Old System

Previously, the site used separate CSS files for different components. This unified approach provides:

1. **Consistency** - All components use the same design language
2. **Maintainability** - Single source of truth for styling
3. **Performance** - Reduced CSS file size and HTTP requests
4. **Scalability** - Easy to extend with new components

The old color codes #95979a and #babcc1 have been replaced with the new custom palette that provides better contrast and visual hierarchy.