---
layout: post
title:  "Humans and Robots"
date:   2019-11-18 14:00:00 +0100
categories: assignment
excerpt: Kan människor och robotar leva sida vid sida?
comments: true
---
### humans.txt 
För att ge uppmärksamhet till de som ligger bakom en sajt har fenomenet humans.txt utvecklats på initiativ av [humanstxt.org](http://humanstxt.org/). Det är en vanlig txt-fil som man lägger upp i sajtroten. Där uppger man vilka som arbetat med webbplatsen, tackar eventuellt berörda parter och så kan man specificera vilka verktyg man använt för att utveckla den aktuella sajten. Det tillför inte så mycket (om alls något) vad gäller SEO, utan som namnet hintar om är det till för människor. Och kanske i synnerhet nördarna/branschfolket. Det är som en sajts eftertexter, utan koppling till [IMDB](http://imdb.com).

Jag skapade en fil vid namn humans.txt i src-mappen i Jekyll. Den fyllde jag sparsamt med relevant information. Sedan länkade jag till filen i `src/_includes/head.html` med följande sträng: 

`<link rel="author" type="text/plain" href="{{ '/humans.txt' | relative_url }}" />`

### robots.txt 
Enligt logiken ovan är robots.txt till för just robotar. Exempelvis sökmotorers sökspindlar. Den här txt-filen säger till robotarna **hur de bör** besöka en sajt. Det är inget som hindrar robotarna från att ignorera dessa uppmaningar. Och då filen är publik syns det vad man försöker "dölja". Men annars är det bra, om man exempelvis vill berätta för Google vilka sidor man vill ska synas vid Google-sökningar. 

Jag skapade en fil vid namn robots.txt i src-mappen i Jekyll. Den innehåller följande kod, som säger till alla robotar att jag inte vill att någon sida ska indexeras. 

{% highlight ruby %}
User-agent: *
Disallow: /
{% endhighlight %}