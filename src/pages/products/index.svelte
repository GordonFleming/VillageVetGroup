<script>
    import { onMount } from 'svelte';
    import ProductsPagination from '../_components/ProductsPagination.svelte';
    import AnimalBlocks from '../_components/AnimalBlocks.svelte'
    import { currentNumPage } from '../store.js';
    import axios from 'axios';
    import { SyncLoader } from 'svelte-loading-spinners';

    let currentPage;
    currentNumPage.subscribe(value => {
        currentPage = value;
    })

    let items = [];
    $: startVal = 16*(currentPage-1)
    let loading = false
    $: console.log(items)
    
    const API_URL = 'https://villagevet.herokuapp.com/products/count'
    let count

    onMount(() =>{
        fetchItems()
    })

    async function fetchItems(){
        loading = true
        items = []
        await axios.get(API_URL)
        .then((result) => {
            count = result.data
            console.log("productsdfgdfgs: ", count)              
        });

        for (var i = 0; i < startVal; i++) {
            items.push(null);     
        }

        await axios({
        url: 'https://villagevet.herokuapp.com/graphql',
        method: 'post',
        data: {
            query: `
                query {
                    products (limit: 16, start: ${startVal}, sort: "name:asc") {
                        id,
                        name,
                        price,
                        singleweight,
                        symbol,
                        options,
                        additional{price, weight, size, symbol},
                        img{name}
                    }
                }
            `
        }
        }).then((result) => {
            items.push(...result.data.data.products)
            items = items      
            loading = false     
        });
    }; 
</script>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Products</li>
    </ol>
</nav>

<AnimalBlocks max={150} />

{#if loading}
    <div class="box d-flex justify-content-center mt-5 mb-5 p-5">
        <SyncLoader size="20" color="#FDD177" unit="vw" duration="0.6s" />
    </div>
{:else}
    <ProductsPagination {items} {currentPage} {count} on:click={fetchItems} />
{/if}

<style>
.box{
    height: 50vh;
}
</style>
