---
id: singularities-in-recipes
title: Using Singularities In Recipes
sidebar_label: Singularities In Recipes
---

## What's the difference
The different singularity types are defined using NBT data. This means there is an extra step involved in using a singularity in a crafting recipe.

## What to do
You need to use an NBT ingredient for singularities. In the NBT tag you need to specify the singularity id.

```json
{
  "type": "forge:nbt",
  "item": "extendedcrafting:singularity",
  "nbt": {
    "Id": "extendedcrafting:diamond"
  }
}
```

**Note**: You can find the singularity id by enabling advanced tooltips (f3 + h), and seeing what it says.