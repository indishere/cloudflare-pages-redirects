# Cloudflare Pages Redirects

This repo is a simple guide to setting up redirects on Cloudflare Pages. It includes code examples and instructions you can copy directly into your project.

## Redirect Methods

There are two ways to handle redirects. Choose the one that fits your needs:

### 1. [Cloudflare Functions (Middleware)](./examples/V1/)
Best for complex rules, like redirecting all traffic from one domain to another while keeping the path the same. Uses a small JavaScript file.

### 2. [_redirects File](./examples/V2/)
The easiest way. Best for simple page-to-page redirects or basic wildcards. Uses a single text file.

## Why use this?

Redirects are useful for:
- Moving a site to a new domain.
- Catching traffic from the default `.pages.dev` address.
- Fixing broken links after a site update.

## License

Unlicense
