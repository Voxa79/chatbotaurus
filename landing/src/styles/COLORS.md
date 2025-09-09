# Custom Color Palette

This document describes the custom color palette added to the project.

## Tailwind CSS Custom Colors

The following custom colors have been added to the Tailwind configuration:

### Primary Custom Colors
- `custom-dark`: #111827 (replaces #95979a)
- `custom-darker`: #1e2836 (replaces #babcc1)

### Custom Gray Scale
- `custom-gray-600`: #95979a
- `custom-gray-400`: #babcc1

## Usage Examples

### In Tailwind Classes
```html
<!-- Using custom colors in Tailwind classes -->
<div class="text-custom-dark bg-custom-darker">
  Content with custom colors
</div>

<div class="text-custom-gray-600 border-custom-gray-400">
  Content with custom gray colors
</div>
```

### In CSS Variables
```css
/* Using custom colors in CSS */
.my-element {
  color: var(--custom-dark);
  background-color: var(--custom-darker);
}
```

### In JavaScript/React
```jsx
// Using custom colors in JavaScript/React
const MyComponent = () => {
  return (
    <div className="text-custom-dark bg-custom-darker">
      Content with custom colors
    </div>
  );
};
```

## Color Mapping
| Old Color | New Color | Usage |
|-----------|-----------|-------|
| #95979a | #111827 | `custom-dark` |
| #babcc1 | #1e2836 | `custom-darker` |

This mapping ensures a consistent dark theme throughout the application.