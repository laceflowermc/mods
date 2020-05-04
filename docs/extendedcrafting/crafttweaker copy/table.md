---
id: table-recipes
title: Table Crafting Recipes
sidebar_label: Table Recipes
---

Extended Crafting allows you easily add your own Extended Crafting Table recipes. Here's how you do it.

## Prerequisits
- Extended Crafting uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

## The recipe file
This section will go over the values available to use in a Ender Crafting recipe. Syntax can be inferred from the example jsons below.
### Shaped
- `type`: The recipe type must be `extendedcrafting:shaped_table`.
- `tier`: The tier of table required for this recipe. If omitted the recipe will work for all tables with enough grid space.
- `pattern`: The recipe pattern.
- `key`: The recipe key, for specifying which item each character represents.
- `result`: The item that this recipe will output once finished.

### Shapeless
- `type`: The recipe type must be `extendedcrafting:shapeless_table`.
- `tier`: The tier of table required for this recipe. If omitted the recipe will work for all tables with enough grid space.
- `ingredients`: An array of 1-81 input items.
- `result`: The item that this recipe will output once finished.

## Example files
### Shaped
#### Tier 1 (3x3)
```json
{
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "XXX",
    "X X",
    "XXX"
  ],
  "key": {
    "X": {
      "tag": "forge:ingots/gold"
    }
  },
  "result": {
    "item": "minecraft:apple"
  }
}
```
#### Tier 2 (5x5)
```json
{
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "XXXXX",
    "X   X",
    "X   X",
    "X   X",
    "XXXXX"
  ],
  "key": {
    "X": {
      "tag": "forge:ingots/gold"
    }
  },
  "result": {
    "item": "minecraft:apple"
  }
}
```
#### Tier 3 (7x7)
```json
{
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "XXXXXXX",
    "X     X",
    "X     X",
    "X     X",
    "X     X",
    "X     X",
    "XXXXXXX"
  ],
  "key": {
    "X": {
      "tag": "forge:ingots/gold"
    }
  },
  "result": {
    "item": "minecraft:apple"
  }
}
```
#### Tier 4 (9x9)
```json
{
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "XXXXXXXXX",
    "X       X",
    "X       X",
    "X       X",
    "X       X",
    "X       X",
    "X       X",
    "X       X",
    "XXXXXXXXX"
  ],
  "key": {
    "X": {
      "tag": "forge:ingots/gold"
    }
  },
  "result": {
    "item": "minecraft:apple"
  }
}
```

### Shapeless
```json
{
  "type": "extendedcrafting:shapeless_table",
  "ingredients": [
    {
      "item": "minecraft:coal"
    },
    {
      "item": "minecraft:coal"
    }
  ],
  "result": {
    "item": "minecraft:apple"
  }
}
```