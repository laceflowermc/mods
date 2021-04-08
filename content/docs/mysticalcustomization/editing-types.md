---
id: editing-types
title: Editing Crop Types
category: Mystical Customization
---

Mystical Customization allows you easily edit registered crop types. Here's how you do it.

## Editing a crop
Crops are edited via a JSON file located in `/config/mysticalcustomization/` called `configure-types.json`.

This file will contain an empty JSON object on first launch. You will use this as a crop type name -> crop type changes map.

### Example entry
```json
{
  "resource": {
    "craftingSeed": "minecraft:carrot"
  }
}
```

## The configure-crops file
This section will go over the values available to use to edit crops. Syntax can be inferred from the example json below.

### Crafting seed
You can change item to use as the crafting seed for all crops of this type.
```json
{
  "craftingSeed": "mysticalagriculture:soulium_seed_base"
}
```

## Example file
```json
{
  "resource": {
    "craftingSeed": "minecraft:potato"
  },
  "mob": {
    "craftingSeed": "minecraft:carrot"
  }
}
```
