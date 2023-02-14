// eslint-disable-next-line import/no-named-as-default
import User from '../models/user';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json({ body: users });
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['ID não enviado'] });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({ errors: ['Usuário não encontrado'] });
      }
      user.update(req.body);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      await user.destroy();
      return res.status(204).json({ body: 'usuario deletado' });
    } catch (error) {
      return res.json(null);
    }
  }
}

export default new UserController();
