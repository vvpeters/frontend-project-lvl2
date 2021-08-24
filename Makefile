install: 
	npm install
run:
	node bin/gendiff.js 
	./__tests__/__fixtures__/file1.json 
	./__tests__/__fixtures__/file2.json 
	./__tests__/__fixtures__/file1.yaml 
	./__tests__/__fixtures__/result_index.txt
publish:
	npm link
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8

