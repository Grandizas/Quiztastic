<template>
  <component
    :is="tag"
    :class="[tagClass, `color-${color} text-align-${align}`]"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
const props = defineProps({
  /** @param {string} props.component - The HTML tag to be rendered. Must be one of 'h1', 'h2', 'header-description', or 'subtitle'. */
  tag: {
    type: String,
    required: true,
    validator: (value: string) => {
      return ['h1', 'h2', 'p', 'span'].includes(value);
    },
  },
  /** @param {string} [props.tagType=''] - The tag type. Must be one of 'header-description', 'subtitle' or ''. */
  tagType: {
    type: String,
    default: '',
    validator: (value: string) => {
      return ['heading-description', 'subtitle', ''].includes(value);
    },
  },
  /** @param {string} [props.color='black'] - The text color. Must be one of 'black', 'white', 'pink', or 'gray'. */
  color: {
    type: String,
    default: 'black',
    validator: (value: string) => {
      return ['black', 'white', 'pink,', 'gray'].includes(value);
    },
  },
  /** @param {string} [props.align='left'] - The text alignment. Must be one of 'left', 'center', 'right'. */
  align: {
    type: String,
    default: 'left',
    validator: (value: string) => {
      return ['left', 'center', 'right'].includes(value);
    },
  },
});

type TClassFor = {
  [key: string]: string;
};

const tagClass = computed(() => {
  const classes: TClassFor = {
    h1: 'heading-1',
    h2: 'heading-2',
  };

  return props.tagType || classes[props.tag] || '';
});
</script>
