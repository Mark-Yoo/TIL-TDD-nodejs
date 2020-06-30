// routing 설정
const express = require("express");
const router = express.Router();
const ctrl = require("./user.ctrl");

router.get("/", ctrl.index);
router.get("/:id", ctrl.show);
router.post("/", ctrl.create);
router.delete("/:id", ctrl.destroy);
router.put("/:id", ctrl.update);

module.exports = router;
