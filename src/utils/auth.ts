import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const encryptPassword = (password: string) => {
  const cost = Number(process.env.HASH_COST);
  const hashedPassword = bcrypt.hashSync(password, cost);
  return hashedPassword;
};

export const verifyPassword = (password: string, hashedPassword: string) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export const generateToken = (id: string) => {
  const token = jwt.sign({ userId: id }, String(process.env.JWT_SECRET), {
    expiresIn: '1h',
  });
  return token;
};
