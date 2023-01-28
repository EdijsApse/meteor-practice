<template>
  <div class="custom-modal" @click="$emit('close')">
    <div class="custom-modal-content" @click.stop>
      <button type="button" class="close-btn" @click="$emit('close')">
        &times;
      </button>
      <h1 class="page-title">{{ title }}</h1>
      <form @submit.prevent="createEmergency">
        <div class="form-group">
          <label for="description">Details about emergency</label>
          <textarea id="description" v-model="description" class="form-control"></textarea>
        </div>
        <button class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["emergency"],
  data() {
    return {
      description: "",
    };
  },
  computed: {
    title() {
      return `Create "${this.emergency.type}" emergency`;
    },
  },
  methods: {
    createEmergency() {},
  },
};
</script>
