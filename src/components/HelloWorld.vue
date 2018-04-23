<template>
  <v-content>
    <li
      v-for="entry in myJson.entries"
      :key="entry.id">
      {{ entry.text }}
    </li>
  </v-content>
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
