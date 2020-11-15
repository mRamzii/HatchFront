<!-- ==========================================================================
@author Mehdi
===============================================================================

=========================================================================== -->
<template>
    <div class="page-header clear-filter" filter-color="orange">
        <div
            class="page-header-image"
            style="background-image: url('https://i.redd.it/eklxnrkel8t41.jpg')"
        ></div>

        <div class="content">
            <div class="container">
                <sweetalert-icon icon="loading" />
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<!-- ====================================================================== -->

<script>
import SweetalertIcon from "vue-sweetalert-icons"

//-------------------------------------------------------------------------------

export default {
    components: {
        SweetalertIcon,
    },
}
</script>

<!-- ====================================================================== -->

<style scoped>
.content {
    margin: 0 !important;
}
</style>

<!-- ====================================================================== -->
<!-- End of file -->
<!-- ====================================================================== -->
