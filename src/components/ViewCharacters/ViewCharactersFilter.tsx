import { useState } from 'react';
import { charBackgrounds } from '../../database/dbCharBackgrounds';
import { charClasses } from '../../database/dbCharClasses';
import { races } from '../../database/dbRaces';
import { ISearchParams } from '../../pages/ViewCharacters';
import { FilterDropdown } from './FilterDropdown';

interface IViewCharactersFilterProps {
  onGettingCharacters: (params: ISearchParams | undefined) => void;
}

export const ViewCharactersFilter = ({ onGettingCharacters }: IViewCharactersFilterProps) => {
  const [params, setParams] = useState<ISearchParams | undefined>();

  const onClickDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const key = e.target.id;
    const value = e.target.value;
    let newParams = params;

    if (value === '') {
      if (newParams) {
        delete newParams[key as keyof ISearchParams];
        setParams(Object.keys(newParams).length > 0 ? newParams : undefined);
      }
    } else {
      setParams({ ...params, [key]: value });
    }
  };

  const resetFilters = () => {
    setParams(undefined);
  };

  return (
    <div>
      <div className="viewCharsFiltercontainer">
        <FilterDropdown onClickDropdown={onClickDropdown} params={params} dbObject={races} title="Race" id="race" />
        <FilterDropdown
          onClickDropdown={onClickDropdown}
          params={params}
          dbObject={charClasses}
          title="Class"
          id="startingClass"
        />
        <FilterDropdown
          onClickDropdown={onClickDropdown}
          params={params}
          dbObject={charBackgrounds}
          title="Background"
          id="background"
        />

        {/* <label htmlFor="name">
          Character Name
          <input type="text" id="name" name="name" className="searchInput"></input>
        </label> */}
        <button onClick={() => resetFilters()} className="resetBtn">
          Reset Filters
        </button>
      </div>
      <div className="searchButtonContainer">
        <button onClick={() => onGettingCharacters(params)} className="getCharsBtn">
          Find Characters
        </button>
      </div>
    </div>
  );
};
