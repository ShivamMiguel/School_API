import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      name: 'Antonio',
      sobrenome: 'Miguel',
      email: 'gongamiguel@gmail.',
      idade: 20,
      peso: 60.8,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
