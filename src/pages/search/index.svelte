<script>
    import { onMount } from 'svelte';
    import Products from '../_components/Products.svelte';
    import { SyncLoader } from 'svelte-loading-spinners';
    import { fade } from 'svelte/transition';
    import { currentNumPage, searchVal } from '../store.js';
    import axios from 'axios';
    import AnimalBlocks from '../_components/AnimalBlocks.svelte'
    import qs from 'qs';

    let currentPage;
    currentNumPage.subscribe(value => {
        currentPage = value;
    }) 

    let search;
    searchVal.subscribe(value => {
        search = value;
    })

    let loading = true;

    const API_URL = 'https://villagevet.herokuapp.com/products?_sort=name:ASC&_limit=64&';
    $: query = qs.stringify({
        _where: {
            _or: [
                [{ name_contains: search.trim(" ") }],
                [{ description:  search.trim(" ") }],
                [{ 'brand.name_contains': search.trim(" ") }],
                [{ 'animals.type_contains': search.trim(" ") }],
            ],
        },
    });

    let items;

    onMount(async () => {
        try {
            const res = await axios.get(API_URL);
            items = res.data;
            formSubmitted();
        } catch (e) {
            error = e
        }
    });

    function delay(callback, ms) {
        var timer = 0;
        return function() {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
            callback.apply(context, args);
            }, ms || 0);
        };
    }

	async function formSubmitted() {   
        searchVal.set(search)
        loading = true;
        items = [];
        const url = `${API_URL}${query}`;
        const res =  await axios.get(url);
        const json = res.data;
        items = json.map(p => p);
        search = search;
        loading = false;
        if((items.length / 16) < currentPage){
            currentNumPage.set(1);
        }
    }

    function resetSearch(){
        search = "";
        searchVal.set(search);
        formSubmitted()
    }
</script>

<i on:click={() => window.history.back()} class="fas fa-arrow-left fa-2x" ></i>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Search</li>
    </ol>
</nav>

<div class="container mt-4 mb-5">
    <form on:submit|preventDefault={formSubmitted} id="search" class="input-group">
        <input id="search-input" type="text" placeholder="Instant search" class="form-control me-2" bind:value={search} on:keyup={delay(function () {formSubmitted()}, 500)}>
        <button on:click={resetSearch} class="btn bg-transparent" style="margin-left: -60px; z-index: 100;" type="reset"><i class="fa fa-times"></i></button>
    </form>
</div>

{#if items && items.length > 0}
    <Products {items} {currentPage} />
{:else if loading}
    <div class="d-flex justify-content-center">
        <SyncLoader size="300" color="#FDD177" unit="px" duration="0.6s" />
    </div>
{:else if search !== "" && items.length == 0}
    <center><h3 transition:fade>Sorry, nothing matches your search for: "{search}" - no results found. Try using other keywords or search for the brand...</h3></center>
{/if}

<div class="mt-5">
    <AnimalBlocks max={150} />
</div>