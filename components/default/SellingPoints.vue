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
@import "assets/css/variables";

#selling-points {
  display: flex;
  width: 100%;
  flex-direction: column;

  .title {
    margin-bottom: 30px;
    text-align: center;
  }

  .points {
    display: flex;
    margin: -15px;
    flex-wrap: nowrap;

    .left,
    .right {
      display: flex;
      width: 100%;
      height: 250px;
      max-width: 585px;
      margin: 15px;
      padding: 30px;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      border: 1px solid $default-color-card-accent;
      border-radius: 16px;
      background-color: $default-color-card;
      box-shadow: $default-card-shadow;

      .title {
        font-size: 20px;
        font-weight: bold;
      }
    }

    @media screen and (max-width: 750px) {
      margin: -15px 0;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
