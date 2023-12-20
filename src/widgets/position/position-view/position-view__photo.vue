<script setup lang="ts">
import { SetPositionPhoto } from '@/features';
import { EditBadge } from '@/shared';
import { type PositionDTO } from '@/shared';
import { ref, watch } from 'vue';

const props = defineProps<{categoryID: string; position: PositionDTO}>();
const emit = defineEmits<{(e:'changed'): void}>();

const showForm = ref(false);

watch(props, () => {
  showForm.value = false;
})
</script>

<template>
  <div class="fieldset__photo relative flex flex-col" v-if="props.position.photo">
    <img class="fieldset__photo_img" :src="props.position.photo" height="200px" />
    
    <EditBadge class="fieldset__photo_position_top-right absolute" @click="showForm = true" />
    
    <SetPositionPhoto
      v-if="showForm"
      :id="props.position.id"
      :photo="props.position.photo"
      @executed="emit('changed')"
      class="w-full justify-between"
    />
  </div>
</template>

<style scoped lang="scss">
.fieldset__photo {
  gap: .3em;
}

.fieldset__photo_img {
  aspect-ratio: 3/2;
}

.fieldset__photo_position_top-right {
  top: 0;
  right: 0;
  margin: 1em;
}
</style>
