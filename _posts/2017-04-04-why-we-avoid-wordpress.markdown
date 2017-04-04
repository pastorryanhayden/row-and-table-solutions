---
title: Why We Avoid Wordpress
layout: post
date: 2017-04-04 01:35:14 -0600
categories: websites
featured_image: /uploads/wordpress.png
---

At Row and Table, we love making websites, and if you hire us for integration, we will work with whatever you choose to work with, but there is one platform that we cannot stand: Wordpress.

Wordpress, how do we hate thee, let us count the ways:

## 1. Security

Like many others, I've made lots of Wordpress sites in my day.  There was a time in the mid-2000s where everyone was on wordpress.  But the shine of Wordpress started to wear off the time I opened my website to see a lovely message from a hacker.  One of my clients had failed to update a plugin which gave a hacker access to all of the sites on that server. I spent the first of many BRUTAL weekends trying to get a website back.

After two or three of these episodes, I decided enough was enough and quit Wordpress never to look back again.  

The reason why Wordpress is such a threat for security isn't really Wordpress' fault - it's a victim of it's own popularity.  In other words, because Wordpress powers so much of the web - it's a prime target for automated hackers.

## 2. Posers

A second reason we hate Wordpress is because it enables Web Design posers. A huge ammount of people who call themselves web designers don't know web design at all. They aren't comfortable with HTML, CSS, and Javascript.  They really don't know how to do much of anything but install wordpress themes.  Everyone has to start somewhere - but there is a whole ecosystem of these people in the Wordpress world.  


## 3. Not built for content management

The sad truth about Wordpress is that it was never built for content management; it was built to be a blogging tool.  That means both the control panel, and more importantly, the template structure of Wordpress is built around blogging.  I think Wordpress is the main reason why so many sites exist that have blogs that haven't ever been updated.  Wordpress pushes a blog and other repetitive content front and center - when many (most) companies don't really need a blog.  

Because Wordpress is built for blogging, it can be restrictive when you are trying to build other types of sites, and a bit too prescriptive for content management.

# So What Do We Use?

Depending on our client's needs we like to use one of two Content Mangagement Systems.  We use [Cloud Cannon](http://www.cloudcannon.com) for most of our sites, and when our clients need more, we use [CraftCMS](http://craftcms.com).  
![]({{site.url}}/uploads/cloud-cannon.png)

[Cloud Cannon](http://www.cloudcannon.com) is a Content Management System built for [Jekyll](http://www.jekyllrb.com) - which is actually a static site generator.  What that means is that it is virtually impossible to hack, serves super fast, and gets out of our way so that we can develop anything. 

<div class="callout" markdown="1">
For a great article on Jekyll and static site generators, [read this](https://developmentseed.org/blog/2012/07/27/build-cms-free-websites/) - written by a team who has managed the White House blog.
</div>

We can also write simple plugins in Ruby which [Cloud Cannon](http://www.cloudcannon.com) will run whenever it makes changes which allows us to do awesome things with external APIs.

The only downside to [Cloud Cannon](http://www.cloudcannon.com) is, because it is a static site generator, it can feel a little slow (because it is actually creating a whole website and pushing it to another server every time) and users have to get used to the idea of their changes taking 30 seconds or so to go live.

![]({{site.url}}/uploads/craftCMS.png)

When a client outgrows Cloud Cannon, we bump up to [CraftCMS](http://craftcms.com), a very extenisible and very slick Content Management System that can handle all types of content.  Unlike Cloud Cannon, Craft is very fast and changes happen immediately.

But [Craft](http://craftcms.com) comes with a hefty up front price tag.  (We have to pay $300 up front for each website) and an even heavier time investment (because of it's relative complexity - it just takes a little longer to work with) for that reason, we do most of our work on Cloud Cannon.
