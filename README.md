# Minima.css

![Minima.css](minimacss-banner@2x.png)

A minimal, semantic, classless CSS framework for quick and easy webpage styling. Write straight HTML and get a rich, modern design.

## What is Minima?

Minima is a classless CSS framework that automatically styles semantically written HTML elements. Just include one CSS file, and your HTML instantly looks elevated. Minima is sleek, minimal, and not too opinionated. Whether it is a blog or webpage, a web app or a wiki, Minima gives you clean, responsive design with no fuss.

**Key Features:**
- **Classless** - Works with plain old HTML
- **Zero config** - Set it and forget it
- **Lightweight** - A single CSS file, no dependencies, just 34 kB (with the minified version at 24 kB)
- **Accessible** - Follows best UI practices for semantic HTML
- **Modern** - Clean design out of the box
- **Customizable** - CSS variables make it easy to extend

## Quick Start

### CDN (fastest)

Add this line to your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/minima.css">
```

### Local Installation

1. Download `minima.css`
2. Add it to your project
3. Link it in your HTML:

```html
<link rel="stylesheet" href="minima.css">
```

And that's it, your HTML is now styled!

## Usage

Minima styles your markup semantically for good UX. Just write normal HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    <link rel="stylesheet" href="minima.css">
</head>
<body>
    <main>
        <header>
            <h1>Welcome to My Site</h1>
            <p>A simple, beautiful webpage with zero classes.</p>
        </header>

        <article>
            <h2>Getting Started</h2>
            <p>This text is styled thanks to Minima. Links look great too: <a href="#">Click me</a></p>

            <button>Primary Button</button>
            <button class="outline">Outlined Button</button>
        </article>
    </main>
</body>
</html>
```

## Features & Elements

### Typography

- **Fonts** - employs system UI with optional Inter and Space Mono typeface preloaded, just uncomment them in the CSS to use
- **Headings** (`h1` - `h6`) - Scaled using a 1.25x ratio between each step
- **Paragraphs** - Optimized line height and spacing
- **Links** - Bold with color and hover effects

### Forms

All typical form elements are styled by default:

```html
<form>
    <label>Email
        <input type="email" placeholder="you@example.com">
    </label>

    <label>Password
        <input type="password">
    </label>

    <label>
        <input type="checkbox">
        Remember me
    </label>

    <button type="submit">Sign In</button>
</form>
```

**Supported inputs:**
- Text, email, password, number, tel, URL, search
- Date, time, datetime, month, week
- File, color, range slider
- Checkboxes, radio buttons, switches
- Select dropdowns (single & multiple)
- Textareas

**Form features:**
- Automatic validation styling (`:invalid` states)
- Focus states with accessible indicators
- Disabled state styling
- Custom icons for date/time pickers
- Switch toggles with `.switch` class or `role="switch"`

### Buttons

Additionally, Minima has three button variants that can be implemented with minimal markup:

```html
<button>Primary Button</button>
<button class="secondary">Secondary</button>
<button class="contrast">Contrast</button>
<button class="outline">Outlined</button>
<button disabled>Disabled</button>
```

### Tables

Minima generates clean tables with alternating rows automatically:

```html
<table>
    <caption>My Data</caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Item 1</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Item 2</td>
            <td>200</td>
        </tr>
    </tbody>
</table>
```

Wrap a table in a `<figure>` to enable horizontal scrolling on small screens.

### Interactive Elements

**Details/Summary (Accordions)**
```html
<details>
    <summary>Click to expand</summary>
    <p>Hidden content goes here.</p>
</details>
```

**Dialogs**
```html
<dialog id="myDialog">
    <article>
        <header>
            <h3>Dialog Title</h3>
        </header>
        <p>Dialog content goes here.</p>
        <footer>
            <button onclick="document.getElementById('myDialog').close()">Close</button>
        </footer>
    </article>
</dialog>
```

**Progress & Meter**
```html
<progress value="70" max="100"></progress>
<progress></progress> <!-- Indeterminate -->
<meter value="0.7">70%</meter>
```

### Layout

Minima.css supports semantic layout elements with clean spacing:

```html
<main>
    <article>
        <header>
            <h2>Article Title</h2>
        </header>

        <section>
            <h3>Section Heading</h3>
            <p>Content...</p>
        </section>

        <aside>
            <p>Sidebar content with unique styling</p>
        </aside>

        <footer>
            <p>Article footer</p>
        </footer>
    </article>
</main>
```

The `<main>` element is horizontally centered with a max-width of 60rem (960px).

