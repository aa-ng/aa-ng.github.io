//generates the layout as an html view
function generateLayout(layout)
{
    var cards = layout.data.cards;
    $("nav").html(generateNav(cards));
    for (var i = 0; i < cards.length; i++)
    {
        var card = cards[i];
        var title = card.title;
        var id = titleToId(title);
        //html view of current card
        var view = '';
        //log the current card and json representation
        log("JSON, Card "+i, JSON.stringify(card));
        //loop through items/documents of card
        for (var h = 0; h < card.items.length; h++)
        {
            view += '<div class="row">';
            //determine the type of element/document inside the card
            switch (card.items[h])
            {
                case "list":
                    view+=generateList(card.list);
                    break;
                case "projects":
                    view+=generateProjects(card.projects);
                    break;
                case "articles":
                    view+=generateArticles(card.articles);
                    break;
                case "social":
                    view+=generateSocial(card.social);
                    break;
                case "forum":
                    view+=generateForm(card.forum);
                    break;
                case "edit":
                    view+=generateEdit(card.edit);
                    break;
            }
            view += '</div>';
        }
        //set the title of the card
        $("h1.title-"+id).html(title);
        //place the generated view in container
        $("div."+id).html(view);
        //log the current card and html representation
        log("HTML, Card "+i, view);
    }
}

function generateList(list, linked)
{
    //html view
    var view = "<ul class='center'>";
    //add each element of the list to the view
    for (var i = 0; i < list.length; i++)
    {
        //list with no hyperlinks
        if (!linked)
            view += "<li>" + list[i] + "</li>";
        //list with hyperlinks
        else
        {
            if (list[i].hasOwnProperty("github"))
                view += "<a href='"+ list[i].github+"'><li>Github</li></a>";
            view += "<a href='" + list[i].link + "'><li>" + list[i].title + "</li></a>";
        }
    }
    //return the view
    return view+"</ul>";
}

/*
 * generates a html view for projects (array)
 * projects: {
 *   title: String, (Mandatory)
 *   type: "Group", (Mandatory)
 *   projects: [] (Mandatory)
 * }
 * returns and html view
 */
function generateProjects(projects)
{
    //html view with centered elements
    var view = "<div class='center'>";

    for (var i = 0; i < projects.length; i++)
    {
        //curent project
        var project = projects[i];
        //bootstrap divider
        view+="<div class='col-md-4 col-sm-6 col-xs-12'>";
        if (project.type == "group")
            view+=generateProject(project)+"</div>";
    }
    //return the view
    return view+"</div>";
}

/*
 * helper function for generateProjects that generates an html view for a project (object)
 * project: {
 *   title: String, (Mandatory)
 *   link: String, (Mandatory)
 *   github: String
 * }
 */
function generateProject(project)
{
    //html view
    var view = "<h2>"+project.title+"</h2>";
    for (var i = 0; i < project.projects.length; i++)
    {
        //ensures project type is correct
        if (project.type != "group")
            return "<h1>Error project data sent is wrong type! "+project.type+"</h1>";
        //add project title
        //view += "<a data-toggle='collapse' class='collapsed' aria-expanded='false'>";
    }
    //generate list with links
    view += generateList(project.projects, true);
    //return the view
    return view;
}

/*
 * generates an html view for articles (array)
 *
 */
function generateArticles(articles)
{
    var view = "<div class='center'>";
    for (var i = 0; i < articles.length; i++)
    {
        view += generateArticle(articles[i]);
    }
    return view+"</div>";
}

/*
 * helper function for generateArticles that generates an html view for an article (object)
 *
 */
function generateArticle(article)
{
    var view = "<div class='col-md-4 col-sm-6 col-xs-12 center'><h2>"+article.title+"</h2>";
    for (var i = 0; i < article.paragraphs.length; i++)
        view += "<p>"+article.paragraphs[i];+"</p>";
    return view+"</div>";
}

function generateSocial(social)
{
    var view = "<div class='center'><h2>Social</h2>";
    var container = "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12 icon-container'>";
    //facebook
    if (social.hasOwnProperty("facebook"))
        view += container + "<a href='"+social.facebook.src+"'><img alt='facebook' src='"+social.facebook.icon+"'></a><h3>Facebook</h3></div>";
    //email
    if (social.hasOwnProperty("email"))
        view += container + "<a href='mailto:"+social.email.src+"'><img alt='email' src='"+social.email.icon+"'></a><h3>Email</h3></div>";
    //linked in
    if (social.hasOwnProperty("linkedin"))
        view += container + "<a href='"+social.linkedin.src+"'><img alt='linkedin' src='"+social.linkedin.icon+"'></a><h3>Linkedin</h3></div>";
    //twitter
    if (social.hasOwnProperty("twitter"))
        view += container + "<a href='"+social.twitter.src+"'><img alt='twitter' src='"+social.twitter.icon+"'></a><h3>Twitter</h3></div>";
    return view+"</div>";
}

