interface ITextItemProps {
  title: string;
  name: string;
}

export const TextItem = ({ title, name }: ITextItemProps) => {
  return (
    <p>
      <span className="summaryTitle">{title}: </span> {name}
    </p>
  );
};
