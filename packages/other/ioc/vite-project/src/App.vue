<script setup lang="ts">
import {ReflectiveInjector, Provider, Injector} from 'injection-js';
// import './inject';
import {
    AuthService,
    AuthServiceAAA,
    AuthServiceBBB,
    DialogService,
    LoginService,
    OrderService,
    WxDialogService
} from './service';

const handleClick = () => {
    const providers: Provider[] = [
        {provide: OrderService, useClass: OrderService},
        // LoginService
        // {provide: OrderService, useClass: OrderService},
        {provide: DialogService, useClass: WxDialogService}
        // {provide: AuthService, useClass: AuthServiceBBB}
    ];

    const injector = ReflectiveInjector.resolveAndCreate(providers);
    injector.get(OrderService).confirmOrder('adfaf');
    // injector.get(LoginService).confirmOrder('aasdfadsf');
    // injector.get(ServiceX);
};
</script>

<template>
    <button @click="handleClick">hahahahahha</button>
</template>

<style scoped></style>
