const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

/* CSS MIX */

mix.copy('resources/mixes/app-assets/vendors/css/vendors.min.css', 'public/mixes/css/vendors.min.css');

/* Datatable component CSS */
mix.copy('resources/mixes/app-assets/vendors/css/tables/datatable/datatables.min.css', 'public/mixes/css/datatables.min.css');

/* Select2 component CSS */
mix.copy('resources/mixes/app-assets/vendors/css/forms/select/select2.min.css', 'public/mixes/css/select2.min.css');

/* PickerDate component CSS */
mix.styles([
    'resources/mixes/app-assets/vendors/css/pickers/pickadate/pickadate.css'
], 'public/mixes/css/pickadate.css');

mix.styles([
    'resources/mixes/app-assets/css/bootstrap.css',
    'resources/mixes/app-assets/css/bootstrap-extended.css',
    'resources/mixes/app-assets/css/colors.css',
    'resources/mixes/app-assets/css/components.css',
    'resources/mixes/app-assets/css/themes/dark-layout.css',
    'resources/mixes/app-assets/css/themes/semi-dark-layout.css',
    'resources/mixes/app-assets/css/core/menu/menu-types/vertical-menu.css',
    'resources/mixes/app-assets/css/core/colors/palette-gradient.css',
    'resources/mixes/app-assets/css/plugins/animate/animate.css'
], 'public/mixes/css/theme.css');

/* JS MIX */
mix.copy('resources/mixes/app-assets/vendors/js/vendors.min.js', 'public/mixes/js/vendors.min.js');

mix.scripts([
    'resources/mixes/app-assets/js/core/app-menu.js',
    'resources/mixes/app-assets/js/core/app.js',
    'resources/mixes/app-assets/js/scripts/components.js'
], 'public/mixes/js/theme.js');

/* Datatable component JS */
mix.scripts([
    'resources/mixes/app-assets/vendors/js/tables/datatable/pdfmake.min.js',
    'resources/mixes/app-assets/vendors/js/tables/datatable/vfs_fonts.js',
    'resources/mixes/app-assets/vendors/js/tables/datatable/datatables.min.js',
    'resources/mixes/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js',
    'resources/mixes/app-assets/vendors/js/tables/datatable/buttons.html5.min.js',
    'resources/mixes/app-assets/vendors/js/tables/datatable/buttons.print.min.js',
    'resources/mixes/app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js',
    'resources/mixes/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js'
], 'public/mixes/js/datatable.js');

/* Select2 component JS */
mix.copy('resources/mixes/app-assets/vendors/js/forms/select/select2.full.min.js', 'public/mixes/js/select2.full.min.js');

mix.scripts([
    'resources/mixes/app-assets/js/scripts/forms/select/form-select2.js'
], 'public/mixes/js/form-select2.js');


/* PickerDate component JS */
mix.scripts([
    'resources/mixes/app-assets/vendors/js/pickers/pickadate/picker.js',
    'resources/mixes/app-assets/vendors/js/pickers/pickadate/picker.date.js',
    'resources/mixes/app-assets/vendors/js/pickers/pickadate/picker.time.js',
    'resources/mixes/app-assets/vendors/js/pickers/pickadate/legacy.js'
], 'public/mixes/js/picker-date.js');

mix.scripts([
    'resources/mixes/app-assets/js/scripts/pickers/dateTime/pick-a-datetime.js'
], 'public/mixes/js/pick-a-datetime.js');

/* Toast alert component JS */
mix.scripts([
    'resources/mixes/app-assets/js/scripts/pages/bootstrap-toast.js'
], 'public/mixes/js/bootstrap-toast.js');

/* Modal component JS */
mix.scripts([
    'resources/mixes/app-assets/js/scripts/modal/components-modal.js'
], 'public/mixes/js/components-modal.js');

if (mix.inProduction()) {
    mix.version();
}
