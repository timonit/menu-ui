<script setup lang="ts">
import { SetPositionPrice } from '@/features';
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
    <span class="fieldset__price text-light">{{ props.position.price }} rub</span>
    <template #switch-content>
      <SetPositionPrice :id="props.position.id" :price="props.position.price" @executed="emit('changed')" />
    </template>
  </SwitchContent>
</template>

<style scoped lang="scss">
.fieldset__price {
  font-size: 1.8em;
}
</style>
