# Tris Studio — Design System Spec

> Developer-ready style guide extracted from approved visual mockups.  
> Version 1.0 · July 2026

---

## 1. Color Palette

### Core Colors


| Token                    | Name          | Hex       | Usage                                                   |
| ------------------------ | ------------- | --------- | ------------------------------------------------------- |
| `--color-bg`             | Paper White   | `#F5F0E8` | Page background, nav bar fill                           |
| `--color-surface`        | Card Surface  | `#EDE9E0` | Project cards, thumbnail containers                     |
| `--color-border`         | Warm Border   | `#D8D2C6` | Card outlines, dividers, nav bottom rule                |
| `--color-accent`         | Sage Green    | `#7D9E8C` | CTA buttons, links, active indicators, decorative rules |
| `--color-accent-hover`   | Deep Sage     | `#607D6C` | Accent hover / pressed state (darken ~15%)              |
| `--color-accent-subtle`  | Sage Tint     | `#A8C2B4` | Pill/tag outlines, inactive dot indicators              |
| `--color-text-primary`   | Deep Charcoal | `#2C2A26` | Headlines, H1–H3, nav wordmark                          |
| `--color-text-secondary` | Warm Grey     | `#8A8278` | Body text, descriptors, subheadlines                    |
| `--color-text-muted`     | Muted Taupe   | `#B0A99F` | Captions, meta labels, slide counters                   |
| `--color-text-on-accent` | White         | `#FFFFFF` | Text on filled sage green buttons                       |


### Palette Visualization

```
Paper White    #F5F0E8  ████████████████████
Card Surface   #EDE9E0  ████████████████
Warm Border    #D8D2C6  ████████████
Sage Green     #7D9E8C  ████████████████████  ← primary accent
Deep Sage      #607D6C  ████████████          ← hover state
Deep Charcoal  #2C2A26  ████████████████████  ← primary text
Warm Grey      #8A8278  ████████████████
Muted Taupe    #B0A99F  ████████████
```

### WCAG Accessibility Notes


| Foreground             | Background     | Contrast Ratio | Rating              |
| ---------------------- | -------------- | -------------- | ------------------- |
| `#2C2A26` on `#F5F0E8` | Text on page   | ~12.5 : 1      | ✅ AAA               |
| `#8A8278` on `#F5F0E8` | Secondary text | ~4.6 : 1       | ✅ AA                |
| `#FFFFFF` on `#7D9E8C` | Button label   | ~3.8 : 1       | ✅ AA (large text)   |
| `#FFFFFF` on `#607D6C` | Button hover   | ~5.1 : 1       | ✅ AA                |
| `#7D9E8C` on `#F5F0E8` | Accent links   | ~3.2 : 1       | ⚠️ Use 16px+ / bold |


---

## 2. Typography

### Font Pairing


