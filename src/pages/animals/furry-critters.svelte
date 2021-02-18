<script>
    import { onMount } from 'svelte';
    import Products from './src/pages/_components/Products.svelte';
    import { SyncLoader } from 'svelte-loading-spinners';
    import { currentNumPage } from '../store.js';
    let currentPage;
    currentNumPage.subscribe(value => {
        currentPage = value;
    }) 

    const API_URL = 'https://villagevet.herokuapp.com/products?animals_in=6&animals_in=14&animals_in=12&animals_in=4&animals_in=7&animals_in=13&animals_in=8&_sort=name:ASC&_limit=200';
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
            items = res;
        } catch (e) {
            error = e
        }
        // if((items.length / 16) < currentPage){
        //     currentNumPage.set(1);
        // }
    });
</script>

<h1>Furry Critters</h1>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Furry Critters</li>
    </ol>
</nav>

{#await fetch(API_URL)}
    <div class="d-flex justify-content-center mt-5">
        <SyncLoader size="20" color="#FDD177" unit="vw" duration="0.6s" />
    </div>
{:then}
    <Products {items} {currentPage} />
{:catch error}
    <p>Please reload page, or go back to the <a href="/">home page</a></p>
{/await}