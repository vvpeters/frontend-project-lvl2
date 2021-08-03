install: 
	npm install
run:
	node bin/gendiff.js ./src/file1.json ./src/file2.json
publish:
	npm link
lint:
	npx eslint .