**Navigation menus** are styled with typical UX best practices:

```html
<nav>
    <menu>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </menu>
</nav>
```

You can also use `.nav-list` class or `role="menu"` for flexbox horizontal navigation.

### Text Formatting

- `<mark>` - Highlighted text
- `<kbd>` - Keyboard keys with distinct styling
- `<code>` - Inline code
- `<pre>` - Code blocks
- `<abbr>` - Abbreviations with hover cursor
- `<del>` - Deleted text in error color
- `<ins>` - Inserted text in success color
- `<caption>`, `<figcaption>`, `.caption` - Small italic text for captions

## Customization

Minima uses CSS custom properties for easy theming. To create your own theme, save a copy of minima.css and override these variables in your own stylesheet:

```css
:root {
    /* Colors */
    --minima-primary: #0099ff;        /* Main accent color */
    --minima-secondary: #204060;      /* Secondary color */
    --minima-surface: #f6f6f6;        /* Background */
    --minima-body-text: #202020;      /* Text color */
    --minima-contrast: #333333;       /* Headings, borders */

    /* Typography */
    --minima-font-family: Inter, system-ui, "Helvetica Neue", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --minima-mono-family: "SF Mono", ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
    --minima-type-scale-factor: 1.25;

    /* Spacing */
    --minima-sp-xs: 0.5rem;
    --minima-sp-s: 0.75rem;
    --minima-sp-reg: 1rem;
    --minima-sp-m: 1.25rem;
    --minima-sp-l: 1.5rem;
    --minima-sp-xl: 2rem;
    --minima-sp-xxl: 3rem;

    /* Content sizing */
    --minima-vp-sm: 25rem;        /* 400px */
    --minima-vp-m: 40rem;         /* 640px */
    --minima-vp-l: 50rem;         /* 800px */
    --minima-vp-xl: 60rem;        /* 960px */
    --minima-vp-xxl: 80rem;       /* 1280px */

    /* Appearance */
    --minima-border-radius: 4px;
    --minima-border-thickness: 2px;
    --minima-hover-opacity: 0.75;
    --minima-transition-duration: 0.2s;
}
```

### Example: Dark Theme

```css
:root {
    --minima-surface: #1a1a1a;
    --minima-surface-alt: #2a2a2a;
    --minima-body-text: #e0e0e0;
    --minima-contrast: #ffffff;
    --minima-contrast-alt: #666666;
}
```

## Optional Classes

If you write semantic HTML, Minima will cover all of your needs. Additionally, there are a few optional utility classes available for enhancing your website:

### Button & Form Classes
- `.secondary` - Apply secondary color to buttons/inputs
- `.contrast` - Apply contrast color to buttons
- `.outline` - Outlined button style
- `.switch` / `role="switch"` - Toggle switch styling for checkboxes
- `.error` - Apply error styling to form field containers

### Layout Classes
- `.responsive-center` - Center content with max-width of 60rem
- `.layout-aside-left` - Two-column grid with sidebar on left (responsive, min-width: 50rem)
- `.layout-aside-right` - Two-column grid with sidebar on right (responsive, min-width: 50rem)
- `.hidden` - Renders any tagged element invisible

### Grid Classes
- `.two-cols` - Two-column grid layout
- `.three-cols` - Three-column grid layout
- `.four-cols` - Four-column grid layout

### Text Alignment
- `.text-left` - Align text left
- `.text-center` - Center text
- `.text-right` - Align text right

### Float Utilities
- `.float-left` - Float element left
- `.float-right` - Float element right

### Typography
- `.caption` - Small italic caption text
- `.nav-list` - Horizontal flex navigation list

## Browser Support

Minima uses modern CSS features and supports all evergreen browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Principles

Minima follows these core principles:

1. **Semantic First** - Use proper HTML5 semantics
2. **Zero Classes** - Just write HTML and get design
3. **Accessible** - WCAG compliant with proper focus states
4. **Lightweight** - A single CSS file for all your needs

## Inspiration

Minima is inspired by [Pico.css](https://picocss.com/) and other classless CSS frameworks, combining simplicity with modern design.

## License

This project is distributed under the MIT License, see [LICENSE](https://github.com/cealigbe/minimacss/blob/main/LICENSE) for more info.

By Chuck Aligbe | [dezain.io](https://dezain.io)
[github.com/cealigbe/minimacss](https://github.com/cealigbe/minimacss)

## Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a pull request!

---

**Made by a designer-developer, for designer-developers who love semantic HTML**
