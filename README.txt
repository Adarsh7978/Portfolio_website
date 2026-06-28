ADARSH MISHRA — PORTFOLIO WEBSITE
===================================

FOLDER STRUCTURE
----------------
index.html          → main page (open this in a browser)
css/style.css        → all custom styling
js/main.js            → all custom behavior (animations, popups, filters, contact form)
images/              → your photos, logos, certifications imagery
files/Adarsh_Mishra_Resume.pdf → resume served by the "Download Resume" button
mail.php             → optional. Only needed if you later host this on a real PHP server
                       and want a server-side fallback. Not used by default — see below.

HOW TO USE IT
-------------
Just open index.html in any browser, or upload the whole folder as-is to any static
host (GitHub Pages, Netlify, Vercel, shared hosting, etc.) — keep the folder structure
exactly as it is, since index.html references css/, js/, images/, and files/ by
relative path.

CONTACT FORM — HOW IT SENDS TO YOUR EMAIL
------------------------------------------
The contact form sends messages straight to am2594137@gmail.com using a free service
called FormSubmit (https://formsubmit.co) — no backend/server required.

⚠️ ONE-TIME STEP (IMPORTANT):
The very first time someone submits the form, FormSubmit sends a confirmation email
to am2594137@gmail.com asking you to verify the address before it will start
forwarding real messages. You must:
  1. Submit the form once yourself (use a real-looking test message).
  2. Check your Gmail inbox (and Spam folder) for an email from FormSubmit.
  3. Click the confirmation/activation link inside it.
After that one-time confirmation, every future message submitted through the form
will arrive directly in your inbox automatically.

The form is also built with a fallback: if JavaScript fails to load for any reason,
the form will still submit directly to FormSubmit via a normal page redirect, so the
message still gets sent either way.

If you ever move this site to your own PHP-enabled hosting, mail.php is included as
an alternative backend you could switch to instead of FormSubmit — but it is NOT
wired up by default, since most free static hosts don't support PHP.
