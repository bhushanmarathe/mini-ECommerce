# ShopEase

A modern e-commerce web application built with React, TypeScript, Vite, SCSS Modules, and Fake Store API.

## Features

- Browse products from Fake Store API
- Product details page
- Image gallery
- Product variants (Color & Size)
- Quantity selector
- Shopping cart
- Cart drawer
- Add / Remove items
- Increase / Decrease quantity
- Cart persistence using localStorage
- Responsive design
- Loading skeletons
- Toast notifications
- Error handling
- Custom 404 page

---

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Axios
- SCSS Modules
- React Hot Toast
- Lucide React

---

## Folder Structure

```
src
│
├── components
├── context
├── hooks
├── layouts
├── pages
├── services
├── types
├── utils
└── router.tsx
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build

```bash
npm run build
```

Lint

```bash
npm run lint
```

---

## Assumptions

- Product variants are mocked locally because the Fake Store API does not provide variant information.
- Original prices are generated locally to display discounts.
- Product images are duplicated to simulate an image gallery.

---

## Future Improvements

- Wishlist
- Product search
- Product filtering
- User authentication
- Checkout flow
- Payment integration
- Backend cart synchronization
- Unit testing

---

## Live Demo

**Link:** https://mini-e-commerce-pink.vercel.app/
