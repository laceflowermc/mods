---
id: combination-recipes
title: Combination Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Combination Crafting recipes. Here's how you do it.

## Prerequisits
- Extended Crafting uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

## The recipe file
This section will go over the values available to use in a Combination Crafting recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `extendedcrafting:combination`.
- `powerCost`: The amount of power required to craft this recipe.
- `powerRate`: (**optional**) The amount of power consumed per tick. If omitted will default to the config value.
- `input`: The item that will be placed on the Crafting Core.
- `ingredients`: An array of 1-48 items that will be placed on the Pedestals.
- `result`: The item that this recipe will output once finished.

**Note**: The amount of time (in ticks) a combination recipe takes to complete is `powerCost` / `powerRate`.

## Example file
```json
{
  "type": "extendedcrafting:combination",
  "powerCost": 400000,
  "input": {
    "item": "minecraft:iron_ingot"
  },
  "ingredients": [
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    }
  ],
  "result": {
    "item": "minecraft:stone"
  }
}
```
