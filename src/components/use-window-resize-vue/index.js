import { onMounted, onUnmounted, ref } from "vue";
export default function useWindowResize() {
  const windowSize = ref({
    width: 0,
    height: 0,
  });

  function handleResize() {
    windowSize.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  onMounted(()=>{
    handleResize();
    window.addEventListener("resize",handleResize)
  })

  onUnmounted(()=>{
    window.removeEventListener("resize",handleResize);
  })

  return windowSize;
}
