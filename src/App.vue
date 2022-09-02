<script setup>
    import {ref} from 'vue'
    import { useStorage } from '@vueuse/core'
    import { nanoid } from 'nanoid'
    import confetti from 'canvas-confetti' 

    const newGrocery = ref('')
    const groceries = useStorage('groceries', [])

    const addGrocery = () => {
        if (newGrocery.value) {
            groceries.value.push({id: nanoid(), name: newGrocery.value})
            newGrocery.value = ''
        }
    }

    const deleteGrocery = id => {
        const removeIndex = groceries.value.findIndex(grocery => grocery.id === id)
        groceries.value.splice(removeIndex, 1)
        confetti({particleCount: 300, spread: 1000, origin: { y: 1}, colors: ['#5fe8a8','#05f7f7','#be87e0', '#f759d2'] })
    }
</script>

<template>
    <main>
        <h1 class="title">🥝 Vue Grocery List ☑ </h1>
        <form class="newGroceryForm" @submit.prevent="addGrocery">
            <input 
                id="newGrocery" 
                autocomplete="off" 
                type="text" 
                placeholder="Add item" 
                v-model="newGrocery"
                />
            <button type="submit">Add</button>
        </form>
        <h3>Pending Items: {{ groceries.length }}</h3>
        <ul>
            <li v-for="grocery in groceries" @click="deleteGrocery(grocery.id)">{{ grocery.name }}</li>
        </ul>
    </main>
</template>

<style lang="postcss" scoped>
    main{
        @apply mt-5 flex flex-col justify-center items-center gap-3;
        .title{
            @apply m-4 text-6xl font-medium tracking-wider text-accent;
        }
        form {
            @apply flex focus-within:ring-8 focus-within:ring-greenish focus-within:rounded-md;
            input {
                @apply bg-white text-background p-2 w-80 text-xl rounded-l-md outline-none;
            }
           button {
            @apply bg-accent text-background p-2 text-xl font-bold rounded-r-md;
            &:hover {
                @apply bg-greenish;
            }
           }
        }
        ul {
            @apply flex flex-col items-center justify-center rounded-lg bg-foreground;
            li {
                @apply bg-white text-background m-1.5 p-2 w-80 text-center;
                &:hover {
                    @apply bg-comment font-bold cursor-pointer;
                }
            }
        }
    }

</style>