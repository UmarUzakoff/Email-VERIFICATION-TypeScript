import { Request, Response, Router } from "express";
import { mailhandler, VerifyEmail } from "../controllers/mail.controller";
import { findAll } from "../controllers/users.controller";

const router = Router();

router.get("/", findAll);
router.post("/send", mailhandler);
router.get("/verify", (req: Request, res: Response) => {
    res.render("verify");
});
router.post("/verify", VerifyEmail);

export default router;
