# WordSentinel Proof OS

WordSentinel Proof OS is a deterministic compliance verification system that provides SKO (Semantic Knowledge Objects) packs for ESG and procurement compliance verification.

## Features

- **Deterministic Verification**: Reproducible compliance checks with cryptographic signatures
- **ESG Compliance**: Environmental, Social, and Governance verification packs
- **Procurement Standards**: Best practices verification for procurement processes
- **Temporal Engine**: Time-based compliance verification
- **JWKS Support**: Public key infrastructure for signature verification

## Installation

```bash
# Requires Node.js 20+
npm install -g wordsentinel-packs

# Or clone and install locally
git clone https://github.com/mglrebelde/wordsentinel-packs.git
cd wordsentinel-packs
npm install
```

## Quick Start

### Verify ESG Compliance
```bash
# Download and verify ESG pack
wordsentinel verify --pack esg-v1.2.0 --jwks https://mglrebelde.github.io/wordsentinel-packs/.well-known/jwks.json
```

### Verify Procurement Compliance
```bash
# Download and verify Procurement pack
wordsentinel verify --pack procurement-2025-v1.0.0 --jwks https://mglrebelde.github.io/wordsentinel-packs/.well-known/jwks.json
```

## Available Packs

### ESG Strict Provenance v1.2.0
- **Pack ID**: `wordsentinel/esg-v1@1.2.0`
- **Min Pass Rate**: 70%
- **Engines**: temporal
- **Release**: https://github.com/mglrebelde/wordsentinel-packs/releases/tag/packs/esg-v1.2.0

### Procurement 2025 v1.0.0
- **Pack ID**: `wordsentinel/procurement-2025@1.0.0`
- **Min Pass Rate**: 75%
- **Engines**: temporal
- **Release**: https://github.com/mglrebelde/wordsentinel-packs/releases/tag/packs/procurement-2025-v1.0.0

## JWKS Verification

Public keys for signature verification are available at:
- **JWKS Endpoint**: `https://mglrebelde.github.io/wordsentinel-packs/.well-known/jwks.json`
- **Key ID**: `wordsentinel-main`
- **Algorithm**: ES256

## Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Build
```bash
npm run build
```

### CI Guardrails
This repository includes several CI checks to maintain code quality:
- **Large File Check**: Prevents files >10MB from being committed
- **Engine Version Check**: Ensures Node.js 20+ compatibility
- **Doctrine Check**: Validates coding standards
- **ESM Import Check**: Ensures proper ES module usage
- **TypeScript Import Check**: Validates type-only imports

### Run Checks
```bash
npm run check:large
npm run check:engine-versions
npm run check:doctrine
npm run check:esm
npm run check:types-imports
```

## Repository Structure

```
├── marketplace/packs/          # Compliance verification packs
│   ├── esg-v1-1.2.0/          # ESG compliance pack
│   └── procurement-2025-1.0.0/ # Procurement compliance pack
├── docs/                      # Documentation
│   └── .well-known/           # JWKS public keys
├── scripts/                   # CI guardrail scripts
├── lib/                       # Core library code
├── tests/                     # Test suites
└── skos/                      # Semantic Knowledge Objects
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run all CI checks: `npm run check:*`
5. Submit a pull request

## License

See LICENSE file for details.

## Support

For issues and questions, please open an issue on GitHub.
