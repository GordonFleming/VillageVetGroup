<script>
    import Animals from '../_components/Animals.svelte'
    import { metatags } from '@roxi/routify'
    metatags.title = 'Furry-Critters | Village Vetshop'
    metatags.description = 'Furry-Critters products: Chinchilla, Guinea-pig, Hamster, Hedgehog, Mouse, Rabbit, Rat'
</script>

<div class="container-fluid mt-5">
    <div class="row">
        <i on:click={() => window.history.back()} class="fas fa-arrow-left fa-2x" ></i>
        <div class="col-lg-10 col-md-10 col-sm-12">
            <h1>Furry Critters</h1>
            <div class="row mb-5">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="/furry-critters"><strong>Furry-Critters</strong></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/furry-critters/chinchilla">Chinchilla</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/furry-critters/guinea-pig">Guinea-pig</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/furry-critters/hamster">Hamster</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/furry-critters/hedgehog">Hedgehog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/furry-critters/mouse">Mouse</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/furry-critters/rabbit">Rabbit</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/furry-critters/rat">Rat</a>
                    </li>
                </ul>
            </div>
            <slot />
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center">
            <Animals />
        </div>
    </div>
</div>