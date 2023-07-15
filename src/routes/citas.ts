import { Router, Request, Response } from "express";

const router = Router();

//model

import Citas from "../models/Citas";
import Persona from "../models/Personas";
import Doctores from "../models/Doctores";

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.render("citas/create");
  })
  .post(async (req: Request, res: Response) => {
    const personas = await Persona.find({}).lean();
    const doctor = await Doctores.find({}).lean();
    const { cedula, especialidad } = req.body;
    const resultadop = await Persona.findOne({ cedula });
    const resultadod = await Doctores.findOne({ especialidad });
    if (resultadop) {
      if (resultadod) {
        console.log(personas);
        const newCita = new Citas({
          cedula,
          especialidad,
        });
        console.log();
        await newCita.save();
        res.redirect("/citas/list");
      } else {
        res.render("citas/exceptions/error_doc");
      }
    } else {
      res.render("citas/exceptions/error_per");
    }
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

router
  .route("/detalle/:cedula/:especialidad")
  .get(async (req: Request, res: Response) => {
    const { cedula, especialidad } = req.params;
    const citas = await Citas.findOne({ cedula }).lean();
    const personas = await Persona.findOne({ cedula }).lean();
    const doctor = await Doctores.findOne({ especialidad }).lean();
    res.render("citas/detalle", { citas, personas, doctor });
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
