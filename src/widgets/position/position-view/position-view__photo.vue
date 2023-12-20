<script setup lang="ts">
import { SetPositionPhoto } from '@/features';
import { EditBadge } from '@/shared';
import { type PositionDTO, ButtonApp } from '@/shared';
import { ref, watch } from 'vue';

const props = defineProps<{categoryID: string; position: PositionDTO}>();
const emit = defineEmits<{(e:'changed'): void}>();

const showForm = ref(false);

watch(props, () => {
  showForm.value = false;
})
</script>

<template>
  <div class="fieldset__photo relative flex flex-col items-start">
    <ButtonApp
      v-if="!props.position.photo && !showForm"
      @click="showForm=!showForm"
      label="Добавить фото"
    >Добавить фото</ButtonApp>

    <div class="flex flex-col items-end gap-sm">
      <img v-if="props.position.photo" class="fieldset__photo_img" :src="props.position.photo" height="200px" />
      
      <EditBadge v-if="props.position.photo && !showForm" class="fieldset__photo_position_top-right absolute" @click="showForm = true" />
      
      <div v-if="showForm" class="flex">
        <SetPositionPhoto
          :id="props.position.id"
          :photo="props.position.photo"
          @executed="emit('changed')"
          class="w-full justify-between"
        />
        <ButtonApp
          @click="showForm=!showForm"
          class="bg-danger"
        >Отмена</ButtonApp>
      </div>
    </div>

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
