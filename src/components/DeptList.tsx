import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const data = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const DeptList = () => {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggleExpand = (department: string) => {
    if (expanded.includes(department)) {
      setExpanded(expanded.filter((dep) => dep !== department));
    } else {
      setExpanded([...expanded, department]);
    }
  };

  const toggleSelect = (department: string) => {
    if (selected.includes(department)) {
      setSelected(selected.filter((dep) => dep !== department));
    } else {
      setSelected([...selected, department]);
    }
  };

  const isExpanded = (department: string) => expanded.includes(department);
  const isSelected = (name: string) => selected.includes(name);

  const handleParentChange = (department: string) => {
    const subDeps =
      data.find((item) => item.department === department)?.sub_departments ||
      [];
    if (isSelected(department)) {
      setSelected(
        selected.filter((dep) => dep !== department && !subDeps.includes(dep))
      );
    } else {
      setSelected([...selected, department, ...subDeps]);
    }
  };

  React.useEffect(() => {
    data.forEach((deptData) => {
      const subDeps = deptData.sub_departments;
      const allSubDepsSelected = subDeps.every((subDept) =>
        isSelected(subDept)
      );
      if (allSubDepsSelected && !isSelected(deptData.department)) {
        toggleSelect(deptData.department);
      } else if (!allSubDepsSelected && isSelected(deptData.department)) {
        toggleSelect(deptData.department);
      }
    });
  }, [selected]);

  return (
    <div className="p-4 border rounded-lg shadow-md w-[50vw] bg-white">
      <h1 className="text-xl text-center font-semibold mb-4">
        Department List
      </h1>
      {data.map((deptData) => (
        <div key={deptData.department} className="flex items-center">
          <Checkbox
            checked={isSelected(deptData.department)}
            onChange={() => handleParentChange(deptData.department)}
          />
          <Checkbox
            checked={isExpanded(deptData.department)}
            onChange={() => toggleExpand(deptData.department)}
            icon={<ChevronRightIcon />}
            checkedIcon={<ExpandMoreIcon />}
          />
          <span className="font-semibold">{deptData.department}</span>
          {isExpanded(deptData.department) && (
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              {deptData.sub_departments.map((subDept) => (
                <FormControlLabel
                  key={subDept}
                  label={subDept}
                  control={
                    <Checkbox
                      checked={isSelected(subDept)}
                      onChange={() => toggleSelect(subDept)}
                    />
                  }
                />
              ))}
            </Box>
          )}
        </div>
      ))}
    </div>
  );
};

export default DeptList;
