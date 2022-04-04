import { useCurrentImage } from '@/src/composables/useCurrentImage';
import { useRulerToolStore } from '@/src/store/tools/rulers';
import vtkAbstractWidget from '@kitware/vtk.js/Widgets/Core/AbstractWidget';
import { computed, onBeforeUnmount, readonly, ref } from '@vue/composition-api';

export function useRulerTools() {
  const rulerToolStore = useRulerToolStore();
  const { currentImageID } = useCurrentImage();

  const factory = computed(() => {
    const imageID = currentImageID.value;
    if (imageID) {
      // grab rulers for a given image, and create a new widget state
      // clear the factory's view widgets (individual view components should do this)
      // then either set the factory's widget state or make a new factory
    }
  });
}
