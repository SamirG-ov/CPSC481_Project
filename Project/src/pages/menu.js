import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItemContent from '../components/menuItemContent';

import LasagnaImg from '../assets/lasagna.jpg';
import MeatRavioli from '../assets/meatRavioli.jpg';
import Cacciatora from '../assets/Cacciatora.jpg';
import ParmChicken from '../assets/parmChicken.jpg';
import Risotto from '../assets/Risotto.jpeg';

import Feedback from './feedback';

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
          <Tab sx={{ marginLeft: 'auto', marginRight: '20px' }} label="Feedback" {...a11yProps(4)} />
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
          <MenuItemContent
            category="Specials"
            items={[
              {
                name: "Lasagna",
                price: "$12",
                description: "Click for more information",
                image: LasagnaImg,
                // destination: "feedback",
                description2: "Our Classic Lasagna offers a delectable journey through layers of perfectly cooked pasta, savory meats, and a symphony of cheeses, all embraced by a rich tomato sauce. Each bite promises a harmonious blend of flavors and textures, from the creamy ricotta to the golden-baked edges, creating a comforting and satisfying experience that embodies the essence of Italian cuisine.",
              },
              {
                name: "Chicken Parmesan",
                price: "$16",
                description: "Click for more information",
                image: ParmChicken,
                description2: "Dive into a culinary delight with our Chicken Parmesan, where tender chicken cutlets are lovingly breaded, fried to golden perfection, and smothered in tangy marinara sauce. Topped with a blanket of melted mozzarella and Parmesan cheeses, every bite offers a symphony of flavors that dance on your palate. Served alongside a bed of al dente spaghetti or a fresh salad, this classic dish is a timeless favorite that promises to satisfy your cravings and leave you longing for more.",
              },
              {
                name: "Meat Raviolli",
                price: "$18",
                description: "Click for more information",
                image: MeatRavioli,
                description2: "Transport yourself to the heart of Italy with our Beef Ravioli, a sumptuous dish that embodies the essence of Italian cuisine. Each handmade pasta parcel is filled with a savory blend of seasoned ground beef, fresh herbs, and creamy ricotta cheese, creating a harmonious marriage of flavors. Topped with a vibrant tomato sauce, fragrant basil, and a sprinkle of Parmesan cheese, every bite is a celebration of tradition and taste. Served alongside a crisp green salad and a glass of robust red wine, this classic dish invites you to savor the simple pleasures of Italian cooking. Buon appetito!",
              },
              {
                name: "Risotto",
                price: "$16",
                description: "Click for more information",
                image: Risotto,
                description2: "Embark on a culinary journey to Italy with our Risotto ai Funghi, a velvety Arborio rice dish infused with the earthy richness of wild mushrooms. Each spoonful reveals layers of flavor, from the nutty aroma of Parmesan cheese to the subtle hint of garlic and white wine. Slow-cooked to creamy perfection and finished with a drizzle of truffle oil and a sprinkle of fresh parsley, this classic Italian comfort food is a testament to simplicity and sophistication.",
              },
              {
                name: "Cacciatora",
                price: "$15",
                description: "Click for more information",
                image: Cacciatora,
                description2: "Experience the rustic charm of Italian countryside cuisine with our Pollo alla Cacciatora, a hearty chicken stew simmered to perfection in a flavorful tomato sauce. Tender chicken pieces are marinated with fragrant herbs, garlic, and onions, then slow-cooked until they melt in your mouth. Served alongside creamy polenta or al dente pasta, this soul-warming dish is a tribute to the timeless tradition of home-cooked meals in Italy.",
              }
            ]}
          />
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
      <CustomTabPanel value={value} index={4}>
        <Feedback/>
      </CustomTabPanel>
    </Box>
  );
}
