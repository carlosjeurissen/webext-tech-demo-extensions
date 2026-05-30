# manifest-keys
This extension demo has a manifest filled with all potential properties and
permissions which allows to easily debug issues.

### Issues
Chrome gives a warning when declaring the `developer` property.

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
