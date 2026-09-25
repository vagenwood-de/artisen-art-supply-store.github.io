# ARTISEN — Professional Art Supply Store

A premium, responsive ecommerce-style storefront for **ARTISEN Art Supply Co.**

## What this version includes

- Premium homepage with hero, discipline navigation, featured products, brand story, and journal signup.
- 28 locally bundled product visuals, each assigned to its own product.
- Shop catalog with live search and category filtering.
- Product detail pages driven by a centralized JavaScript product dataset.
- Local shopping bag using browser `localStorage`.
- Light/dark theme toggle.
- Responsive mobile navigation.
- Collections page.
- Studio page.
- Journal page.
- About page.
- Support/contact page with demo form.
- FAQ.
- Shipping & returns information.
- Privacy and terms pages.
- Accessibility page.
- Custom favicon and ARTISEN logo.
- Lightweight original SVG product artwork for reliable offline/GitHub Pages rendering.
- No external JavaScript libraries required.

## Reference-inspired architecture

This project intentionally follows the strong qualities of the supplied reference ZIP: a multi-page static structure, shared navigation/footer, dedicated informational pages, a catalog, local assets, responsive CSS, JavaScript interactions, favicon/manifest-style branding, and supporting documentation.

It then expands that structure for an art-supply storefront with product-driven navigation, collections, studio content, product detail routing, cart behavior, theme persistence, and a larger original catalog.

## Important prototype note

Prices, inventory, contact details, checkout behavior, and product availability are demonstration content. The cart is local-only and no payment or customer data is transmitted.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- SVG
- Browser localStorage

## Project structure

```text
artisen-art-supply-store/
├── index.html
├── shop.html
├── product.html
├── collections.html
├── studio.html
├── journal.html
├── about.html
├── support.html
├── shipping.html
├── faq.html
├── privacy.html
├── terms.html
├── accessibility.html
├── 404.html
├── styles.css
├── site.js
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── README.md
└── assets/
    ├── branding/
    │   └── logo.svg
    └── products/
        └── 28 product SVGs
```

## Quality goals

- No broken local image references.
- No dependency on external image hosting.
- Responsive from mobile to desktop.
- Product imagery kept local and lightweight.
- Clear navigation and consistent visual hierarchy.
- Product cards link to dedicated detail views.
- Catalog search and filtering operate client-side.
- Cart persists locally between page loads.

## Status

**Project in development — V1 storefront concept.**

## Support

ARTISEN Art Supply Co.  
support@artisen.com  
+1 (303) 555-0198  
Denver, CO 80202

## Copyright

© 2026 ARTISEN Art Supply Co.
