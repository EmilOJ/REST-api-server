# Run
First create a config.js file in root directory containing
```
// Application secret
module.exports = {
  secret: secretkey
};
```
where secretkey is any random string (e.g. `asl28gasldjf93nsjdfjhsdklf`)
```
npm install
npm run dev
```
Requires a running mongodb running at `mongodb://localhost`

