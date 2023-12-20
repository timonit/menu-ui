<script setup lang="ts">
import { ButtonApp, CategoryAPI, SwitchContent, type CategoryDTO } from '@/shared';
import { PositionView } from '@/widgets';
import { RenameCategory, ChangeDescription, AddPositionToCategory } from '@/features';
import { onBeforeMount, ref } from 'vue';

const props = defineProps<{categoryID: string}>();

const category = ref<CategoryDTO | undefined>();
const showAddPositionForm = ref(false);
const showRenameForm = ref(false);
const showChangeDescription = ref(false);

const fetchCategory = async () => {
  const api = new CategoryAPI();
  category.value = await api.getByID(props.categoryID as string);
  showRenameForm.value = false;
  showChangeDescription.value = false;
  showAddPositionForm.value = false;
}

onBeforeMount(async () => {
  await fetchCategory();
})

const toggleShowAddPositionForm = () => {
  showAddPositionForm.value = !showAddPositionForm.value
}
</script>

<template>
  <h3 v-if="!category">Loading...</h3>
  <div v-if="category" class="category">
    <SwitchContent v-model:show="showRenameForm" trigger-label="e">
      <h3 style="display: inline;">{{ category.name }}</h3>
      <template #switch-content>
        <RenameCategory :id="category.id" :name="category.name" @executed="fetchCategory" />
      </template>
    </SwitchContent>

    <SwitchContent v-model:show="showChangeDescription" trigger-label="e" style="display: flex; align-items: start;">
      <p>{{ category.description }}</p>
      <template #switch-content>
        <ChangeDescription :id="category.id" :description="category.description" @executed="fetchCategory" />
      </template>
    </SwitchContent>

    <ButtonApp label="Add position" @click="toggleShowAddPositionForm" />
    <AddPositionToCategory v-show="showAddPositionForm" :categoryID="category.id" @executed="fetchCategory" />

    <div class="position-list">
      <PositionView
        v-for="position in category.positions"
        :key="position.id"
        :categoryID="props.categoryID"
        :position="position"
        @removed="fetchCategory"
        @updated="fetchCategory"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.category {
  border: solid 1px var(--secondary-color);
  padding: 1em;
  border-radius: .5em;

  .position-list {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
}
</style>
