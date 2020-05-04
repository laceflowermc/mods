---
id: table-recipes
title: Table Crafting Recipes - CraftTweaker
sidebar_label: Table Recipes
---

Extended Crafting allows you easily add your own Table Crafting recipes using CraftTweaker. Here's how you do it.

## Adding a shaped recipe
```java
mods.extendedcrafting.TableCrafting.addShaped(name, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, <output>, [[<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, <output>, [[<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, <output>, [[<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>]]);  

mods.extendedcrafting.TableCrafting.addShaped(name, tier, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, tier, <output>, [[<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, tier, <output>, [[<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, tier, <output>, [[<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>]]);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `tier`: (**optional**) The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0.
- `output`: The output item of this recipe.  
- `<>`: An input ingredient for the slot shown  

The input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information.

### Example
```java
mods.extendedcrafting.TableCrafting.addShaped("test_shaped", 2, <item:minecraft:stick>, [
  [<tag:forge:ingots/iron>, <item:minecraft:air>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <tag:forge:ingots/gold>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <item:minecraft:air>, <item:minecraft:air>]
]);
```

## Adding a shapeless recipe
```java
mods.extendedcrafting.TableCrafting.addShapeless(name, <output>, [<input>, <input>]); 
mods.extendedcrafting.TableCrafting.addShapeless(name, tier, <output>, [<input>, <input>]);  
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `tier`: (**optional**) The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0  
- `output`: The output item of this recipe.  
- `input`: An array of 1-81 items required to make the recipe.

### Example
```java
mods.extendedcrafting.TableCrafting.addShaped("test_shaped", 2, <item:minecraft:stick>, [
  <tag:forge:ingots/iron>, <tag:forge:ingots/iron>, <tag:forge:ingots/iron>, <tag:forge:ingots/iron>
]);
```

## Removing recipes
```java
mods.extendedcrafting.TableCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.