---
id: editing-augments
title: Editing Augments
sidebar_label: Editing Augments
---

Mystical Customization allows you easily edit registered Augments. Here's how you do it.

## Editing an augment
Augments are edited via a JSON file located in `/config/mysticalcustomization/` called `configure-augments.json`.

This file will contain an empty JSON object on first launch. You will use this as an Augment ID -> Augment changes map.

### Example entry
```json
{
  "mysticalagriculture:strength_iii": {
    "enabled": false
  }
}
```

## The configure-augments file
This section will go over the values available to use to edit Augments. Syntax can be inferred from the example json below.

### Enabled
You can disable an augment if you want to hide it.
```json
{
  "enabled": false
}
```

## Example file
```json
{
  "mysticalagriculture:strength_iii": {
    "enabled": false
  }
}
```
