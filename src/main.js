// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Buefy from 'buefy';
import DefaultLayout from '~/layouts/Default.vue';
import * as GmapVue from 'gmap-vue';


// Import Design System
import '~/styles/index.sass'


// Import Vue Navigation Bar
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import VueNavigationBar from "vue-navigation-bar";

export default function (Vue, { router, head, isClient, appOptions }) {

    // hot reload i18n messages
    appOptions.i18n.setLocaleMessage('es', require('./locales/es.json'))
    appOptions.i18n.setLocaleMessage('en-us', require('./locales/en-us.json'))


    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    if (process.isClient) {
        const VueNavigationBar = require('vue-navigation-bar').default;
        Vue.component("vue-navigation-bar", VueNavigationBar);
    }
    Vue.use(Buefy);

    Vue.use(GmapVue, {
        load: {
            key: 'AIzaSyD19iCcIqKwh0BSVO28qu_wWhgKCFrcc5g',
            libraries: 'places', // This is required if you use the Autocomplete plugin
            // OR: libraries: 'places,drawing'
            // OR: libraries: 'places,drawing,visualization'
            // (as you require)

            //// If you want to set the version, you can do so:
            // v: '3.26',
        },

        //// If you intend to programmatically custom event listener code
        //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
        //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
        //// you might need to turn this on.
        // autobindAllEvents: false,

        //// If you want to manually install components, e.g.
        //// import {GmapMarker} from 'gmap-vue/src/components/marker'
        //// Vue.component('GmapMarker', GmapMarker)
        //// then set installComponents to 'false'.
        //// If you want to automatically install all the components this property must be set to 'true':
        installComponents: true
    })
}
