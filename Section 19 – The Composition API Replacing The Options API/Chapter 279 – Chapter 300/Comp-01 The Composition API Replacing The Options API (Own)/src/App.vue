<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName"/>
      <input type="text" placeholder="Last Name" ref="lastNameInput"/> 
      <button @click="setLastName">Set Last Name</button>
      <!-- v-model="lastName" -->
    </div>
  </section>
</template>

<script>
import { ref, watch, provide } from 'vue';
import UserData from './components/UserData.vue'

export default {
  components: {
    UserData
  },
  setup() {
    // const uName = ref('Daivalentineno');
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(25);

    provide('userAge', uAge);

    // const uName = computed(function() {
    //   return firstName.value + ' ' + lastName.value;
    // });

    // watch(uAge, function(newValue, oldValue) {
    //     console.log('Old age: ' + oldValue);
    //     console.log('New age: ' + newValue);
    // });

    watch([uAge], function(newValues, oldValues) {
        console.log('Old age: ' + oldValues[0]);
        console.log('New age: ' + newValues[0]);
        console.log('Old name: ' + oldValues[1]);
        console.log('New name: ' + newValues[1]);
    });

    function setNewAge() {
      uAge.value = 22;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }
    
    return {
      // userName: uName,
      // age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>