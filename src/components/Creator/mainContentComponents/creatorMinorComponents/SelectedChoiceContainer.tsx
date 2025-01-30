import { ReactNode } from 'react';
import { IProperties } from '../../../../models/dbModels/properties';
import { SelectedChoiceHeader } from './SelectedChoiceHeader';
import { IFeatures } from '../../../../models/dbModels/IFeatures';
import { SelectedFeature } from './SelectedFeature';

interface ISelectedChoiceContainerProps<T> {
  children?: ReactNode;
  selectedChoice: T & IProperties;
  features?: IFeatures[];
}

export const SelectedChoiceContainer = <T,>({
  children,
  selectedChoice,
  features,
}: ISelectedChoiceContainerProps<T>) => {
  return (
    <div className="selectedChoiceContainer">
      <SelectedChoiceHeader selectedChoice={selectedChoice} />
      {selectedChoice.desc && <p>{selectedChoice.desc}</p>}
      {features && <h4 className="featureH">Features:</h4>}
      {children}
      {features && features.map((feature, i) => <SelectedFeature feature={feature} key={i} />)}
    </div>
  );
};
