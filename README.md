# Plexus Branding

This repository contains white-label branding packages for Plexus dashboard deployments.

## Structure

Each brand package is a directory containing:
- `brand.json` - Configuration file
- `logo.js` - Custom logo component (ES module)
- `styles.css` - CSS variable overrides

## Example Brand

The `example/` directory contains a reference implementation showing how to customize:
- Primary color (bright orange)
- Custom logo component

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

