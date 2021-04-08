---
id: editing-crops
title: Editing Crops
category: Mystical Customization
---
Mystical Customization allows you easily edit registered crops. Here's how you do it.

## Editing a crop
Crops are edited via a JSON file located in `/config/mysticalcustomization/` called `configure-crops.json`.

This file will contain an empty JSON object on first launch. You will use this as a crop ID -> crop changes map.

### Example entry
```json
{
  "mysticalagriculture:iron": {
    "name": "Orange",
    "tier": "mysticalagriculture:5"
  }
}
```

## The configure-crops file
This section will go over the values available to use to edit crops. Syntax can be inferred from the example json below.

### Name
You can change the display name of a crop like so.
```json
{
  "name": "Test"
}
```

### Type
You can change the type of a crop using that type's name. Learn more about types and how to add your own [here](adding-types.md).
```json
{
  "type": "resource"
}
```
**Tip:** You can see all of the registered types in-game with the `/mysticalcustomization types` command.

### Tier
You can change the tier of a crop using the tier's ID. Learn more about tiers and how to add your own [here](adding-tiers.md).
```json
{
  "tier": "mysticalagriculture:1"
}
```
**Tip:** You can see all of the registered tiers in-game with the `/mysticalcustomization tiers` command.

### Ingredient
You can change the crafting ingredient used to craft a crop's seed. This can be either an item or a tag, and uses the same syntax as a crafting recipe.
```json
{
  "ingredient": {
    "item": "minecraft:iron_ingot"
  }
}
```

### Crux
You can change the required crux block to this crop. A crux is a block that must be placed underneath the farmland for this crop to grow.
```json
{
  "crux": "minecraft:cobblestone"
}
```

### Enabled
You can disable a crop if you want to hide it.
```json
{
  "enabled": false
}
```

### Glint (v2.0.0+)
You can enable the enchantment glint effect for this crops items.
```json
{
  "glint": true
}
```

### Required Biomes (v2.1.2+)
You can specify required biomes for this crop to be able to grow in.
```json
{
  "biomes": [
    "minecraft:plains",
    "minecraft:desert"
  ]
}
```

## Example file
```json
{
  "mysticalagriculture:iron": {
    "name": "Iron, but Modified",
    "tier": "mysticalcustomization:test",
    "type": "test",
    "ingredient": {
      "item": "minecraft:apple"
    },
    "crux": "minecraft:cobblestone"
  },
  "mysticalagriculture:stone": {
    "enabled": false
  }
}
```
