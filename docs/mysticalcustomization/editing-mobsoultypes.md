---
id: editing-mobsoultypes
title: Editing Mob Soul Types
sidebar_label: Editing Mob Soul Types
---

Mystical Customization allows you easily edit registered mob soul types. Here's how you do it.

## Editing a mob soul type
Mob soul types are edited via a JSON file located in `/config/mysticalcustomization/` called `configure-mobsoultypes.json`.

This file will contain an empty JSON object on first launch. You will use this as a mob soul type ID -> mob soul type changes map.

### Example entry
```json
{
  "mysticalagriculture:zombie": {
    "name": "Undead Brothers",
    "souls": 300
  }
}
```

## The configure-mobsoultypes file
This section will go over the values available to use to edit mob soul types. Syntax can be inferred from the example json below.

### Name
You can change the name of a mob soul type.
```json
{
  "name": "Animals"
}
```

### Souls
You can change the amount of souls required for a mob soul type.
```json
{
  "souls": 10.5
}
```

### Color
You can change the color of the Soul Jar for a mob soul type. Colors are set using HEX values.
```json
{
  "color": "aaaaaa" 
}
```

## Example file
```json
{
  "mysticalagriculture:zombie": {
    "name": "Zombie, but Modified",
    "souls": 23,
    "color": "3434a1"
  },
  "mysticalagriculture:skeleton": {
    "souls": 5000
  }
}
```