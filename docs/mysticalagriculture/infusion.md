---
id: infusion-recipes
title: Infusion Crafting Recipes
sidebar_label: Infusion Recipes
---

Mystical Agriculture allows you easily add your own Infusion Crafting recipes. Here's how you do it.

## Prerequisits
- Mystical Agriculture uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

## The recipe file
This section will go over the values available to use in an Infusion Crafting recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `mysticalagriculture:infusion`.
- `input`: The item that will be placed on the Infusion Altar.
- `ingredients`: An array of 1-8 items that will be placed on the Infusion Pedestals.
- `result`: The item that this recipe will output once finised.

## Example file
```json
{
  "type": "mysticalagriculture:infusion",
  "input": {
    "item": "minecraft:apple"
  },
  "ingredients": [
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    }
  ],
  "result": {
    "item": "minecraft:potato"
  }
}
```