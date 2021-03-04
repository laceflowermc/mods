---
id: infusion-recipes
title: Infusion Crafting Recipes - CraftTweaker
sidebar_label: Infusion Recipes
---

As of version 3.0.8, Mystical Agriculture allows you easily add your own Infusion Crafting recipes using CraftTweaker. Here's how you do it.

## Adding a recipe
```java
mods.mysticalagriculture.InfusionCrafting.addRecipe(name, <output>, [inputs]);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.  
- `inputs`: An array of 1-9 items. The first item is the item that goes on the Infusion Altar, and the rest go on the pedestals. 

### Example
```java
mods.mysticalagriculture.InfusionCrafting.addRecipe("test", <item:minecraft:stick> * 10, [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>]);
```

## Removing recipes
```java
mods.mysticalagriculture.InfusionCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.