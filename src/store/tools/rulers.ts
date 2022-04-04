import { del, set } from '@vue/composition-api';
import { Vector3 } from '@kitware/vtk.js/types';
import { distance2BetweenPoints } from '@kitware/vtk.js/Common/Core/Math';
import { removeFromArray } from '@/src/utils';
import { defineStore } from 'pinia';
import { LPSAxisDir } from '../../utils/lps';
import { useIDStore } from '../../storex/id';

export interface RulerTool {
  name: string;
  /**
   * Point is in image index space.
   */
  firstPoint: Vector3;
  /**
   * Point is in image index space.
   */
  secondPoint: Vector3;
  /**
   * The associated view slicing axis.
   */
  viewType: LPSAxisDir;
  /**
   * The associated slice along the axis.
   */
  slice: number;
  /**
   * The associated image dataset.
   *
   * The ruler currently does not store orientation info,
   * and so depends on the associated image space.
   */
  imageID: string;
}

interface State {
  // pendingRuler: NullableValues<RulerTool>;
  rulerIDs: string[];
  rulers: Record<string, RulerTool>;
  // imageToRulers: Record<string, string[]>;
}

export const useRulerToolStore = defineStore('rulerTool', {
  state: (): State => ({
    // pendingRuler: createNulledRuler(),
    rulerIDs: [],
    rulers: Object.create(null),
    // imageToRulers: Object.create(null),
  }),
  getters: {
    lengths(state) {
      return state.rulerIDs.reduce((lengths, id) => {
        const { firstPoint, secondPoint } = state.rulers[id];
        return Object.assign(lengths, {
          [id]: Math.sqrt(distance2BetweenPoints(firstPoint, secondPoint)),
        });
      }, {} as Record<string, number>);
    },
  },
  actions: {
    addRuler(ruler: RulerTool) {
      const idStore = useIDStore();
      const id = idStore.getNextID();
      set(this.rulers, id, ruler);
      this.rulerIDs.push(id);
    },
    removeRuler(id: string) {
      removeFromArray(this.rulerIDs, id);
      del(this.rulers, id);
    },
    updateRuler(id: string, patch: Partial<RulerTool>) {
      if (id in this.rulers) {
        Object.assign(this.rulers[id], patch);
      }
    },
    /*
    updatePendingRuler(ruler: NullableValues<RulerTool>) {
      Object.assign(this.pendingRuler, ruler);
    },
    clearPendingRuler() {
      this.pendingRuler = createNulledRuler();
    },
    */
  },
});
