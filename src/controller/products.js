/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const modelProduct = require("../model/products");
const commonHelper = require("../helper/common");
const { v4: uuidv4 } = require("uuid");

let productController = {
  getAllProduct: async (req, res) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 5;
      const offset = (page - 1) * limit;
      let sortBY = req.query.sortBY || "name";
      let sort = req.query.sort || "ASC";
      let searchParam = req.query.search || "";
      const result = await modelProduct.selectAllProduct(
        limit,
        offset,
        searchParam,
        sortBY,
        sort
      );
      const {
        rows: [count],
      } = await modelProduct.countData();
      const totalData = parseInt(count.count);
      const totalPage = Math.ceil(totalData / limit);
      const pagination = {
        currentPage: page,
        limit: limit,
        totalData: totalData,
        totalPage: totalPage,
      };
      commonHelper.response(
        res,
        result.rows,
        200,
        "get data success",
        pagination
      );
    } catch (error) {
      console.log(error);
    }
  },
  getDetailProduct: async (req, res) => {
    const id =req.params.id;
    const { rowCount } = await modelProduct.findId(id);
    if (!rowCount) {
      return res.json({
        Message: "data not found",
      });
    }
    modelProduct
      .selectProduct(id)
      .then((result) => {
        commonHelper.response(res, result.rows[0], 200, "get data success");
      })
      .catch((err) => res.send(err));
  },
  createProduct: async (req, res) => {
    const photo = req.file.filename;
    const PORT = process.env.PORT || 5000;
    const DB_HOST = process.env.HOST || "localhost";
    const { name, price, stock, description } = req.body;
    console.log(photo, name, price, stock, description);
    const id = uuidv4();
    let data = {
      id,
      name,
      price,
      stock,
      photo : `http://${DB_HOST}:${PORT}/img/${photo}`,
      description,
    };    
    modelProduct.insertProduct(data)
    .then((result) => {
      commonHelper.response(res, result.rows, 201, "Product created");
    })
    .catch((err) => res.send(err));
  },
  updateProduct: async (req, res) => {
    try {
      const id =req.params.id;
      const photo = req.file.filename;
      const PORT = process.env.PORT || 5000;
      const DB_HOST = process.env.HOST || "localhost";
      const { name, price, stock, description } = req.body;
      const { rowCount } = await modelProduct.findId(id);
      if (!rowCount) {
        return res.json({
          Message: "data not found",
        });
      }
      let data = {
        id,
        name,
        price,
        stock,
        photo : `http://${DB_HOST}:${PORT}/img/${photo}`,
        description,
      };
      modelProduct
        .updateProduct(data)
        .then((result) => {
          commonHelper.response(res, result.rows, 200, "Product updated");
        })
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id =req.params.id;
      const { rowCount } = await modelProduct.findId(id);
      if (!rowCount) {
        return res.json({
          Message: "data not found",
        });
      }
      modelProduct
        .deleteProduct(id)
        .then((result) => {
          commonHelper.response(res, result.rows, 200, "Product deleted");
        })
        .catch((err) => res.send(err));
    } catch (error) {
      console.log();
    }
  },
};

module.exports = productController;
