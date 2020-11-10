import React, {useState, useEffect} from 'react';
import { SwitchPropsType } from '../../../types/types';

import './switch.scss';

const Switch: React.FC<SwitchPropsType> = (props): React.ReactElement => {
  const [active, setActive] = useState<string>(props.active);
  const [title] = useState<string>(props.title);
  const [markOfButtons] = useState<Array<string>>(props.markOfButtons);

  const changeOfActiveButton = (evt: React.SyntheticEvent): void => {
    const target = evt.target as HTMLInputElement;
    props.transferOfActiveButtonValue(target.name);
  };
  const getButtons = (): Array<React.ReactElement> => {
    const styleActiveButton = 'btn btn-danger switch__button';
    const styleInactiveButton = 'btn btn-secondary switch__button';

    return markOfButtons.map( (name: string, index: number) => {
      const style: string = name.toLowerCase() === active.toLowerCase() ? styleActiveButton : styleInactiveButton;
      const label: string = props.namesOfButtons[index];

      return (
        <button
          type='button'
          className={style}
          key={name.toLowerCase()}
          name={name.toLowerCase()}
          onClick={changeOfActiveButton}>
            {label}
        </button>
      );
    });
  };

  const buttons = getButtons();

  useEffect(() => {setActive(props.active)}, [props.active]);

  return (
    <div className='d-flex align-items-center switch'>
      <span className='mr-3 switch__title'>{title}</span>
      <div className="btn-group">
        {buttons}
      </div>
    </div>
  );
};

export default Switch;