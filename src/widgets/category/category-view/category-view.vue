<script setup lang="ts">
import CategoryViewName from './category-view__name.vue';
import CategoryViewDescription from './category-view__description.vue';
import CategoryViewPositionList from './category-view__position-list.vue';
import { ButtonApp, CategoryAPI, type CategoryDTO } from '@/shared';
import { AddPositionToCategory } from '@/features';
import { onBeforeMount, ref } from 'vue';

const props = defineProps<{categoryID: string}>();

const category = ref<CategoryDTO | undefined>();
const showAddPositionForm = ref(false);

const fetchCategory = async () => {
  const api = new CategoryAPI();
  category.value = await api.getByID(props.categoryID as string);
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
  <div v-if="category" class="category-view bg-dark flex flex-col gap-medium shadow-center">
    <CategoryViewName :category="category" @changed="fetchCategory" />
    <CategoryViewDescription :category="category" @changed="fetchCategory" />

    <div class="flex gap-medium items-start flex-wrap">
      <ButtonApp label="Add position" @click="toggleShowAddPositionForm" />
      <AddPositionToCategory
        v-show="showAddPositionForm"
        :categoryID="category.id"
        @executed="fetchCategory"
        class="category-view__position-form"
      />
    </div>

    <CategoryViewPositionList
      :categoryID="props.categoryID"
      :positions="category.positions"
      @removed="fetchCategory"
      @updated="fetchCategory"
    />
  </div>
</template>

<style src="@/shared/ui/widgets/fieldset.scss"></style>
<style scoped lang="scss">
.category-view {
  padding: 2rem;
  
  .category-view__position-form {
    padding: 2em;
    border: dashed 2px var(--text-color);
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 400px;
    margin-bottom: 2em;
  }
}
</style>
