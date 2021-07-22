install: 
	npm install
run:
	node bin/gendiff.js -h
publish:
	npm link
lint:
	npx eslint .
