---
id: combination-recipes
title: Combination Crafting Recipes - CraftTweaker
sidebar_label: Combination Recipes
---

Extended Crafting allows you easily add your own Combination Crafting recipes using CraftTweaker. Here's how you do it.

## Adding a recipe
```java
mods.extendedcrafting.CombinationCrafting.addRecipe(name, <output>, powerCost, [inputs]);
mods.extendedcrafting.CombinationCrafting.addRecipe(name, <output>, powerCost, powerRate, [inputs]);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.  
- `powerCost`: The amount of FE required to craft this recipe.    
- `powerRate` (**optional**) The rate the recipe should consume FE. powerCost / powerRate = the number of ticks required to craft the recipe. If this isn't defined it will use the default value defined in the config.
- `inputs`: An array of 1-49 items. The first item is the item that goes on the Crafting Core, and the rest go on the pedestals. 

### Example
```java
mods.extendedcrafting.CombinationCrafting.addRecipe("test", <item:minecraft:stick> * 10, 10000, 100, [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>]);
```

## Removing recipes
```java
mods.extendedcrafting.CombinationCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.