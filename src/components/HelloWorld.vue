<template>
  <v-app>
    <v-content>
      <v-container
        v-for="entry in myJson.entries"
        :key="entry.id"
      >
        {{ entry.text }}
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import json from '../../data/Mixed.json';

export default{
  data() {
    return {
      myJson: json,
    };
  },
};
</script>
