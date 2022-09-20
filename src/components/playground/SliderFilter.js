import { useState } from "react";

import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Filter from "./Filter";

const SliderFilter = ({ label, min, max, step, value, onChange, disabled }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Filter>
      <FormControl margin="none" fullWidth>
        <InputLabel shrink variant="standard" focused={focused}>
          {label}
        </InputLabel>
        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          size="small"
          valueLabelDisplay="auto"
          marks={[
            { value: min, label: `${min}` },
            { value: max, label: `${max}` }
          ]}
          onChange={(e, value) =>
            onChange(typeof value === "number" ? value : value[0])
          }
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          sx={{ mt: 2 }}
        />
      </FormControl>
    </Filter>
  );
};

export default SliderFilter;
