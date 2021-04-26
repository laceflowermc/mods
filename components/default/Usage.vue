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
    border: 1px solid lightgray;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;

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
  }
}
</style>
