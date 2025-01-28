import { ICharBackground } from '../../models/dbModels/ICharBackground';
import { ICharClass } from '../../models/dbModels/ICharClass';
import { IRace } from '../../models/dbModels/IRace';
import { ISearchParams } from '../../pages/ViewCharacters';

interface IFilterDropdownProps {
  onClickDropdown: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  params: ISearchParams | undefined;
  dbObject: IRace[] | ICharClass[] | ICharBackground[];
  title: string;
  id: string;
}

export const FilterDropdown = ({ onClickDropdown, params, dbObject, title, id }: IFilterDropdownProps) => {
  return (
    <label htmlFor={id}>
      {title}
      <select
        id={id}
        name={id}
        className="charDropdownContainer"
        onChange={(e) => onClickDropdown(e)}
        value={params && params[id as keyof ISearchParams] ? params[id as keyof ISearchParams] : ''}
      >
        <option value="">
          All {title}
          {title.at(-1) === 's' ? 'es' : 's'}
        </option>
        {dbObject.map((o, i) => (
          <option key={i} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </label>
  );
};
