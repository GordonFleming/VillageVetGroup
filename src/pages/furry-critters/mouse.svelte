<script>
    import { onMount } from 'svelte';
    import Products from '../_components/Products.svelte';
    import { currentNumPage } from '../store.js';
    let currentPage;
    currentNumPage.subscribe(value => {
        currentPage = value;
    }) 

    const API_URL = 'https://villagevet.herokuapp.com/products?animals_in=4&_sort=name:ASC&_limit=-1';
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
        if((items.length / 16) < currentPage){
            currentNumPage.set(1);
        }
    });
</script>

<Products {items} {currentPage} />
