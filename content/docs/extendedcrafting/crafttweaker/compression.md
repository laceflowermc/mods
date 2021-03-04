---
id: compression-recipes
title: Compression Crafting Recipes - CraftTweaker
sidebar_label: Compression Recipes
---

Extended Crafting allows you easily add your own Compression Crafting recipes using CraftTweaker. Here's how you do it.

## Adding a recipe
```java
mods.extendedcrafting.CompressionCrafting.addRecipe(name, <input>, <output>, inputCount, <catalyst>, powerCost);    
mods.extendedcrafting.CompressionCrafting.addRecipe(name, <input>, <output>, inputCount, <catalyst>, powerCost, powerRate);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `input`: The item that is required to make the output.  
- `output`: The output item for this recipe.
- `inputCount`: The amount of the input item that is required.  
- `catalyst`: The item that is required as a catalyst. This does not get consumed and goes in the small slot to the left.  
- `powerCost`: The amount of FE required to complete the crafting stage of compression.  
- `powerRate`: (**optional**) The rate the recipe should consume FE during the crafting stage. powerCost / powerRate = the amount of ticks required in the crafting stage. If this parameter isn't added, it will use the default rate defined in the config file.  

### Example
```java
mods.extendedcrafting.CompressionCrafting.addRecipe("test", <tag:forge:ingots/iron>, <item:minecraft:apple>, 50000, <tag:forge:ingots/gold>, 2000000, 200);
```

## Removing recipes
```java
mods.extendedcrafting.CompressionCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.