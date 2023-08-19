import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const data = {
  department: "customer_service",
  sub_departments: ["support", "customer_success"],
};
const data2 = {
  department: "design",
  sub_departments: ["graphic_design", "product_design", "web_design"],
};

const DeptList = () => {
  const [checked, setChecked] = React.useState([false, false]);
  const [checked2, setChecked2] = React.useState([false, false, false]);

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleParentChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChildChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checked];
      newChecked[index] = event.target.checked;
      setChecked(newChecked);
    };
  const handleChildChange2 =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checked2];
      newChecked[index] = event.target.checked;
      setChecked2(newChecked);
    };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {data.sub_departments.map((subDept, index) => (
        <FormControlLabel
          key={subDept}
          label={subDept}
          control={
            <Checkbox
              checked={checked[index]}
              onChange={handleChildChange(index)}
            />
          }
        />
      ))}
    </Box>
  );
  const children2 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {data2.sub_departments.map((subDept, index) => (
        <FormControlLabel
          key={subDept}
          label={subDept}
          control={
            <Checkbox
              checked={checked2[index]}
              onChange={handleChildChange2(index)}
            />
          }
        />
      ))}
    </Box>
  );

  return (
    <div className="p-4 border rounded-lg shadow-md w-[50vw] bg-white">
      <FormControlLabel
        label={data.department}
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleParentChange}
          />
        }
      />
      {children}
      <FormControlLabel
        label={data2.department}
        control={
          <Checkbox
            checked={checked2[0] && checked2[1] && checked2[2]}
            indeterminate={
              checked2[0] !== checked2[1] || checked2[0] !== checked2[2]
            }
            onChange={handleParentChange2}
          />
        }
      />
      {children2}
    </div>
  );
};

export default DeptList;
