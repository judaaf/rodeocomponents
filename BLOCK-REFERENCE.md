# Rodeo Blocks - AI Code Reference

This document provides a complete reference for all 32 Rodeo Dental Gutenberg blocks with their attributes for AI-assisted content generation.

## How to Use These Blocks

All blocks can be added directly in the WordPress code/text editor using this format:

```html
<!-- wp:rodeo/block-name {"attribute1":"value1","attribute2":"value2"} /-->
```

For blocks with inner content:
```html
<!-- wp:rodeo/block-name {"attribute":"value"} -->
Content here
<!-- /wp:rodeo/block-name -->
```

---

## Block Reference

### 1. Heading with Icon (rodeo/heading-with-icon)

**Description:** Customizable heading with emoji, image, or HTML/SVG icon

**Attributes:**
- `heading` (string): The heading text - Default: "Heading with Icon"
- `iconType` (string): Type of icon - Options: "emoji", "image", "html" - Default: "emoji"
- `iconEmoji` (string): Emoji or HTML/SVG code - Default: "🦷"
- `iconImage` (string): Image URL (when iconType is "image") - Default: ""
- `iconImageId` (number): WordPress media ID - Default: 0
- `iconColor` (string): Icon/background color - Default: "#00ACF2"
- `iconBgColor` (string): Icon background gradient - Default: "linear-gradient(135deg, #00ACF2, #0092CC)"
- `headingColor` (string): Heading text color - Default: "#00668F"
- `headingLevel` (string): HTML heading tag - Options: "h1", "h2", "h3", "h4" - Default: "h2"

**Example:**
```html
<!-- wp:rodeo/heading-with-icon {"heading":"Professional Teeth Cleaning","iconEmoji":"🦷","iconType":"emoji","headingLevel":"h2","headingColor":"#00668F","iconColor":"#00ACF2"} /-->
```

---

### 2. Lead Paragraph (rodeo/lead-paragraph)

**Description:** Emphasized introductory paragraph with larger, bolder text

**Attributes:**
- `content` (string): The paragraph content - Default: "This is a lead paragraph for important introductions that need extra emphasis."

**Example:**
```html
<!-- wp:rodeo/lead-paragraph {"content":"Discover why families across the region trust Rodeo Dental for their complete oral care needs."} /-->
```

---

### 3. Drop Cap Paragraph (rodeo/drop-cap)

**Description:** Editorial-style paragraph with large decorative first letter

**Attributes:**
- `content` (string): Paragraph text - Default: "Drop cap paragraph for editorial style. Lorem ipsum dolor sit amet..."

**Example:**
```html
<!-- wp:rodeo/drop-cap {"content":"Modern dentistry has evolved significantly over the past decade. Advanced technology and techniques now make procedures more comfortable and effective than ever before."} /-->
```

---

### 4. Highlight Text (rodeo/highlight-text)

**Description:** Inline text highlight with yellow or blue background

**Attributes:**
- `content` (string): Text to highlight - Default: "highlighted text"
- `color` (string): Highlight color - Options: "yellow", "blue" - Default: "yellow"

**Example:**
```html
<!-- wp:rodeo/highlight-text {"content":"90% of patients","color":"yellow"} /-->
```

---

### 5. Stat Highlight (rodeo/stat-highlight)

**Description:** Large, prominent statistic banner

**Attributes:**
- `stat` (string): The statistic number/text - Default: "50%"
- `label` (string): Description label - Default: "Reduction in Cavities"
- `sublabel` (string): Additional context - Default: "With Regular Cleanings"

**Example:**
```html
<!-- wp:rodeo/stat-highlight {"stat":"98%","label":"Patient Satisfaction","sublabel":"Based on 2024 Survey"} /-->
```

---

### 6. Stats Row (rodeo/stats-row)

**Description:** Grid of multiple statistics (1-4 columns, repeater)

**Attributes:**
- `stats` (array): Array of stat objects, each with:
  - `number` (string): The stat value
  - `label` (string): The stat description

**Example:**
```html
<!-- wp:rodeo/stats-row {"stats":[{"number":"50+","label":"Locations"},{"number":"1M+","label":"Patients Served"},{"number":"15+","label":"Years Experience"}]} /-->
```

---

### 7. Stat Icon Box (rodeo/stat-icon-box)

**Description:** Statistic with emoji icon in gradient box

**Attributes:**
- `icon` (string): Emoji icon - Default: "🦷"
- `stat` (string): Statistic value - Default: "10K+"
- `label` (string): Description - Default: "Happy Patients"

