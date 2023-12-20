<script setup lang="ts">
import { RemovePositionFromCategory, RenamePosition, SetPositionIngredients, SetPositionPhoto, SetPositionPrice } from '@/features';
import { SwitchContent, type PositionDTO } from '@/shared';
import { ref, watch } from 'vue';

const props = defineProps<{categoryID: string; position: PositionDTO}>();
const emit = defineEmits<{
  (e:'removed', positionID:string): void,
  (e:'updated'): void,
}>();

const showRename = ref(false);
const showChangePrice = ref(false);
const showChangeIngredients = ref(false);
const showChangePhoto = ref(false);

watch(props, () => {
  showRename.value = false;
  showChangePrice.value = false;
  showChangeIngredients.value = false;
  showChangePhoto.value = false;
})
</script>

<template>
  <div class="category__position category__position_bordered">
    <RemovePositionFromCategory
      :categoryID="props.categoryID"
      :positionID="props.position.id"
      @executed="emit('removed', $event)"
    />
    <div class="position_fullwidth position_flex_between">
      <SwitchContent v-model:show="showRename" triggerLabel="e">
        <h3 style="display: inline;">{{ props.position.name }}</h3>
        <template #switch-content>
          <RenamePosition :id="props.position.id" :name="props.position.name" @executed="emit('updated')" />
        </template>
      </SwitchContent>

      <SwitchContent v-model:show="showChangePrice" triggerLabel="e">
        <span>{{ props.position.price }} rub</span>
        <template #switch-content>
          <SetPositionPrice :id="props.position.id" :price="props.position.price" @executed="emit('updated')" />
        </template>
      </SwitchContent>
    </div>
    
    <div class="position_fullwidth">
      <SwitchContent v-model:show="showChangeIngredients" triggerLabel="e">
        <span>{{ props.position.ingredients.join(', ') }} </span>
        <template #switch-content>
          <SetPositionIngredients :id="props.position.id" :ingredients="props.position.ingredients" @executed="emit('updated')" />
        </template>
      </SwitchContent>
    </div>

    <SwitchContent v-model:show="showChangePhoto" v-if="props.position.photo" triggerLabel="e">
      <img :src="props.position.photo" width="200px" />
      <template #switch-content>
        <SetPositionPhoto :id="props.position.id" :photo="props.position.photo" @executed="emit('updated')" />
      </template>
    </SwitchContent>
  </div>
</template>

<style scoped lang="scss">
.category__position {
  display: flex;
  flex-direction: column;
  padding: 1em;

  .position_flex_between {
    justify-content: space-between;
  }
  
  .position_fullwidth {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

  }
}

h3 {
  margin: 0;
  padding: 0 0 .5em 0;
}

.category__position_bordered {
  border: solid 1px var(--secondary-color);
}
</style>
