import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchProp) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    // const availableUsers = computed(function () {
    const availableItems = computed(function () {
    //   let users = [];
    let filteredItems = [];
      if (activeSearchTerm.value) {
        // users = props.users.filter((usr) =>
        filteredItems = items.value.filter((item) =>
            //   usr.fullName.includes(activeSearchTerm.value)
            item[searchProp].includes(activeSearchTerm.value)
        );

        // The code above only works for user because
        // it is only filtered using fullName

      // } else if (props.users) {
      } else if (items.value) {
        // users = props.users;
        filteredItems = items.value;
      }
    //   return users;
      return filteredItems;
    });

    watch(enteredSearchTerm, function (newValue) {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }

    return {
        enteredSearchTerm,
        availableItems,
        updateSearch
    };
}