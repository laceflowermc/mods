---
id: compression-recipes
title: Compression Crafting Recipes
sidebar_label: Compression Recipes
---

Mystical Agriculture allows you easily add your own Compressor recipes. Here's how you do it.

## Prerequisits
- Mystical Agriculture uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

## The recipe file
This section will go over the values available to use in a Compressor recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `extendedcrafting:compressor`.
- `powerCost`: The amount of power required to create the result.
- `powerRate`: (**optional**) The amount of power consumed per tick while crafting. If omitted will default to the config value.
- `ingredient`: The input item.
- `inputCount`: The amount of the input item required.
- `catalyst`: The catalyst item. This item does not get consumed.
- `result`: The item that this recipe will output once finished.

## Example file
```json
{
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 10000,
  "ingredient": {
    "item": "minecraft:carrot"
  },
  "catalyst": {
    "item": "extendedcrafting:ender_catalyst"
  },
  "result": {
    "item": "minecraft:cobblestone"
  }
}
```