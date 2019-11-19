---
layout: post
title:  "Open Graph"
image: /assets/lucsve-og.png
author: Lucas
date:   2019-11-18 10:00:00 +0100
categories: assignment
excerpt: Bestäm vad du ska ha för ansikte utåt innan någon annan gör det åt dig.  
comments: false
---
### Open Graph
#### Vad är det? 
Ett protokoll som introducerades av Facebook. Det gör det möjligt att bestämma vilken information som finnas tillgänglig när en webbsida delas i sociala medier. Det sker med hjälp av meta-taggar där egenskapen inleds med **og:**, exempelvis `property="og:title"`. Inte bara Facebook har stöd för Open Graph utan även andra liknande plattformar såsom Twitter och LinkedIn. 

#### Hur använde jag mig av Open Graph? 
Först skapade jag filen `src/_includes/open-graph.html` där jag lade in de nödvändiga meta-taggarna og:title, og:type, og:url och og:image. Sedan importade jag den filen med hjälp av Liquid i `src/_includes/head.html`. 

Sedan skapade jag en generisk bild för att kunna testa så att `og:image` fungerade som tänkt. Jag använde mig av bildration 1.91:1, som Facebook förordar för rektangulära bilder. Därefter lade jag in `image: /assets/lucsve-og.png` i *front matter* på mina sidor. 

Då upptäckte jag i källkoden i den genererade sidan att det blev lite tårta på tårta. Det fanns redan en massa Open Graph-taggar. Efter lite efterforskande kom jag fram till att med temat Minima så är tillägget [`jekyll-seo-tag`](https://github.com/jekyll/jekyll-seo-tag) förinstallerat. Och efter att [jag såg i Slack att det var ok](https://coursepress.slack.com/archives/C03M7PNTX/p1542272274343800) så använde jag Jekylls tillägg istället för mina egna taggar. 
