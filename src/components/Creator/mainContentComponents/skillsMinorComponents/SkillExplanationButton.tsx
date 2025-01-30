interface ISkillExplanationButtonProps {
  icon: string;
  title: string;
}

export const SkillExplanationButton = ({ icon, title }: ISkillExplanationButtonProps) => {
  return (
    <div className="skillExplanation">
      <button className={'checkmarkIcon checked'} disabled aria-label={`Icon for skill from ${title}`}>
        <img src={icon} />
      </button>
      <p>is from {title}</p>
    </div>
  );
};
