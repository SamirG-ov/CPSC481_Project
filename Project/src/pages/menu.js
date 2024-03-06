import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItemContent from "../components/menuItemContent";
import "../styles/menu.css";

import LasagnaImg from "../assets/lasagna.jpg";
import ParmChicken from "../assets/parmChicken.jpg";
import Nachos from "../assets/nachos.jpg";
import ChickenWings from "../assets/chickenWings.jpg";
import Spaghetti from "../assets/spaghetti.jpg";
import CokeImg from "../assets/coke.jpg";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Menu() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(1);
  const [nestedValue, setNestedValue] = React.useState(0);
  const [nestedValueItemTwo, setNestedValueItemTwo] = React.useState(0);

  const [nestedValueItemThree, setNestedValueItemThree] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");

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
    <div>
      <header>
        <div className="logo">
          <h1>
            <span style={{ color: "red" }}>X</span>
            <span style={{ color: "blue" }}>Y</span>
            <span style={{ color: "green" }}>Z</span> Bistro
          </h1>
          <p>Since 2015</p>
        </div>
        <Box sx={{ width: "100%", paddingLeft: "20px" }}>
          <Tabs
            className="menu-tabs"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { backgroundColor: "#32cd32" } }}
          >
            <Tab className="tab" label="Lunch" {...a11yProps(1)} />
            <Tab className="tab" label="Dinner" {...a11yProps(2)} />
            <Tab className="tab" label="Drinks" {...a11yProps(3)} />
          </Tabs>
        </Box>
      </header>

      <CustomTabPanel value={value} index={0}>
        <Tabs
          value={nestedValue}
          onChange={handleNestedChange}
          aria-label=""
          TabIndicatorProps={{ style: { backgroundColor: "#32cd32" } }}
        >
          <Tab className="sub-tab" label="Specials" {...a11yProps(0)} />
          <Tab className="sub-tab" label="Appetizers" {...a11yProps(1)} />
          <Tab className="sub-tab" label="Entrees" {...a11yProps(2)} />
          <Tab className="sub-tab" label="Soups" {...a11yProps(3)} />
        </Tabs>

        <CustomTabPanel value={nestedValue} index={0}>
          <MenuItemContent
            category="Specials"
            items={[
              {
                name: "Lasagna",
                price: "$12",
                description:
                  "Layers of delicate pasta sheets smothered in rich marinara sauce, creamy ricotta cheese, and savory ground beef, all topped with a blanket of gooey melted mozzarella. Served with garlic bread.",
                image: LasagnaImg,
                className: "menu-item",
              },
              {
                name: "Chicken Parmesan",
                price: "$16",
                description:
                  "Tender, juicy chicken breast breaded and fried to perfection, then smothered in rich marinara sauce and melted mozzarella cheese. Served with a side of spaghetti.",
                image: ParmChicken,
                className: "menu-item",
              },
            ]}
          />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValue} index={1}>
          <MenuItemContent
            category="Appetizers"
            items={[
              {
                name: "Nachos",
                price: "$10",
                description:
                  "Tortilla chips smothered in melted cheese, topped with jalapenos, black olives, and sour cream.",
                image: Nachos,
                className: "menu-item",
              },
              {
                name: "Chicken Wings",
                price: "$12",
                description:
                  "Crispy chicken wings tossed in your choice of sauce: Buffalo, BBQ, or Teriyaki. Served with celery sticks and ranch or blue cheese dressing.",
                image: ChickenWings,
                className: "menu-item",
              },
            ]}
          />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValue} index={2}>
          <MenuItemContent
            category="Entrees"
            items={[
              {
                name: "Chicken Parmesan",
                price: "$16",
                description:
                  "Tender, juicy chicken breast breaded and fried to perfection, then smothered in rich marinara sauce and melted mozzarella cheese. Served with a side of spaghetti.",
                image: ParmChicken,
                className: "menu-item",
              },
              {
                name: "Spaghetti and Meatballs",
                price: "$21",
                description:
                  "Spaghetti smothered in rich marinara sauce and topped with savory meatballs. Served with garlic bread.",
                image: Spaghetti,
                className: "menu-item",
              },
            ]}
          />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValue} index={3}>
          <MenuItemContent category="Soups" items={[]} />
        </CustomTabPanel>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Tabs
          value={nestedValueItemTwo}
          onChange={handleNestedChangeItemTwo}
          aria-label=""
          TabIndicatorProps={{ style: { backgroundColor: "#32cd32" } }}
        >
          <Tab className="sub-tab" label="Specials" {...a11yProps(0)} />
          <Tab className="sub-tab" label="Appetizers" {...a11yProps(1)} />
          <Tab className="sub-tab" label="Main Courses" {...a11yProps(2)} />
          <Tab className="sub-tab" label="Desserts" {...a11yProps(3)} />
        </Tabs>

        <CustomTabPanel value={nestedValueItemTwo} index={0}>
          <MenuItemContent category="Specials" items={[]} />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValueItemTwo} index={1}>
          <MenuItemContent category="Appetizers" items={[]} />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValueItemTwo} index={2}>
          <MenuItemContent category="Main Courses" items={[]} />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValueItemTwo} index={3}>
          <MenuItemContent category="Desserts" items={[]} />
        </CustomTabPanel>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Tabs
          value={nestedValueItemThree}
          onChange={handleNestedChangeItemThree}
          aria-label=""
          TabIndicatorProps={{ style: { backgroundColor: "#32cd32" } }}
        >
          <Tab className="sub-tab" label="Non-Alcoholic" {...a11yProps(0)} />
          <Tab className="sub-tab" label="Alcoholic" {...a11yProps(1)} />
        </Tabs>

        <CustomTabPanel value={nestedValueItemThree} index={0}>
          <MenuItemContent category="Non-Alcoholic" items={[]} />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValueItemThree} index={1}>
          <MenuItemContent category="Alcoholic" items={[]} />
        </CustomTabPanel>
      </CustomTabPanel>
    </div>
  );
}
