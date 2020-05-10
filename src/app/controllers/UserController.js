const Queue = require('../lib/Queue')

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password
        };

        // Adicionar Jobs RegistrationMail na fila
        await Queue.add('RegistrationMail', { user });
        await Queue.add('UserReport', { user });  

        return res.json(user);
    }
}