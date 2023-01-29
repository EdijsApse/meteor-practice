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
          <textarea
            id="description"
            v-model="description"
            class="form-control"
          ></textarea>
        </div>
        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
        <button class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  props: ["emergency"],
  data() {
    return {
      description: "",
      errorMessage: "",
    };
  },
  computed: {
    title() {
      return `Create "${this.emergency.type}" emergency`;
    },
  },
  methods: {
    createEmergency() {
      Meteor.call(
        "createEmergency",
        {
          description: this.description,
          emergency: this.emergency,
        },
        (err) => {
          if (err && err.reason) {
            this.errorMessage = err.reason;
          }
        }
      );
    },
  },
};
</script>
