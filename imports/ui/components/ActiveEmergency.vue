<template>
  <BaseContainer>
    <h1 class="page-title">{{ emergencyTitle }}</h1>
    <div class="emergency-details">
      <BaseCard class="detail">
        <h3 class="detail-title">Type</h3>
        <p><span class="bold">Type:</span>{{ emergency.emergency.type }}</p>
        <p v-if="emergency.description">
          <span class="bold">Description:</span>{{ emergency.description }}
        </p>
      </BaseCard>
      <BaseCard class="detail">
        <h3 class="detail-title">Date Created</h3>
        <p>
          <span class="bold">Date</span>{{ emergency.createdAt | dateFilter }}
        </p>
      </BaseCard>
      <BaseCard class="detail">
        <h3 class="detail-title">Created By</h3>
        <p><span class="bold">User ID</span>{{ emergency.user._id }}</p>
        <p><span class="bold">User Email</span>{{ emergency.user.email }}</p>
      </BaseCard>
    </div>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <button class="btn btn-danger" v-if="canCancel" @click="cancelEmergency">
      Cancel
    </button>
    <button class="btn btn-primary" v-else @click="respondToEmergency">
      Responde
    </button>
  </BaseContainer>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  props: ["emergency"],
  computed: {
    emergencyTitle() {
      return `"${this.emergency.emergency.type}" emergency occured!`;
    },
    canCancel() {
      return this.userId === this.emergency.user._id;
    },
  },
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    cancelEmergency() {
      Meteor.call(
        "cancelEmergency",
        {
          emergencyId: this.emergency._id,
        },
        (err) => {
          if (err && err.reason) {
            this.errorMessage = err.reason;
          }
        }
      );
    },
    respondToEmergency() {
      Meteor.call(
        "respondToEmergency",
        {
          emergencyId: this.emergency._id,
        },
        (err) => {
          if (err && err.reason) {
            this.errorMessage = err.reason;
          }
        }
      );
    },
  },
  meteor: {
    userId() {
      return Meteor.userId();
    },
  },
};
</script>