**Example:**
```html
<!-- wp:rodeo/stat-icon-box {"icon":"😁","stat":"25K+","label":"Smiles Transformed"} /-->
```

---

### 8. Stats Comparison (rodeo/stats-comparison)

**Description:** Side-by-side statistic comparison (VS format)

**Attributes:**
- `leftStat` (string): Left statistic - Default: "80%"
- `leftLabel` (string): Left description - Default: "Before"
- `rightStat` (string): Right statistic - Default: "20%"
- `rightLabel` (string): Right description - Default: "After"
- `vsText` (string): Comparison text - Default: "VS"

**Example:**
```html
<!-- wp:rodeo/stats-comparison {"leftStat":"$500","leftLabel":"Traditional Braces","rightStat":"$300","rightLabel":"Modern Aligners","vsText":"VS"} /-->
```

---

### 9. Callout Box (rodeo/callout-box)

**Description:** Styled callout with 6 template types (Success, Warning, Tip, Info, Note, Takeaway)

**Attributes:**
- `type` (string): Callout style - Options: "success", "warning", "tip", "info", "note", "takeaway" - Default: "takeaway"
- `content` (string): Callout message - Default: "Your callout message goes here."

**Example:**
```html
<!-- wp:rodeo/callout-box {"type":"tip","content":"Pro Tip: Brush for 2 minutes twice daily for optimal oral health!"} /-->
```

```html
<!-- wp:rodeo/callout-box {"type":"warning","content":"⚠️ Delaying treatment may lead to more serious complications."} /-->
```

---

### 10. Icon List (rodeo/icon-list)

**Description:** List with custom icons per item (repeater: check, info, warning, star)

**Attributes:**
- `items` (array): Array of item objects, each with:
  - `iconType` (string): Icon type - Options: "check", "info", "warning", "star"
  - `text` (string): Item text

**Example:**
```html
<!-- wp:rodeo/icon-list {"items":[{"iconType":"check","text":"Comprehensive oral examination"},{"iconType":"check","text":"Digital X-rays"},{"iconType":"info","text":"Professional cleaning"}]} /-->
```

---

### 11. Process Steps (rodeo/process-steps)

**Description:** Vertical auto-numbered steps with colors (repeater)

**Attributes:**
- `steps` (array): Array of step objects, each with:
  - `title` (string): Step title
  - `description` (string): Step details

**Example:**
```html
<!-- wp:rodeo/process-steps {"steps":[{"title":"Schedule Consultation","description":"Call or book online"},{"title":"Initial Exam","description":"Comprehensive assessment"},{"title":"Treatment Plan","description":"Customized recommendations"}]} /-->
```

---

### 12. Horizontal Steps (rodeo/horizontal-steps)

**Description:** Horizontal numbered steps in row layout (1-4 columns, repeater)

**Attributes:**
- `steps` (array): Array of step objects, each with:
  - `title` (string): Step title
  - `description` (string): Step details

**Example:**
```html
<!-- wp:rodeo/horizontal-steps {"steps":[{"title":"Book","description":"Schedule online"},{"title":"Visit","description":"Come in for exam"},{"title":"Smile","description":"Enjoy results"}]} /-->
```

---

### 13. Timeline (rodeo/timeline)

**Description:** Vertical timeline with dates and descriptions (repeater)

**Attributes:**
- `items` (array): Array of timeline objects, each with:
  - `date` (string): Date or time marker
  - `title` (string): Event title
  - `description` (string): Event details

**Example:**
```html
<!-- wp:rodeo/timeline {"items":[{"date":"Week 1","title":"Initial Consultation","description":"Comprehensive exam and X-rays"},{"date":"Week 2","title":"Treatment Begins","description":"First procedure"}]} /-->
```

---

### 14. Checklist Box (rodeo/checklist-box)

**Description:** Titled checklist with green checkmarks (repeater)

**Attributes:**
- `title` (string): Checklist title - Default: "Checklist"
- `items` (array): Array of item objects, each with:
  - `title` (string): Item title
  - `description` (string): Item description

**Example:**
```html
<!-- wp:rodeo/checklist-box {"title":"What to Bring","items":[{"title":"Insurance Card","description":"Bring your dental insurance information"},{"title":"Photo ID","description":"Valid government-issued identification"},{"title":"Medical History","description":"List of current medications"}]} /-->
```

---

### 15. Pros & Cons (rodeo/pros-cons)

**Description:** Side-by-side comparison of pros (green) vs cons (red) (repeater)

