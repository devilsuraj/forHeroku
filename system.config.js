(function (global) {

    // map tells the System loader where to look for things

    var map = {
        'app': 'wwwroot/app', // 'dist'
        'rxjs': 'node_modules/rxjs',
        'rxjs/add/operator/*': 'node_modules/rxjs/add/operator/*',
        '@angular': 'node_modules/@angular',
        'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
        "materialize-css": "node_modules/materialize-css",
        "materialize": "node_modules/angular2-materialize",
        "angular2-materialize": "node_modules/angular2-materialize"
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'boot.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-jwt': { defaultExtension: 'js' },
        "materialize-css": {
            "main": "dist/js/materialize"
        },
        "materialize": {
            "main": "dist/materialize-directive",
            "defaultExtension": "js"
        }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router-deprecated'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }
 
    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);