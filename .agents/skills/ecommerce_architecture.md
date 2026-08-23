# Skill: Luxury E-Commerce & Web3 Provenance Architecture

## 🎯 Goal
Define data schemas and checkout flows for bespoke couture ordering and tokenized digital ownership.

## 🏛️ Architecture Flow
```text
[ Product Discovery ] -> [ Interactive Customizer ] -> [ Bespoke Inquiry Modal ] -> [ Whitelist CRM ]
                                                    \-> [ Web3 ERC-721 Smart Contract ]
```

## 📦 Data Schema
- `item_id`: Unique atelier identifier (`FAUSAN-001` through `FAUSAN-004`).
- `name`: Garment title (e.g., "The Eclipse Dress").
- `price_fiat`: Fiat base pricing in INR / USD / EUR.
- `provenance_contract`: Ethereum Mainnet token contract reference.
- `edition`: Total crafted allocation (e.g., Limited 12 Pieces).
