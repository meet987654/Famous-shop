# Design Guidelines for FAMOUS: The Family Undergarment Shop

## Design Approach

**Selected Approach:** Reference-Based (E-commerce/Retail inspiration)
Drawing from Shopify storefronts and family-friendly retail brands that balance professionalism with approachability. The design should convey trust, cleanliness, and family values while making contact methods highly accessible.

**Key Design Principles:**
- Professional warmth: Clean and organized while feeling welcoming
- Trust-first: Design elements that build credibility for family shopping
- Contact-focused: All contact methods should be prominent and easy to access
- Modest sophistication: Refined without being overly flashy

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 210 95% 45% (Trustworthy blue - professional and calm)
- Secondary: 210 20% 25% (Deep charcoal for text and headers)
- Accent: 155 65% 42% (Soft teal for CTAs and highlights)
- Background: 210 20% 98% (Soft off-white)
- Surface: 0 0% 100% (Pure white for cards)

**Dark Mode:**
- Primary: 210 80% 60% (Lighter blue for contrast)
- Secondary: 210 10% 85% (Light text)
- Accent: 155 55% 55% (Brighter teal)
- Background: 210 15% 12% (Deep navy-charcoal)
- Surface: 210 12% 18% (Elevated navy)

### B. Typography

**Font Families:**
- Headings: 'Inter', sans-serif (weight: 600-700) - Modern, professional
- Body: 'Inter', sans-serif (weight: 400-500) - Excellent readability
- Accent/Brand: 'Poppins', sans-serif (weight: 600) - For shop name only

**Type Scale:**
- Hero headline: text-5xl md:text-6xl lg:text-7xl
- Section headers: text-3xl md:text-4xl
- Subsection headers: text-xl md:text-2xl
- Body text: text-base md:text-lg
- Small text: text-sm

### C. Layout System

**Spacing Primitives:** Consistently use 4, 8, 12, 16, 20, 24 units
- Component padding: p-4, p-6, p-8
- Section spacing: py-12 md:py-20 lg:py-24
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-7xl

**Grid System:**
- Hero: Single column, centered
- Product categories: grid-cols-1 md:grid-cols-3
- Contact methods: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
- About/Info: Single column max-w-3xl

### D. Component Library

**Navigation:**
- Sticky header with shop logo/name
- Simple nav links: Home, About, Products, Contact
- Primary "Contact Us" button in header
- Mobile hamburger menu

**Hero Section:**
- Large hero image: Professional shop interior or family-friendly imagery
- Overlaid headline: "FAMOUS: The Family Undergarment Shop"
- Tagline emphasizing family trust and quality
- Dual CTAs: "Contact Us" (primary) and "View Products" (outline with blur backdrop)

**Product Showcase:**
- Three category cards: Men's, Women's, Children's
- Large category icons or representative images
- Brief description per category
- Clean card design with subtle shadows

**About Section:**
- Single column narrative layout
- Supporting image of shop or family values
- Trust indicators: Years in business, family-owned badge

**Contact Section:**
- Multi-column grid for contact methods
- Each method gets a card: Email, WhatsApp, Facebook, Phone
- Large, tappable buttons with icons
- Business hours prominently displayed
- Optional embedded map or address card

**Footer:**
- Shop name and tagline
- Quick links to sections
- All contact methods repeated
- Business hours summary
- Social media icons

### E. Animations

**Minimal, purposeful only:**
- Smooth scroll behavior for anchor links
- Subtle fade-in on scroll for section reveals (0.3s ease)
- Hover lift on contact cards (translate-y-1)
- No elaborate animations

---

## Images

**Hero Section:**
- Large hero image required: Professional shop interior showing organized displays, clean environment, or family shopping together
- Overlay: Dark gradient (bottom to top) for text legibility
- Aspect ratio: 16:9 on desktop, 4:3 on mobile
- Position: Cover, centered

**Product Categories:**
- Three category images: Clean product photography or illustrated icons
- Style: Consistent, professional, modest
- Each card: Square aspect ratio (1:1)

**About Section:**
- Supporting image: Shop exterior, team photo, or trust-building visual
- Placement: Alongside text content
- Style: Warm, authentic, professional

**Fallbacks:**
- Use placeholder gradients or solid colors if images unavailable
- Icons from Heroicons for contact methods and categories

---

## Page Structure

1. **Header:** Logo/name, navigation, primary CTA
2. **Hero:** Large image, headline, tagline, dual CTAs (80vh)
3. **About:** Who we are, family values, trust indicators (auto height)
4. **Products:** Three category showcases (auto height, py-20)
5. **Contact:** Multi-method contact grid with business info (auto height, py-24)
6. **Footer:** Complete information, links, social (py-12)

**Critical:** No viewport forcing - let content breathe naturally with consistent vertical rhythm (py-20 to py-24 for sections).