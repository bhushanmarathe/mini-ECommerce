# Engineering Decisions

## Overview

This document explains the key architectural and implementation decisions made while building the application. The goal was to create a clean, scalable, and maintainable React application while meeting the assessment requirements.

---

## Technology Stack

### React + TypeScript

React was chosen for its component-based architecture and excellent ecosystem. TypeScript was used to improve code quality through static type checking, better IDE support, and early error detection.

---

### Vite

Vite was selected as the build tool because it provides:

- Fast development server
- Instant Hot Module Replacement (HMR)
- Optimized production builds
- Minimal configuration

---

### SCSS Modules

SCSS Modules were used instead of global CSS because they provide:

- Component-scoped styling
- Better organization
- Reusable styles
- Prevention of CSS naming conflicts

---

## State Management

### React Context API

The shopping cart is shared across multiple components including:

- Navbar
- Product Page
- Cart Drawer
- Cart Item

React Context provides a lightweight solution without introducing external state management libraries such as Redux or Zustand. Given the size of the application, Context API was sufficient while keeping the project simple.

---

### Local Component State

Local state (`useState`) was used for UI-specific interactions such as:

- Selected product image
- Selected variant
- Product quantity
- Cart drawer visibility

Keeping UI state local prevents unnecessary global state updates.

---

## Custom Hooks

Business logic was extracted into reusable custom hooks.

### useProducts

Responsible for:

- Fetching all products
- Managing loading state
- Handling API errors

---

### useProduct

Responsible for:

- Fetching a single product
- Managing loading state
- Returning product details

Separating data fetching from UI components improves readability and makes the hooks reusable.

---

## API Layer

Axios was used instead of the native Fetch API because it offers:

- Cleaner syntax
- Automatic JSON parsing
- Better error handling
- Easier future extension through interceptors

The API logic is isolated inside the `services` folder to keep components focused on rendering.

---

## Product Variants

The Fake Store API does not provide:

- Colors
- Sizes
- Multiple product images
- Original prices
- Brand information

To satisfy the assessment requirements, additional product metadata was created locally. This data is merged with the API response before rendering.

This approach keeps the API integration intact while demonstrating how external and local data can be combined.

---

## Shopping Cart

The cart stores:

- Product ID
- Variant ID
- Quantity
- Selected color
- Selected size
- Product image
- Price

Each cart item is uniquely identified using the combination of:

- Product ID
- Variant ID

This allows multiple variants of the same product to exist independently within the cart.

---

## Cart Persistence

The cart is persisted using `localStorage`.

Benefits include:

- Cart survives browser refreshes
- Improved user experience
- No backend required

The cart is automatically synchronized whenever its contents change.

---

## Component Structure

The UI is divided into reusable components including:

- Product Card
- Product Grid
- Image Gallery
- Variant Selector
- Quantity Selector
- Cart Drawer
- Cart Item
- Navbar
- Skeleton Loaders

This modular structure improves maintainability and allows components to be reused throughout the application.

---

## Routing

React Router was used to implement client-side routing.

Routes include:

- Home page
- Product details page
- Custom 404 page

A shared layout component provides a consistent navigation experience across pages.

---

## Loading Experience

Skeleton loaders were implemented instead of plain loading text.

Advantages include:

- Better perceived performance
- Reduced layout shifts
- Improved user experience

Separate skeletons were created for:

- Product listing
- Product details page

---

## Responsive Design

The application was designed using responsive layouts to ensure compatibility across:

- Desktop
- Laptop
- Tablet
- Mobile devices

Media queries were used where necessary to adapt layouts without duplicating components.

---

## User Experience Improvements

Several enhancements were added to improve usability:

- Toast notifications
- Cart badge animation
- Hover effects
- Sticky navigation bar
- Sticky product gallery
- Image thumbnail selection
- Stock availability indicators
- Disabled states for unavailable products

These additions create a smoother shopping experience.

---

## Error Handling

The application gracefully handles:

- API failures
- Missing products
- Invalid routes
- Empty shopping cart

Meaningful messages are displayed instead of blank screens.

---

## Project Structure

The project follows a feature-oriented structure by separating:

- Components
- Pages
- Hooks
- Context
- Services
- Utilities
- Types

This organization improves readability and makes future maintenance easier.

---

## Future Improvements

Possible enhancements include:

- Product search
- Category filtering
- Sorting options
- Wishlist functionality
- User authentication
- Checkout flow
- Payment gateway integration
- Backend cart synchronization
- Product reviews
- Unit testing using Vitest
- Integration testing using React Testing Library
- End-to-end testing using Cypress
- Performance optimization through React Query
- Image lazy loading
- Infinite scrolling or pagination

---

## Trade-offs

Some implementation decisions were influenced by the assessment requirements.

- Product variants are locally generated because the Fake Store API does not provide this information.
- Authentication and backend persistence were intentionally omitted to keep the project focused on the requested functionality.
- React Context was preferred over Redux to avoid unnecessary complexity for a project of this size.

These decisions helped keep the codebase clean while fully satisfying the assessment requirements.
