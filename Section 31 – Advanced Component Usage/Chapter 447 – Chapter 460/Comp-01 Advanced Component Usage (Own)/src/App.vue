<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New Quote</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                    <!-- This code below will be the defult content,
                    if the component children dont have content -->
                    <p>Default Content</p>
                    </component>
                </keep-alive>
                <!-- <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p>A Wonderful Quote</p>
                </app-quote> -->
                <hr>
                <app-author></app-author>
            </div>
        </div>
    </div>
</template>

<script>
import Queue from './components/Quote.vue';
import Author from './components/Quote.vue';
import NewQuote from './components/Quote.vue';

export default {
    data: function() {
        return {
            quoteTitle: 'The Quote',
            selectedComponent: 'appQuote'
        }
    },
    components: {
        appQuote: Quote,
        appAuthor: Author,
        appNew: NewQuote
    }
}
</script>

<style scoped>
h2 {
    color: red;
}
</style>
