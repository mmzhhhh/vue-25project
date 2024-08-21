import { ref, onMounted, watch } from "vue";
export default function useFetch(url, options = {}) {
  //3 status
  const data = ref(null);
  const pending = ref(false);
  const error = ref(false);

  async function fetchData() {
    pending.value = true;
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      data.value = result;
      pending.value = false;
      error.value = null;
    } catch (e) {
      console.log(`${e}. Some Error Occured`);
      error.value = null;
    }
  }

  onMounted(()=>{
    fetchData();
  })

  watch(()=>url,fetchData);

  return {data,error,pending}
}
