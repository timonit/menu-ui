<script setup lang="ts">
import { type PositionDTO } from '@/shared';
import { PositionView } from '@/widgets';

const props = defineProps<{categoryID: string, positions: PositionDTO[]}>();
const emit =defineEmits<{
  (e: 'removed', positionID: string): void,
  (e: 'updated', positionID: string): void
}>();
</script>

<template>
  <div class="category-view__position-list w-full">
    <PositionView
      v-for="position in props.positions"
      :key="position.id"
      :categoryID="props.categoryID"
      :position="position"
      @removed="emit('removed', position.id)"
      @updated="emit('removed', position.id)"
      class="category-view__position-list_marker"
    />
  </div>
</template>

<style scoped lang="scss">
  .category-view__position-list {
    display: flex;
    flex-direction: column;
    gap: 5em;

    .category-view__position-list_marker {
      border-left: solid 5px var(--text-color);
    }
  }
</style>
