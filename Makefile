DIRS=css images js
FILES=index.html
HOST=nieradka.net
RSYNC=rsync

staging:
	$(RSYNC) --verbose -r $(DIRS) $(FILES) $(HOST):/var/www/staging.sieminiak.com/main

prod:
	$(RSYNC) --verbose -r $(DIRS) $(FILES) $(HOST):/var/www/sieminiak.com
