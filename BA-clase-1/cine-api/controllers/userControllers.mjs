import bcrypt from 'bcryptjs';
import User from '../models/Users.mjs';

const registerUser = async (req, res) => {
  const { dni, nombres, apellidos, fechaNacimiento, rol, telefono, correo, password, username } = req.body;

  try {
    let user = await User.findOne({ correo });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    user = new User({
      dni,
      nombres,
      apellidos,
      fechaNacimiento,
      rol,
      telefono,
      correo,
      password,
      username,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json({ msg: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error del servidor');
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error del servidor');
  }
};

export { registerUser, getUserProfile };