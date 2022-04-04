import { computed, onMounted } from '@vue/composition-api';
import vtkViewProxy from '@kitware/vtk.js/Proxy/Core/ViewProxy';
import vtkWidgetManager from '@kitware/vtk.js/Widgets/Core/WidgetManager';

export function useWidgets(viewProxy: vtkViewProxy) {
  // const rulerTools = useRulerTools();

  const widgetManager = vtkWidgetManager.newInstance();

  onMounted(() => {
    widgetManager.setRenderer(viewProxy.getRenderer());
  });

  const svgOverlayComponents = computed(() => []);
  const logicComponents = computed(() => []);

  return { svgOverlayComponents, logicComponents };
}
