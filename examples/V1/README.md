# Cloudflare Pages Redirects (Middleware)

Redirect traffic using a simple JavaScript function. This method is fast and works well for complex rules.

## How it works

Cloudflare Pages lets you run a "middleware" script before any page loads. This script checks the incoming request and can send users to a different URL instantly. 

We use this to catch anyone landing on the default address and send them to a custom domain instead.

## Steps

1. Create a folder named `functions` in your project root.
2. Inside that folder, create a file named `_middleware.js`.
3. Paste the redirect code into that file.
4. Replace the placeholder domains with your own.

## Example

This code redirects users from any `.pages.dev` address to `inds.space`:

```javascript
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  if (host.endsWith(".pages.dev")) { 
    url.hostname = "inds.space"; // Your domain here
    return Response.redirect(url.toString(), 308);
  }

  return context.next();
}
```

## Notes

- **308 Redirect:** This tells the browser and search engines that the move is permanent.
- **context.next():** This is required. It tells Cloudflare to load the page as normal if no redirect happens.
