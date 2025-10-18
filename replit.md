# FAMOUS: The Family Undergarment Shop

## Overview

FAMOUS is a contact-focused landing page for a family undergarment retail shop. The application serves as a digital storefront emphasizing trust, professionalism, and family-friendly values. The primary goal is to provide visitors with easy access to multiple contact methods (phone, email, messaging, social media) while presenting the business in a clean, approachable manner.

This is a single-page application with a sticky navigation header, hero section, and dedicated contact information sections. The site supports both light and dark themes with carefully selected color palettes that convey trustworthiness and warmth.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter - a minimal client-side router. Currently implements two routes:
- `/` - Home page (landing page with contact information)
- `*` - 404 Not Found page

**UI Component Library**: Shadcn UI (New York style variant) built on Radix UI primitives. This provides accessible, customizable components following modern design patterns. Components are located in `client/src/components/ui/` and use Tailwind CSS for styling.

**State Management**: React Query (@tanstack/react-query) for server state management. Query client configured with:
- No automatic refetching on window focus or intervals
- Infinite stale time (data considered fresh indefinitely)
- Custom query function that handles API requests with credentials

**Styling System**:
- Tailwind CSS with custom configuration extending the base theme
- CSS variables for theming (light/dark mode support)
- Custom color palette defined in `client/src/index.css` using HSL values
- Design tokens for spacing, borders, and elevation effects
- Font stack: Inter (headings and body), Poppins (brand/accent)

**Theme Management**: Client-side dark mode toggle persisted to localStorage. Theme class applied to document root element.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development Setup**: Custom Vite middleware integration for hot module replacement in development. Separate build processes for client (Vite) and server (esbuild).

**API Structure**: RESTful API prefix pattern (`/api/*` routes). Currently minimal backend with placeholder route structure in `server/routes.ts`.

**Request Logging**: Custom middleware logs all API requests with method, path, status code, duration, and response preview (truncated to 80 characters).

**Error Handling**: Centralized error handling middleware that returns JSON responses with appropriate HTTP status codes.

**Static File Serving**: In production, Express serves the built Vite application from `dist/public`. In development, Vite dev server handles static files.

### Data Storage Solutions

**Database**: PostgreSQL accessed via Neon serverless driver (`@neondatabase/serverless`).

**ORM**: Drizzle ORM with Zod schema validation integration.

**Schema Definition**: Located in `shared/schema.ts`. Currently defines a `users` table with:
- `id` (varchar, primary key, auto-generated UUID)
- `username` (text, unique, not null)
- `password` (text, not null)

**Migrations**: Drizzle Kit configured to output migrations to `./migrations` directory using PostgreSQL dialect.

**Abstraction Layer**: Storage interface pattern (`IStorage`) with in-memory implementation (`MemStorage`) for development/testing. This allows swapping storage backends without changing application code.

**Session Management**: Connect-pg-simple for PostgreSQL-backed session storage (dependency present but not yet implemented).

### Design System

**Color Philosophy**: Two distinct palettes for light and dark modes emphasizing trust (blue primary), professionalism (deep charcoal), and approachability (soft teal accents).

**Responsive Design**: Mobile-first approach using Tailwind breakpoints (sm, md, lg). Mobile menu toggle for navigation on smaller screens.

**Accessibility**: Radix UI primitives provide built-in ARIA attributes, keyboard navigation, and focus management.

**Visual Hierarchy**: Defined type scale from text-sm to text-7xl for consistent typography. Elevation system using subtle shadows and overlays (--elevate-1, --elevate-2).

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Complete suite of unstyled, accessible component primitives (accordion, dialog, dropdown, navigation, toast, etc.)
- **Lucide React**: Icon library providing consistent iconography (Mail, Phone, MessageCircle, Facebook, etc.)
- **Embla Carousel**: Carousel/slider functionality (dependency present for future use)

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **class-variance-authority**: Type-safe variant generation for components
- **clsx & tailwind-merge**: Conditional className composition and conflict resolution

### Form Management
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Validation resolver integrations
- **Zod**: TypeScript-first schema validation (used with Drizzle)

### Date & Time
- **date-fns**: Modern date utility library (dependency present for future use)

### Development Tools
- **Replit Plugins**: Development environment enhancements:
  - Runtime error modal overlay
  - Cartographer (code navigation)
  - Dev banner
- **tsx**: TypeScript execution for Node.js (development server)
- **esbuild**: Fast JavaScript bundler for production server build

### Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-orm**: TypeScript ORM with type-safe queries
- **drizzle-kit**: Migration tool and schema management
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- **connect-pg-simple**: PostgreSQL session store for Express

### API & State
- **@tanstack/react-query**: Async state management for data fetching
- **cmdk**: Command menu component (dependency present for future use)

### Asset Management
- Static images stored in `attached_assets/stock_images/` directory
- Vite alias configuration (`@assets`) for importing assets