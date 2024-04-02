import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItemContent from "../components/menuItemContent";
import Feedback from "./feedback";
import "../styles/menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import LasagnaImg from "../assets/lasagna.jpg";
import ParmChicken from "../assets/parmChicken.jpg";
import Nachos from "../assets/nachos.jpg";
import ChickenWings from "../assets/chickenWings.jpg";
import Spaghetti from "../assets/spaghetti.jpg";
import MeatRavioli from "../assets/meatRavioli.jpg";
import Cacciatora from "../assets/Cacciatora.jpg";
import Risotto from "../assets/Risotto.jpeg";

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
  // const navigate = useNavigate();
  const location = useLocation(); //TODO: use this to get the meal type

  const [value, setValue] = React.useState(0);
  const [nestedValue, setNestedValue] = React.useState(0);
  const [nestedValueItemTwo, setNestedValueItemTwo] = React.useState(0);

  const [nestedValueItemThree, setNestedValueItemThree] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState(""); //TODO: use this to search for items

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
      <header style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            position: "fixed",
            left: "0",
          }}
        >
          <button
            style={{
              color: "black",
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
              fontSize: "30px",
            }}
            type="button"
            onClick={() => window.history.back()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className="logo">
          <h1 style={{ fontSize: "40px", margin: "20px 0px 5px 0px" }}>
            <span style={{ color: "red" }}>X</span>
            <span style={{ color: "blue" }}>Y</span>
            <span style={{ color: "green" }}>Z</span> Bistro
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              margin: "2px 0px 5px 0px",
              fontWeight: "bold",
            }}
          >
            Since 2015
          </p>
        </div>
        <Box sx={{ width: "100%", paddingLeft: "20px" }}>
          <Tabs
            className="menu-tabs"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { backgroundColor: "#148014" } }}
          >
            <Tab
              className="tab"
              style={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
              label="Lunch"
              {...a11yProps(1)}
            />
            <Tab
              className="tab"
              style={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
              label="Dinner"
              {...a11yProps(2)}
            />
            <Tab
              className="tab"
              style={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
              label="Drinks"
              {...a11yProps(3)}
            />
            <Tab
              className="tab"
              style={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
              label="Recommendations"
              {...a11yProps(4)}
            />
            <Tab
              className="tab"
              style={{
                marginLeft: "auto",
                fontWeight: "bold",
                fontSize: "15px",
              }}
              label="Feedback"
              {...a11yProps(5)}
            />
          </Tabs>
        </Box>
      </header>
      <CustomTabPanel value={value} index={0}>
        <Tabs
          value={nestedValue}
          onChange={handleNestedChange}
          aria-label=""
          TabIndicatorProps={{ style: { backgroundColor: "#148014" } }}
        >
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Specials"
            {...a11yProps(0)}
          />
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Appetizers"
            {...a11yProps(1)}
          />
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Entrees"
            {...a11yProps(2)}
          />
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Soups"
            {...a11yProps(3)}
          />
        </Tabs>

        <CustomTabPanel value={nestedValue} index={0}>
          <MenuItemContent
            category="Specials"
            items={[
              {
                name: "Lasagna",
                price: "$12",
                className: "menu-item",
                image: LasagnaImg,
                description:
                  "Our Classic Lasagna offers a delectable journey through layers of perfectly cooked pasta, savory meats, and a symphony of cheeses, all embraced by a rich tomato sauce. Each bite promises a harmonious blend of flavors and textures, from the creamy ricotta to the golden-baked edges, creating a comforting and satisfying experience that embodies the essence of Italian cuisine.",
              },
              {
                name: "Chicken Parmesan",
                price: "$16",
                className: "menu-item",
                image: ParmChicken,
                description:
                  "Dive into a culinary delight with our Chicken Parmesan, where tender chicken cutlets are lovingly breaded, fried to golden perfection, and smothered in tangy marinara sauce. Topped with a blanket of melted mozzarella and Parmesan cheeses, every bite offers a symphony of flavors that dance on your palate. Served alongside a bed of al dente spaghetti or a fresh salad, this classic dish is a timeless favorite that promises to satisfy your cravings and leave you longing for more.",
              },
              {
                name: "Cacciatora",
                price: "$15",
                className: "menu-item",
                image: Cacciatora,
                description:
                  "Experience the rustic charm of Italian countryside cuisine with our Pollo alla Cacciatora, a hearty chicken stew simmered to perfection in a flavorful tomato sauce. Tender chicken pieces are marinated with fragrant herbs, garlic, and onions, then slow-cooked until they melt in your mouth. Served alongside creamy polenta or al dente pasta, this soul-warming dish is a tribute to the timeless tradition of home-cooked meals in Italy.",
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
                image: Nachos,
                description:
                  "Tortilla chips smothered in melted cheese, topped with jalapenos, black olives, and sour cream.",
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
                description: "Click for more information",
                description2:
                  "Tender, juicy chicken breast breaded and fried to perfection, then smothered in rich marinara sauce and melted mozzarella cheese. Served with a side of spaghetti.",
                image: ParmChicken,
                className: "menu-item",
              },
              {
                name: "Spaghetti and Meatballs",
                price: "$21",
                description: "Click for more information",
                description2:
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
          TabIndicatorProps={{ style: { backgroundColor: "#148014" } }}
        >
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Specials"
            {...a11yProps(0)}
          />
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Appetizers"
            {...a11yProps(1)}
          />
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Main Courses"
            {...a11yProps(2)}
          />
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Desserts"
            {...a11yProps(3)}
          />
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
          TabIndicatorProps={{ style: { backgroundColor: "#148014" } }}
        >
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Non-Alcoholic"
            {...a11yProps(0)}
          />
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Alcoholic"
            {...a11yProps(1)}
          />
        </Tabs>

        <CustomTabPanel value={nestedValueItemThree} index={0}>
          <MenuItemContent category="Non-Alcoholic" items={[]} />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValueItemThree} index={1}>
          <MenuItemContent category="Alcoholic" items={[]} />
        </CustomTabPanel>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Tabs
          value={nestedValueItemThree}
          onChange={handleNestedChangeItemThree}
          aria-label=""
          TabIndicatorProps={{ style: { backgroundColor: "#148014" } }}
        >
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Chef Specials"
            {...a11yProps(0)}
          />
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Dietary Preference"
            {...a11yProps(1)}
          />
          <Tab
            className="sub-tab"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
            }}
            label="Secret Menu"
            {...a11yProps(2)}
          />
        </Tabs>

        <CustomTabPanel value={nestedValueItemThree} index={0}>
          <MenuItemContent
            category="Chef Specials"
            items={[
              {
                name: "Meat Raviolli",
                price: "$18",
                className: "menu-item",
                description: "Click for more information",
                image: MeatRavioli,
                description2:
                  "Transport yourself to the heart of Italy with our Beef Ravioli, a sumptuous dish that embodies the essence of Italian cuisine. Each handmade pasta parcel is filled with a savory blend of seasoned ground beef, fresh herbs, and creamy ricotta cheese, creating a harmonious marriage of flavors. Topped with a vibrant tomato sauce, fragrant basil, and a sprinkle of Parmesan cheese, every bite is a celebration of tradition and taste. Served alongside a crisp green salad and a glass of robust red wine, this classic dish invites you to savor the simple pleasures of Italian cooking. Buon appetito!",
              },
              {
                name: "Risotto",
                price: "$16",
                className: "menu-item",
                description: "Click for more information",
                image: Risotto,
                description2:
                  "Embark on a culinary journey to Italy with our Risotto ai Funghi, a velvety Arborio rice dish infused with the earthy richness of wild mushrooms. Each spoonful reveals layers of flavor, from the nutty aroma of Parmesan cheese to the subtle hint of garlic and white wine. Slow-cooked to creamy perfection and finished with a drizzle of truffle oil and a sprinkle of fresh parsley, this classic Italian comfort food is a testament to simplicity and sophistication.",
              },
            ]}
          />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValueItemThree} index={1}>
          <MenuItemContent category="Dietary Preference" items={[]} />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValueItemThree} index={2}>
          <MenuItemContent category="Secret Menu" items={[]} />
        </CustomTabPanel>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <Feedback />
      </CustomTabPanel>
    </div>
  );
}
