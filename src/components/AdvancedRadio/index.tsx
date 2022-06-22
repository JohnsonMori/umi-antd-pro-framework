import { useState } from 'react';
import './index.less';

export type Label = Record<string, string>;
export type Option = { key: string | number; value: string };
export type Options = Option[];
export type Value = string | number;
export type AdvancedRadioProps = {
  loading?: boolean;
  label?: Label;
  options?: Options;
  defaultValue?: Value;
  onChange?: (e: Value) => void;
};

const AdvancedRadio: React.FC<AdvancedRadioProps> = (props) => {
  const { loading, label, options, defaultValue, onChange } = props;

  const [current, setCurrent] = useState(defaultValue || options?.[0].key);

  function handleClick(option: Option) {
    if (!loading && current !== option.key) {
      if (onChange) {
        onChange(option.key);
      }
      setCurrent(option.key);
    }
  }

  return (
    <div className="advancedRadio">
      {label && <span className="label">{label[Object.keys(label)[0]]}：</span>}

      {options?.map((option) => (
        <span
          className={`option ${current === option.key ? 'active' : ''}`}
          key={option.key}
          onClick={() => handleClick(option)}
        >
          {option.value}
        </span>
      ))}
    </div>
  );
};

export default AdvancedRadio;
