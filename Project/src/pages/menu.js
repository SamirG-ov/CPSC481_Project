import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Menu() {
  const [value, setValue] = React.useState(1);
  const [nestedValue, setNestedValue] = React.useState(0);

  const [nestedValueItemTwo, setNestedValueItemTwo] = React.useState(0);

  const [nestedValueItemThree, setNestedValueItemThree] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNestedChange = (event, newValue) => {
    setNestedValue(newValue);
  };

  const handleNestedChangeItemTwo = (event, newValue) => {
    setNestedValueItemTwo(newValue);
  };

  const handleNestedChangeItemThree = (event, newValue) => {
    setNestedValueItemThree(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginLeft: '20px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <h1>XYZ Bistro</h1>
          <Tab sx={{ marginLeft: '20px' }} label="Lunch" {...a11yProps(1)} />
          <Tab label="Dinner" {...a11yProps(2)} />
          <Tab label="Drinks" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={1}>
        <Tabs value={nestedValue} onChange={handleNestedChange} aria-label="">
          <Tab label="Specials" {...a11yProps(0)} />
          <Tab label="Appetizers" {...a11yProps(1)} />
          <Tab label="Entrees" {...a11yProps(2)} />
          <Tab label="Soups" {...a11yProps(3)} />
        </Tabs>
        <CustomTabPanel value={nestedValue} index={0}>
          Specials Content
        </CustomTabPanel>
        <CustomTabPanel value={nestedValue} index={1}>
          Appetizers Content
        </CustomTabPanel>
        <CustomTabPanel value={nestedValue} index={2}>
          Entrees Content
        </CustomTabPanel>
        <CustomTabPanel value={nestedValue} index={3}>
          Soups Content
        </CustomTabPanel>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Tabs value={nestedValueItemTwo} onChange={handleNestedChangeItemTwo} aria-label="">
          <Tab label="Specials" {...a11yProps(0)} />
          <Tab label="Appetizers" {...a11yProps(1)} />
          <Tab label="Main Course" {...a11yProps(2)} />
          <Tab label="Desserts" {...a11yProps(3)} />
        </Tabs>
        <CustomTabPanel value={nestedValueItemTwo} index={0}>
          Specials Content
        </CustomTabPanel>
        <CustomTabPanel value={nestedValueItemTwo} index={1}>
          Appetizers Content
        </CustomTabPanel>
        <CustomTabPanel value={nestedValueItemTwo} index={2}>
          Main Course Content
        </CustomTabPanel>
        <CustomTabPanel value={nestedValueItemTwo} index={3}>
          Deserts Content
        </CustomTabPanel>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Tabs value={nestedValueItemThree} onChange={handleNestedChangeItemThree} aria-label="">
          <Tab label="Non-Alcoholic" {...a11yProps(0)} />
          <Tab label="Alcoholic" {...a11yProps(1)} />
        </Tabs>
        <CustomTabPanel value={nestedValueItemThree} index={0}>
          Non-Alcoholic Content
        </CustomTabPanel>
        <CustomTabPanel value={nestedValueItemThree} index={1}>
          Alcoholic Content
        </CustomTabPanel>
      </CustomTabPanel>
    </Box>
  );
}
