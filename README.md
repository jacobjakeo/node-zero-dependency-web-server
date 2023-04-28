## Node Zero Dependency Web Server

This is a Node.js command line program with zero dependencies (nothing except the UpLeveled ESLint config dependencies in "dependencies" or "devDependencies" in package.json), that will creates a web server that runs on localhost:6499

This server should return the content of all files in a directory called public.

## Stuck in Terminal? So was I...

With `ctrl + C` the user can exit the terminal after running the command. This will also shut down the localhost server.

## TO DO

- [x] Create a web server that runs on local host
- [] Create a `public` folder
- [] The `public`folder should contain the following files:
  - [] `memes/index.html`
  - [] `memes/1.jpg`
  - [] `index.html`
  - [] `index.css`

## The following behavior should be observable:

- [] http://localhost:3000 and http://localhost:3000/index.html should return the webpage in the `index.html` file
- [] http://localhost:3000/index.css should return the text content of the `index.css file`
- [] http://localhost:3000/memes and http://localhost:3000/memes/index.htm should return the webpage in the `index.html` file
- [] http://localhost:3000/1.jpg should display the `1.jpg` image
- [] http://localhost:3000/non-existent-file.txt should return a `404` status code (Error) and a message: `File not found`
