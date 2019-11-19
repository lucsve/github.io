---
layout: post
title:  "Pre-compiling CSS"
date:   2019-11-18 07:00:00 +0100
categories: assignment
excerpt: Här delar jag med mig om mina tankar om att pre-kompilera CSS.
comments: true
---
### CSS vs SASS 
Jag har använt mig av Sass som preprocessor. Därför kommer jag göra jämförelsen mellan CSS och Sass. Att arbeta med Sass är vid första anblick mer strukturerat, smidigare, enklare och kanske även roligare än att använda CSS. Sass tarvar också mer verktyg - det är inte bara att redigera en .css-fil så är det klart.
* Variabler finns idag även i CSS, även om jag tycker syntaxen för det är enklare i Sass. 
* Beräkningar går också att lösa i CSS även om det också är lite lättare med Sass. 
* Nästling i Sass kan vara en fröjd, men det är också lätt att tappa bort sig om man inte ser att en selektor är nästlad. 
* Det är onekligen lockande med Sass *partials* sett ur ett struktur&shy;perspektiv. Förutsatt att man uttänkt och korrekt byggt upp strukturen. Annars är det lite besvärligare om man är van att förlita sig till `ctrl+f` i en lång .css-fil.
* Än så länge kan man inte använda sig av *mixins* och *functions* i CSS. Så där har Sass en fördel. Det är både kul och behändigt att kunna använda sig av funktioner som man kan återanvända. 

### Mina tekniker
* Jag använde mig friskt av variabler. Huvudsakligen för att ange färger och då kunde jag uppge de färgkoder som jag hade specificerat för mitt färgtema. 
* Nästling använde jag mig av för exempelvis navigeringen och blogglänkarna. 
* För att kunna specificera typsnitt, teckenstorlek, vikt och stil skapade jag en mixin. Jag gjorde några fler mixins och en annan jag använde mig av var en för att sätta bakgrundsbild i banners/hero-bilder.
* När jag skapade boxarna som utgör länkarna till blogginläggen gjorde jag det i en *partial* för komponenter. I samma partial finns innehåll för de tidigare nämnda hero-bilderna. 

### För- och nackdelar med Sass
#### Fördelar 
Variabler kan nog vara min favoritfunktion i Sass. Visst, det går att åstadkomma i CSS, men inte fullt lika smidigt syntaxmässigt.

Nästling upplever jag så smidigt att när jag väl kommer in i det så känner jag nästan att jag missbrukar funktionaliteten. 

Var sak på sin plats. Med en korrekt struktur är *partials* riktigt bekvämt, när man kan jobba med mindre filer. 

*Mixins* och *functions* är kanske den främsta styrkan hos Sass, som CSS fortfarande har en del att jobba på. Inte för att man i ärlighetens namn kanske använder det så ofta, men det är ju kul att det finns. 


#### Nackdelar 
Jag var inne på det tidigare att Sass kräver lite mer förberedelse. Dels installationen av själva preprocessorn samt Node-miljön som den är beroende av. Dels att man bör tänka på hur man strukturerar upp sina partials och i vilken ordning man sedan importerar dem. 

Ett problem med partials är om man inte strukturerat upp det korrekt. Då kan det vara svårt att hitta det man letar. I förlängningen finns det då en risk att man upprepar sig och åsidosätter kod man skrivit någon annanstans, om man inte är alert. 

Vad gäller nästling kan jag tycka det är besvärligt vid lite längre kod, när jag befinner mig i en nästlad selektor och inte enkelt kan se vad den tillhör. 

Det tar längre tid att generera en css-fil än att jobba direkt med den.  

Det är svårare att debugga koden. Det kräver att man gör en *source mapping*. I fallet med Jekyll (eller temat Minima?) så sköts det dock per automatik. 

Sass är mer komplext. I och med det också mer benäget att orsaka problem. Det kräver fler verktyg och då blir det fler saker som kan gå fel efter vägen. Dessutom tycks det inte råda något överenskommet förhållningssätt till om man ska versionshantera css-filerna tillsammans med sass-filerna eller ej. Så en oerfaren utvecklare kanske redigerar css-filen och sedan skrivs de ändringarna över när någon uppdaterar sass-filerna.