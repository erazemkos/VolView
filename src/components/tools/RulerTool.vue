<template>
  <div class="overlay">
    <svg class="overlay">
      <ruler-svg
        v-if="active"
        key="PENDING_RULER"
        :point1="pendingRuler.firstPoint"
        :point2="pendingRuler.secondPoint"
      />
      <ruler-svg
        v-for="ruler in rulers"
        v-show="currentSlice === ruler.slice"
        :key="ruler.id"
        :point1="ruler.firstPoint"
        :point2="ruler.secondPoint"
      />
    </svg>
    <div>
      <ruler-widget
        v-if="active"
        key="PENDING_RULER"
        :ruler="pendingRuler"
        :slice="currentSlice"
        :pickable="true"
      />
      <ruler-widget
        v-for="ruler in rulers"
        :key="ruler.id"
        :ruler="ruler"
        :slice="currentSlice"
        :view-id="viewID"
        :view-proxy="viewProxy"
        :pickable="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
  toRefs,
} from '@vue/composition-api';
import vtkLPSView2DProxy from '@/src/vtk/LPSView2DProxy';
import { useView2DStore } from '@/src/storex/views-2D';
import { useCurrentImage } from '@/src/composables/useCurrentImage';
import { Tools, useToolStore } from '@/src/store/tools';
import { RulerTool, useRulerToolStore } from '@/src/store/tools/rulers';
import { NullableValues } from '@/src/types';

const createNulledRuler = () => ({
  name: null,
  firstPoint: null,
  secondPoint: null,
  viewType: null,
  slice: null,
  imageID: null,
});

export default defineComponent({
  name: 'RulerTool',
  props: {
    viewId: {
      type: String,
      required: true,
    },
    viewProxy: {
      type: Object as PropType<vtkLPSView2DProxy>,
      required: true,
    },
  },
  setup(props) {
    const { viewId: viewID, viewProxy } = toRefs(props);
    const view2DStore = useView2DStore();
    const toolStore = useToolStore();
    const rulerStore = useRulerToolStore();

    const pendingRuler: NullableValues<RulerTool> = reactive(
      createNulledRuler()
    );

    const { currentImageID } = useCurrentImage();
    const currentSlice = computed(
      () => view2DStore.sliceConfigs[viewID.value].slice
    );
    const active = computed(() => toolStore.currentTool === Tools.Ruler);

    const currentRulers = computed(() => {
      const rulerByID = rulerStore.rulers;
      const curImageID = currentImageID.value;
      return rulerStore.rulerIDs
        .filter((id) => rulerByID[id].imageID === curImageID)
        .map((id) => {
          const ruler = rulerByID[id];
          return {
            firstPoint: ruler.firstPoint,
            secondPoint: ruler.secondPoint,
            slice: ruler.slice,
          };
        });
    });

    return {
      rulers: currentRulers,
      currentSlice,
      active,
      pendingRuler,
      viewID,
      viewProxy,
    };
  },
});
</script>

<style scoped src="@/src/assets/styles/vtk-view.css"></style>
