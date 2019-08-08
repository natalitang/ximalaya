<template>
    <div class = "top center">
        <img src="img/logo.jpg" alt="">
        <input type="text" class = "search" placeholder="搜索">
        <a href="#">打开APP</a>
    </div>
</template>

<script>
export default{
    name:"Top"
}
</script>
<style>
.center{
    width:3.45rem;
    position: relative;
    margin:auto;
}
.top{
    width:100%;
    padding-top: .15rem;
    padding-bottom: .05rem;
    display:flex;
    position: fixed;
    align-items: center;
    justify-content: space-around;
    height: .5rem;
    background-color: white;
    z-index: 100
}
.top>input{
    overflow: hidden;
    height: .3rem;
    width: .1.82rem;
    border-radius: .3rem;
    background: #eff1f4;
    font-size: .14rem;
    color: #666;
    border:0px;
    padding-left: .2rem;
}
.top>a{
    
    display: flex;
    align-items: center;
    justify-content: center;
    width:.68rem;
    height: .3rem;
    border-radius: .15rem;
    border: 1px solid #f66847;
    font-size: .12rem;
    color: #f86442;
    text-decoration: none;

}
</style>