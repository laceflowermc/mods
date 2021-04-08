---
id: reprocessor-recipes
title: Reprocessor Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Seed Reprocessor recipes. Here's how you do it.

## Prerequisits
- Mystical Agriculture uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

## The recipe file
This section will go over the values available to use in an Seed Reprocessor recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `mysticalagriculture:reprocessor`.
- `input`: The item that will be placed in the input slot.
- `result`: The item that this recipe will output once finised.

## Example file
```json
{
  "type": "mysticalagriculture:reprocessor",
  "input": {
    "item": "minecraft:apple"
  },
  "result": {
    "item": "minecraft:potato"
  }
}
```
