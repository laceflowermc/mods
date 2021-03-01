---
id: adding-types
title: Adding Crop Types
sidebar_label: Adding Crop Types
---

Mystical Customization allows you easily add your own crop types. Here's how you do it.

## Adding a crop type
Crop types are added via JSON files placed in `/config/mysticalcustomization/types/`. Each file represents a new crop to be added.

**Important:** The name of the file is used as the crop types name. The name **must** be all lowercase with underscores '_' in place of spaces.

**Important:** The name MUST be unique to work. Check the registered types with the `/mysticalcustomization types` command in-game.

## The crop type file
This section will go over the values available to use in crop type file. Syntax can be inferred from the example json below.

**Note:** Any field below marked with a '*' is required.

### Textures*
You must assign a stem texture for this crop type. This location is used for every crop growth stage (0-7), which are differentiated by an `_#` suffix.
```json
{
  "textures": {
    "stem": "mysticalagriculture:block/mystical_resource_crop"
  }
}
```
#### Built in crop stem textures
- `mysticalagriculture:block/mystical_resource_crop`
- `mysticalagriculture:block/mystical_mob_crop`

### Crafting seed*
You must set an item to use as the crafting seed for all crops of this type.
```json
{
  "craftingSeed": "mysticalagriculture:soulium_seed_base"
}
```

## Example file
```json
{
  "textures": {
    "stem": "mysticalagriculture:block/mystical_mob_crop"
  },
  "craftingSeed": "mysticalagriculture:prosperity_seed_base"
}
```