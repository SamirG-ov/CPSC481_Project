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
import BackButton from "../components/backButton";

import LasagnaImg from "../assets/lasagna.jpg";
import ParmChicken from "../assets/parmChicken.jpg";
import Nachos from "../assets/nachos.jpg";
import ChickenWings from "../assets/chickenWings.jpg";
import Spaghetti from "../assets/spaghetti.jpg";
import MeatRavioli from "../assets/meatRavioli.jpg";
import Cacciatora from "../assets/Cacciatora.jpg";
import Risotto from "../assets/Risotto.jpeg";
import MozzarellaSticks from "../assets/mozzarellaSticks.jpeg";
import GarlicBread from "../assets/garlicBread.jpg";
import ChickenAlfredo from "../assets/chickenAlfredo.jpg";
import ShrimpScampi from "../assets/shrimpScampi.jpg";
import VegetableStirFry from "../assets/veggieStirFry.jpg";
import Minestrone from "../assets/minestrone.jpg";
import ClamChowder from "../assets/clamChowder.jpg";
import FrenchOnion from "../assets/frenchOnion.jpg";
import TomatoBasil from "../assets/tomatoBasil.jpg";

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
  const params = new URLSearchParams(location.search);
  const initialTab = parseInt(params.get("tab")) || 0; // Parse the tab parameter from the URL

  const [value, setValue] = React.useState(initialTab);
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
        <BackButton />
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
                  "Layers of pasta, seasoned ground beef, Italian sausage, fresh vegetables, Bolognese sauce, béchamel, topped with melted mozzarella and Parmesan.",
              },
              {
                name: "Chicken Parmesan",
                price: "$16",
                className: "menu-item",
                image: ParmChicken,
                description:
                  "Breaded chicken breast topped with marinara sauce and melted mozzarella cheese. Served with a side of spaghetti.",
              },
              {
                name: "Cacciatora",
                price: "$15",
                className: "menu-item",
                image: Cacciatora,
                description:
                  "Juicy chicken pieces simmered in a flavorful tomato sauce with bell peppers, onions, mushrooms, and Italian herbs. Served over a bed of pasta or with crusty bread for dipping.",
              },
              {
                name: "Risotto",
                price: "$16",
                className: "menu-item",
                image: Risotto,
                description:
                  "Creamy Arborio rice cooked with white wine, Parmesan cheese, and a medley of wild mushrooms. Finished with a drizzle of truffle oil and fresh parsley.",
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
                className: "menu-item",
                image: Nachos,
                description:
                  "Tortilla chips smothered in melted cheese, topped with jalapenos, black olives, and sour cream.",
              },
              {
                name: "Chicken Wings",
                price: "$12",
                className: "menu-item",
                image: ChickenWings,
                description:
                  "Crispy chicken wings tossed in your choice of sauce: Buffalo, BBQ, or Teriyaki. Served with celery sticks and ranch or blue cheese dressing.",
              },
              {
                name: "Mozzarella Sticks",
                price: "$8",
                className: "menu-item",
                image: MozzarellaSticks,
                description:
                  "Golden fried mozzarella sticks served with marinara sauce for dipping.",
              },
              {
                name: "Garlic Bread",
                price: "$6",
                className: "menu-item",
                image: GarlicBread,
                description:
                  "Toasted French bread topped with garlic butter. Served with marinara sauce.",
              },
            ]}
          />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValue} index={2}>
          <MenuItemContent
            category="Entrees"
            items={[
              {
                name: "Chicken Alfredo",
                price: "$18",
                className: "menu-item",
                image: ChickenAlfredo,
                description:
                  "Grilled chicken breast served over fettuccine pasta tossed in creamy Alfredo sauce. Served with garlic bread.",
              },
              {
                name: "Spaghetti and Meatballs",
                price: "$21",
                className: "menu-item",
                image: Spaghetti,
                description:
                  "Spaghetti smothered in rich marinara sauce and topped with savory meatballs. Served with garlic bread.",
              },
              {
                name: "Shrimp Scampi",
                price: "$22",
                className: "menu-item",
                image: ShrimpScampi,
                description:
                  "Tender shrimp sautéed in garlic butter and white wine, served over a bed of linguine. Served with garlic bread.",
              },
              {
                name: "Vegetable Stir-Fry",
                price: "$15",
                className: "menu-item",
                image: VegetableStirFry,
                description:
                  "Fresh vegetables stir-fried in a savory sauce, served over steamed rice.",
              },
            ]}
          />
        </CustomTabPanel>

        <CustomTabPanel value={nestedValue} index={3}>
          <MenuItemContent
            category="Soups"
            items={[
              {
                name: "Minestrone",
                price: "$8",
                className: "menu-item",
                image: Minestrone,
                description:
                  "A hearty vegetable soup made with tomatoes, beans, pasta, and seasonal vegetables. Served with crusty bread.",
              },
              {
                name: "Clam Chowder",
                price: "$10",
                className: "menu-item",
                image: ClamChowder,
                description:
                  "A creamy soup made with clams, potatoes, onions, and celery. Served with oyster crackers.",
              },
              {
                name: "French Onion",
                price: "$9",
                className: "menu-item",
                image: FrenchOnion,
                description:
                  "A rich beef broth filled with caramelized onions and topped with melted cheese and croutons.",
              },
              {
                name: "Tomato Basil",
                price: "$7",
                className: "menu-item",
                image: TomatoBasil,
                description:
                  "A classic tomato soup made with ripe tomatoes, fresh basil, and a touch of cream. Served with a grilled cheese sandwich.",
              },
            ]}
          />
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
          <MenuItemContent
            category="Specials"
            items={[
              {
                name: "Meat Raviolli",
                price: "$18",
                className: "menu-item",
                image: MeatRavioli,
                description:
                  "Delicious ravioli stuffed with ground beef, Parmesan cheese, and Italian herbs. Served with marinara sauce and garlic bread.",
              },
            ]}
          />
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
                rating: "4",
                price: "$18",
                className: "menu-item",
                image: MeatRavioli,
                description:
                  "Delicious ravioli stuffed with ground beef, Parmesan cheese, and Italian herbs. Served with marinara sauce and garlic bread.",
              },
              {
                name: "Risotto",
                rating: "3",
                price: "$16",
                className: "menu-item",
                image: Risotto,
                description:
                  "Creamy Arborio rice cooked with white wine, Parmesan cheese, and a medley of wild mushrooms. Finished with a drizzle of truffle oil and fresh parsley.",
              },
              {
                name: "Cacciatora",
                rating: "5",
                price: "$15",
                className: "menu-item",
                image: Cacciatora,
                description:
                  "Juicy chicken pieces simmered in a flavorful tomato sauce with bell peppers, onions, mushrooms, and Italian herbs. Served over a bed of pasta or with crusty bread for dipping.",
              },
              {
                name: "Lasagna",
                price: "$12",
                rating: "4",
                className: "menu-item",
                image: LasagnaImg,
                description:
                  "Layers of pasta, seasoned ground beef, Italian sausage, fresh vegetables, Bolognese sauce, béchamel, topped with melted mozzarella and Parmesan.",
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
