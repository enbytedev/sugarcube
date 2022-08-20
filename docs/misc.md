## Misc

Misc. tools!
----

### Random Number
This returns a random number with the provided length:
`sugarcube.misc.randomNumber(6)`
to view the number, try logging it in console.

### Replace Regex
This takes in a string and the desired replacement for all the following patterns taken as the third argument onward:
`console.log(sugarcube.misc.replaceRegex('this is/probably:not a"safe string for /a website endpoint//:', '-', '/', '"', ':', ' '));`
outputs:
"this-is-probably-not-a-safe-string-for--a-website-endpoint---" which looks a lot more web-friendly. This is helpful when dealing with user content.