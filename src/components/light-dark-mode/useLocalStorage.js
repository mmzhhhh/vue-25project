import { onMounted, ref, watch } from "vue";

export function useLocalStorage(key,defaultValue){
    const value=ref(defaultValue);

    onMounted(()=>{
        try{
            const storageValue=localStorage.getItem(key);
            if(storageValue!==null) value.value=JSON.parse(storageValue);
        }catch(e){
            console.log(e);
        }
    })

    watch(value,(newValue)=>{
        localStorage.setItem(key,JSON.stringify(newValue));
    })

    return value;
}