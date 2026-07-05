# URL Rewriting Configuration Guide

## What This Does
These configuration files hide the `.html` file extension from URLs, so visitors see:
- **Instead of**: `eomc.in/index.html#about`
- **You get**: `eomc.in/#about`

And direct links like:
- **Instead of**: `eomc.in/about.html`
- **You get**: `eomc.in/about`

## Which File to Use?

### Option 1: Apache Server (Most Common)
**Use**: `.htaccess` file

**Supported by**:
- Most shared hosting providers
- GoDaddy, Bluehost, HostGator, etc.
- Linux-based servers with Apache

**Steps**:
1. Keep the `.htaccess` file in the `/frontend/` directory
2. Upload both files to your server via FTP
3. Ensure Apache's `mod_rewrite` module is enabled (usually enabled by default)
4. Clear your browser cache and test

### Option 2: IIS Server (Windows-based)
**Use**: `web.config` file

**Supported by**:
- Windows Server hosting
- Azure App Service
- Some Microsoft-based hosting providers

**Steps**:
1. Keep the `web.config` file in the `/frontend/` directory
2. Upload both files to your server
3. Ensure URL Rewrite module is installed on IIS
4. Clear browser cache and test

### Option 3: Both (Recommended)
**Upload both files** to your server - they won't conflict:
- If your server is Apache, it will use `.htaccess`
- If your server is IIS, it will use `web.config`
- If your server is neither, one might still work

## Testing

After uploading, test these URLs:

✅ **Working URLs** (should all display the same page):
- `eomc.in/#home`
- `eomc.in/#about`
- `eomc.in/#sermons`
- `eomc.in/#contact`

❌ **Old URLs** (should redirect):
- `eomc.in/index.html#home` → redirects to `eomc.in/#home`

## Additional Benefits

Both configurations also enable:
- **Gzip compression**: Faster page loading
- **Better SEO**: Clean URLs are preferred by search engines
- **Professional appearance**: No file extensions visible

## Files Included

```
frontend/
├── index.html (main website)
├── .htaccess (Apache configuration)
└── web.config (IIS configuration)
```

## How to Upload

**Via FTP/SFTP:**
1. Connect to your server
2. Navigate to the domain's root directory (public_html or www folder)
3. Upload the entire `/frontend/` folder
4. Ensure hidden files are visible before uploading (to see .htaccess)
5. Set `.htaccess` permissions to 644 if needed

**Via Control Panel:**
- Some hosting provides allow file upload through cPanel/Plesk
- You may need to show hidden files to see `.htaccess`

## Troubleshooting

### URLs still show .html extension
- Check if Apache mod_rewrite is enabled
- Contact your hosting provider to enable it
- Check if you uploaded the correct file for your server type

### 404 errors after upload
- Ensure index.html is in the same directory as .htaccess/web.config
- Check file permissions (should be readable)
- Clear browser cache completely

### Form submission not working
- This only affects GET requests; POST requests to forms should work fine
- Verify your form action URL in the HTML

## Support

If you need help:
1. Contact your hosting provider to confirm if they use Apache or IIS
2. Ask them to enable mod_rewrite (Apache) or URL Rewrite module (IIS) if not enabled
3. Verify file uploads completed successfully

---

**Status**: ✅ Configuration files ready for deployment
**Date**: 2026-07-05
