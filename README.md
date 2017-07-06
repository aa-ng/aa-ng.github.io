# My personal website [![Badge]][Travis]

# Endpoint Functionality
|  Endpoint  |  GET  |  POST  |  PUT  | PATCH | DELETE |
| :--------: | :---: | :----: | :---: | :---: | :----: |
| /api/pages | returns page data data | creates new page document | updates current page document (entirely) | not in use | not in use |

# API Summary
My personal website relies on dynamically generated html structure, based on a JSON response from my backend NodeJS server API. This API is built around the [RESTful][rest] structure, with the goal of creating my own simple CMS. (Content management system) See where I generate the html view [here.][structure]

# API Usage
* /api/pages
```javascript
    //JQuery ajax request to api endpoint
    $.ajax({
            async: true,
            // request api return page data data
            type: 'GET',
            url: '/api/pages',
            // requests for api data from page document with href == '/example'
            data: {url: '/example'},
            contentType: 'application/json; charset=utf-8'
    }).done(function(res){
        console.log(res);
    });
```
{url:'/example'} specifies returning the document with the property that matches {href: '/example'} in our DB and returns it in JSON format.
The argument {url: '*'} will return the list of all page documents at once.

```javascript
    //example page to insert to database
    var Page = {
        href:'/example',
        name: 'example',
        tabbed: [],
        cards: [
            {
                list: {
                    width: 'col-xs-12'
                    bullets: [
                        "example1", "example2", "example3"
                    ]
                },
                items: ["list"],
                color: "mdl-color--pink-400",
                "name": "example",
                "title": "Example title",
                "shadow": "mdl-shadow--4dp",
                "updated": 1497733782844
            }
        ]
    };
    //JQuery ajax request to api endpoint
    var request = $.ajax({
            async: true,
            //request api creates new page document
            type: POST,
            url: '/api/pages',
            //creates a new page document in database from page provided
            data: {page: page},
            success: function (res){
                log('form', res);
            }
    });
```
POST requests are confirmed with a 'success' string response upon completion.
functionality for PUT requests are of little difference on the front end, aside from changing the http method.

# Example page data/document
- [home page][index]
- [projects page][projects]

# Links
- http://alex-ng.com
- https://Cynicalbird.github.io

[structure]: https://github.com/CynicalBird/Cynicalbird.github.io/blob/master/mean/public/javascripts/structure.js
[projects]: https://github.com/CynicalBird/Cynicalbird.github.io/blob/master/mean/pages/projects.json
[index]: https://github.com/CynicalBird/Cynicalbird.github.io/blob/master/mean/pages/index.json
[rest]: http://www.restapitutorial.com/lessons/httpmethods.html
[Travis]: https://travis-ci.org/CynicalBird/Cynicalbird.github.io
[Badge]: https://travis-ci.org/CynicalBird/Cynicalbird.github.io.svg?branch=master
