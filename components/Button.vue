<template>
  <button
    :disabled="disabled"
    :class="[{ rounded }, 'button', color, design, width]"
    type="button"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  disabled: Boolean,
  rounded: Boolean,
  color: {
    type: String,
    default: 'cherry',
    validator: (val: string) => ['cherry', 'vanilla', 'pinky'].includes(val),
  },
  width: {
    type: String,
    default: 'unset',
    validator: (val: string) => ['unset', 'middle', 'wide'].includes(val),
  },
  design: {
    type: String,
    default: 'fill',
    validator: (val: string) => ['fill', 'stroke'].includes(val),
  },
})

const emit = defineEmits<{
  (event: 'click', value: MouseEvent): void
}>()
</script>
