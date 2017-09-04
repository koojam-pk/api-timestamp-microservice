Timestamp Microservice
==

 <div class="row social-network-wrapper">
            <div class="col-3" style="margin-right: 20px">
                <a id="follow-button" class="btn btn-primary btn-sm" title="Follow @koojam_pk on Twitter" href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ffollow-button&amp;ref_src=twsrc%5Etfw&amp;region=follow_link&amp;screen_name=koojam_pk&amp;tw_p=followbutton">
                    <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E" style="width:1em;height:1em;"></i>
                    <span class="label" id="l">Follow <b>@koojam_pk</b></span>
                </a>
            </div>
            <div class="col-3">
                <a id="github-button" class="btn btn-primary btn-sm" title="Source code on Github" 
                    href="https://github.com/koojam-pk/api-timestamp-microservice"
                    target="blank">
                    <img src="data:image/svg+xml,%3Csvg%20aria-labelledby%3D%22title%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%221.414%22%20fill%3D%22%23fff%22%3E%3Ctitle%3EGitHub%20icon%3C%2Ftitle%3E%3Cpath%20d%3D%22M12%20.297c-6.63%200-12%205.373-12%2012%200%205.303%203.438%209.8%208.205%2011.385.6.113.82-.258.82-.577%200-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422%2018.07%203.633%2017.7%203.633%2017.7c-1.087-.744.084-.729.084-.729%201.205.084%201.838%201.236%201.838%201.236%201.07%201.835%202.809%201.305%203.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93%200-1.31.465-2.38%201.235-3.22-.135-.303-.54-1.523.105-3.176%200%200%201.005-.322%203.3%201.23.96-.267%201.98-.399%203-.405%201.02.006%202.04.138%203%20.405%202.28-1.552%203.285-1.23%203.285-1.23.645%201.653.24%202.873.12%203.176.765.84%201.23%201.91%201.23%203.22%200%204.61-2.805%205.625-5.475%205.92.42.36.81%201.096.81%202.22%200%201.606-.015%202.896-.015%203.286%200%20.315.21.69.825.57C20.565%2022.092%2024%2017.592%2024%2012.297c0-6.627-5.373-12-12-12%22%2F%3E%3C%2Fsvg%3E" style="width:1em;height:1em;" />
                    <span class="label">Source code on Github</span>
                </a>
                <br />
            </div>
        </div>
### User Stories:
> 1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
> 2. If it does, it returns both the Unix timestamp and the natural language form of that date.
> 3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example Usage
``` https<nolink>://curious-sunshine.glitch.me/api/1513267200 ```<br>
``` https<nolink>://curious-sunshine.glitch.me/api/December 14, 2017 ```<br>
``` https<nolink>://curious-sunshine.glitch.me/api/Dec 14, 2017 ```
### Example Output
```{ "unix": 1513267200, "natural": "December 14, 2017" }```