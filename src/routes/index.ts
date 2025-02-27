import {
  createUser,
  getUserById,
  getUsers,
} from "../controllers/userController";
import { Router } from "express";
import checkLoggedIn from "../middleware/checkLoggedIn";
import checkPageOwnership from "../middleware/checkPageOwnership";
import {
  createPage,
  getPageById,
  getPages,
} from "../controllers/pageController";
import {
  createLink,
  getLinkById,
  getLinks,
} from "../controllers/linkController";
import { getAnalytics } from "../controllers/analyticsController";

const router = Router();

// User routes
router.get("/users", getUsers);
router.post("/users", createUser);
router.get("/users/:id", getUserById);

// Page routes
router.get("/pages", getPages);
router.post("/pages", checkLoggedIn, createPage);
router.get("/pages/:id", getPageById);
router.put("/pages/:id", checkLoggedIn, checkPageOwnership, createPage); // Update a page

// Link routes
router.get("/links", getLinks);
router.post("/links", checkLoggedIn, createLink);
router.get("/links/:id", getLinkById);

// Analytics routes
router.get("/analytics", getAnalytics);

export default router;
