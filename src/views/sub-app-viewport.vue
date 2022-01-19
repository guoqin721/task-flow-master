<template>
  <div id="subapp-viewport" />
</template>
<script>

import { start } from '../../es'

export default {
  mounted() {
    console.log(window.qiankunStarted)
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start()
    }
  }
}
</script>
