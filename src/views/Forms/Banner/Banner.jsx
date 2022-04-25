import React from "react";
import "./Banner.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Баннер зураг</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Баннер зургаа оруулна уу</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <input type="text" placeholder="Линк" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Хадгалах</button>
      </form>
    </div>
  );
};

export default NewProduct;
