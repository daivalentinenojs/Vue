<template>
    <form @submit.prevent="submitData">
        <h2>Add New User Data</h2>
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label>Age</label>
            <input type="tel" v-model="enteredAge"/>
        </div>
        <div>
            <button>Add User Data</button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
    },
    emits: ['add-user-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: '',
        };
    },
    methods: {
        submitData() {
            if (this.enteredName !== '' && this.enteredAge !== '') {
                this.$emit('add-user-data', 
                    this.enteredName,
                    this.enteredAge
                );
                this.enteredName = '';
                this.enteredAge = '';
            } else if (this.enteredName === '') {
                alert('Name is required');
            } else {
                alert('Age is required');
            }
        }
    }
};
</script>