**Attributes:**
- `pros` (array): Array of strings (positive points)
- `cons` (array): Array of strings (negative points)

**Example:**
```html
<!-- wp:rodeo/pros-cons {"pros":["Pain-free procedure","Quick recovery","Long-lasting results"],"cons":["Higher upfront cost","Multiple visits required"]} /-->
```

---

### 16. Comparison Table (rodeo/comparison-table)

**Description:** Feature comparison table (Basic vs Premium) (repeater)

**Attributes:**
- `rows` (array): Array of row objects, each with:
  - `feature` (string): Feature name
  - `basic` (string): Basic plan value
  - `premium` (string): Premium plan value

**Example:**
```html
<!-- wp:rodeo/comparison-table {"rows":[{"feature":"Cleanings per year","basic":"2","premium":"4"},{"feature":"X-rays","basic":"Annual","premium":"Bi-annual"}]} /-->
```

---

### 17. Inline CTA (rodeo/inline-cta)

**Description:** Full-width CTA banner with gradient background

**Attributes:**
- `text` (string): CTA text - Default: "Ready to schedule?"
- `buttonText` (string): Button label - Default: "Book Now"
- `buttonUrl` (string): Link URL - Default: "/locations/"
- `backgroundColor` (string): Background color/gradient - Default: "linear-gradient(135deg, #F1370F, #D4310C)"

**Example:**
```html
<!-- wp:rodeo/inline-cta {"text":"Don't wait - schedule your consultation today!","buttonText":"Find a Location","buttonUrl":"/locations/"} /-->
```

---

### 18. CTA Banner (rodeo/cta-banner)

**Description:** Yellow special offer banner

**Attributes:**
- `icon` (string): Emoji icon - Default: "🎉"
- `text` (string): Offer text - Default: "New Patient Special"
- `description` (string): Offer details - Default: "Get started today"
- `buttonText` (string): Button label - Default: "Claim Offer"
- `buttonUrl` (string): Link URL - Default: "/locations/"

**Example:**
```html
<!-- wp:rodeo/cta-banner {"icon":"🎁","text":"Limited Time Offer","description":"Free consultation for new patients","buttonText":"Schedule Now","buttonUrl":"/contact/"} /-->
```

---

### 19. CTA Card (rodeo/cta-card)

**Description:** Centered card with emoji, heading, and button

**Attributes:**
- `icon` (string): Emoji icon - Default: "🦷"
- `heading` (string): Card heading - Default: "Ready for Your Best Smile?"
- `text` (string): Card description - Default: "Schedule your visit today..."
- `buttonText` (string): Button label - Default: "Book Visit"
- `buttonUrl` (string): Link URL - Default: "/locations/"

**Example:**
```html
<!-- wp:rodeo/cta-card {"icon":"😁","heading":"Start Your Smile Journey","text":"Join thousands of satisfied patients","buttonText":"Get Started","buttonUrl":"/appointments/"} /-->
```

---

### 20. Phone CTA (rodeo/phone-cta)

**Description:** Click-to-call box with phone number

**Attributes:**
- `heading` (string): CTA heading - Default: "Call Us Today"
- `phone` (string): Phone number - Default: "(888) 453-4129"
- `subtext` (string): Additional text - Default: "Available Mon-Fri 8am-6pm"

**Example:**
```html
<!-- wp:rodeo/phone-cta {"heading":"Emergency Dental Care","phone":"(888) 555-0123","subtext":"24/7 Emergency Line"} /-->
```

---

### 21. Service Cards (rodeo/service-cards)

**Description:** Grid of service cards with icons (1-3 columns, repeater)

**Attributes:**
- `cards` (array): Array of card objects, each with:
  - `icon` (string): Emoji icon
  - `title` (string): Service name
  - `description` (string): Service details

**Example:**
```html
<!-- wp:rodeo/service-cards {"cards":[{"icon":"🦷","title":"General Dentistry","description":"Routine exams and cleanings"},{"icon":"✨","title":"Cosmetic","description":"Whitening and veneers"},{"icon":"🔧","title":"Restorative","description":"Crowns and implants"}]} /-->
```

---

### 22. Feature Card (rodeo/feature-card)

**Description:** Split layout with icon/image left, content and CTA right

**Attributes:**
- `icon` (string): Emoji icon - Default: "🦷"
- `heading` (string): Feature title - Default: "Feature Heading"
- `description` (string): Feature details - Default: "Feature description..."
- `buttonText` (string): Button label - Default: "Learn More"
- `buttonUrl` (string): Link URL - Default: "#"

