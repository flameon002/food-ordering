import mongoose from 'mongoose';
import User from '../../../models/User.js'

// export default async function handler(req, res) {
//   const { method, body } = req;

//   mongoose.connect(process.env.MONGO_URL);

//   switch (method) {
//     case 'POST':
//       return checkUser(body, res);
//       console.log('user created');
//     default:
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Método ${method} no permitido`);
//   }
// }

async function checkUser(data, res) {
  const { email } = data;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'El usuario ya existe.' });
    }

    return res.status(200).json({ message: 'Usuario disponible para registro.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al verificar el usuario.' });
  }
}