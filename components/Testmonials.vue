<template>
    <div>

        <Flicking :options="{ align: 'center', circular: true }">
            <div v-for="(testimonial, i) in testmonials" :key="i" class="panel mr-10">
                <TestmonialCard :testmonial="testimonial" />
            </div>
        </Flicking>

    </div>
</template>

<script>
export default {
    props: ['testmonials'],
    computed: {},
};
</script>