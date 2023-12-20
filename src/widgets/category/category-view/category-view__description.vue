<script setup lang="ts">
import { SwitchContent, EditBadge, type CategoryDTO, ButtonApp } from '@/shared';
import { ChangeDescription } from '@/features';
import { ref } from 'vue';

const props = defineProps<{category: CategoryDTO}>();
const emit = defineEmits<{(e: 'changed'): void}>();

const showForm = ref(false);
</script>

<template>
  <SwitchContent
    class="category-view__description flex items-start"
    v-model:show="showForm"
    :triggerComponent="EditBadge"
  >
      <p v-if="props.category.description" class="description_text">{{ props.category.description }}</p>
      <ButtonApp v-if="!props.category.description" @click="showForm=true" label="Добавить описание" />
      
      <template #switch-content>
        <ChangeDescription
          :id="props.category.id"
          :description="props.category.description"
          @executed="emit('changed')"
        />
      </template>
    </SwitchContent>
</template>

<style scoped lang="scss">
.category-view__description {
  gap: .3em;
  .description_text {
    margin: 0;
    line-height: 1.4em;
  }
}
</style>
