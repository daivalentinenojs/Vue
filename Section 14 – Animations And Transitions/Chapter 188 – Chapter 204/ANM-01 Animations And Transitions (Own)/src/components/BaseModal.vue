<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}

.modal-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.modal-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: modal 0.3s ease-out;
}

.modal-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.modal-leave-active {
  /* transition: all 0.3s ease-out; */
  animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
  /* If only 0% and 100% we can use from to */
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);    
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1); 
  }
}
</style>