# Cloudflare Pages Redirects (_redirects file)

Redirect users using a simple text file. This is the easiest way to handle basic redirects without writing any code.

## How it works

You list your source and destination URLs in a file named `_redirects`. Cloudflare reads this file and automatically sends users to the right place.

## Steps

1. Create a file named `_redirects` (no file extension) in your build output folder.
2. Add your redirect rules, one per line.
3. List the source URL, the destination, and the status code (like 301).

## Example

This rule sends anyone visiting a `.pages.dev` link to the same page on `inds.space`:

```text
https://*.pages.dev/* https://www.inds.space/:splat 301
```

## Notes

- **Wildcards (*):** Use an asterisk to match any subfolder or filename.
- **:splat:** This takes whatever matched the asterisk and adds it to the end of the new URL.
- **301 Status:** This tells browsers the redirect is permanent. Use **302** for temporary moves.
