
//generates the layout as an html view
function generateLayout(layout)
{
    var cards = layout.data.cards;
    $("nav#localNav").html(generateNav(cards));
    var tabs = layout.data.tabbed;
    if (tabs)
    {
        log('tabbed', 'true');
        for (var i = 0; i < tabs.length; i++)
        {
            var active = '';
            if (i == 0)
                active = 'is-active';
            var view = generateTab(tabs[i].name, tabs[i].label, active);
            $("div.container#content-container").append(view);
            componentHandler.upgradeDom();
        }
    }
    for (var i = 0; i < cards.length; i++)
    {
        var card = cards[i];
        var title = card.title;
        var id = titleToId(title);
        var cardContainer = $("div.container#content-container");
        //if card is tabbed place set its container to its tab
        if (card.tab)
            cardContainer = $("div#"+card.tab+"Tab");
        //html view of current card
        var view = '';
        //log the current card and json representation
        log("JSON, Card "+i, JSON.stringify(card));

        view += '<div class="row">';
        view+= generateCard(card.title, card.name, card);
        view += '</div>';

        //set the title of the card
        //$("h1.title-"+id).html(title);
        //place the generated view in container
        cardContainer.append(view);
        //log the current card and html representation
        log("HTML, Card "+i, view);
    }
    patchDynamicTabs();
}

function generateTab(name, label, active)
{
    var view = '<div class="mdl-layout__tab-panel container '+active+'" id="'+name+'Tab"></div>';
    return view;
}

/*
* Function correctly upgrades MDL tabs that are dynamically generated
* is-active class should be correctly removed when selecting tabs
* https://github.com/react-mdl/react-mdl/issues/66
 */
function patchDynamicTabs()
{
    var tabs = document.querySelectorAll('.mdl-layout__tab');
    var panels = document.querySelectorAll('.mdl-layout__tab-panel');
    var layout = document.querySelector('.mdl-js-layout');
    var tabbar = document.querySelector('.mdl-layout__tab-bar');
    for (var i = 0; i < tabs.length; i++) {
        new MaterialLayoutTab(tabs[i], tabs, panels, layout.MaterialLayout);
    }
}

/*
* New function to generate standard card using Google's Material design lite framework
* https://getmdl.io/
 */
function generateCard(title, name, card){
    view = '<section class="section--center mdl-grid mdl-grid--no-spacing '+card.shadow+' '+card.backgroundColor+'" id="'+name+'">';
    //if card has images images display them in header (Image Currently static in css)
    if (card.images)
        view += '<header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone '+card.color+' '+name+' mdl-color-text--white"></header><div id="' + name + '" class="' + name + '-card-wide mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone '+card.backgroundColor+'">';
    else
        view += '<div class="'+name+'-card-wide mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone '+card.backgroundColor+'">';
    view += '<div class="mdl-card__title"><h2 class="mdl-card__title-text">'+title+'</h2></div>';

    //generate card items
    for (var i = 0; i < card.items.length; i++)
    {
        switch (card.items[i])
        {
            case "list":
                view += generateList(card.list.bullets, card.list.width);
                break;
            case "projects":
                view += generateProjects(card.projects);
                break;
            case "article":
                view += generateArticles(card.article);
                break;
            case "forum":
                view+=generateForm(card.forum);
                break;
            case "social":
                view+= generateSocial(card.social);
                break;
            case "edit":
                view+=generateEdit(card.edit);
                break;
            default:
                view += "<h1>Error cannot create card type!</h1>";
                break;
        }
    }
    //card actions
    view += '<div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--primary">Last updated on: '+new Date(card.updated).toUTCString()+'</a></div>';
    return view+"</div></section>";
}

function generateList(list, width, linked)
{
    //html view
    var view = "<div class='"+width+"'><ul class='material-list mdl-list toc'>";
    //add each element of the list to the view
    for (var i = 0; i < list.length; i++)
    {
        //list with no hyperlinks
        if (!linked)
            view += generateListItem(list[i], 'label');
        //list with hyperlinks
        else
        {
            if (list[i].hasOwnProperty("github"))
                view+= generateListItem('github', 'label', list[i].github);
            view+= generateListItem(list[i].title, 'label', list[i].link);
        }
    }
    //return the view
    return view+"</ul></div>";
}

function generateListItem(title, icon, link)
{
    var view = "<li class='mdl-list__item'>"
        + "<span class='mdl-list__item-primary-content'>"
        + "<i class='material-icons mdl-list__item-icon'>"
        + icon
        +"</i></span>";
        if (!link)
            view += title;
        else
            view +="<div class='col-xs-12'><a class='mdl-color-text--accent' href='"+link+"'>"+title+"</a></div>";

    return view+"</li>";
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
    if (projects) {
        //html view with centered elements
        var view = "<div class='center'>";

        for (var i = 0; i < projects.length; i++) {
            //curent project
            var project = projects[i];
            //bootstrap divider
            view += "<div class='col-md-4 col-sm-6 col-xs-12'>";
            if (project.type == "group")
                view += generateProject(project) + "</div>";
        }
        //return the view
        return view + "</div>";
    }
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
    var view = "<h4 class='mdl-list__item'>"+project.title+"</h4>";
    //for (var i = 0; i < project.list.length; i++)
    {
        //ensures project type is correct
        if (project.type != "group")
            return "<h1>Error project data sent is wrong type! "+project.type+"</h1>";
        //add project title
        //view += "<a data-toggle='collapse' class='collapsed' aria-expanded='false'>";
    }
    //generate list with links
    view += generateList(project.list, project.width, true);
    //return the view
    return view;
}

