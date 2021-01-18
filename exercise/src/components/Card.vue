<template>
  <div class="card">
    <slot name="image"></slot>
    <div class="card-body">
      <slot name="title"></slot>
      <slot name="text"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card'
}
</script>