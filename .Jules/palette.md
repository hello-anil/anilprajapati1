# Palette's Journal - Anil Portfolio

## 2025-05-17 - Initial Mission
**Learning:** This portfolio uses a modern glassmorphism aesthetic with many interactive elements (magnetic effects, custom cursor). However, focus management in modals and click targets for cards can be improved to match the visual polish.
**Action:** Implement focus returning to trigger after modal close, focus trapping, and stretched links for cards.

## 2025-05-17 - Modal Accessibility & Card Interaction
**Learning:** Implementing a "stretched link" using a pseudo-element on a `<button>` (like the "Details" button) is unreliable because many browsers treat the button as a strict containing block, preventing the pseudo-element from covering the entire parent card.
**Action:** Use a JavaScript-based click listener on the card container instead of CSS-only stretched links for complex interactive cards with buttons.

**Learning:** When using scroll-reveal systems (IntersectionObserver), automated tests must wait for the "visible" state or manually trigger it to interact with elements, as they might be hidden or non-interactive until scrolled into view.
**Action:** Ensure all interactive elements have clear focus indicators and smooth transitions to maintain the "cinematic" feel even during state changes like theme switching.
