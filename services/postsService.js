var getPosts = function ()
{
    var posts = 
    [
        {
            id: 1,
            title: 'Trabalhe Conosco',
            image: 'post1.jpg',
            description: 'Veja as Vagas que temos em aberto',
            body: 'Lista com as vagas que temos em aberto atualmente.',            
        },
        {
            id: 2,
            title: 'Dicas de RH',
            image: 'post2.jpg',
            description: 'Foi mal na última entrevista? veja nossas dicas',
            body: 'Costuma ficar nervoso durante as entrevistas? Não sabe o que os entrevistadores vão lhe pergunrtar? Se prepare com as dicas de nossos analistas'
        },
        {
            id: 3,
            title: 'Melhore Seu CV',
            image: 'post3.jpg',
            description: 'Seu curricilum não está legal? veja nossas dicas',
            body: 'Como preparar seu curriculum para que você possa melhorar sua visibilidade e conseguir vagas melhores'
        },
    ];
return posts;
}

module.exports = 
{
    getPosts: getPosts
}