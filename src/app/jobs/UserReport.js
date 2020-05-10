
module.exports = {
    key: 'UserReport',
    async handle({ data }) {
        const { user } = data;

       console.log(user);
    }
}