<script>
    //import RoutifyIntro from './example/_components/RoutifyIntro.svelte'
    import Products from './_components/Products.svelte'
    import Animals from './_components/Animals.svelte'
    import { metatags } from '@roxi/routify'
    metatags.title = 'Village Vet Group'
    metatags.description = 'e-commerce store for the Village Vet Group'
</script>

<!-- Product names -->
<!-- Dogs Busniz, Cats Whiskers, Fishy Fin, Birds of a Feather and then we need to think of something clever for the mice, rats, rabbits, hamsters, guinea pigs etc (small animals). -->
    
<Animals />

<Products />