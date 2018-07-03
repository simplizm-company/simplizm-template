import Vue from 'vue';

var requireComponent = require.context('~/components', true, /\w+\.(vue|js)$/);

requireComponent.keys().forEach(function (fileName) {
   var ComponentName = fileName.replace(/^\.(\/.*)*\/(.*)\.\w+$/, '$2');
   var componentConfig = requireComponent(fileName);
   Vue.component(ComponentName, componentConfig.default || componentConfig);
});