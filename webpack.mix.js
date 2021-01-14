let mix = require('laravel-mix');


mix.sass('src/app.scss', 'css');
mix.options({
    processCssUrls: false
});
