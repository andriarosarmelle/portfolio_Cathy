# Refactoring & Accessibility Improvements

## Summary

The monolithic `src/App.tsx` (981 lines) has been fully refactored into a clean component architecture with comprehensive accessibility enhancements.

---

## Files Created

### Types & Data
- `src/types/index.ts` – Shared TypeScript interfaces (Profile, Language, SocialLink, Education, Experience, Project, TechnicalSkills, SoftSkill, Certification)
- `src/hooks/useScrollReveal.ts` – Extracted scroll-reveal hook (was inline in App)
- `src/data/index.ts` – All constant data (profile, languages, social links, education, experiences, projects, skills, certifications)
- `src/data/icons.ts` – SVG icon wrappers for social icons (GitHub, LinkedIn)

### UI Components (`src/components/ui/`)
- `SectionHeading.tsx` – Reusable section header with icon, title, subtitle
- `TechBadge.tsx` – Tech stack badge with hover/focus styles
- `ScrollReveal.tsx` – Wrapper component that uses `useScrollReveal` hook
- `SkipLink.tsx` – Visually hidden skip-to-content link (focus-visible)

### Layout Components (`src/components/layout/`)
- `Sidebar.tsx` – Profile sidebar (photo, name, title, status, contact, languages, social, soft skills)
- `ContactForm.tsx` – Contact form with validation and contact details
- `MobileNav.tsx` – Responsive mobile navigation toggle + menu

### Section Components (`src/components/sections/`)
- `Hero.tsx` – Hero banner with intro + CTA
- `AboutSection.tsx` – "À propos" section
- `EducationSection.tsx` – Education timeline
- `EducationItem.tsx` – Individual education card
- `ExperienceSection.tsx` – Professional experience timeline
- `TimelineItem.tsx` – Experience timeline item
- `ProjectsSection.tsx` – Projects grid
- `ProjectCard.tsx` – Individual project card
- `SkillsSection.tsx` – Technical skills grouped by category
- `CertificationsSection.tsx` – Certifications grid
- `CertificationCard.tsx` – Individual certification card

---

## Files Modified

- **`src/App.tsx`** – Reduced to **85 lines**. Now composes all components, no state/logic, clean structure.
- **`src/index.css`** – Added `prefers-reduced-motion` media query to disable animations for users with motion sensitivity.
- **`vite.config.ts`** – Unchanged (paths already configured with `@/*` alias; no changes needed).

---

## Accessibility Improvements

### Semantic Landmarks
- Added proper landmarks: `<nav>`, `<aside>`, `<main>`, `<footer>` (`role="contentinfo"`), sections, articles.
- Skiplink (`<a href="#main-content">`) appears on focus, allowing keyboard users to bypass navigation.
- All sections are labelled by their content heading (implicit) or via `aria-label` where appropriate.

### Heading Hierarchy
- Single `h1` on page (hero name); removed duplicate h1 from sidebar (now `<p>` with same styling).
- All section titles use `h2` (`SectionHeading`).
- Items use `h3` (`TimelineItem` and `ProjectCard`).

### Focus Management
- All interactive elements (links, buttons, form inputs, tech badges) have `focus-visible:ring-2 focus-visible:ring-rose-400` styles for clear keyboard focus.
- Touch targets are at least 44×44px (via `min-h-[44px]`, `py-3`, etc.).

### ARIA Labels & Roles
- Icons have `aria-hidden="true"` when decorative.
- Form inputs have associated `<label>` (visually hidden) and `aria-label` fallbacks.
- Links have descriptive text; redundant "click here" avoided.
- Social link lists use `<ul>` with `list-none` for semantic list structure.
- External links (`target="_blank"`) use `rel="noopener noreferrer"` (already secure).
- Time elements use `<time dateTime={...}>` for dates.
- Images have meaningful alt text (`alt="Photo de profil de ..."`).
- Buttons have clear `aria-label` where text is insufficient (mobile menu toggle).

### Color & Motion
- Existing rose-on-cream palette preserved.
- Added `@media (prefers-reduced-motion: reduce)` block to disable all reveal animations and transitions, respecting users with vestibular disorders.

### Keyboard Navigation
- SkipLink targets `#main-content` on main element.
- All interactive elements reachable via `Tab` have visible focus state.
- Mobile menu closes on link selection (`onClick={() => setOpen(false)}`).

---

## Code Quality

- **Component sizing**: All components under ~150 lines.
- **Type safety**: Full TypeScript strict mode; interfaces centralized in `types/`.
- **Styling**: Consistent use of `cn` utility for className merging.
- **Reusability**: Shared components (SectionHeading, TechBadge, ScrollReveal) abstract common patterns.
- **Separation of concerns**: Data/hooks separated; layout vs. page sections cleanly divided.

---

## Result

- **App.tsx**: 981 lines → **85 lines** (91% reduction).
- **Maintainability**: Each component has a single responsibility; changes to one section won't affect others.
- **Accessibility compliance**: WCAG 2.1 AA improvements across keyboard navigation, landmarks, focus management, reduced motion, and semantic HTML.
- **No visual regression**: All original content, colors, spacing, and animations preserved exactly.
