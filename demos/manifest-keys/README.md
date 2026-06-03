# manifest-keys
This extension demo has a manifest filled with all potential properties and
permissions which allows to easily debug issues.

### Issues
Chrome gives a warning when declaring the `developer` property. See:
https://bugs.chromium.org/p/chromium/issues/detail?id=1246358
(historically it also gave a warning on browser_specific_settings)

Firefox fails to load extensions with specific empty declarations like:
```json
{
  "options_ui": {},
  "dictionaries": {},
  "experiment_apis": {},
  "declarative_net_request": {
    "rule_resources": []
  }
}
```

This is tracked in TBD (search bugzilla)
