<template>
  <section class="RegAndLog">
    <div class="Picture">
      <div class="Circle">
        <span
          v-for="index in leafCount"
          :key="index"
          class="Leaf"
        />
      </div>
      <div class="Flowers">
        <span
          v-for="index in flowerCount"
          :key="index"
          class="Flower"
        />
      </div>
      <div class="FlyStars">
        <span
          v-for="index in flyStarCount"
          :key="index"
          class="FlyStar"
        />
      </div>
      <p>ZONE</p>
    </div>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'RegAndLog',
  data: () => ({
    leafCount: 2,
    flowerCount: 6,
    flyStarCount: 2,
  }),
};
</script>

<style lang="scss">
  @import "reg-and-log";
</style>
