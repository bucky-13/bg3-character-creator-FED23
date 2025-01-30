import { IFeatures } from '../../../../models/dbModels/IFeatures';

interface ISelectedFeatureProps {
  feature: IFeatures;
}
export const SelectedFeature = ({ feature }: ISelectedFeatureProps) => {
  return (
    <div key={feature.name} className="featureContainer">
      {feature.icon && <img src={feature.icon} alt={'icon of ' + feature.name} />}
      <p>
        <span>{feature.name}: </span>
        {feature.desc}
      </p>
    </div>
  );
};
