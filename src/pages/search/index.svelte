<script>
    import { onMount } from 'svelte';
    import Products from '../_components/Products.svelte';
    import { SyncLoader } from 'svelte-loading-spinners';
    import { fade } from 'svelte/transition';
    import { currentNumPage, searchVal } from '../store.js';
    let currentPage;
    currentNumPage.subscribe(value => {
        currentPage = value;
    }) 

    let search;
    searchVal.subscribe(value => {
            search = value;
    })

    let loading = false;

    const API_URL = 'https://villagevet.herokuapp.com/products?_sort=name:ASC&_limit=700&name_contains=';
    let items = [];

    onMount(async () => {
        const parseJSON = (resp) => (resp.json ? resp.json() : resp);
        const checkStatus = (resp) => {
        if (resp.status >= 200 && resp.status < 300) {
        return resp;
        }
        return parseJSON(resp).then((resp) => {
        throw resp;
        });
    };
    const headers = {
        'Content-Type': 'application/json',
    };
        //{ 'x-routify-valid-for': 3600},
        try {
            const res = await fetch(API_URL, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(checkStatus)
        .then(parseJSON);
            items = res
            formSubmitted();
        } catch (e) {
            error = e
        }
    });
    
    function waitforme(milisec) { 
        return new Promise(resolve => { 
            setTimeout(() => { resolve('') }, milisec); 
        }) 
    }

	async function formSubmitted() {   
        searchVal.set(search)
        loading = true;
        await waitforme(400);
        const url = `${API_URL}${search}`;
		const response = await fetch(url);
        const json = await response.json();
        //console.log(json);
        items = json.map(product => product);
        loading = false;

        if((items.length / 16) < currentPage){
            currentNumPage.set(1);
        }
    }

    function resetSearch(){
        search = "";
        searchVal.set(search);
    }
</script>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Search</li>
    </ol>
</nav>

<div class="container mt-4 mb-5">
    <form on:submit|preventDefault={formSubmitted} id="search" class="input-group">
        <input id="search-input" type="text" placeholder="Instant search" class="form-control me-2" bind:value={search} on:keyup={formSubmitted}>
        <button on:click={resetSearch} class="btn bg-transparent" style="margin-left: -60px; z-index: 100;" type="reset"><i class="fa fa-times"></i></button>
    </form>
</div>

{#await fetch(API_URL)}
    {#if loading}
    <div class="d-flex justify-content-center mt-5">
        <SyncLoader size="20" color="#FDD177" unit="vw" duration="0.6s" />
    </div>
    {/if}
{:then}
    {#if items && items.length > 0}
        <Products {items} {currentPage} />
    {:else if loading === false & search !== ""}
        <h2 transition:fade="{{ delay: 2000, duration: 1000 }}">Sorry, nothing matches your search for: "{search}" - no results found.</h2>
    {/if}
{:catch error}
    <p>Please reload page, or go back to the <a href="/">home page</a> error:{error.message}</p>
{/await}