---
layout: work
title: Work-Tengyue
categories: work
permalink: /work/
---

<div id="wrapper">

  <!--<h1 class="page-heading">THOUGHT</h1> -->
<div>
  <svg width="400px" height="100px" viewBox="0 0 400 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="head_svg">
    <!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch -->
    <title>blog 4 copy</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="blog-4-copy" sketch:type="MSArtboardGroup" stroke="#505050" stroke-width="4">
            <path d="M111.160998,21 L100.60384,43.1035084 L111.10221,79.3714547 L123.019929,46.608898 L135.000974,79.5715575 L146,43.1035086 L134.545029,21.1074663" id="Path-20" sketch:type="MSShapeGroup"></path>
            <g id="Path-21-+-Path-22-+-Path-23" sketch:type="MSLayerGroup" transform="translate(217.000000, 20.000000)">
                <path d="M1.87467828,63.9349262 L1.87467828,1.0342068 L1.87467828,63.9349262 Z" id="Path-21" sketch:type="MSShapeGroup"></path>
                <g id="Path-22-+-Path-23" transform="translate(0.000000, 2.131148)" sketch:type="MSShapeGroup">
                    <path d="M2.79208262,0.753224102 L31.5822763,20.0361537 L2.49996804,41.8673952" id="Path-22"></path>
                    <path d="M1.58185449,27.4843107 L32.9374992,50.0819672" id="Path-23"></path>
                </g>
            </g>
            <g id="Path-24-+-Path-25-+-Path-25-Copy" sketch:type="MSLayerGroup" transform="translate(266.000000, 21.000000)">
                <path d="M2.13333333,0.562669532 L2.13333333,62.933332" id="Path-24" sketch:type="MSShapeGroup"></path>
                <path d="M31.1315116,4.46099576 L1.93515508,41.7079662" id="Path-25" sketch:type="MSShapeGroup"></path>
                <path d="M31.1315116,59.7513548 L1.93515508,22.5043843" id="Path-25-Copy" sketch:type="MSShapeGroup"></path>
            </g>
            <path d="M153.873623,50 L179,21.7157288 L204.126377,50 L179,78.2842712 L153.873623,50 Z" id="Rectangle-13-Copy-2" sketch:type="MSShapeGroup"></path>
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
