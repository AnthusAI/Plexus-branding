# ACME AI Lab - Brand Example

This is an example brand configuration for the Plexus white-labeling system.

![ACME Branding](ACME%20branding.png)

## Brand Overview

**ACME AI Lab** demonstrates a professional, conservative Midwest-style branding with:
- Blue/orange color palette (avoiding green which is reserved for success indicators)
- Custom two-line logo with "ACME" and "AI LAB" subtitle
- Monospace, bold styling for the subtitle
- Clean, flat design without shadows or gradients

## Files

### `brand.json`
The main configuration file that defines:
- Brand name: "ACME"
- Custom logo component path
- Custom CSS styles path

### `logo.js`
Custom React logo component (ES module) that handles three variants:
- **Square**: Full "ACME" with "AI LAB" subtitle in a 1:1 aspect ratio
- **Wide**: Full "ACME" with "AI LAB" subtitle in a 3:1 aspect ratio  
- **Narrow**: Just "A" in a compact format

The logo uses a professional blue background (`#4a90e2`) with white text.

### `styles.css`
CSS variable overrides that remap the Radix color system:
- Primary (blue) → indigo (more conservative professional blue)
- Secondary (plum/pink) → orange (warm professional accent)
- Accent (violet) → indigo (consistent with primary)

This creates a classic blue/orange professional palette while maintaining proper light/dark mode contrast.

### `ACME branding.png`
Visual reference showing the final branded appearance.

## Usage

To use this branding example:

1. Set the environment variable in `.env.local`:
```bash
NEXT_PUBLIC_BRAND_CONFIG_URL=/brands/example/brand.json
```

2. Restart your Next.js development server

3. The dashboard will now display ACME branding instead of default Plexus branding

## Creating Your Own Brand

Use this example as a template:

1. Copy the `example` folder to a new brand name
2. Update `brand.json` with your brand name
3. Modify `logo.js` to create your custom logo
4. Adjust `styles.css` to use your brand colors
5. Update the environment variable to point to your new brand configuration

For more details, see the main branding documentation in `/dashboard/BRANDING.md`.


