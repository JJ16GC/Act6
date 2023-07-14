import { Router, Request, Response } from "express";

const router = Router();

//model

import Doctor from "../models/Doctores";

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.render("doctores/create");
  })
  .post(async (req: Request, res: Response) => {
    const { nombre, apellido, especialidad, consultorio, correo } = req.body;
    const newDoctor = new Doctor({
      nombre,
      apellido,
      especialidad,
      consultorio,
      correo,
    });
    console.log();
    await newDoctor.save();
    res.redirect("/doctores/list");
  });

router.route("/list").get(async (req: Request, res: Response) => {
  const doctores = await Doctor.find({}).lean();
  console.log(doctores);
  res.render("doctores/list", { doctores });
});

router.route("/delete/:id").get(async (req: Request, res: Response) => {
  const { id } = req.params;
  await Doctor.findByIdAndDelete(id);
  res.redirect("/doctores/list");
});

router
  .route("/edit/:id")
  .get(async (req: Request, res: Response) => {
    const { id } = req.params;
    const doctores = await Doctor.findById(id).lean();
    res.render("doctores/edit", { doctores });
  })
  .post(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, apellido, especialidad, consultorio, correo } = req.body;
    await Doctor.findByIdAndUpdate(id, {
      nombre,
      apellido,
      especialidad,
      consultorio,
      correo,
    }).lean();
    res.redirect("/doctores/list");
  });
export default router;
