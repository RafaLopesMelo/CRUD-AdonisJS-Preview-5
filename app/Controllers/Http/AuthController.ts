import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Hash from '@ioc:Adonis/Core/Hash';
import User from '../../Models/User';

export default class AuthController {
    public async login({request, response}: HttpContextContract) {
        const { username, password } = request.all();
        const user = await User.findBy('username', username);

        if (!user) return response.json({message: "Incorret username"});

        const isValid = await Hash.verify(user.password, password)

        if(isValid) return response.json(user);
        
        return response.json({message: "Incorrect password"});
    }


}