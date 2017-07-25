DIRS=css images js
FILES=index.html
HOST=nieradka.net
RSYNC=rsync
GULP=./node_modules/gulp/bin/gulp.js

staging:
	$(GULP) sass
	$(RSYNC) --verbose -r $(DIRS) $(FILES) $(HOST):/var/www/staging.sieminiak.com/

prod:
	$(GULP) prod
	$(RSYNC) --verbose -r $(DIRS) $(FILES) $(HOST):/var/www/sieminiak.com
