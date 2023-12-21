<script setup lang="ts">
import { SwitchContent, EditBadge, type CategoryDTO } from '@/shared';
import { RenameCategory } from '@/features';
import { ref, watch } from 'vue';

const props = defineProps<{category: CategoryDTO}>();
const emit = defineEmits<{(e: 'changed'): void}>();

const showForm = ref(false);

watch(props, () => {
  showForm.value = false;
})
</script>

<template>
  <SwitchContent class="category-view__name fieldset" v-model:show="showForm" :triggerComponent="EditBadge">
      <h3 class="name_title inline">{{ props.category.name }}</h3>
      <template #switch-content>
        <RenameCategory
          :id="props.category.id"
          :name="props.category.name"
          @executed="emit('changed')"
        />
      </template>
    </SwitchContent>
</template>

<style scoped lang="scss">
.category-view__name {
  
  .name_title {
    font-size: 3.5rem;
    padding: 0;
    margin: 0;
  }
}
</style>
