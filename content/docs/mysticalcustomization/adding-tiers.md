---
id: adding-tiers
title: Adding Crop Tiers
category: Mystical Customization
---

Mystical Customization allows you easily add your own crop tiers. Here's how you do it.

## Adding a crop tier
Crop tiers are added via JSON files placed in `/config/mysticalcustomization/tiers/`. Each file represents a new crop tier to be added.

**Important:** The name of the file is used as the crop tiers ID. The ID **must** be all lowercase with underscores '_' in place of spaces.

## The crop tier file
This section will go over the values available to use in crop tier file. Syntax can be inferred from the example json below.

**Note:** Any field below marked with a '*' is required.

### Name
You can manually define the display name for this crop tier.
```json
{
  "name": "Test"
}
```
Omitting this field will auto generate a translation key with the format `cropTier.mysticalcustomization.{id}`.

### Value*
You must assign an integer tier value to this tier. This is used internally to sort tiers. Higher value = higher tier. For example `mysticalagriculture:elemental` has a tier value of 1.
```json
{
  "value": 7
}
```

### Essence*
You must set an essence item to be used in the crafting recipes of this tiers seeds.
```json
{
  "essence": "mysticalagriculture:tertium_essence"
}
```

### Farmland
You can add an effective farmland block for this tier. This block will be the farmland block that grants additional secondary seed drop chance.
```json
{
  "farmland": "mysticalagriculture:inferium_farmland"
}
```

### Fertilizable
You can disable the ability for crops of this tier to be fertilizable with Mystical Fertilizer or Fertilized Essence.
```json
{
  "fertilizable": false
}
```

### Secondary seed drop
You can disable the ability for crops of this tier to have a chance of dropping a second seed.
```json
{
  "secondarySeedDrop": false
}
```

## Example file
```json
{
  "name": "Test",
  "value": 10,
  "farmland": "mysticalagriculture:inferium_farmland",
  "essence": "mysticalagriculture:inferium_essence",
  "fertilizable": false,
  "secondarySeedDrop": false
}
```
