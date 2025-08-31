{
  description = "Personal site static development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Node.js and bun
            nodejs_22
            bun
            
            # Development tools
            typescript
            
            # Git for version control
            git
            
            # Optional: useful development utilities
            jq
            curl
            wget
            
            # Build tools that might be needed for native dependencies
            python3
            gcc
            gnumake
            pkg-config
          ];

          shellHook = ''
            echo "🚀 Personal Site Static Development Environment"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            echo "Node.js: $(node --version)"
            echo "Bun: $(bun --version)"
            echo "TypeScript: $(tsc --version)"
            echo ""
            echo "📦 Available commands:"
            echo "  bun install          - Install dependencies"
            echo "  bun run dev          - Start all development servers"
            echo "  bun run dev:web      - Start web app only"
            echo "  bun run build        - Build all apps"
            echo "  bun run check        - Run biome linting/formatting"
            echo "  bun run check-types  - Type check all packages"
            echo ""
            echo "🎯 To get started:"
            echo "  1. bun install"
            echo "  2. bun run dev:web"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            
            # Set up bun if not already configured
            export BUN_INSTALL="$HOME/.bun"
            export PATH="$BUN_INSTALL/bin:$PATH"
            
            # Ensure we're in the project directory
            if [ -f "package.json" ]; then
              echo "✅ Found package.json - you're in the right directory"
            else
              echo "⚠️  No package.json found - make sure you're in the project root"
            fi
          '';

          # Environment variables
          NODE_ENV = "development";
          
          # Ensure bun uses the correct Node.js version
          BUN_NODEJS_VERSION = "22";
        };
      });
} 