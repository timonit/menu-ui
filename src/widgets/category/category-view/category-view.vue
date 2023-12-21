<script setup lang="ts">
import CategoryViewName from './category-view__name.vue';
import CategoryViewDescription from './category-view__description.vue';
import CategoryViewPositionList from './category-view__position-list.vue';
import { ButtonApp, CategoryAPI, type CategoryDTO } from '@/shared';
import { AddPositionToCategory, RemoveCategory } from '@/features';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCategories } from '@/entities';

const props = defineProps<{categoryID: string}>();
const router = useRouter();

const category = ref<CategoryDTO | undefined>();
const showAddPositionForm = ref(false);
const categoryStore = useCategories();

const fetchCategory = async () => {
  const api = new CategoryAPI();
  category.value = await api.getByID(props.categoryID as string);
  showAddPositionForm.value = false;
  categoryStore.fetchCategories();
}

onBeforeMount(async () => {
  await fetchCategory();
})

const toggleShowAddPositionForm = () => {
  showAddPositionForm.value = !showAddPositionForm.value
}

const goHome = () => {
  router.push('/');
}
</script>

<template>
  <h3 v-if="!category">Loading...</h3>
  <div v-if="category" class="category-view bg-dark flex flex-col gap-medium shadow-center items-start">
    <div class="flex w-full items-center justify-between">
      <CategoryViewName :category="category" @changed="fetchCategory" />
      <RemoveCategory :id="props.categoryID" @executed="goHome" />
    </div>

    <CategoryViewDescription class="w-full" :category="category" @changed="fetchCategory" />

    <div class="flex gap-medium items-start flex-wrap w-full">
      <ButtonApp label="Добавить позицию" @click="toggleShowAddPositionForm" />
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
