import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import Filter from "./Filter";

const SelectFilter = ({ label, multiple, options, value, onChange }) => (
  <Filter>
    <TextField
      select
      fullWidth
      size="small"
      variant="standard"
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      {...(multiple
        ? {
            SelectProps: {
              multiple: true
            }
          }
        : null)}
    >
      {options.map((option) => {
        let optionValue, optionLabel;
        if (typeof option === "string") {
          optionValue = option;
          optionLabel = option;
        } else {
          optionValue = option.value;
          optionLabel = option.label;
        }
        return (
          <MenuItem key={optionValue} value={optionValue}>
            {optionLabel}
          </MenuItem>
        );
      })}
    </TextField>
  </Filter>
);

export default SelectFilter;
