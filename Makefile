install: 
	npm install
run:
	node bin/gendiff.js ./src/file1.json ./src/file2.json
publish:
	npm link
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8

