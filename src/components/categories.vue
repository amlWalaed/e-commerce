<template>
    <aside class="categories">
        <header>
            الاقسام
        </header>
        <ul>
            <li>
                <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <span>الملابس</span>
            </li>
            <li>
                <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg" alt=""/>
                <span>الاطعمة</span>
            </li>
            <li>
                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg" alt=""/>
                <span>الحلويات</span>
            </li>
            <li>
                <img src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
                <span>الادوية</span>
            </li>
            <li>
                <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1206682746.jpg" alt=""/>
                <span>الزيوت و الاعشاب</span>
            </li>
            <li>
                <img src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" alt=""/>
                <span>العطور</span>
            </li>
            <li>
                <img src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&w=1000&q=80" alt=""/>
                <span>الاكسسورات</span>   
            </li>
        </ul>
    </aside>
</template>
<script>

export default {
    name:"el-categories"
}
</script>

<style scoped>
.categories{
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    background-color: white;
}
.categories header{
    background-color: #45913c;
    color: white;
    text-align: center;
    padding: 10px 0;
}
.categories ul {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding: 0;
}
.categories ul li {
    padding: 5px 0;
    position: relative;
    margin: 5px;
    width: 100%;
}
.categories ul li:not(:last-child)::after{
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 5px;
    height: 1px;
    background-color: #f2f2f2;
}
.categories ul li img{
    width: 35px;
    height: 35px;
    margin:0 10px;
    border-radius: 4px;
}

</style>