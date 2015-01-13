---
layout: work
title: Work-Tengyue
categories: work
permalink: /work/
---

<div id="wrapper">

  <!--<h1 class="page-heading">THOUGHT</h1> -->
<div>
  <svg viewBox="0 0 400 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="head_svg">
    <!-- Generator: Sketch 3.2.1 (9977) - http://www.bohemiancoding.com/sketch -->
    <title>blog 3</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="blog-3" sketch:type="MSArtboardGroup" stroke="#393939">
            <path d="M112.029731,17.6884609 L93,50.2022099 L111.733919,82.5497024 L118.39081,71.2703516 L124.751445,82.3144672 L143.598118,50.0098653 L124.686446,17 L107.318995,49.0586652 L130.012428,49.0586662 L116.130917,24.5402932" id="Path-1" sketch:type="MSShapeGroup"></path>
            <path d="M161.899495,36.3994949 L199,26.5 L189.100505,63.6005051 L152,73.5 L161.899495,36.3994949 Z" id="Rectangle-10" sketch:type="MSShapeGroup" transform="translate(175.500000, 50.000000) rotate(-45.000000) translate(-175.500000, -50.000000) "></path>
            <path d="M168.179922,31.1011692 L183.383801,31.1011692" id="Path-2" sketch:type="MSShapeGroup"></path>
            <path d="M168.468208,69.4389463 L182.942458,69.4389463" id="Path-3" sketch:type="MSShapeGroup"></path>
            <path d="M201.899495,36.3994949 L239,26.5 L192,73.5 L201.899495,36.3994949 Z" id="Rectangle-13" sketch:type="MSShapeGroup" transform="translate(215.500000, 50.000000) scale(-1, 1) rotate(-45.000000) translate(-215.500000, -50.000000) "></path>
            <path d="M224.459908,49.736951 L242.905211,82.1191452" id="Path-9" sketch:type="MSShapeGroup"></path>
            <path d="M224.756846,35.3797737 L242.777213,18.4404274" id="Path-8" sketch:type="MSShapeGroup" transform="translate(233.767030, 26.910101) scale(-1, 1) translate(-233.767030, -26.910101) "></path>
            <path d="M224.366227,34.8567312 L242.94414,50.3640836" id="Path-7" sketch:type="MSShapeGroup" transform="translate(233.655183, 42.610407) scale(-1, 1) translate(-233.655183, -42.610407) "></path>
            <path d="M263.899495,36.3994949 L301,26.5 L291.100505,63.6005051 L254,73.5 L263.899495,36.3994949 Z" id="Rectangle-14" sketch:type="MSShapeGroup" transform="translate(277.500000, 50.000000) rotate(-45.000000) translate(-277.500000, -50.000000) "></path>
            <path d="M277.570186,50.6724273 L296.243154,17.8808548" id="Path-4" sketch:type="MSShapeGroup"></path>
            <path d="M277.536796,50.1780002 L295.905211,82.1191452" id="Path-5" sketch:type="MSShapeGroup"></path>
            <path d="M267.536796,18.4128359 L267.536796,82.2276207" id="Path-6" sketch:type="MSShapeGroup"></path>
        </g>
    </g>
</svg>
</div>

<div id="columns">

    {% for post in site.categories.work %}
      <div class="pin">
  			<a href="{{ post.url }}"><img src="{{ post.src }}" /></a>

			<a href="{{ post.url }}"><p>
				{{ post.pre }}
			</p></a>

      </div>
    {% endfor %}
  </div>

 <!-- <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>  -->

</div>
