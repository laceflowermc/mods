import React from 'react'
import Home from './page/Home'
import MysticalAgriculture from './page/MysticalAgriculture'
import MysticalAgradditions from './page/MysticalAgradditions'
import MysticalPlantations from './page/MysticalPlantations'
import ExtendedCrafting from './page/ExtendedCrafting'
import PickleTweaks from './page/PickleTweaks'
import IronJetpacks from './page/IronJetpacks'
import MoreBuckets from './page/MoreBuckets'
import Cucumber from './page/Cucumber'

const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: () => <Home />
  },
  {
    path: '/mystical-agriculture',
    name: 'Mystical Agriculture',
    icon: 'img/mysticalagriculture-icon.png',
    component: () => <MysticalAgriculture />
  },
  {
    path: '/mystical-agradditions',
    name: 'Mystical Agradditions',
    icon: 'img/mysticalagradditions-icon.png',
    component: () => <MysticalAgradditions />
  },
  {
    path: '/mystical-plantations',
    name: 'Mystical Plantations',
    icon: 'logo512.png',
    component: () => <MysticalPlantations />
  },
  {
    path: '/extended-crafting',
    name: 'Extended Crafting',
    icon: 'img/extendedcrafting-icon.png',
    component: () => <ExtendedCrafting />
  },
  {
    path: '/pickle-tweaks',
    name: 'Pickle Tweaks',
    icon: 'img/pickletweaks-icon.png',
    component: () => <PickleTweaks />
  },
  {
    path: '/iron-jetpacks',
    name: 'Iron Jetpacks',
    icon: 'img/ironjetpacks-icon.png',
    component: () => <IronJetpacks />
  },
  {
    path: '/more-buckets',
    name: 'More Buckets',
    icon: 'img/morebuckets-icon.png',
    component: () => <MoreBuckets />
  },
  {
    path: '/cucumber',
    name: 'Cucumber Library',
    icon: 'img/cucumber-icon.png',
    component: () => <Cucumber />
  }
]

export { routes }