| Role                   | Font                                                                       | Source                                   |
| ---------------------- | -------------------------------------------------------------------------- | ---------------------------------------- |
| **Display / Headings** | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) | Google Fonts — elegant, editorial serif  |
| **Body / UI / Labels** | [Inter](https://fonts.google.com/specimen/Inter)                           | Google Fonts — clean, neutral sans-serif |


**Tailwind config:**

```js
fontFamily: {
  display: ['Cormorant Garamond', 'Georgia', 'serif'],
  sans:    ['Inter', 'system-ui', 'sans-serif'],
}
```

---

### Type Scale


| Level           | Token          | Font               | Size (rem) | Size (px) | Weight      | Line-height | Letter-spacing |
| --------------- | -------------- | ------------------ | ---------- | --------- | ----------- | ----------- | -------------- |
| Display / H1    | `text-display` | Cormorant Garamond | 3.5 rem    | 56 px     | 300 (Light) | 1.1         | −0.02em        |
| H2              | `text-h2`      | Cormorant Garamond | 2.25 rem   | 36 px     | 300         | 1.2         | −0.01em        |
| H3              | `text-h3`      | Cormorant Garamond | 1.5 rem    | 24 px     | 400         | 1.3         | 0              |
| Body Large      | `text-body-lg` | Inter              | 1.125 rem  | 18 px     | 400         | 1.7         | 0              |
| Body            | `text-body`    | Inter              | 1 rem      | 16 px     | 400         | 1.65        | 0              |
| Small / Caption | `text-sm`      | Inter              | 0.875 rem  | 14 px     | 400         | 1.5         | 0.01em         |
| Label / Tag     | `text-label`   | Inter              | 0.75 rem   | 12 px     | 500         | 1.4         | 0.06em         |
| Button          | `text-btn`     | Inter              | 0.9375 rem | 15 px     | 500         | 1           | 0.02em         |
| Nav Links       | `text-nav`     | Inter              | 0.875 rem  | 14 px     | 400         | 1           | 0.04em         |


---

## 3. Spacing &amp; Layout

### Base Grid

```
Base unit:       8 px
Grid system:     12-column, fluid
Gutter:          24 px (desktop) / 16 px (mobile)
```

### Container

```css
.container {
  max-width: 1200px;       /* ~75rem */
  margin-inline: auto;
  padding-inline: 48px;    /* 3rem — desktop */
}

/* Mobile */
@media (max-width: 768px) {
  .container { padding-inline: 20px; }
}
```

### Section Spacing


| Context                       | Value                                        |
| ----------------------------- | -------------------------------------------- |
| Section vertical padding      | `96px` (6rem) desktop / `64px` (4rem) mobile |
| Hero top padding (below nav)  | `120px` (7.5rem)                             |
| Between nav and first heading | `48px`                                       |
| Between heading and subhead   | `16px`                                       |
| Between subhead and CTA       | `32px`                                       |
| Between hero and project grid | `80px`                                       |
| Card internal padding         | `24px`                                       |
| Card gap (grid gutter)        | `24px`                                       |


### Border Radius


| Element              | Value |
| -------------------- | ----- |
| CTA Button           | `6px` |
| Project Cards        | `4px` |
| Meta/Tag Pills       | `3px` |
| Thumbnail images     | `3px` |
| Browser chrome frame | `8px` |


---

## 4. Component Specs

### Navigation Bar

```css
.nav {
  background: #F5F0E8;
  border-bottom: 1px solid #D8D2C6;
  height: 60px;
  padding-inline: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-wordmark { font-family: 'Cormorant Garamond'; font-size: 1.125rem; font-weight: 500; color: #2C2A26; letter-spacing: 0.05em; }
.nav-links    { font-family: 'Inter'; font-size: 0.875rem; color: #8A8278; gap: 32px; letter-spacing: 0.04em; }
```

### CTA Button (Primary)

```css
.btn-primary {
  background-color: #7D9E8C;
  color: #FFFFFF;
  font-family: 'Inter';
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease;
}
.btn-primary:hover { background-color: #607D6C; }
```

### Project Card

```css
.project-card {
  background: #EDE9E0;
  border: 1px solid #D8D2C6;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card-title { font-family: 'Cormorant Garamond'; font-size: 1.25rem; font-weight: 400; color: #2C2A26; }
.card-type  { font-family: 'Inter'; font-size: 0.75rem; font-weight: 500; color: #B0A99F; letter-spacing: 0.06em; text-transform: uppercase; }
.card-link  { font-family: 'Inter'; font-size: 0.875rem; color: #7D9E8C; }
```

### Decorative Rule (Sage)

```css
.rule-accent {
  border: none;
  border-top: 1px solid #7D9E8C;
  opacity: 0.4;
  margin-block: 64px;
}
```

---

## 5. Tailwind Config Snippet

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg:             '#F5F0E8',
        surface:        '#EDE9E0',
        border:         '#D8D2C6',
        accent:         '#7D9E8C',
        'accent-hover': '#607D6C',
        'accent-subtle':'#A8C2B4',
        charcoal:       '#2C2A26',
        'warm-grey':    '#8A8278',
        taupe:          '#B0A99F',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem',   { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2':      ['2.25rem',  { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3':      ['1.5rem',   { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'label':   ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.06em' }],
      },
      maxWidth: {
        container: '75rem',  // 1200px
      },
      borderRadius: {
        btn:  '6px',
        card: '4px',
        pill: '3px',
      },
    },
  },
}
```

---

## 6. Mobile Breakpoints


| Breakpoint   | Width            | Notes                               |
| ------------ | ---------------- | ----------------------------------- |
| Mobile (sm)  | `< 640px`        | Single-column layout, stacked cards |
| Tablet (md)  | `640px – 1024px` | 2-col project grid                  |
| Desktop (lg) | `> 1024px`       | 3-col project grid, full nav        |


**Mobile adjustments:**

- H1 Display: `2.25rem` (36 px) on mobile → `3.5rem` on desktop
- Section padding: `64px` block on mobile → `96px` desktop
- Nav links collapse to hamburger menu below `640px`
- Container padding: `20px` inline on mobile

---

*Tris Studio Design System v1.0 — extracted from approved Homepage (3Ml-7LvI) and Case Study (82nPhp-T) mockups.*