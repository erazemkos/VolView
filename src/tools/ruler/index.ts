import { Vector3 } from '@kitware/vtk.js/types';
import { ImageMetadata } from '@/src/storex/datasets-images';
import { LPSAxisDir } from '@/src/utils/lps';
import { RulerWidgetState } from '@/src/vtk/RulerWidget/state';
import { useRulerToolStore } from '@/src/store/tools/rulers';
import vtkRulerWidget from '@/src/vtk/RulerWidget';

export { default as RulerWidgetComponent } from './RulerWidget.vue';
export { default as RulerSvgComponent } from './RulerSvg.vue';

export interface SerializedRulerV1 {
  version: '1.0';
  /**
   * Index space
   */
  firstPoint: Vector3;
  /**
   * Index space
   */
  secondPoint: Vector3;
  viewType: LPSAxisDir;
  /**
   * Index space slice
   */
  slice: number;
  imageID: string;
  /**
   * imageMetadata is saved as context for where
   * the measurement is located in the world.
   */
  imageMetadata: Omit<ImageMetadata, 'name'>;
}

function createSyncAdapter(
  widgetState: RulerWidgetState,
  rulerStore: ReturnType<typeof useRulerToolStore>
) {
  return {
    stop: () => {},
  };
}

export function createRulerTool(initialState?: any) {
  const rulerStore = useRulerToolStore();
  const RulerTool2D = null;
  const RulerTool2DSVG = null;
  const widgetFactory = vtkRulerWidget.newInstance();
  return {
    view2DComponents: {
      core: [RulerTool2D],
      svg: [RulerTool2DSVG],
    },
    widgetFactory,
    syncAdapter: createSyncAdapter(widgetFactory.getWidgetState(), rulerStore),
  };
}
