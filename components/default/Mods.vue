<template>
  <div id="mods">
    <h2 class="title">The Mods</h2>
    <div class="cards">
      <div class="card">
        <img class="logo" src="/img/logo/mysticalagriculture_logo.png" alt="" />
        <span class="name">Mystical Agriculture</span>
        <span class="description">Grow all your resources!</span>
        <div class="links">
          <a
            href="https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fas', 'download']" />
            Downloads
          </a>
          <a
            href="https://github.com/BlakeBr0/MysticalAgriculture"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub
          </a>
        </div>
      </div>
      <div class="card">
        <img class="logo" src="/img/logo/ironjetpacks_logo.png" alt="" />
        <span class="name">Iron Jetpacks</span>
        <span class="description">Customizable energy powered jetpacks!</span>
        <div class="links">
          <a
            href="https://www.curseforge.com/minecraft/mc-mods/iron-jetpacks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fas', 'download']" />
            Downloads
          </a>
          <a
            href="https://github.com/BlakeBr0/IronJetpacks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub
          </a>
        </div>
      </div>
      <div class="card">
        <img class="logo" src="/img/logo/pickletweaks_logo.png" alt="" />
        <span class="name">Pickle Tweaks</span>
        <span class="description">
          A collection of vanilla+ features and tweaks!
        </span>
        <div class="links">
          <a
            href="https://www.curseforge.com/minecraft/mc-mods/pickle-tweaks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fas', 'download']" />
            Downloads
          </a>
          <a
            href="https://github.com/BlakeBr0/PickleTweaks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub
          </a>
        </div>
      </div>
      <div class="card">
        <img
          class="logo"
          src="/img/logo/mysticalagradditions_logo.png"
          alt=""
        />
        <span class="name">Mystical Agradditions</span>
        <span class="description">Grow even more resources!</span>
        <div class="links">
          <a
            href="https://www.curseforge.com/minecraft/mc-mods/mystical-agradditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fas', 'download']" />
            Downloads
          </a>
          <a
            href="https://github.com/BlakeBr0/MysticalAgradditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub
          </a>
        </div>
      </div>
      <div class="card">
        <img class="logo" src="/img/logo/extendedcrafting_logo.png" alt="" />
        <span class="name">Extended Crafting</span>
        <span class="description">
          Add more advanced crafting mechanisms to your modpack!
        </span>
        <div class="links">
          <a
            href="https://www.curseforge.com/minecraft/mc-mods/extended-crafting"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fas', 'download']" />
            Downloads
          </a>
          <a
            href="https://github.com/BlakeBr0/ExtendedCrafting"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub
          </a>
        </div>
      </div>
      <div class="card">
        <img class="logo" src="/img/logo/morebuckets_logo.png" alt="" />
        <span class="name">More Buckets</span>
        <span class="description">
          Adds more buckets that hold more buckets!
        </span>
        <div class="links">
          <a
            href="https://www.curseforge.com/minecraft/mc-mods/more-buckets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fas', 'download']" />
            Downloads
          </a>
          <a
            href="https://github.com/BlakeBr0/MoreBuckets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub
          </a>
        </div>
      </div>
    </div>
    <div class="cucumber">
      Note that all of my mods require that you have Cucumber Library installed
      as well.
      <a
        href="https://www.curseforge.com/minecraft/mc-mods/cucumber"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Cucumber Library
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mods"
};
</script>

<style lang="scss" scoped>
#mods {
  display: flex;
  width: 100%;
  flex-direction: column;

  .title {
    margin-bottom: 30px;
    text-align: center;
  }

  .cards {
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 80px;
    grid-column-gap: 30px;

    .card {
      display: flex;
      height: 300px;
      flex-direction: column;
      text-align: center;
      padding: 0 20px;
      border: 1px solid lightgray;
      border-radius: 16px;
      box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;

      .logo {
        display: flex;
        position: relative;
        width: 125px;
        height: 125px;
        margin: 0 auto -30px auto;
        top: -45px;
        background-color: lightgray;
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
      }

      .name {
        font-size: 20px;
        font-weight: bold;
      }

      .links {
        margin: auto 0 20px 0;

        a {
          margin: 0 10px;
        }
      }
    }
  }

  .cucumber {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    a {
      display: flex;
      padding: 5px 15px;
      margin-top: 10px;
      color: white;
      background-color: #50a530;
      border-radius: 8px;
    }
  }
}
</style>
