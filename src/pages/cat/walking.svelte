<script>
    import { onMount } from 'svelte';
    import Products from '../_components/Products.svelte';
    import { currentNumPage } from '../store.js';
    import axios from 'axios';

    let currentPage;
    currentNumPage.subscribe(value => {
        currentPage = value;
    }) 

    const API_URL = 'https://villagevet.herokuapp.com/products?product_types_in=13&animals_in=2&_sort=name:ASC&_limit=-1';
    let items = [];

    onMount(async () => {
        try {
            const res = await axios.get(API_URL);
            items = res.data
        } catch (e) {
            error = e
        }
        if((items.length / 16) < currentPage){
            currentNumPage.set(1);
        }
    });
</script>

<Products {items} {currentPage} />