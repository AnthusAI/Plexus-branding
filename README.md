# Plexus Branding

This repository contains white-label branding packages for Plexus dashboard deployments.

![ACME AI Lab Example](images/acme-branding.png)

## Structure

Each brand package is a directory containing:
- `brand.json` - Configuration file specifying brand name and asset paths
- `logo.js` - Custom logo component (ES module) with support for Square, Wide, and Narrow variants
- `styles.css` - CSS variable overrides for colors and fonts using Radix color system

## Example Brand: ACME AI Lab

The `example/` directory contains a complete reference implementation demonstrating:
- **Custom two-line logo** with "ACME" and "AI LAB" subtitle
- **Professional color palette**: Indigo (primary), Amber (secondary), Cyan (accent)
- **Three logo variants**: Square, Wide, and Narrow for different layout contexts
- **Conservative Midwest aesthetic**: Clean, flat design without shadows or gradients
- **Proper light/dark mode support**: Uses Radix color aliasing for consistent contrast

## Usage

Set the environment variable in your Plexus deployment:

```bash
NEXT_PUBLIC_BRAND_CONFIG_URL=/brands/example/brand.json
```

## Development

For local development, symlink this repository into the Plexus dashboard public directory:

```bash
ln -s /Users/ryan.porter/Projects/Plexus-branding /Users/ryan.porter/Projects/Plexus/dashboard/public/brands
```

## Production Deployment

Deploy the contents of this repository to your web server's public directory at the `/brands/` path.