**Example:**
```html
<!-- wp:rodeo/feature-card {"icon":"💡","heading":"Advanced Technology","description":"State-of-the-art equipment for precise treatments","buttonText":"See Our Tech","buttonUrl":"/technology/"} /-->
```

---

### 23. Before/After (rodeo/before-after)

**Description:** Side-by-side image comparison with labels

**Attributes:**
- `beforeImage` (string): Before image URL - Default: ""
- `beforeImageId` (number): WordPress media ID - Default: 0
- `afterImage` (string): After image URL - Default: ""
- `afterImageId` (number): WordPress media ID - Default: 0
- `beforeLabel` (string): Before label text - Default: "Before"
- `afterLabel` (string): After label text - Default: "After"

**Example:**
```html
<!-- wp:rodeo/before-after {"beforeImage":"https://example.com/before.jpg","afterImage":"https://example.com/after.jpg","beforeLabel":"Before Treatment","afterLabel":"After 6 Months"} /-->
```

---

### 24. Video Placeholder (rodeo/video-placeholder)

**Description:** Play button box with custom label and video link

**Attributes:**
- `label` (string): Video title - Default: "Watch Video"
- `videoUrl` (string): Video URL - Default: "#"
- `thumbnail` (string): Custom thumbnail URL (optional) - Default: ""

**Example:**
```html
<!-- wp:rodeo/video-placeholder {"label":"Patient Testimonial","videoUrl":"https://youtube.com/watch?v=..."} /-->
```

---

### 25. Image Block (rodeo/image-block)

**Description:** Image with caption and alignment options

**Attributes:**
- `imageUrl` (string): Image URL - Default: ""
- `imageId` (number): WordPress media ID - Default: 0
- `caption` (string): Image caption - Default: ""
- `alignment` (string): Image alignment - Options: "left", "center", "right" - Default: "center"

**Example:**
```html
<!-- wp:rodeo/image-block {"imageUrl":"https://example.com/office.jpg","caption":"Our modern facility","alignment":"center"} /-->
```

---

### 26. FAQ Accordion (rodeo/faq-accordion)

**Description:** Expandable Q&A with JavaScript (repeater)

**Attributes:**
- `faqs` (array): Array of FAQ objects, each with:
  - `question` (string): Question text
  - `answer` (string): Answer text

**Example:**
```html
<!-- wp:rodeo/faq-accordion {"faqs":[{"question":"Do you accept insurance?","answer":"Yes, we accept most major dental insurance plans."},{"question":"How often should I visit?","answer":"We recommend checkups every 6 months."}]} /-->
```

---

### 27. FAQ Grid (rodeo/faq-grid)

**Description:** Grid of FAQ cards in 2-column layout (repeater)

**Attributes:**
- `faqs` (array): Array of FAQ objects, each with:
  - `question` (string): Question text
  - `answer` (string): Answer text

**Example:**
```html
<!-- wp:rodeo/faq-grid {"faqs":[{"question":"Are cleanings painful?","answer":"No, cleanings are comfortable and painless."},{"question":"Do you offer financing?","answer":"Yes, flexible payment plans available."}]} /-->
```

---

### 28. Tabs (rodeo/tabs)

**Description:** Tabbed content with JavaScript switching (repeater)

**Attributes:**
- `tabs` (array): Array of tab objects, each with:
  - `title` (string): Tab label
  - `content` (string): Tab content

**Example:**
```html
<!-- wp:rodeo/tabs {"tabs":[{"title":"General Care","content":"Routine exams, cleanings, and preventive care."},{"title":"Cosmetic","content":"Whitening, veneers, and smile makeovers."}]} /-->
```

---

### 29. Blockquote (rodeo/blockquote)

**Description:** Styled testimonial quote with large quotation mark

**Attributes:**
- `quote` (string): Quote text - Default: "The team made my daughter feel so comfortable..."
- `author` (string): Quote author - Default: "Sarah M."

**Example:**
```html
<!-- wp:rodeo/blockquote {"quote":"Best dental experience I've ever had!","author":"John D."} /-->
```

---

### 30. Testimonial Card (rodeo/testimonial-card)

**Description:** 5-star rating card with quote, emoji avatar, and author

**Attributes:**
- `stars` (number): Star rating - Default: 5
- `quote` (string): Testimonial text - Default: "Amazing experience..."
- `avatar` (string): Emoji avatar - Default: "👨"
- `author` (string): Author name - Default: "John D."
- `location` (string): Author location - Default: "San Antonio, TX"

