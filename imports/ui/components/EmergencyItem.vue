<template>
  <div class="emergency-item" @click="$emit('click')">
    <h3>{{ emergency.type }}</h3>
  </div>
</template>

<script>
export default {
  props: ["emergency"],
};
</script>
