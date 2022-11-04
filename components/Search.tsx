import { Box } from "@mui/material";
import { TextField } from "@mui/material";

const SearchBox = (props: any) => {
  return (
    <Box sx={{ boxShadow: 2, minWidth: "400px" }}>
      <TextField
        id="search"
        sx={props.sx}
        multiline={props.multiline}
        rows={props.rows}
        maxRows={props.maxRows}
        fullWidth={props.fullWidth}
        error={props.error}
        helperText={props.helperText}
        label={props.label}
        margin={props.margin}
        name={props.name}
        onBlur={props.onBlur}
        onChange={(e) => props.onChange(e.target.value)}
        type={props.type}
        value={props.value}
        variant={props.variant}
        InputProps={props.InputProps}
        style={props.style}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </Box>
  );
};

export default SearchBox;
