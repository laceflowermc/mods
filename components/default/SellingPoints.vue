<template>
  <div id="selling-points">
    <h2 class="title">What I've Got</h2>
    <div class="points">
      <div class="left">
        <span class="title">Original Ideas</span>
        <span class="description">
          Home of the world famous Magical Crops clone
          <strong>Mystical Agriculture</strong>!
        </span>
      </div>
      <div class="right">
        <span class="title">Expansive Content</span>
        <span class="description">
          Making others add the content themselves with
          <strong>Iron Jetpacks</strong> and
          <strong>Extended Crafting</strong> since 2016!
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SellingPoints"
};
</script>

<style lang="scss" scoped>
#selling-points {
  display: flex;
  width: 100%;
  flex-direction: column;

  .title {
    margin-bottom: 30px;
    text-align: center;
  }

  .points {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    .left,
    .right {
      display: flex;
      height: 300px;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      border: 1px solid lightgray;
      border-radius: 16px;
      box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;

      .title {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
