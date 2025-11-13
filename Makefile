.PHONY: build clean help

# Default target
help:
	@echo "Plexus Branding - Build Commands"
	@echo ""
	@echo "Usage:"
	@echo "  make build    - Create tarball of brand assets"
	@echo "  make clean    - Remove generated tarball"
	@echo "  make help     - Show this help message"
	@echo ""
	@echo "Output:"
	@echo "  brand-assets.tar.gz - Tarball containing brand assets"

# Build tarball of brand assets
build:
	@echo "Building ACME branding tarball..."
	tar -czf brand-assets.tar.gz example/ images/
	@echo "✓ Created brand-assets.tar.gz"
	@ls -lh brand-assets.tar.gz

# Clean up generated files
clean:
	@echo "Cleaning up..."
	rm -f brand-assets.tar.gz
	@echo "✓ Removed brand-assets.tar.gz"

