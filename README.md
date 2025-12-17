# Rodeo Dental Blocks

**Version 3.0** - Complete block library with 32 custom Gutenberg blocks for Rodeo Dental blog posts.

## Installation

1. Upload `rodeo-blocks.zip` to WordPress via Plugins → Add New → Upload
2. Activate the plugin
3. Blocks appear in "Rodeo Components" category in Gutenberg editor
4. Start building beautiful blog posts!

## AI-Assisted Development

For AI code generation and detailed attribute reference, see **[BLOCK-REFERENCE.md](BLOCK-REFERENCE.md)**. This file contains:
- Complete attribute documentation for all 32 blocks
- Code examples for direct WordPress editor use
- Repeater block patterns and common usage examples

---

## 📦 All 32 Blocks

### 📝 Typography & Text (4 blocks)
1. **Heading with Icon** - Customizable headings with emoji/image/SVG icons + colors
2. **Lead Paragraph** - Emphasized introductory text (22px, bold, blue)
3. **Drop Cap Paragraph** - Editorial style with large first letter (72px)
4. **Highlight Text** - Yellow or blue text highlights (inline)

### 📊 Statistics & Data (4 blocks)
5. **Stat Highlight** - Large stat banner (e.g., "50% Reduction")
6. **Stats Row** - ➕ Repeater: Multiple stats in a grid (1-4 columns)
7. **Stat Icon Box** - Stat with emoji icon in gradient box
8. **Stats Comparison** - Side-by-side stat comparison (VS format)

### 🔔 Callouts & Alerts (1 block with 6 templates)
9. **Callout Box** - Dropdown templates: Success ✅, Warning ⚠️, Tip 💡, Info ℹ️, Note 📝, Takeaway 💡

### 📋 Lists & Steps (4 blocks)
10. **Icon List** - ➕ Repeater: Custom icons (✓, i, !, ★) per item
11. **Process Steps** - ➕ Repeater: Vertical auto-numbered steps with colors
12. **Horizontal Steps** - ➕ Repeater: Horizontal numbered steps (1-4 columns)
13. **Timeline** - ➕ Repeater: Vertical timeline with dates + descriptions

### ✅ Checklists & Comparisons (3 blocks)
14. **Checklist Box** - ➕ Repeater: Titled checklist with green checkmarks
15. **Pros & Cons** - ➕ Repeater: Side-by-side pros (green) vs cons (red)
16. **Comparison Table** - ➕ Repeater: Feature comparison (Basic vs Premium)

### 🎯 CTAs & Actions (4 blocks)
17. **Inline CTA** - Full-width CTA banner (default: `/locations/`, red/blue)
18. **CTA Banner** - Yellow special offer banner (default: `/locations/`)
19. **CTA Card** - Centered card with emoji + button (default: `/locations/`)
20. **Phone CTA** - Click-to-call box (default: `(888) 453-4129`)

### 🎨 Service & Features (2 blocks)
21. **Service Cards** - ➕ Repeater: Grid of service cards (1-3 columns)
22. **Feature Card** - Split layout: icon/image left, content + CTA right

### 🖼️ Media (3 blocks)
23. **Before/After** - Side-by-side image comparison with labels
24. **Video Placeholder** - Play button box with custom label + link
25. **Image Block** - Image with caption + alignment (left/center/right)

### 🔄 Interactive (3 blocks)
26. **FAQ Accordion** - ➕ Repeater: Expandable Q&A with JavaScript
27. **FAQ Grid** - ➕ Repeater: Grid of FAQ cards (2 columns)
28. **Tabs** - ➕ Repeater: Tabbed content with JavaScript switching

### 💬 Social Proof (2 blocks)
29. **Blockquote** - Styled testimonial quote with large quotation mark
30. **Testimonial Card** - 5-star rating + quote + emoji avatar + author

### 📋 Tables & Trust (2 blocks)
31. **Data Table** - ➕ Repeater: Custom data table with headers + rows
32. **Trust Bar** - ➕ Repeater: Icons + labels (Verified, Award Winner, etc.)

---

## 🔥 Key Features

