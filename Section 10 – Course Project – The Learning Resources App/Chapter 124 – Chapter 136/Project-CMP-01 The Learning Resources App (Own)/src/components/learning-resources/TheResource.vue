<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resource')"
            :mode="storeResButtonMode"
            >Stored Resource</base-button>
        <base-button @click="setSelectedTab('add-resource')"
            :mode="addResButtonMode"
            >Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResource,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resource',
            storedResources: [
                {
                    id: 'official-guide', 
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google', 
                    title: 'Google',
                    description: 'Learn to google ...',
                    link: 'https://google.org'
                },
            ]
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        };
    },
    computed: {
        storeResButtonMode() {
            return this.selectedTab === 'stored-resource' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resource';
        },
        removeResource(resId) {
            // this.storedResources = this.storedResources.filter(
            //     (res) => res.id !== resId
            // );
            // console.log(this.storedResources.length);

            // Because the array can not be deleted and using the old array, so
            const resIndex = this.storedResources.findIndex( (res) => res.id === resId);
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>