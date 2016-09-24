test:
	./node_modules/jasmine-node/bin/jasmine-node --verbose --noColor spec/*
compress:
	./node_modules/uglify-js/bin/uglifyjs jsplay.js -nc > jsplay.min.js 
