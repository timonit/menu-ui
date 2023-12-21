<script setup lang="ts">
import PositionViewName from './position-view__name.vue';
import PositionViewPrice from './position-view__price.vue';
import PositionViewIngredients from './position-view__ingredients.vue';
import PositionViewPhoto from './position-view__photo.vue';
import { RemovePositionFromCategory } from '@/features';
import { type PositionDTO } from '@/shared';
import { useUser } from '@/entities';

const props = defineProps<{categoryID: string; position: PositionDTO}>();
const emit = defineEmits<{
  (e:'removed', positionID:string): void,
  (e:'updated', positionID:string): void,
}>();

const userStore = useUser();
</script>

<template>
  <div class="position-view position-view_fullwidth bg-dark">
    <div>
      <PositionViewName :categoryID="props.categoryID" :position="props.position" @changed="emit('updated', props.position.id)" />
      <PositionViewPrice :categoryID="props.categoryID" :position="props.position" @changed="emit('updated', props.position.id)" />
      <PositionViewIngredients :categoryID="props.categoryID" :position="props.position" @changed="emit('updated', props.position.id)" />
      
      <RemovePositionFromCategory v-if="userStore.isAuthorized" :categoryID="props.categoryID" :positionID="props.position.id" @executed="emit('removed', props.position.id)" />
    </div>
    
    <PositionViewPhoto
      :categoryID="props.categoryID"
      :position="props.position"
      @changed="emit('updated', props.position.id)"
    />
  </div>
</template>

<style src="@/shared/ui/widgets/fieldset.scss"></style>
<style scoped lang="scss">
.position-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em;
  box-sizing: border-box;
  width: 100%;

  &.position-view_bordered {
    border: solid 1px var(--secondary-color);
  }

  .position-view__tools {
    margin-top: 2em;
  }
}
</style>
