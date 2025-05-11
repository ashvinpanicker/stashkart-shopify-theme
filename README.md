# Stashkart Shopify Theme

After choosing the free Shopify dawn theme for our store, I realized that all the customizations I wanted from shopify either had to bought as themes, or as plugins.
I decided to modify the theme code on the shopify store itself but I hated the fact that I don't have revision history there. 
Today I found out I can do this github integration for my custom theme and so this is a repository for that theme.

What's been modified so far without version control (can be found by searching for comments labeled `"ashvin"`):

- Custom font new-zen applied `layout/theme.liquid`
- Added Color swatches to product list `snippets/card-product.liquid`
- Overriding some css at bottom of `assets/base.css` 

- Nav positioning `sections/header.liquid`
- Slideshow b`sections/slideshow.liquid` 
  - Modified to have 3 slides per page instead of one
  - Number of dots modified
  - Changed looping logic to work for 3 slides
- Contact form modified to accept an additional Link field `sections/contact-form.liquid`
- Added few new shopify components:
  - Category Circles  `sections/category-circles.liquid`
  - Product List (for Bestsellers on Homepage) `sections/product-list.liquid`
