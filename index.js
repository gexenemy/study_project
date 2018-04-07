const browserSync = require('browser-sync');

browserSync({
	server: "app",
	notify: false,
	files: ["app/*.html", "app/css/*.css", "app/js/*.js"],
});