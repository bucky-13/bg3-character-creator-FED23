interface ISelectedFeatureProps {
  title: string;
  desc: string | number;
  icon?: string;
}
export const SelectedManualFeature = ({ title, desc, icon }: ISelectedFeatureProps) => {
  return (
    <div className="featureContainer">
      {icon && <img src={icon} alt={'icon of ' + title} />}
      <p>
        <span>{title}: </span>
        {desc}
      </p>
    </div>
  );
};
