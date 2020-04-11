---
id: adding-mobsoultypes
title: Adding Mob Soul Types
sidebar_label: Adding Mob Soul Types
---

Mystical Customization allows you easily add your own mob soul types. Here's how you do it.

## Adding a mob soul type
Mob soul types are added via JSON files placed in `/config/mysticalcustomization/mobsoultypes/`. Each file represents a new mob soul type to be added.

**Important:** The name of the file is used as the mob soul types ID. The ID **must** be all lowercase with underscores '_' in place of spaces.

## The mob soul type file
This section will go over the values available to use in mob soul type file. Syntax can be inferred from the example json below.

**Note:** Any field below marked with a '*' is required.

### Name
You can manually set a name for this mob soul type. If you plan to use more than one entity you should probably use this.
```json
{
  "name": "Animals"
}
```
Omitting this field will use the default display name for the provided entity.

### Souls*
You must assign this mob soul type a required amount of souls.
```json
{
  "souls": 10.5
}
```

### Entities*
You must assign entities to this mob soul type.
```json
{
  "entities": [
    "minecraft:panda",
    "minecraft:polar_bear"
  ]
}
```
You can also just specify a single entity instead.
```json
{
  "entity": "minecraft:panda"
}
```

### Color
You should set the color of the Soul Jar for this mob soul type. Colors are set using HEX values.
```json
{
  "color": "aaaaaa" 
}
```

## Example file
```json
{
  "name": "Test",
  "souls": 50,
  "entities": [
    "minecraft:panda",
    "minecraft:polar_bear"
  ],
  "color": "abcabc"
}
```