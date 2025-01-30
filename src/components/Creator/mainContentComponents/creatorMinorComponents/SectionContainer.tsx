import { ReactNode } from 'react';

interface ISectionContainerProps {
  children?: ReactNode;
  title: string;
  selectedChoiceChildren?: ReactNode;
}
export const SectionContainer = ({ children, title, selectedChoiceChildren }: ISectionContainerProps) => {
  return (
    <div className="creatorCenterContainer">
      <h2>{title}</h2>
      <div className="choicesAndSelectedContainer">
        {children}
        {selectedChoiceChildren}
      </div>
    </div>
  );
};
