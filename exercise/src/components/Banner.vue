<template>
  <div class="banner">
    <slot name="image"></slot>
    <div class="banner__body">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner'
}
</script>