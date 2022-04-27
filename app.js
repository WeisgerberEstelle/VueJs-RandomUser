const app = Vue.createApp({
    data() {
        return {
            firstname: 'John',
            lastname:'Doe',
            email: 'john@gmail.com',
            gender:'male',
            picture:'https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg',

        }
    },

    methods:{
        async getUser() {
            const res = await fetch('https://randomuser.me/api/');
            const {results} = await res.json();
            console.log(results);
            this.firstname= results[0].name.first;
            this.lastname=results[0].name.last;
            this.email= results[0].email;
            this.gender=results[0].gender;
            this.picture=results[0].picture.large;
        }
    }
})

app.mount('#app')