import Joi from 'joi';

type AddCompanyData = {
  id: string;
};

const addCompanySchema = Joi.object<AddCompanyData>({
  id: Joi.string().required(),
});

export default addCompanySchema;
