import vtkAbstractWidgetFactory from '@kitware/vtk.js/Widgets/Core/AbstractWidgetFactory';
import { RulerWidgetState } from './state';

export interface vtkRulerWidget extends vtkAbstractWidgetFactory {
  getLength(): number;
  getWidgetState(): RulerWidgetState;
}

export function newInstance(): vtkRulerWidget;

export declare const vtkRulerWidget: {
  newInstance: typeof newInstance;
};
export default vtkRulerWidget;
