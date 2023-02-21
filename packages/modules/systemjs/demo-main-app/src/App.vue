<template>
    <div>
        <div>main app</div>
        <re-test />
    </div>
</template>

<script>
import {defineComponent} from '@vue/composition-api';
import reactWrapper from '../react-wrapper';

export default defineComponent({
    components: {
        ReTest: () =>
            Promise.all([System.import('subapp1')]).then(([sub]) => {
                return reactWrapper(() => Promise.resolve(sub.Re));
            })
    }
});
</script>
