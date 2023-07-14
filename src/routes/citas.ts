import { Router, Request, Response } from "express";

const router = Router();

//model

import Citas from "../models/Citas";
import Personas from "../models/Personas";

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.render("citas/create");
  })
  .post(async (req: Request, res: Response) => {
    const { cedula, especialidad } = req.body;

    const newCita = new Citas({
      cedula,
      especialidad,
    });
    console.log();
    await newCita.save();
    res.redirect("/citas/list");
  });

  router
  .route("/detalle/:id")
  .get(async (req: Request, res: Response) => {
    const { id } = req.params;
    const citas = await Citas.findById(id).lean();
    res.render("citas/detalle", { citas });
  })
  .post(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { cedula, especialidad } = req.body;
    await Citas.findByIdAndUpdate(id, {
      cedula,
      especialidad,
    }).lean();
    res.redirect("/citas/list");
  });


router.route("/list").get(async (req: Request, res: Response) => {
  const citas = await Citas.find({}).lean();
  console.log(citas);
  res.render("citas/list", { citas });
});

router.route("/delete/:id").get(async (req: Request, res: Response) => {
  const { id } = req.params;
  await Citas.findByIdAndDelete(id);
  res.redirect("/citas/list");
});

router
  .route("/edit/:id")
  .get(async (req: Request, res: Response) => {
    const { id } = req.params;
    const citas = await Citas.findById(id).lean();
    res.render("citas/edit", { citas });
  })
  .post(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { cedula, especialidad } = req.body;
    await Citas.findByIdAndUpdate(id, {
      cedula,
      especialidad,
    }).lean();
    res.redirect("/citas/list");
  });
export default router;
