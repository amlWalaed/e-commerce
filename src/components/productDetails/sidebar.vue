<template>
    <div class="side-bar">
        <div class="photo" v-for="image in images" :key="image">
            <img :src="image"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'side-bar',
   props:['images'],
    
    
}
</script>
<style scoped>
.side-bar{
    background-color: white;
    padding: 10px;
    border-radius: 5px;
}

.side-bar .photo{
    border-radius: 5px;
    margin: 10px 0;
    overflow: hidden;
    position: relative;
}
.side-bar .photo::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
.side-bar .photo img{
    width: 100%;

}
</style>