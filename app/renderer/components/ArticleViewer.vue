<template>
    <div>
        <Article
            v-for="(article, index) in articles" :key="index"
            :title="article.title"
            :description="article.description"
        ></Article>
        <button
            v-if="articles.length < 5"
            @click="addArticle"
        >+</button>
    </div>
</template>

<script>
import Article from '@components/Article'

export default {
    name: 'ArticleViewer',
    components: {
        Article
    },
    computed: {
        articles() {
            return this.$store.getters['articles']
        },
        evenArticles() {
            return this.articles
                .filter((article, index) => index % 2 == 0)
        }
    },
    methods: {
        addArticle() {
            this.$store.dispatch('addArticle', {
                title: `Article ${this.articles.length + 1}`,
                description: 'toto'
            })
        }
    },
    mounted() {
        this.$store.dispatch('fetchArticles')
    }
}
</script>

<style scoped>

</style>