# Engineering Decisions

## Why React Context?

The shopping cart is global application state shared across multiple components. React Context provides a lightweight solution without introducing additional dependencies.

---

## Why SCSS Modules?

SCSS Modules provide locally scoped styles, preventing global CSS conflicts while keeping the styling organized.

---

## Why Axios?

Axios offers a cleaner API than the native Fetch API and simplifies handling API requests and future enhancements such as interceptors.

---

## Why Custom Hooks?

Business logic is separated from UI components through reusable custom hooks.

Examples:

- useProducts
- useProduct

This improves maintainability and readability.

---

## Variant Data

The Fake Store API does not provide variants.

To satisfy the assessment requirements, additional product information such as colors, sizes, original prices, and image galleries is generated locally.

---

## Cart Persistence

The cart is stored in localStorage to preserve the shopping session across browser refreshes.

---

## Performance Considerations

- React Context minimizes prop drilling.
- Skeleton loaders improve perceived loading performance.
- SCSS Modules reduce style conflicts.
- Images use object-fit to maintain consistent layouts.

---

## Future Improvements

- React Query for server state
- Backend cart synchronization
- Product filtering
- Authentication
- Wishlist
- Checkout integration
- Unit and integration tests
