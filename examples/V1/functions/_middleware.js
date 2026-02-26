export async function onRequest(context) {
  // Parse the incoming request URL so we can safely inspect and modify it
  const url = new URL(context.request.url);

  // Extract the hostname (domain) from the request
  const host = url.hostname.toLowerCase();

  // 1️⃣ Redirect any pages.dev hostname to my domain
  // This ensures users and search engines always land on my domain,
  // even if they access the default Cloudflare Pages preview URL.
  // Using a 308 redirect preserves the HTTP method and request body.
  // PUT the source domain here with 'host' only OR host.endsWith in my case.
  if (host.endsWith(".pages.dev")) { 
    // PUT the destination domain here.
    url.hostname = "inds.space";
    return Response.redirect(url.toString(), 308);
  }

  // If the request is already on the correct domain,
  // allow it to continue through the normal Pages pipeline
  return context.next();
}
