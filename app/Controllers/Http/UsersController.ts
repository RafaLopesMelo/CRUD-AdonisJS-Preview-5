import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from '../../Models/User';

export default class UsersController {

    public async index({response}: HttpContextContract) {
        const users = await User.all();
        return response.json(users);
    }

    public async store({request, response}: HttpContextContract) {
        const { username, password } = request.all();
        const user = new User();
        user.username = username;
        user.password = password;

        await user.save();
        return response.json(user.$isPersisted)
    }

    public async show({params, response}: HttpContextContract) {
        const { id } = params
        const user = await User.find(id);
        return response.json(user);
    }

    public async update({params, request, response}: HttpContextContract) {
        const { id }  = params;
        const { username, password } = request.all();
        const user = await User.findOrFail(id)
        user.username = username || user.username;
        user.password = password || user.password;

        await user.save();
        return response.json(user);
    }

    public async destroy({params, response}: HttpContextContract) {
        const { id } = params;
        const user = await User.findOrFail(id);

        await user.delete()
        return response.status(204);
    }
}
