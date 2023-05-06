const db = require("../db");

const getBlogs = (req, res) => {
  db.query("SELECT * FROM blogs", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

const createBlog = (req, res) => {
  if (!req.body) {
    res.send(404).json({ message: "empty blog" });
  }
  const values = [req.body.title, req.body.text];
  db.query("INSERT INTO blogs(title,text) VALUES(?,?)", values, function (err,result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { getBlogs, createBlog };
