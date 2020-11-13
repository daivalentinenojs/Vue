<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseGoal.isShow">{{ courseGoal.title }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="showHide">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const goal = reactive({
      title: 'Master of Vue',
      isShow: true
    });

    function showOrHide() {
      if (goal.isShow === true) {
        goal.isShow = false;
      } else {
        goal.isShow = true;
      }
    }

    return { courseGoal: goal, showHide: showOrHide};
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>








<template>
  <!-- Another Student Answer -->
  <!-- <h2>My Course Goal</h2>
  <h3 v-if="isVisible">{‌{ mainGoal }}</h3> -->
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3>OUTPUT COURSE GOAL</h3> -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <!-- <button @click="toggleGoal">{‌{ btnCaption }}</button> -->
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// // import { ref, reactive } from 'vue';

// export default {
//   // setup() {

//     // const mainGoal = ref('Finish the course!'); 
//     // const goalProps = ref({
//     //   isVisible: true, 
//     //   btnCaption: 'Hide goal'
//     // });

//     // const mainGoal = reactive( { title: 'Finish the course!'} ); 
//     // const goalProps = reactive({
//     //   isVisible: true, 
//     //   btnCaption: 'Hide goal'
//     // });

//     // function toggleGoal() {
//       // goalProps.value.isVisible = !goalProps.value.isVisible; 

//       // if(goalProps.value.isVisible === true) {
//       //   goalProps.value.btnCaption = 'Hide goal'; 
//       // } else {
//       //   goalProps.value.btnCaption = 'Show goal'; 
//       // }

//     //   goalProps.isVisible = !goalProps.isVisible; 

//     //   if(goalProps.isVisible === true) {
//     //     goalProps.btnCaption = 'Hide goal'; 
//     //   } else {
//     //     goalProps.btnCaption = 'Show goal'; 
//     //   }
//     // }
//     // return {
//     //   mainGoal: mainGoal,
//     //   goalProps: goalProps,
//     //   toggleGoal: toggleGoal
//     // };
//   // }

//   data() {
//     return {
//       mainGoal: 'Finish the Course',
//       btnCaption: 'Hide goal',
//       isVisible: true,
//     };
//   },
//   methods: {
//     toggleGoal() {
//         this.isVisible = !this.isVisible;

//         if(this.isVisible) {
//           this.btnCaption = 'Hide Goal';
//         } else {
//           this.btnCaption = 'Show Goal';
//         }
//     }
//   }
// }
</script>

<style>
/* html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
} */
</style>