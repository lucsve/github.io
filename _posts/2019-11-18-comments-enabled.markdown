---
layout: post
title:  "Please comment below!"
date:   2019-11-18 09:00:00 +0100
categories: assignment
excerpt: Det sägs att man utvecklas av kritik. Så vad tänkte jag när jag bjöd in trollen och aktiverade kommentarsfält? 
comments: true
---
### Hur implementerade jag kommentarsfälten?
Jag använde mig av **Disqus** och skaffade ett kostnadsfritt konto på [disqus.com](https://disqus.com/). Där lade jag till en sajt och uppgav webbplatsens namn (LS) och *shortname* (lucsve). Jag aktiverade också möjligheten att använda emojis, för de unga alternativt mina fåordiga likar. 

I mina kontoinställningar hos Disqus lade jag inte in något i *Trusted Domains*. Det tycktes fungera ändå. 

I mallfilen `src/_layouts/post.html` i stycket som hade med Disqus att göra bytte jag ut `if site.disqus.shortname` mot `if page.comments`.

Filen `src/_includes/disqus_comments.html` fanns redan så det behövde jag inte lägga till. 

För enkelhetens skull lade jag till följande i _config.yml: 

{% highlight ruby %}
disqus:
    shortname: lucsve
{% endhighlight %}


Det sista och enklaste steget var att lägga till `comments: true` i *front matter* för de bloggposter där jag vill tillåta kommentarer. 