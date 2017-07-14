---
layout: post
title: Jump Start an SAAS with Laravel Spark
date: '2017-01-10 18:35:14 -0600'
categories: airtable
featured_image:
author: Ryan Hayden
excerpt:
---

One of our internal projects is a Software As A Service suite called [Simple Church Tools](http://simplechurchtools.com).  Our goal is to create a bunch of tools that don't exist (we aren't interested in replicating other companies tools) and sell them as an inexpensive monthly subscription to churches and we devote about a week and a half of work every month to this project.

Initially Simple Church Tools was just a bunch of Airtable databases we shared with customers.  This was great as a proof of concept - we were able to get the basic functionality working very quickly (usually in a weekend) and then just copy and paste the bases for each customer.

But the limitations of this approach quickly showed themselves (namely - it takes a lot of explation, bases couldn't be customized, etc.) so we started looking to turn Simple Church Tools into a proper web app.  

To help jumpstart this process - we picked up a license to [Laravel Spark](https://spark.laravel.com).  

## Laravel Spark

Laravel Spark is a companion project to the popular PHP framework Laravel that basically takes care of common development tasks for you freeing you to focus on the core functionality of your app.  Out of the box you get things like:

* User authentication
* Team and individual subscription billing
* Subscription trials
* User impersonation (for troubleshooting)
* Email integration
* and much more.   

This saves you weeks of development time (i.e. thousands of dollars) and all of the stuff is really well done.

You also get the full power of Laravel which is a great foundation for almost any kind of web app.

You can view a video about Spark here:
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/uOU_N8PNOD8" frameborder="0" allowfullscreen></iframe>
<br>

## Our experience

In our case, we couldn't be happier and would love to do more projects with Laravel and Spark in the future.  Everything is so well documented, and there are so many components and examples out there, we've been able to jump start something that would take several months in just a couple of weeks.

Our only complaint with Laravel Spark is their inclusion of Bootstrap.  We loathe Bootsrap and wish it didn't have to be included in the project.  But that is a small price to pay for such a great experience.
