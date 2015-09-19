---
layout: work
title: Work-Tengyue
categories: work
permalink: /work/
---

<div id="wrapper">

  <!--<h1 class="page-heading">THOUGHT</h1> -->
<div>
  <svg width="241px" height="100px" viewBox="0 0 241 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="head_svg">
    <!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch -->
    <title>work</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="work" sketch:type="MSArtboardGroup" stroke="#505050" stroke-width="4">
            <path d="M25.1626973,20 L14,43.3973208 L25.1005373,81.7881843 L37.7018344,47.1078958 L50.3700901,82 L62,43.397321 L49.8879935,20.1137567" id="Path-20" stroke-linejoin="bevel" sketch:type="MSShapeGroup"></path>
            <g id="Path-21-+-Path-22-+-Path-23" sketch:type="MSLayerGroup" transform="translate(138.000000, 16.000000)">
                <path d="M2.09522867,68.5201062 L2.09522867,1.10837635 L2.09522867,68.5201062 Z" id="Path-21" sketch:type="MSShapeGroup"></path>
                <g id="Path-22-+-Path-23" transform="translate(1.000000, 2.283986)" sketch:type="MSShapeGroup">
                    <path d="M2.12056293,0.807242591 L34.2978382,21.4730737 L1.79408193,44.8699723" id="Path-22" stroke-linejoin="bevel"></path>
                    <path d="M0.767955022,22.7430565 L34.0000006,63.8803972" id="Path-23"></path>
                </g>
            </g>
            <g id="Path-24-+-Path-25-+-Path-25-Copy" sketch:type="MSLayerGroup" transform="translate(190.000000, 16.000000)">
                <path d="M2.4,0.615419801 L2.4,68.8333318" id="Path-24" sketch:type="MSShapeGroup"></path>
                <path d="M35.0229505,4.87921411 L2.17704946,45.618088" id="Path-25" sketch:type="MSShapeGroup"></path>
                <path d="M35.0229505,65.3530443 L2.17704946,24.6141704" id="Path-25-Copy" sketch:type="MSShapeGroup"></path>
            </g>
            <path d="M100.068895,26 L78,50.8346233 L100.068895,75.5241318 L122.05147,50.8346233 L100.068895,26 Z" id="Path-30" stroke-linejoin="bevel" sketch:type="MSShapeGroup"></path>
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
