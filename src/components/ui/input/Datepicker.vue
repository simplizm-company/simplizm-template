<template>
    <vuejs-datepicker
        class="datepicker"
        v-model="checked"
        :value="checked"
        :language="ko"
        :inline="defaults.inline"
        :format="defaults.format"
        :highlighted="defaults.highlighted"
        :disabledDates="defaults.disabledDates"
    ></vuejs-datepicker>
</template>

<script>
import VuejsDatepicker from 'vuejs-datepicker';
import { ko } from 'vuejs-datepicker/dist/locale';

export default {
    props: ['options', 'from', 'to'],
    components: {
        VuejsDatepicker
    },
    data () {
        return {
            ko: ko,
            checkedProxy: false,
            defaults: {
                format: 'yyyy-MM-dd',
                date: '',
                inline: false,
                highlighted: {
                    to: false, // new Date(2016, 0, 5)
                    from: false, // new Date(2016, 0, 26)
                    days: [], // [6, 0]
                    daysOfMonth: [], // [29, 30, 31]
                    dates: [
                        /* new Date(2016, 9, 16),
                        new Date(2016, 9, 17),
                        new Date(2016, 9, 18) */
                    ],
                    customPredictor: function(date) {
                        /*if(date.getDate() % 5 == 0){
                            return true
                        } */
                    },
                    includeDisabled: true
                },
                disabledDates: {
                    to: false, // new Date(2016, 0, 5)
                    from: false, // new Date(2016, 0, 26)
                    days: [], // [6, 0]
                    daysOfMonth: [], // [29, 30, 31]
                    dates: [
                        /* new Date(2016, 9, 16),
                        new Date(2016, 9, 17),
                        new Date(2016, 9, 18) */
                    ],
                    ranges: [{
                        /* from: new Date(2016, 11, 25),
                        to: new Date(2016, 11, 30) */
                    }, {
                        /* from: new Date(2017, 1, 12),
                        to: new Date(2017, 2, 25) */
                    }],
                    customPredictor: function(date) {
                        /*if(date.getDate() % 5 == 0){
                            return true
                        } */
                    }
                }
            }
        }
    },
    computed: {
        checked: {
            get () {
                return this.defaults.date;
            },
            set (val) {
                this.checkedProxy = val;
                this.$emit('input', this.checkedProxy);
            }
        }
    },
    watch: {
        'from.date' (newValue, oldValue) {
            this.defaults.highlighted.from = newValue;
            this.from.highlighted.from = newValue;
            this.defaults.highlighted.dates = [newValue];
            this.defaults.disabledDates.customPredictor = function (date) {
                if (date < newValue) {
                    return true;
                }
            }
        },
        'to.date' (newValue, oldValue) {
            this.defaults.highlighted.to = newValue;
            this.to.highlighted.to = newValue;
            this.defaults.highlighted.dates = [newValue];
            this.defaults.disabledDates.customPredictor = function (date) {
                if (date > newValue) {
                    return true;
                }
            }
        }
    },
    created () {
        $.extend(this.defaults, this.options);
    }
}
</script>

<style lang="scss">
.datepicker {display: inline-block;}
.datepicker .cell.highlight-start {background: #44bbdd;}
.datepicker .cell.highlight-end {background: #44bbdd;}
</style>