/*
 * generates an html view for articles (array)
 *
 */
function generateArticles(articles)
{
    var view = "<div class='col-md-12 col-sm-12 col-xs-12'>";
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
    var view = "<h4>"+article.title+"</h4>";
    for (var i = 0; i < article.paragraphs.length; i++)
        view += "<p>"+article.paragraphs[i];+"</p>";
    if (article.list)
        view += generateList(article.list, 'col-xs-12', true);
    return view;
}

function generateSocial(social)
{
    var view = "<div class='center col-xs-12 col-lg-6'><h3>Social</h3>";
    var container = "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-6 icon-container'>";
    //facebook
    if (social.hasOwnProperty("facebook"))
        view += container + "<a href='"+social.facebook.src+"'><img class='social-icon' alt='facebook' src='"+social.facebook.icon+"'></a><h4>Facebook</h4></div>";
    //email
    if (social.hasOwnProperty("github"))
        view += container + "<a href='"+social.github.src+"'><img class='social-icon' alt='email' src='"+social.github.icon+"'></a><h4>Github</h4></div>";
    //linked in
    if (social.hasOwnProperty("linkedin"))
        view += container + "<a href='"+social.linkedin.src+"'><img class='social-icon' alt='linkedin' src='"+social.linkedin.icon+"'></a><h4>Linkedin</h4></div>";
    //twitter
    if (social.hasOwnProperty("twitter"))
        view += container + "<a href='"+social.twitter.src+"'><img class='social-icon' alt='twitter' src='"+social.twitter.icon+"'></a><h4>Twitter</h4></div>";
    return view+"</div>";
}

/*

 */
function generateNav(cards)
{
    var view = "";
    for(var i = 0; i < cards.length; i++)
        view+=generateNavLink("#"+cards[i].name, cards[i].name);
    return view;
}

function generateNavLink(href, label){
    return '<a class="mdl-navigation__link" href="'+href+'">'+label+'</a>';
}

function generateForm(form)
{
    //hard coded title and form post for now
    var view = '<div class="center col-xs-12 col-lg-6"><form method="'+form.method+'" action="'+form.action+'"><h3>Leave me a message</h3>';
    for (var i = 0; i < form.fields.length; i++)
    {
        view +='<div class="col-xs-12">'+generateInput(form.fields[i], form.fields[i], form.fields[i])+'</div>';
    }
    return view+'<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color-text--white">Submit</button></form></div>';
}

function generateInput(name, label, id)
{
    var view = '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'
    +'<input class="mdl-textfield__input" type="text" id="'+id+'" name="'+name+'">'
    +'<label class="mdl-textfield__label" for="'+id+'">'+label+'</label></div>';
    //componentHandler.upgradeElement(view);
    return view;
}

function generateEdit(edit)
{
    var list;
    if (edit.admin)
    {
        list = JSON.parse(requestAllPageData());
        log('allPageData', list);
        var view = '<div class="container col-xs-12"><div class="row">';
        for (var i = 0; i < list.length; i++)
        {
            view += '<div class="col-xs-6"><p>' + list[i].name + ' - "'+list[i].href+'"</p></div>';
            log('card', list[i]);
                view += '<div class="row"><div class="col-xs-6 center">'+generateModal(list[i].name, list[i].name, list[i])+'</div></div>';
        }
        view+='<div class="col-xs-6"><p>Create new page- new</p></div><div class="row"><div class="col-xs-6 center">'+generateModal("New", "New", {href:"", name:"", cards:[], tabbed:[]})+'</div></div>';
        //log(view);
        enableModal();
        return view + '</div></div>';
    }
}

function generateImage(src, width, center)
{
    var view = '<div class="'+width+' '+center+'"><img class="logo" height="184px" src="'+src+'" alt="'+src+'"></div>';
    return view;
}

function generateModal(name, label, object)
{
    var view = '<button type="modalButton" name="'+name+'" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color-text--white">Edit '+label+'</button>';
    view+='<div id="'+ name+'" class="container" type="modal">'
            +'<div type="modalHeader">'
                +'<span type="modalClose" class="'+name+'">&times;</span>'
                +'<h2>Edit '+label+'</h2>'
            +'</div>'
            +'<div class="modalForm"><input type="hidden" name="_method" value="put"/>'
            +'<div class="center"><div class="row"><textarea name="'+name+'" cols="50", rows="20">'+JSON.stringify(object, null, "\t")+'</textarea></div>'
            +'<button onclick="updatePage(`'+name+'`)" type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color-text--white">Submit</button></div></div>'
        + '</div>';
    return view;
}

