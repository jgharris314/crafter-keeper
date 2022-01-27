/**
 * Defines the router for Accounts resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./accounts.controller");

router.route("/update/:user_id").put(controller.update).all(methodNotAllowed);

router.route("/authorize").post(controller.authorize).all(methodNotAllowed);

router
	.route("/:username")
	.get(controller.listAccountByUsername)
	.all(methodNotAllowed);
router
	.route("/")
	.get(controller.list)
	.post(controller.create)
	.all(methodNotAllowed);

module.exports = router;
