<template>
  <tr>
    <td>{{ emergency.emergency.type }}</td>
    <td>{{ emergency.user.email }}</td>
    <td :class="['status', status]">{{ status }}</td>
    <td>{{ responderEmail }}</td>
    <td>{{ emergency.createdAt | dateFilter }}</td>
    <td>{{ emergency.respondedAt | dateFilter }}</td>
  </tr>
</template>

<script>
export default {
  props: ["emergency"],
  computed: {
    status() {
      return this.emergency.isActive
        ? "active"
        : this.emergency.isCanceled
        ? "canceled"
        : "completed";
    },
    responderEmail() {
      return this.emergency.responsder ? this.emergency.responsder.email : "-";
    },
  },
};
</script>
