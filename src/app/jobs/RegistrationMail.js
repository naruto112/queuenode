const Mail = require('../lib/Mail');


module.exports = {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'Queue Teste <queue@queuetest.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuario',
            html: `Olá, ${user.name}, bem vindo ao sistema de filas`
        });
    }
}