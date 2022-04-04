import { Vector3 } from '@kitware/vtk.js/types';
import vtkStateBuilder from '@kitware/vtk.js/Widgets/Core/StateBuilder';
import vtkWidgetState from '@kitware/vtk.js/Widgets/Core/WidgetState';

export enum InteractionState {
  Settled = 0,
  PlacingFirst = 1,
  PlacingSecond = 2,
}

export interface RulerPointWidgetState extends vtkWidgetState {
  setOrigin(origin: Vector3 | null): boolean;
  getOrigin(): Vector3 | null;
  setScale1(color: number): boolean;
  getScale1(): number;
  setVisible(visible: boolean): boolean;
  getVisible(): boolean;
}

export interface RulerWidgetState extends vtkWidgetState {
  getFirstPoint(): RulerPointWidgetState;
  getSecondPoint(): RulerPointWidgetState;
  getInteractionState(): InteractionState;
  setInteractionState(state: InteractionState): boolean;
  getID(): string;
  setID(id: string): boolean;
}

export default function generateState() {
  return vtkStateBuilder
    .createBuilder()
    .addStateFromMixin({
      labels: ['points'],
      name: 'firstPoint',
      mixins: ['origin', 'scale1', 'visible'],
      initialValues: {
        scale1: 30,
        origin: null,
        visible: false,
      },
    })
    .addStateFromMixin({
      labels: ['points'],
      name: 'secondPoint',
      mixins: ['origin', 'scale1', 'visible'],
      initialValues: {
        scale1: 30,
        origin: null,
        visible: false,
      },
    })
    .addField({
      name: 'interactionState',
      initialValue: InteractionState.PlacingFirst,
    })
    .addField({
      name: 'ID',
      initialValue: '',
    })
    .build() as RulerWidgetState;
}
