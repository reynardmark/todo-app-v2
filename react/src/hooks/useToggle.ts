import { useState } from "react";

export default function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue(!value);
  };

  const setToggleValue = (desiredValue: boolean) => {
    setValue(desiredValue);
  };

  return [value, toggleValue, setToggleValue] as const;
}