function generateNav(cards)
{
    var viewDesktop = "<ul class='nav nav-pills pull-right'>";
    var viewMobile = "<div id='menu-container' class='dropdown'>" +
        "<button id='menu' class='hidden-sm hidden-md hidden-lg btn-lg dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>" +
        "Menu<span class='carrot'></span></button>" +
        "<ul class='dropdown-menu'>" +
        "<li class='dropdown-header'>Navigation</li>";
    for(var i = 0; i < cards.length; i++)
    {
        viewDesktop+=generatePill(cards[i]);
        viewMobile+=generateMenuItem(cards[i]);
    }
    viewMobile+="</li></ul></div>";
    viewDesktop+=viewMobile+"</ul>";
    //return view current nav-message is temporarily hardcoded.
    return viewDesktop+"<h1><a href='http://alex-ng.com/' id='nav-title'>Alex</a></h1><p id='nav-message'>Website in construction</p>";
}

function generatePill(card)
{
    var id = titleToId(card.title);
    var view = "<li class='hidden-xs' role='presentation' id='nav-"+id+"'"+"><a href='#"+id+"'>"+id;
    return view+"</a></li>";
}

function generateMenuItem(card)
{
    var id = titleToId(card.title);
    var view = "<li><a href='#"+id+"'>"+id;
    return view+"</a></li>";
}

function generateForm(form)
{
    //hard coded title and form post for now
    var view = '<form method="'+form.method+'" action="'+form.action+'"><div class="center form"><h2>Leave me a message</h2>';
    for (var i = 0; i < form.fields.length; i++)
    {
        view +='<div class="col-xs-12"><input type="text" placeholder="'+form.fields[i]+'"></div>'
    }
    return view+'<button type="submit" class="btn btn-sm">Submit</button></div></form>';
}

function generateEdit(edit)
{
    var list;
    if (edit.admin)
    {
        list = JSON.parse(requestAllPageData());
        log('allPageData', list);
        var view = '<div class="container"><div class="row">';
        for (var i = 0; i < list.length; i++)
        {
            log('card', list[i]);
            view += '<div class="col-xs-9"><p>"' + list[i].href + '"</p></div>'
                +'<div class="col-xs-3">'+generateModal(list[i].name, list[i].name, list[i])+'</div>';
        }
        view+='<div class="row"><div class="center col-xs-12"></div>'+generateModal("New", "New", new Object())+'</div></div>';
        //log(view);
        enableModal();
        return view + '</div></div>';
    }
}

function generateModal(name, label, object)
{
    var view = '<button type="modalButton" class="'+name+'">Edit '+label+'</button>';
    view+='<div id="'+ name+'" class="container" type="modal">'
        +'<div class="'+name+'ModalContent" type="modalContent">'
            +'<div type="modalHeader">'
                +'<span type="modalClose" class="'+name+'">&times;</span>'
                +'<h2>Edit '+label+'</h2>'
            +'</div>'
            +'<div class="modalForm"><form method="post" action="/api/pages">'
            +'<div class="center"><div class="row"><textarea name="page" cols="50", rows="20">'+JSON.stringify(object, null, 4)+'</textarea></div>'
            +'<button type="submit" class="btn btn-sm">Submit</button></div></div></form>'
        + '</div></div>';
    return view;
}

function enableModal(){
    $(document).ready(function()
    {
        //modal windows
        var modals = $("div[type='modal']");
        //close modal spans
        var modalsClose = $("span[type='modalClose']");
        //open modal buttons
        var modalsOpen = $("button[type='modalButton']");
        //log('modalsClose',modalsClose);
        //log('modalsOpen', modalsOpen);
        //console.log(modalsOpen);

        modalsClose.click(function () {
            log('modalClose', this.className);
            $("#" + this.className).css('display', 'none');
        });

        modalsOpen.click(function () {
            log('modalButton', this.className);
            $("#" + this.className).css('display', 'block');
        });

        log('modal', 'enabled');
    });
}

//NOTE likely should be placed elsewhere only useful on admin page
function requestAllPageData()
{
    //should be synchronous or else the function will try and return undefined implicitly upon completion
    return $.ajax({
        async: false,
        url: '/api/pages',
        type: 'GET',
        data: {url: '*'},
        contentType: 'application/json; charset=utf-8'
    }).responseText;
}
