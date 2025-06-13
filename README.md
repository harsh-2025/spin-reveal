# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
# 🎰 Slot Machine Game - Vyantra

This is a simple **Spin & Reveal** game built using **React** and **Vite**. It simulates a 3-reel slot machine with an engaging UI and interactive animations.

## 🚀 Setup Instructions

```bash
# Create the app using Vite
npm create vite@latest

# Name the project as 'vyantra'
# Choose 'React' and 'JavaScript' options when prompted

cd vyantra

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🧩 Features

- 🎯 **Turbo Mode**: Speeds up the spin animation to half the normal duration.
- ✨ **Golden Glow on Win**: When the user wins, the slot box borders glow golden.
- 🌀 **Spin Button**: Triggers the spinning action of all 3 reels.
- 🔁 **Automatic Reset**: The game resets automatically after a win or loss.
- 🎉 **Emojis Used**: Uses three different emojis for fun and visual appeal.

## 🧱 Components

- `App.tsx`: Main entry point that renders the `SlotMachine` component.
- `SlotMachine.jsx`: Core game logic and UI, including:
  - State management for spins and win conditions
  - Turbo spin feature
  - Randomized emoji generation
  - Win/loss detection and visual feedback

## 📸 Preview

```text
[ 🍒 ] [ 🍋 ] [ 🍊 ]
      [ SPIN ]
```

Enjoy the thrill of spinning! 🍀






Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# spin-reveal-vyantra
