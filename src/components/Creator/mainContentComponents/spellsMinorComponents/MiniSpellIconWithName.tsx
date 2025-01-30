interface IMiniSpellIconWithNameProps {
  name: string;
}
export const MiniSpellIconWithName = ({ name }: IMiniSpellIconWithNameProps) => {
  return (
    <div className="iconPContainer">
      <img src={`./icons/features/${name}.png`} alt={`Is a ${name} Spell`} />
      <p>{name} Spell</p>
    </div>
  );
};
