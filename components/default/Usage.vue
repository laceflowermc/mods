<template>
  <div id="usage">
    <h2 class="title">Widely Adopted</h2>
    <div class="counters">
      <div class="left">
        <span class="count">150+ Million</span>
        <span class="message">downloads on CurseForge</span>
      </div>
      <div class="right">
        <span class="count">10+ Thousand</span>
        <span class="message">modpacks include my mods</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Usage"
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

#usage {
  display: flex;
  width: 100%;
  flex-direction: column;

  .title {
    margin-bottom: 30px;
    text-align: center;
  }

  .counters {
    display: flex;
    height: 200px;
    border: 1px solid $default-color-card-accent;
    border-radius: 16px;
    background-color: $default-color-card;
    box-shadow: $default-card-shadow;

    .left,
    .right {
      display: flex;
      width: 50%;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .count {
        font-size: 32px;
        font-weight: bold;
      }
    }

    @media screen and (max-width: 650px) {
      flex-direction: column;
      justify-content: center;

      .left,
      .right {
        width: 100%;
      }

      .left {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
