export const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.parse(req.body);
    next();
  } catch (error) {
    console.log(error.errors);
    if(Array.isArray(error.errors)){
        return res.status(422).json(error.errors.map((err) => err.message));
    }
    return res.status(400).json(error.message)
  }
};
