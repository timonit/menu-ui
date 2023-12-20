<script setup lang="ts">
import { SetPositionIngredients } from '@/features';
import { SwitchContent, EditBadge, ButtonApp } from '@/shared';
import { type PositionDTO } from '@/shared';
import { ref, watch } from 'vue';

const props = defineProps<{categoryID: string; position: PositionDTO}>();
const emit = defineEmits<{(e:'changed'): void}>();

const showForm = ref(false);
console.log(props.position.ingredients)

watch(props, () => {
  showForm.value = false;
})
</script>

<template>
  <SwitchContent class="fieldset" v-model:show="showForm" :triggerComponent="EditBadge">
    <p v-if="props.position.ingredients.length" class="fieldset__ingredients">{{ props.position.ingredients.join(', ') }}</p>
    
    <ButtonApp v-if="!props.position.ingredients.length" @click="showForm = true" label="Добавить ингредиенты" />

    <template #switch-content>
      <SetPositionIngredients
        :id="props.position.id"
        :ingredients="props.position.ingredients"
        @executed="emit('changed')"
      />
    </template>
  </SwitchContent>
</template>

<style setup lang="scss">
</style>
