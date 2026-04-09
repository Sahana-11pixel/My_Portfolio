# Portfolio

A modern, responsive, and animated personal portfolio built with React, Vite, and Tailwind CSS. The design focuses on clean UI, smooth micro-interactions, and premium aesthetics using Framer Motion and Radix UI components.

## Features

- **Modern UI/UX**: Clean layout inspired by highly professional developer portfolios (like Brittany Chiang's template).
- **Responsive Design**: Fully adaptable layout that works seamlessly on desktop, tablet, and mobile devices.
- **Animations & Transitions**: Smooth scroll animations, hover states, and dynamic elements using Framer Motion.
- **Project Showcase**: A dedicated section to display featured full-stack projects and UI designs.
- **Skills & Achievements**: Organised representation of technical capabilities and accomplishments.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) Primitives
- **Language**: TypeScript

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sahana-11pixel/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

### Running the Application Local

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`. Any changes you make will instantly reflect in the browser thanks to Vite's Hot Module Replacement (HMR).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

You can then preview the production build locally using:

```bash
npm run preview
```

## Customization

- **Colors & Theming:** You can update the primary color, fonts, and dark mode tweaks inside `tailwind.config.mjs` or `src/index.css` via the CSS variables.
- **Content:** The text, project information, and skills can be found in the respective components inside `src/pages/sections`.
- **Profile Image:** Replace the placeholder in `public/images/profile.png` with your own image to update the hero and about sections.

## License

This project is open-source and available for usage, inspiration, or modification.
