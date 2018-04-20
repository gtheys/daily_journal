<template>
  <v-content>
    <div>
      <tree-view
        :data="myJson"
        :options="{maxDepth: 3}"/>
    </div>
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
