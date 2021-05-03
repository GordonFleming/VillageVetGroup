<script>
    import { onMount } from 'svelte';
    import Products from '../_components/Products.svelte';
    import { currentNumPage } from '../store.js';
    import axios from 'axios';
    
    let currentPage;
    currentNumPage.subscribe(value => {
        currentPage = value;
    }) 

    const API_URL = 'https://villagevet.herokuapp.com/products?product_types_in=41&product_types_in=5&product_types_in=18&product_types_in=26&product_types_in=4&product_types_in=39&product_types_in=67&product_types_in=19&product_types_in=51&animals_in=2&_sort=name:ASC&_limit=-1';
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
