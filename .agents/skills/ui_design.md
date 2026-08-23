# Skill: UI Design & Design System Engineering

## 🎯 Goal
Provide design specifications for glassmorphic cards, gold borders, typography hierarchies, and layout geometry.

## 📐 Component Specs
1. **Glassmorphic Surface**:
   ```css
   background: rgba(18, 18, 22, 0.75);
   backdrop-filter: blur(14px);
   border: 1px solid rgba(212, 175, 55, 0.35);
   border-radius: 4px;
   box-shadow: 0 30px 80px rgba(0, 0, 0, 0.95);
   ```
2. **Gold Badges & Pills**:
   ```css
   font-family: 'Cinzel', serif;
   font-size: 0.68rem;
   letter-spacing: 4px;
   text-transform: uppercase;
   color: #D4AF37;
   ```
3. **Container Anti-Overflow**:
   All media and cards must declare `overflow: hidden; max-width: 100%;` to eliminate horizontal scrollbar drift.
