<template>
    <vuejs-datepicker 
        :format="defaults.format"
        :value="defaults.value"></vuejs-datepicker>
</template>

<script>
import VuejsDatepicker from 'vuejs-datepicker';

export default {
    props: ['options'],
    data () {
        return {
            defaults: {
                format: 'YYYY-MM-DD',
                highlighted: {
                    customPredictor: function (date) {
                        if (date.getDate() % 4 === 0) {
                            return true
                        }
                    }
                }
            }
        }
    },
    components: {
        VuejsDatepicker
    },
    created () {
        $.extend(this.defaults, this.options);
    }
}
</script>

