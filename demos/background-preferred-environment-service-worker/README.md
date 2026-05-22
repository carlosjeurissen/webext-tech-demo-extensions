# background-preferred-environment-service-worker

## Safari lockdown issue
on macOS 26.4.1 (25E253) in lockdown mode,
Safari Version 26.4 (21624.1.16.11.4) and STP Release 242 (WebKit 21625.1.13.19.1)

An extension which specifies a fallback document environment with `preferred_environment` fails to load it if serviceWorker is unavailable due to lockdown mode.

```
{
  "preferred_environment": ["service_worker", "document"],
  "service_worker": "service-worker.js"
  "scripts": ["background.js"]
}
```

The above syntax is supposed to use a generated document based on scripts if serviceWorker can't be loaded/is unavailable.

### Links
WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=314194

Apple Radar:
rdar://problem/176357962

1password forum post:
https://www.1password.community/discussions/1password/is-the-safari-extension-supported-in-lockdown-mode-on-ios-it-doesnt-seem-to-work/49152


## Orion preference issue
Orion always prefers the document environment if specified. Even if preferred_environment favours serviceWorkers.

Yet if loaded as chrome extension, the extension is supposed to favor the service_worker.

See: https://orionfeedback.org/d/13760-incorrect-background-environment-preference-in-extensions
