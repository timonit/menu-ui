<script setup lang="ts">
import { RenamePosition } from '@/features';
import { SwitchContent, EditBadge } from '@/shared';
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
  <SwitchContent class="fieldset" v-model:show="showForm" :triggerComponent="EditBadge">
    <h3 class="fieldset__name inline">{{ props.position.name }}</h3>
    <template #switch-content>
      <RenamePosition :id="props.position.id" :name="props.position.name" @executed="emit('changed')" />
    </template>
  </SwitchContent>
</template>

<style scoped lang="scss">
.fieldset__name {
  font-size: 2em;
  margin: 0;
  color: var(--main-color);
}
</style>
