# Crypto & Stock Trading Investment Platform (Frontend)

A modern, mobile-first investment dashboard built with **React**, **TypeScript**, and **Tailwind CSS**.  
It showcases a premium, glassmorphism-inspired UI that makes crypto and stock investing simple and intuitive.

## ✨ Features

• Dark & Light themes with one-click toggle  
• Animated portfolio value counter  
• Three-tier investment plans (Bronze, Silver, Gold)  
• Quick stats widgets & active investment tracking  
• Glassmorphism cards, smooth hover & scale transitions  
• Fully responsive – looks great on mobile, tablet & desktop

> This project focuses purely on the **investment experience** – deposit, select, earn, repeat – without the noise of active trading UIs.

## 🚀 Getting Started

1. **Install dependencies**

```bash
npm install
# or
yarn
```

2. **Run the development server**

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`.

3. **Production build**

```bash
npm run build
```

## 🖌️ Theming

Tailwind’s class-based dark mode is enabled (`darkMode: 'class'`).  
Use the **sun / moon** icon in the header or set `localStorage.theme` to `'light' | 'dark'`.

## 🗂️ Project Structure

```
.
├── public/            # Static assets & HTML entry
├── src/
│   ├── components/    # Reusable UI components
│   ├── theme/         # Theme provider / context
│   ├── types.d.ts     # Shared TypeScript types
│   ├── App.tsx        # Main application shell
│   └── index.tsx      # React entrypoint
└── …
```

## 🛠️ Stack

• React 18 + TypeScript  
• Tailwind CSS 3  
• Heroicons 2  
• date-fns (date helpers)  
• react-countup (animated numbers)

## 📄 License

MIT