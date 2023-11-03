# Running tests
To run tests, insert the following line in the prompt command line
```
npm test
```
## The command does not seem to work
If the command does not work, verify if the ```package.json``` is configured at the field ```scripts: {test: jest}```

## Showing more detailed information when testing
If you want more details to appear, while testing, you can run:
```
npm test --coverage
```
Or simply, reconfigure your ```package.json``` to be ```scripts: {test: jest --coverage}```
