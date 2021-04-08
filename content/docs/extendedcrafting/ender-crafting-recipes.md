---
id: ender-crafting-recipes
title: Ender Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Ender Crafting recipes. Here's how you do it.

## Prerequisits
- Extended Crafting uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

## The recipe file
This section will go over the values available to use in a Ender Crafting recipe. Syntax can be inferred from the example jsons below.
### Shaped
- `type`: The recipe type must be `extendedcrafting:shaped_ender_crafter`.
- `craftingTime`: (**optional**) The amount of time (in seconds) this recipe should take.
- `pattern`: The recipe pattern.
- `key`: The recipe key, for specifying which item each character represents.
- `result`: The item that this recipe will output once finished.

### Shapeless
- `type`: The recipe type must be `extendedcrafting:shapeless_ender_crafter`.
- `craftingTime`: (**optional**) The amount of time (in seconds) this recipe should take.
- `ingredients`: An array of 1-9 input items.
- `result`: The item that this recipe will output once finished.

**Note**: `craftingTime` refers to the amount of time in seconds that the recipe should take with a single alternator. Adding more alternators will make the crafting operation faster.

## Example files
### Shaped
```json
{
  "type": "extendedcrafting:shaped_ender_crafter",
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

### Shapeless
```json
{
  "type": "extendedcrafting:shapeless_ender_crafter",
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
