export default {
    state: {
        articles: []
    },
    getters: {
        articles(state) {
            return state.articles
        }
    },
    mutations: {
        ADD_ARTICLE(state, article) {
            state.articles.push(article)
        }
    },
    actions: {
        addArticle({ commit }, article) {
            commit('ADD_ARTICLE', article)
        },
        fetchArticles({ commit }) {
            const articles = [
                { title: 'Article 1', description: 'toto' },
                { title: 'Article 2', description: 'toto' },
                { title: 'Article 3', description: 'toto' }
            ]
            for (let article of articles) {
                commit('ADD_ARTICLE', article)
            }
        }
    }
}