import React, { useEffect, useState } from "react";
import { FormControl } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputLabel from "@mui/material/InputLabel";
import FormLabel from "@mui/material/FormLabel";
import { Field } from "formik";
import { infoPlanCard } from "../../Constants";
// const Maintitle = [
//   {
//     title: "On Home",
//   },
//   {
//     title: "On Site",
//   },
// ];

const Radiooo = (Props) => {
  const { name, plan, t, title, ...rest } = Props;
  const [checked, setChecked] = useState("");
  useEffect(() => {
    setChecked(plan);
  }, [plan]);
  return (
    <FormControl className="radioControl" required fullWidth>
      <FormLabel
        style={{
          color: "white",
        }}
        className="GroubLabel"
        id="demo-radio-buttons-group-label">
        {t(title)}
      </FormLabel>

      <Field
        className="RadioGroub"
        as={RadioGroup}
        name={name}
        required
        id={name}
        {...rest}
        aria-labelledby="demo-radio-buttons-group-label">
        {infoPlanCard.map(({ title }, inedx) => {
          return (
            <FormControlLabel
              onChange={() => {
                setChecked(title);
              }}
              checked={checked === title}
              value={title}
              key={inedx}
              control={<Radio />}
              label={title}
            />
          );
        })}
      </Field>
    </FormControl>
  );
};

export default Radiooo;