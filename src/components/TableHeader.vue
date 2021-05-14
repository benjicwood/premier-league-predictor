<template>
<div class="header">
    <div></div>
    <div></div>
    <div></div>
    <div>Pld</div>
    <div>W</div>
    <div>D</div>
    <div>L</div>
    <div>GD</div>
    <div>Pts</div>
</div>

</template>

<script>
export default({
    name: 'TableHeader',
})
</script>

<style scoped lang="scss">

.header {
    // width: 50%;
    height: 30px;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 5% 19% 40% 6% 6% 6% 6% 6% 6%;
    align-items: left;
    background-color: whitesmoke;
}

.header > div {
    margin: auto;
}

</style>