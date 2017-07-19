DIRS=css images js
FILES=index.html
HOST=nieradka.net
RSYNC=rsync

do:
	$(RSYNC) --verbose -r $(DIRS) $(FILES) $(HOST):/var/www/try.sieminiak.com/main
