---
name: Zaysee Indie Boutique
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeee9'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2de'
  on-surface: '#1b1c19'
  on-surface-variant: '#434841'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#747970'
  outline-variant: '#c3c8be'
  surface-tint: '#4c6548'
  primary: '#4c6548'
  on-primary: '#ffffff'
  primary-container: '#a8c3a0'
  on-primary-container: '#3a5135'
  inverse-primary: '#b3ceab'
  secondary: '#635e56'
  on-secondary: '#ffffff'
  secondary-container: '#e6ded5'
  on-secondary-container: '#67625a'
  tertiary: '#7b5361'
  on-tertiary: '#ffffff'
  tertiary-container: '#e0aebe'
  on-tertiary-container: '#66404d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ceeac5'
  primary-fixed-dim: '#b3ceab'
  on-primary-fixed: '#0a2009'
  on-primary-fixed-variant: '#354d31'
  secondary-fixed: '#e9e1d8'
  secondary-fixed-dim: '#cdc5bc'
  on-secondary-fixed: '#1e1b16'
  on-secondary-fixed-variant: '#4b463f'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ecb9c9'
  on-tertiary-fixed: '#30121e'
  on-tertiary-fixed-variant: '#613c49'
  background: '#faf9f5'
  on-background: '#1b1c19'
  surface-variant: '#e3e2de'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is rooted in **Soft Minimalism**, specifically tailored for a boutique e-commerce experience that feels curated, intentional, and human. The aesthetic rejects the hyper-polished, "tech-first" look in favor of a tactile, editorial atmosphere.

**Target Audience:** Discerning consumers who value craftsmanship, sustainability, and independent makers.

**Emotional Response:**
- **Calm & Ease:** A clutter-free environment that reduces shopping fatigue.
- **Warmth:** Through a palette of organic, earthy tones rather than cold whites.
- **Trust:** Established through clear typography and generous whitespace that lets the photography breathe.

The UI avoids high-frequency patterns, opting for a quiet confidence where the products are the primary focus.

## Colors

The palette is derived from natural elements—stone, sage, and parchment.

- **Surface:** The primary background is `#FAF9F6`. This off-white/cream base prevents the "clinical" feel of pure white and provides a warm canvas for product photography.
- **Primary (Sage Green):** Used for primary actions, success states, and key brand highlights. It is organic and calming.
- **Secondary (Warm Gray):** Reserved for metadata, borders, and secondary buttons. It bridges the gap between the background and the text.
- **Text (Soft Charcoal):** A high-contrast but "soft" charcoal that ensures legibility without the harshness of pure black.

**Application Note:** Do not use gradients. All color applications should be flat or utilize subtle opacity shifts for states.

## Typography

This design system utilizes a pairing of **Hanken Grotesk** (serving as a characterful substitute for Satoshi) and **Inter**.

- **Headlines:** Use Hanken Grotesk with medium weights. Apply generous letter spacing (1-2%) to larger headings to evoke an editorial, boutique feel.
- **Body:** Inter is used for all long-form text and UI labels. A line height of 1.6 is mandatory for body text to maintain the "soft" and breathable quality of the design.
- **Labels:** Small labels and navigation items should use Inter with increased tracking and uppercase styling to provide a clear hierarchy against body copy.

## Layout & Spacing

The layout philosophy follows an **asymmetric fluid grid**. While the structure is systematic, content blocks (like product features or editorial stories) should frequently use offset positioning to avoid a "bootstrap" or generic template look.

- **Grid:** 12-column desktop grid with wide 24px gutters.
- **Whitespace:** Use "oversized" margins (64px+) between major sections to emphasize curation. 
- **Asymmetry:** In product galleries, alternate between 1-column and 2-column spans to create visual interest.
- **Mobile:** Reflow to a single column with 16px side margins. Maintain the same vertical rhythm as desktop to preserve the brand's airy feel.

## Elevation & Depth

To maintain the "Soft Minimalist" aesthetic, depth is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows.

- **Planes:** Surfaces slightly darker than the base (`#F2F0EB`) are used to define distinct areas like sidebars or footer sections.
- **Borders:** Use 1px solid strokes in the Secondary Accent (`#8B857D`) at 20-30% opacity. This creates structure without visual noise.
- **Shadows:** If a shadow is necessary for interaction (e.g., a floating cart), use a single, highly diffused "Ambient Shadow": `0px 10px 30px rgba(46, 44, 40, 0.04)`.
- **Interactions:** Hover states utilize a subtle scale transform (`scale: 1.02`) and a slight darkening of the background color rather than an elevation lift.

## Shapes

The shape language is "Soft-Rounded." Elements should feel approachable but structured.

- **Components:** Standard buttons and input fields use a **0.5rem (8px)** radius.
- **Cards & Large Containers:** Use **1rem (16px)** radius to soften the edges of photography.
- **Icons:** Use thin-stroke (1.5px) icons with rounded caps and joins to match the typography's weight. Avoid filled icons unless indicating an active toggle state.

## Components

### Buttons
- **Primary:** Solid `#A8C3A0` with white or charcoal text. No border. 0.5rem radius.
- **Secondary:** Transparent background with a 1px solid `#8B857D` (40% opacity) border.
- **Interaction:** On hover, primary buttons darken by 5%; secondary buttons gain a subtle fill of the border color at 5% opacity.

### Cards
- **Product Cards:** No borders. Use the surface color for the background. On hover, the image scales slightly (`1.05`) within its clipped container.
- **Editorial Cards:** 1px subtle border (`#8B857D` at 20%).

### Inputs
- **Fields:** Background of `#FAF9F6` with a bottom-only border of 1px solid `#8B857D`. On focus, the border transitions to the Primary Accent (`#A8C3A0`).

### Chips/Tags
- **Style:** Small, pill-shaped (`rounded-xl`) with a light tint of the Primary color (`#A8C3A0` at 15% opacity) and dark text. Used for "New Arrival" or "Limited Edition" markers.

### Lists
- Use generous vertical padding (16px+) between items. Separators should be thin, 1px lines that do not span the full width of the container, leaving "air" at the margins.