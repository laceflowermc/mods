---
id: ender-crafting-recipes
title: Ender Crafting Recipes - CraftTweaker
sidebar_label: Ender Crafting Recipes
---

Extended Crafting allows you easily add your own Ender Crafting recipes using CraftTweaker. Here's how you do it.

## Adding a shaped recipe
```java
mods.extendedcrafting.EnderCrafting.addShaped(name, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]], seconds);  
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `<>`: An input ingredient for the slot shown.
- `seconds`: (**optional**) The amount of seconds this recipe should take. If this parameter isn't added, it will use the default rate defined in the config file.

The input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information.

### Example
```java
mods.extendedcrafting.EnderCrafting.addShapeless("test_shapeless", <item:minecraft:cobblestone>, [
  <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>
]);
```

## Adding a shapeless recipe
```java
mods.extendedcrafting.EnderCrafting.addShapeless(name, <output>, [inputs], seconds); 
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `inputs`: An array of 1-9 items required to make the recipe.
- `seconds`: (**optional**) The amount of seconds this recipe should take. If this parameter isn't added, it will use the default rate defined in the config file.

### Example
```java
mods.extendedcrafting.EnderCrafting.addShaped("test_shaped", <item:minecraft:stick>, [
  [<tag:forge:ingots/iron>, <item:minecraft:air>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <tag:forge:ingots/gold>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <item:minecraft:air>, <item:minecraft:air>]
], 500);
```

## Removing recipes
```java
mods.extendedcrafting.EnderCrafting.remove(<output>);
```

- `output`: The item to all remove recipes for.