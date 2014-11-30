---
layout: work
title: Work-Tengyue
categories: work
permalink: /work/
---

<div id="wrapper">

  <!--<h1 class="page-heading">THOUGHT</h1> -->

  <div id="columns">
    {% for post in site.categories.work %}
      <div class="pin">
  			<a href="{{ post.url }}"><img src="{{ post.src }}" /></a>
			<p>
				{{ post.pre }}
			</p>
      </div>
    {% endfor %}
  </div>

 <!-- <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>  -->

</div>
