install: 
	npm install
run:
	node bin/gendiff.js ./__tests__/__fixtures__/file1.json ./__tests__/__fixtures__/file2.json 
publish:
	npm link
lint:
	npx eslint .
test:
	npm test
test-watch:
	npm run test-watch
test-coverage:
	npm test -- --coverage --coverageProvider=v8

