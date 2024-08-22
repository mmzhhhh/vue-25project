import { onMounted, onUnmounted } from "vue";
export default function useOutsideClick(elementRef, handleOutsideClick) {
  const lisiener = (event) => {
    if (!elementRef.value || elementRef.value.contains(event.target)) return;
    handleOutsideClick(event);
  };

  onMounted(() => {
    document.addEventListener("mousedown", lisiener);
    document.addEventListener("touchstart", lisiener);
  });

  onUnmounted(()=>{
    document.removeEventListener("mousedown", lisiener);
    document.removeEventListener("touchstart", lisiener);
  })
}
