import { Router, Request, Response } from "express";

const router = Router();

//model

import Persona from "../models/Personas";

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.render("personas/create");
  })
  .post(async (req: Request, res: Response) => {
    const { nombre, cedula, apellido, edad, telefono } = req.body;
    const newDoctor = new Persona({
      nombre,
      cedula,
      apellido,
      edad,
      telefono,
    });
    console.log();
    await newDoctor.save();
    res.redirect("/personas/list");
  });

router.route("/list").get(async (req: Request, res: Response) => {
  const personas = await Persona.find({}).lean();
  console.log(personas);
  res.render("personas/list", { personas });
});

router.route("/delete/:id").get(async (req: Request, res: Response) => {
  const { id } = req.params;
  await Persona.findByIdAndDelete(id);
  res.redirect("/personas/list");
});

router
  .route("/edit/:id")
  .get(async (req: Request, res: Response) => {
    const { id } = req.params;
    const personas = await Persona.findById(id).lean();
    res.render("personas/edit", { personas });
  })
  .post(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, cedula, apellido, edad, telefono } = req.body;
    await Persona.findByIdAndUpdate(id, {
      nombre,
      cedula,
      apellido,
      edad,
      telefono,
    }).lean();
    res.redirect("/personas/list");
  });
export default router;
