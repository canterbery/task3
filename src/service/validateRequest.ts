import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e) {
      let errorMessage = "";
      if (e instanceof Error) {
        errorMessage = e.message;
      }

      return res.status(400).send(errorMessage);
    }
  };

export default validate;
