Timestamp Microservice
==

 [Follow @koojam_pk on Twitter](https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ffollow-button&amp;ref_src=twsrc%5Etfw&amp;region=follow_link&amp;screen_name=koojam_pk&amp;tw_p=followbutton)

### User Stories:
> 1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
> 2. If it does, it returns both the Unix timestamp and the natural language form of that date.
> 3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example Usage
``` https://curious-sunshine.glitch.me/api/1513267200 ```<br>
``` https://curious-sunshine.glitch.me/api/December 14, 2017 ```<br>
``` https://curious-sunshine.glitch.me/api/Dec 14, 2017 ```
### Example Output
```{ "unix": 1513267200, "natural": "December 14, 2017" }```
