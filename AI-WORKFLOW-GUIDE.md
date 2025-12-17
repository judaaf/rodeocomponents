# AI-Powered Block Editing Guide

This guide explains how to use Rodeo Blocks with AI-generated content and programmatic editing.

## Overview

All Rodeo Blocks support **code-level editing** via WordPress's block markup. This means:
- ✅ AI tools can generate complete blog posts programmatically
- ✅ Blocks can be edited directly in "Code Editor" view
- ✅ Updating block definitions updates all instances site-wide
- ✅ All attributes are accessible and editable as JSON

---

## Block Code Format

Every block follows this pattern:

```html
<!-- wp:rodeo/block-name {"attribute":"value","another":"value"} /-->
```

### Self-Closing vs. Container Blocks

**Self-Closing (most blocks):**
```html
<!-- wp:rodeo/heading-with-icon {"headingText":"Welcome","iconValue":"👋"} /-->
```

**Container blocks (rare):**
```html
<!-- wp:rodeo/block-name {"attr":"value"} -->
Inner content here
<!-- /wp:rodeo/block-name -->
```

---

## Default Behavior

**Important:** All blocks show their default content even without attributes:

```html
<!-- wp:rodeo/heading-with-icon /-->
```
✅ **Shows:** "Heading with Icon" with 🦷 emoji

```html
<!-- wp:rodeo/callout-box /-->
```
✅ **Shows:** Green success callout with default message

This ensures blocks always render, even in minimal AI-generated code.

---

## Complete Block Reference

### 1. Heading with Icon
```html
<!-- wp:rodeo/heading-with-icon {
  "iconType":"emoji",
  "iconValue":"🦷",
  "headingText":"Your Dental Health Matters",
  "headingLevel":"h2",
  "iconBgColor":"#00ACF2",
  "headingColor":"#00668F"
} /-->
```

**Attributes:**
- `iconType`: `"emoji"` | `"image"` | `"svg"`
- `iconValue`: Emoji character, image URL, or SVG code
- `headingText`: Heading content
- `headingLevel`: `"h1"` | `"h2"` | `"h3"` | `"h4"`
- `iconBgColor`: Hex color for icon background
- `headingColor`: Hex color for heading text

---

### 2. Lead Paragraph
```html
<!-- wp:rodeo/lead-paragraph {
  "content":"This is emphasized introductory text that draws readers in."
} /-->
```

---

### 3. Drop Cap Paragraph
```html
<!-- wp:rodeo/drop-cap {
  "content":"Drop cap paragraph with large first letter for editorial style."
} /-->
```

---

### 4. Highlight Text
```html
<!-- wp:rodeo/highlight-text {
  "content":"This text is highlighted",
  "highlightType":"yellow"
} /-->
```

**highlightType:** `"yellow"` | `"blue"`

---

### 5. Stat Highlight
```html
<!-- wp:rodeo/stat-highlight {
  "number":"50%",
  "description":"Reduction in cavity risk",
  "source":"American Dental Association Study"
} /-->
```

---

### 6. Stats Row (Repeater)
```html
<!-- wp:rodeo/stats-row {
  "stats":[
    {"number":"50+","label":"Locations"},
    {"number":"1M+","label":"Patients"},
    {"number":"15+","label":"Years"}
  ]
} /-->
```

---

### 7. Icon List (Repeater)
```html
<!-- wp:rodeo/icon-list {
  "items":[
    {"text":"Green check for benefits","iconType":"check"},
    {"text":"Blue icon for info","iconType":"info"},
    {"text":"Red icon for warnings","iconType":"warning"},
    {"text":"Yellow star for highlights","iconType":"star"}
  ]
} /-->
```

**iconType:** `"check"` | `"info"` | `"warning"` | `"star"`

---

### 8. Process Steps (Repeater)
```html
<!-- wp:rodeo/process-steps {
  "steps":[
    {"title":"Book","description":"Schedule online","color":"blue"},
    {"title":"Visit","description":"Come in","color":"blue"},
    {"title":"Care","description":"Get treatment","color":"blue"}
  ]
} /-->
```

**color:** `"blue"` | `"red"` | `"yellow"` | `"green"`

---

### 9. Callout Box (Templates)
```html
<!-- wp:rodeo/callout-box {
  "type":"success",
  "message":"Great news! Your appointment is confirmed."
} /-->
```

**type:** `"success"` | `"warning"` | `"tip"` | `"info"` | `"note"` | `"takeaway"`

---

### 10. FAQ Accordion (Repeater + JavaScript)
```html
<!-- wp:rodeo/faq-accordion {
  "faqs":[
    {"question":"How often should I visit?","answer":"Every 6 months."},
    {"question":"Do you accept insurance?","answer":"Yes, most plans."}
  ]
} /-->
```

---

### 11. CTA Card
```html
<!-- wp:rodeo/cta-card {
  "icon":"📅",
  "heading":"Ready to Schedule?",
  "description":"Book your appointment today!",
  "buttonText":"Book Now",
  "buttonUrl":"/locations/"
} /-->
```

---

