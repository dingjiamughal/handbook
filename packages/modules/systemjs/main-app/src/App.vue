<template>
    <!-- <router-view></router-view> -->
    <div>
        <p>main app</p>
        <hello-world></hello-world>
        <eg-button>asfasfdas</eg-button>
    </div>
</template>

<script>
export default {
    components: {
        HelloWorld: () => System.import('subapp1').then(r => r.Helloworld),
        EgButton: () => System.import('@baidu/ergo-ui-vue2').then(r => r.Button)
    }
};
</script>

<style></style>
