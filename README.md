# LinkHub

LinkHub is a personal links page built with Next.js, React, TypeScript, and Tailwind CSS.
It presents a profile header, role/location details, and external links in a clean, mobile-friendly layout.

## Features

- Personal profile hero section with image, name, role, and location
- Reusable link row component for external destinations
- Sticky app shell structure with header and footer
- Responsive typography and spacing for desktop and mobile
- Built on the Next.js App Router

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run start` - Run the production build
- `npm run lint` - Run ESLint

## Project Structure

```text
src/
	app/
		globals.css        # Global styles and Tailwind import
		layout.tsx         # Root layout, metadata, header/footer wrapper
		page.tsx           # Main links page content
	components/
		header.tsx         # Top navigation/header strip
		footer.tsx         # Footer section
		link.tsx           # Reusable external link row component
public/
	formalPicture.png
	location.svg
	portfolio.svg
	arrow.svg
```