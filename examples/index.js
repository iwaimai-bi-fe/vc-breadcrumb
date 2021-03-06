import Vue from 'vue'
import vcBreadcrumb from '../src'

const { vcBreadcrumbItem } = vcBreadcrumb

var vcSeparator = Vue.extend({
    template: '<span class="separator-class">-/-</span>'
})

new Vue({
	el: '#app',
	components: {
        vcBreadcrumb,
        vcBreadcrumbItem,
        vcSeparator
	},
	data () {
		return {
            defaults: false,
            separator: '/',
            routes: [{
                url: 'https://github.com/IndexXuan/',
                text: 'IndexXuan'
            }, {
                url: 'https://github.com/stars',
                text: 'stars'
            }, {
                text: 'current'
            }]
		}
	},
    methods: {
        defaultsFn () {
            this.defaults = true
        },
        customsFn () {
            this.defaults = false
        }
    }
})
