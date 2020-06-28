---
id: reprocessor-recipes
title: Seed Reprocessor Recipes - CraftTweaker
sidebar_label: Seed Reprocessor Recipes
---

As of version 3.0.8, Mystical Agriculture allows you easily add your own Reprocessor Crafting recipes using CraftTweaker. Here's how you do it.

## Adding a recipe
```java
mods.mysticalagriculture.ReprocessorCrafting.addRecipe(name, <output>, <input>);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `input`: The item that is required to make the output.  

### Example
```java
mods.mysticalagriculture.ReprocessorCrafting.addRecipe("test", <tag:forge:ingots/iron>, <item:minecraft:apple>, <tag:forge:ingots/gold>);
```

## Removing recipes
```java
mods.mysticalagriculture.ReprocessorCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.