✅ **16 Repeater Blocks** - Add/remove items dynamically in editor  
✅ **Auto-Numbering** - Process Steps + Horizontal Steps update automatically  
✅ **Template System** - Callout Box with 6 pre-made types  
✅ **Smart Defaults** - All CTAs → `/locations/`, Phone → `(888) 453-4129`  
✅ **JavaScript Interactive** - FAQ Accordion + Tabs with smooth animations  
✅ **Brand Styling** - Rodeo Dental colors throughout all blocks  
✅ **Responsive Design** - All blocks mobile-optimized  
✅ **Live Preview** - See changes in editor before publishing  
✅ **No ACF Required** - Pure Gutenberg blocks  
✅ **Server-Side Rendering** - Better performance and security  

---

## 🎨 Brand Colors

All blocks use Rodeo Dental's official colors:
- Primary Blue: `#00668F`
- Light Blue: `#00ACF2`
- Red: `#F1370F`
- Yellow: `#FFDA56`
- Green: `#10b981`

Font: **Barlow Condensed** (auto-loaded via Google Fonts)

---

## 🚀 Quick Start Examples

### Example 1: Service Page
1. **Heading with Icon** - Service title
2. **Lead Paragraph** - Brief intro
3. **Service Cards** - 3 treatment options
4. **CTA Card** - "Book Now" button

### Example 2: Blog Post
1. **Heading with Icon** - Article title
2. **Drop Cap Paragraph** - Opening paragraph
3. **Process Steps** - How-to guide
4. **FAQ Accordion** - Common questions
5. **Inline CTA** - Schedule appointment

### Example 3: Landing Page
1. **Stat Highlight** - Key statistic
2. **Feature Card** - Main offer
3. **Stats Row** - 3-4 key metrics
4. **Testimonial Card** - Social proof
5. **CTA Banner** - Special offer

---

## ⚙️ Technical Details

**Requirements:**
- WordPress 5.8+
- PHP 7.4+
- Gutenberg editor enabled

**File Structure:**
```
rodeo-blocks/
├── rodeo-blocks.php (main plugin file)
├── README.md
├── includes/
│   ├── block-categories.php (custom category)
│   └── register-blocks.php (block registration)
├── blocks/ (31 block folders)
│   ├── heading-with-icon/
│   ├── lead-paragraph/
│   ├── drop-cap/
│   └── ... (28 more)
└── assets/
    └── css/
        └── editor.css (shared editor styles)
```

**Block Pattern:**
Each block has 3 files:
- `block.js` - Editor configuration (React)
- `render.php` - Frontend rendering (PHP)
- `style.css` - Block styles (CSS)

---

## 🛠️ Customization

### Changing Default URLs
Edit in block sidebar settings:
- CTA Card: Default `/locations/`
- CTA Banner: Default `/locations/`
- Inline CTA: Default `/locations/`

### Changing Default Phone
Edit in Phone CTA sidebar:
- Default: `(888) 453-4129`

### Adding Custom Colors
Edit `assets/css/editor.css` CSS variables:
```css
--rodeo-blue-dark: #00668F;
--rodeo-blue: #0092CC;
--rodeo-blue-light: #00ACF2;
--rodeo-red: #F1370F;
--rodeo-yellow: #FFDA56;
--rodeo-green: #10b981;
```

---

## 📝 Changelog

### Version 3.0.0 (December 2024)
- **32 total blocks** (up from 9)
- Added 22 new blocks:
  - Stats Row, Stat Icon Box, Stats Comparison
  - Horizontal Steps, Timeline
  - Checklist Box, Pros & Cons
  - Service Cards, Feature Card
  - Before/After, Video, Image Block
  - FAQ Grid, Tabs
  - Testimonial Card, Blockquote
  - Comparison Table, Data Table
  - Trust Bar
  - Inline CTA, CTA Banner
  - Highlight Text
- Fixed icon rendering in Icon List block
- Improved mobile responsiveness across all blocks
- Added JavaScript interactivity (FAQ Accordion + Tabs)

### Version 1.0.0 (December 2024)
- Initial release with 9 core blocks

---

## 💡 Support

Created by **Upperform** for **Rodeo Dental**

For support or custom blocks:
- Website: https://upperform.com
- Email: support@upperform.com

---

## 📄 License

Proprietary - © 2024 Upperform. Licensed for use by Rodeo Dental only.