### 12. Video Embed (YouTube/Vimeo)
```html
<!-- wp:rodeo/video-placeholder {
  "videoUrl":"https://www.youtube.com/watch?v=VIDEO_ID",
  "label":"Watch Video"
} /-->
```

**Automatically embeds:** YouTube and Vimeo videos!

---

### 13. Service Cards (Repeater)
```html
<!-- wp:rodeo/service-cards {
  "cards":[
    {"icon":"🦷","title":"General","description":"Family care.","link":"#"},
    {"icon":"😁","title":"Cosmetic","description":"Smile makeovers.","link":"#"}
  ]
} /-->
```

---

### 14. Comparison Table (Repeater)
```html
<!-- wp:rodeo/comparison-table {
  "rows":[
    {"feature":"Routine Checkups","basic":"Every 12 months","premium":"Every 6 months"},
    {"feature":"X-Rays","basic":"1 per year","premium":"Unlimited"}
  ]
} /-->
```

---

### 15. Data Table (Repeater)
```html
<!-- wp:rodeo/data-table {
  "headers":["Service","Time","Cost"],
  "rows":[
    ["Cleaning","1 hour","$120"],
    ["Filling","45 min","$180"]
  ]
} /-->
```

---

## AI Workflow Examples

### Example 1: AI Generates Complete Blog Post

```html
<!-- wp:rodeo/heading-with-icon {"headingText":"5 Ways to Improve Your Dental Health","iconValue":"🦷"} /-->

<!-- wp:rodeo/lead-paragraph {"content":"Maintaining excellent dental health doesn't have to be complicated. Follow these five proven strategies to keep your smile bright and healthy."} /-->

<!-- wp:rodeo/process-steps {
  "steps":[
    {"title":"Brush Twice Daily","description":"Use fluoride toothpaste morning and night.","color":"blue"},
    {"title":"Floss Daily","description":"Remove plaque between teeth.","color":"blue"},
    {"title":"Regular Checkups","description":"Visit your dentist every 6 months.","color":"blue"},
    {"title":"Eat Healthy","description":"Limit sugary foods and drinks.","color":"blue"},
    {"title":"Use Mouthwash","description":"Kill bacteria and freshen breath.","color":"blue"}
  ]
} /-->

<!-- wp:rodeo/cta-card {"heading":"Schedule Your Checkup","buttonText":"Book Now"} /-->
```

### Example 2: Update All CTAs Site-Wide

**Before:**
```html
<!-- wp:rodeo/cta-card {"buttonUrl":"/locations/"} /-->
```

**After (update plugin, all CTAs change):**
```html
<!-- wp:rodeo/cta-card {"buttonUrl":"/book-online/"} /-->
```

---

## Best Practices for AI Generation

### 1. Always Include Attributes
❌ **Bad:**
```html
<!-- wp:rodeo/heading-with-icon /-->
```

✅ **Good:**
```html
<!-- wp:rodeo/heading-with-icon {"headingText":"Welcome","iconValue":"👋"} /-->
```

### 2. Escape Special Characters
```html
{"content":"Use &amp; for ampersands"}
{"text":"Use \" for quotes"}
```

### 3. Format Arrays Properly
```html
{"items":[{"title":"One"},{"title":"Two"}]}
```

### 4. Test with Code Editor
1. Create post in WordPress
2. Switch to "Code Editor" view
3. Paste AI-generated block code
4. Switch back to Visual Editor
5. Verify rendering

---

## Programmatic Updates

### Update Block Across All Posts

When you update a block's render.php file in the plugin, it automatically updates everywhere:

**Example: Change CTA button color**

Edit: `/blocks/cta-card/style.css`
```css
.cta-card-btn {
  background: #10b981; /* Changed from red to green */
}
```

**Result:** All CTA cards site-wide now have green buttons!

---

## Common Issues & Solutions

### Issue: Block shows blank

**Cause:** Missing default in render.php

**Fix:** All render.php files now include defaults. Update plugin.

### Issue: Special characters break

**Cause:** Unescaped HTML entities

**Fix:** Use `&amp;` `&quot;` `&lt;` `&gt;`

### Issue: Array attributes malformed

**Cause:** Incorrect JSON syntax

**Fix:** Use proper JSON: `[{"key":"value"}]`

---

## Testing Your AI-Generated Code

```bash
# 1. Generate post code with AI
AI_OUTPUT='<!-- wp:rodeo/heading-with-icon {"headingText":"Test"} /-->'

# 2. Create WordPress post via API
curl -X POST https://yoursite.com/wp-json/wp/v2/posts \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Test Post",
    "content": "'"$AI_OUTPUT"'",
    "status": "publish"
  }'

# 3. Verify rendering
curl https://yoursite.com/your-post-url/
```

---

## Summary

✅ All blocks work with code-level editing  
✅ Defaults ensure blocks always render  
✅ AI can generate complete posts programmatically  
✅ Update blocks once, change everywhere  
✅ Video block embeds YouTube/Vimeo  
✅ All attributes documented  

**Ready for AI-powered workflows!** 🚀
