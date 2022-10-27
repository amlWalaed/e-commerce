<template>
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="overlay">
                <slot name="overlay"></slot>
            </div>
            <slot name="images"></slot>
        </div>
    </div>
</template>
<script>
export default{
    name:'slider-component',
}

</script>
<style scoped>
.overlay{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}
.slide{
    overflow: hidden;
    border-radius: 7px;
}
img{
    height:40vh;
}

</style>
