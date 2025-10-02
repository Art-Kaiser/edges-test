import React, { useState } from 'react';

interface CheckboxItem {
  id: string;
  label: string;
  background?: string;
}

interface CheckboxesProps {
  items: CheckboxItem[];
  onChange?: (selected: string[]) => void;
}

const Checkboxes: React.FunctionComponent<CheckboxesProps> = ({ items, onChange }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
    onChange?.(selected);
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.id}
          style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
        >
          <div style={{ background: item.background, width: 20, height: 20 }} />
          <input
            type="checkbox"
            id={item.id}
            checked={selected.includes(item.id)}
            onChange={() => handleChange(item.id)}
          />
          <label
            htmlFor={item.id}
            style={{ marginLeft: '10px' }}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
