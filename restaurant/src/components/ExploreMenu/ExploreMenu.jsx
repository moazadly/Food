import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore Our Menu</h2>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((menu, index) => (
          <div
            onClick={() => {
              setCategory((prev) =>
                prev === menu.menu_name ? "All" : menu.menu_name
              );
            }}
            key={index}
            className="explore-menu-list-item"
          >
            <img
              src={menu.menu_image}
              alt={menu.menu_name}
              className={category === menu.menu_name ? "active" : ""}
            />
            <h4 className={category === menu.menu_name ? "text-active" : ""}>
              {menu.menu_name}
            </h4>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
