---
id: adding-singularities
title: Adding Singularities
sidebar_label: Adding Singularities
---

Extended Crafting allows you easily add your own Singularities. Here's how you do it.

## What to do
To add a singularity, you just need to add a singularity json file to the /config/extendedcrafting/singularities directory.

## The singularity file
This section will go over the values available to use in a Singularity json. Syntax can be inferred from the example json below.
- `name`: The name of this singularity. You can either put the name you want to see here, or a translation key.
- `colors`: The overlay and underlay colors (in that order).
- `ingredient`: The item this singularity is made of.
- `materialCount`: The amount of materials required to create this singularity.
- `inUltimateSingularity`: (**optional**) Whether or not this singularity should be a part of the Ultimate Singularity recipe. If omitted will default to `true`.

## Example file
```json
{
  "name": "Diamond",
  "colors": [
    "4AEDD9",
    "20C5B5"
  ],
  "ingredient": {
    "item": "minecraft:diamond"
  },
  "inUltimateSingularity": false
}
```