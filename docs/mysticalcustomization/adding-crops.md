---
id: adding-crops
title: Adding Crops
sidebar_label: Adding Crops
---

Mystical Customization allows you easily add your own crops. Here's how you do it.

## Adding a crop
Crops are added via JSON files placed in `/config/mysticalcustomization/crops/`. Each file represents a new crop to be added.

**Important:** The name of the file is used as the crops ID. The ID **must** be all lowercase with underscores '_' in place of spaces.

## The crop file
This section will go over the values available to use in crop file. Syntax can be inferred from the example json below.

**Note:** Any field below marked with a '*' is required.

### Name
You can manually define the display name for this crop.
```json
{
  "name": "Test"
}
```
Omitting this field will auto generate a translation key with the format `crop.mysticalcustomization.{id}`.

### Type*
You must assign this crop to a type, using that type's name. Learn more about types and how to add your own [here](adding-types.md).
```json
{
  "type": "resource"
}
```
**Tip:** You can see all of the registered types in-game with the `/mysticalcustomization types` command.

### Tier*
You must assign this crop to a tier, using the tier's ID. Learn more about tiers and how to add your own [here](adding-tiers.md).
```json
{
  "tier": "mysticalagriculture:1"
}
```
**Tip:** You can see all of the registered tiers in-game with the `/mysticalcustomization tiers` command.

### Ingredient*
You must assign the crafting ingredient used to craft this crop's seed. This can be either an item or a tag, and uses the same syntax as a crafting recipe.
```json
{
  "ingredient": {
    "item": "minecraft:iron_ingot"
  }
}
```

### Colors
You should set a color for the crop, essence and seeds. Colors are set using HEX values.
```json
{
  "colors": {
    "flower": "aaaaaa",
    "essence": "bbbbbb",
    "seeds": "cccccc"
  }
}
```
If you want to use the same color for all 3 (which you probably should), you can use this syntax instead.
```json
{
  "color": "aaaaaa"
}
```

### Textures
You should set the textures you want to use for your crop, essence and seeds.
```json
{
  "textures": {
    "flower": "mysticalagriculture:block/flower_dust",
    "essence": "mysticalagriculture:block/essence_dust",
    "seeds": "mysticalagriculture:item/mystical_seeds"
  }
}
```
#### Built in crop textures
- `mysticalagriculture:block/flower_ingot`
- `mysticalagriculture:block/flower_rock`
- `mysticalagriculture:block/flower_dust`
- `mysticalagriculture:block/flower_face`
#### Built in essence textures
- `mysticalagriculture:item/essence_ingot`
- `mysticalagriculture:item/essence_rock`
- `mysticalagriculture:item/essence_dust`
- `mysticalagriculture:item/essence_gem`
- `mysticalagriculture:item/essence_tall_gem`
- `mysticalagriculture:item/essence_diamond`
- `mysticalagriculture:item/essence_quartz`
- `mysticalagriculture:item/essence_flame`
#### Built in seed textures
- `mysticalagriculture:item/mystical_seeds`

Omitting this field (or any sub-field) will automatically assign to the Ingot textures. For the seed it will just be the regular seed texture.

### Crux
You can add a required crux block to this crop. A crux is a block that must be placed underneath the farmland for this crop to grow.
```json
{
  "crux": "minecraft:cobblestone"
}
```

### Enabled
You can disable this crop during the creation process if you really want to I guess.
```json
{
  "enabled": false
}
```

## Example file
```json
{
  "name": "Test",
  "type": "resource",
  "tier": "mysticalagriculture:1",
  "ingredient": {
    "item": "minecraft:iron_ingot"
  },
  "color": "eb7a34",
  "textures": {
    "flower": "mysticalagriculture:block/flower_dust",
    "essence": "mysticalagriculture:item/essence_dust"
  },
  "crux": "minecraft:cobblestone"
}
```