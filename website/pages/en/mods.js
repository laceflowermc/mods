/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const mods = [
  {
    "name": "Mystical Agriculture",
    "id": "mysticalagriculture",
    "docs": true,
    "curse": "https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture",
    "github": "https://github.com/BlakeBr0/MysticalAgriculture"
  },
  {
    "name": "Mystical Agradditions",
    "id": "mysticalagradditions",
    "curse": "https://www.curseforge.com/minecraft/mc-mods/mystical-agradditions",
    "github": "https://github.com/BlakeBr0/MysticalAgradditions"
  },
  {
    "name": "Mystical Customization",
    "id": "mysticalcustomization",
    "curse": "https://www.curseforge.com/minecraft/mc-mods/mystical-customization",
    "github": "https://github.com/BlakeBr0/MysticalCustomization",
    "docs": true
  },
  {
    "name": "Extended Crafting",
    "id": "extendedcrafting",
    "curse": "https://www.curseforge.com/minecraft/mc-mods/extended-crafting",
    "github": "https://github.com/BlakeBr0/ExtendedCrafting",
    "docs": true
  },
  {
    "name": "Iron Jetpacks",
    "id": "ironjetpacks",
    "curse": "https://www.curseforge.com/minecraft/mc-mods/iron-jetpacks",
    "github": "https://github.com/BlakeBr0/IronJetpacks",
    "docs": true
  },
  {
    "name": "Pickle Tweaks",
    "id": "pickletweaks",
    "curse": "https://www.curseforge.com/minecraft/mc-mods/pickle-tweaks",
    "github": "https://github.com/BlakeBr0/PickleTweaks"
  },
  {
    "name": "More Buckets",
    "id": "morebuckets",
    "curse": "https://www.curseforge.com/minecraft/mc-mods/more-buckets",
    "github": "https://github.com/BlakeBr0/MoreBuckets"
  },
  {
    "name": "Cucumber Library",
    "id": "cucumber",
    "curse": "https://www.curseforge.com/minecraft/mc-mods/cucumber",
    "github": "https://github.com/BlakeBr0/Cucumber",
    "docs": true
  }
]

function Mods(props) {
  const { config: siteConfig } = props;
  const { baseUrl, docsUrl } = siteConfig;

  const Mod = ({ mod }) => (
    <div className="mod-container"> 
      <div className="left">
        <img src={`${baseUrl}img/logo/${mod.id}_logo.png`} alt="" width="80" height="80" />
        <h2 className="mod-title">{mod.name}</h2>
      </div>
      <div className="right">
        <a className="button" href={`${mod.curse}/files`} target="_blank">Downloads</a>
        {mod.docs && <a className="button" href={`${baseUrl}${docsUrl}/${mod.id}`}>Docs</a>}
        <a className="button" href={`${mod.github}/issues`} target="_blank">Issues</a>
        <a className="button" href={mod.github} target="_blank">Source</a>
      </div>
    </div>
  );

  return (
    <div className="docMainWrapper page-wrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <center>
              <h1>The Mods</h1>
              <p>These are the mods I make!</p>
            </center>
          </header>
          {mods.map((mod, index) => <Mod mod={mod} key={index} />)}
        </div>
      </Container>
    </div>
  );
}

module.exports = Mods;
