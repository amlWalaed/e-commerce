<template>
    <div class="img-box">
        <div class="box">
            <div class="overlay">
                <p>50%</p>
                <Button> shopping now</Button>
            </div>
            <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" alt="">
        </div>
    </div>
</template>
<script>

export default {
    name:"img-discount"
}
    
</script>
<style scoped>
.img-box{
    border-radius: 10px;
    overflow: hidden;
}
.img-box .box{
    position: relative;
}
.img-box .box .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
.img-box .box .overlay p{
    font-weight: bold;
}
.img-box .box .overlay button{
    background-color: #45913c;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 5px 25px;
    position: relative;
    overflow: hidden;
}
.img-box .box .overlay button:hover::after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;

}
.img-box .box img{
    width: 100%;
    height: 100%;
}
</style>


