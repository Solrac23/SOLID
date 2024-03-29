import { IUsersRepository } from "../../repositories/IUsersRepositor";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../models/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase{
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ){}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if(userAlreadyExists){
      throw new Error('User already exists.')
    }

    const user = new User(data)

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe do Meu App",
        email: "Equipe@meuapp.com"
      },
      subject: "Seja bem-vindo a plataforma",
      body: "<p>Voçê já pode fazer login em nossa plataforma.</p>"
    })
  }
}