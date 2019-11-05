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
    component: () => <MysticalAgriculture />
  },
  {
    path: '/mystical-agradditions',
    name: 'Mystical Agradditions',
    component: () => <MysticalAgradditions />
  },
  {
    path: '/mystical-plantations',
    name: 'Mystical Plantations',
    component: () => <MysticalPlantations />
  },
  {
    path: '/extended-crafting',
    name: 'Extended Crafting',
    component: () => <ExtendedCrafting />
  },
  {
    path: '/pickle-tweaks',
    name: 'Pickle Tweaks',
    component: () => <PickleTweaks />
  },
  {
    path: '/iron-jetpacks',
    name: 'Iron Jetpacks',
    component: () => <IronJetpacks />
  },
  {
    path: '/more-buckets',
    name: 'More Buckets',
    component: () => <MoreBuckets />
  },
  {
    path: '/cucumber',
    name: 'Cucumber',
    component: () => <Cucumber />
  }
]

export { routes }