**Example:**
```html
<!-- wp:rodeo/testimonial-card {"stars":5,"quote":"The staff was incredibly professional and caring.","avatar":"👩","author":"Maria L.","location":"Austin, TX"} /-->
```

---

### 31. Data Table (rodeo/data-table)

**Description:** Custom data table with headers and rows (repeater)

**Attributes:**
- `headers` (array): Array of header strings
- `rows` (array): Array of row arrays (each row is an array of cell values)

**Example:**
```html
<!-- wp:rodeo/data-table {"headers":["Service","Duration","Cost"],"rows":[["Cleaning","60 min","$120"],["Filling","45 min","$180"],["Whitening","90 min","$400"]]} /-->
```

---

### 32. Trust Bar (rodeo/trust-bar)

**Description:** Icons with labels (Verified, Award Winner, etc.) (repeater)

**Attributes:**
- `items` (array): Array of trust item objects, each with:
  - `icon` (string): Emoji icon
  - `label` (string): Trust label

**Example:**
```html
<!-- wp:rodeo/trust-bar {"items":[{"icon":"✓","label":"Licensed Professionals"},{"icon":"🏆","label":"Award Winner 2024"},{"icon":"⭐","label":"5-Star Rated"}]} /-->
```

---

## Brand Colors Reference

All blocks use Rodeo Dental's official color palette:

- Primary Blue Dark: `#00668F`
- Primary Blue: `#0092CC`
- Primary Blue Light: `#00ACF2`
- Accent Red: `#F1370F`
- Accent Red Dark: `#D4310C`
- Accent Yellow: `#FFDA56`
- Accent Green: `#10b981`

## Common Patterns

### Repeater Blocks
16 blocks support repeatable items (arrays):
- Stats Row, Icon List, Process Steps, Horizontal Steps, Timeline
- Checklist Box, Pros & Cons, Comparison Table
- Service Cards, FAQ Accordion, FAQ Grid, Tabs
- Data Table, Trust Bar

### Color Attributes
Most blocks accept standard CSS color formats:
- Hex colors: `"#00ACF2"`
- RGB: `"rgb(0, 172, 242)"`
- Gradients: `"linear-gradient(135deg, #00ACF2, #0092CC)"`

### URL Attributes
All CTA blocks default to `/locations/` - customize as needed:
- Inline CTA, CTA Banner, CTA Card: `buttonUrl`
- Feature Card: `buttonUrl`
- Phone CTA: Use `phone` attribute with `tel:` prefix for click-to-call

---

## Example: Complete Blog Post

```html
<!-- wp:rodeo/heading-with-icon {"heading":"5 Benefits of Regular Dental Cleanings","iconEmoji":"🦷","headingLevel":"h1"} /-->

<!-- wp:rodeo/lead-paragraph {"content":"Regular dental cleanings are essential for maintaining optimal oral health and preventing serious dental problems."} /-->

<!-- wp:rodeo/drop-cap {"content":"Many people underestimate the importance of professional dental cleanings. While daily brushing and flossing are crucial, they can't remove all the plaque and tartar that builds up over time."} /-->

<!-- wp:rodeo/callout-box {"type":"tip","content":"Schedule cleanings every 6 months for best results!"} /-->

<!-- wp:rodeo/process-steps {"steps":[{"title":"Plaque Removal","description":"Professional cleaning removes hardened plaque that brushing can't"},{"title":"Early Detection","description":"Dentists spot potential problems before they become serious"},{"title":"Fresh Breath","description":"Deep cleaning eliminates bacteria causing bad breath"}]} /-->

<!-- wp:rodeo/stats-row {"stats":[{"number":"75%","label":"Cavity Reduction"},{"number":"80%","label":"Gum Disease Prevention"},{"number":"100%","label":"Fresher Breath"}]} /-->

<!-- wp:rodeo/faq-accordion {"faqs":[{"question":"Does cleaning hurt?","answer":"No! Modern techniques make cleanings comfortable and pain-free."},{"question":"How long does it take?","answer":"Most cleanings are completed in 45-60 minutes."}]} /-->

<!-- wp:rodeo/cta-card {"icon":"😁","heading":"Ready for Your Next Cleaning?","text":"Book your appointment today and keep your smile healthy!","buttonText":"Schedule Now","buttonUrl":"/locations/"} /-->
```

---

**Last Updated:** December 2024
**Plugin Version:** 3.0
**Total Blocks:** 32
