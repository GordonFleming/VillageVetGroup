<script>
    import { onMount } from 'svelte';
    import Products from '../_components/Products.svelte';
    import AnimalBlocks from '../_components/AnimalBlocks.svelte'
    import { currentNumPage } from '../store.js';
    import axios from 'axios';

    let currentPage;
    currentNumPage.subscribe(value => {
        currentPage = value;
    })

    let API_URL = 'https://villagevet.herokuapp.com/products?_sort=name:ASC&_limit=-1';

    let items = [];

    onMount(async () => {
        try {
            const res = await axios.get(API_URL);
            items = res.data
        } catch (e) {
            error = e
        }
    });
</script>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Products</li>
    </ol>
</nav>

<AnimalBlocks max={150} />

<Products {items} {currentPage} />