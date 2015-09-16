---
layout: work
title: Work-Tengyue
categories: work
permalink: /work/
---

<div id="wrapper">

  <!--<h1 class="page-heading">THOUGHT</h1> -->
<div>
  <svg width="230px" height="100px" viewBox="0 0 230 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="head_svg">
    <!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch -->
    <title>blog 4 copy</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="blog-4-copy" sketch:type="MSArtboardGroup" stroke="#505050" stroke-width="4">
            <path d="M24.9990931,19 L13.6038396,42.8582273 L24.9356381,82.0053567 L37.7994622,46.6418972 L50.7316399,82.2213449 L62.6038396,42.8582275 L50.2394996,19.1159976" id="Path-20" sketch:type="MSShapeGroup"></path>
            <g id="Path-21-+-Path-22-+-Path-23" sketch:type="MSLayerGroup" transform="translate(134.000000, 17.000000)">
                <path d="M2.09522867,71.4566822 L2.09522867,1.15587819 L2.09522867,71.4566822 Z" id="Path-21" sketch:type="MSShapeGroup"></path>
                <g id="Path-22-+-Path-23" transform="translate(1.000000, 2.381871)" sketch:type="MSShapeGroup">
                    <path d="M2.12056293,0.841838702 L34.2978382,22.3933482 L1.79408193,46.7929711" id="Path-22"></path>
                    <path d="M0.767955022,23.717759 L34.0000006,66.6181285" id="Path-23"></path>
                </g>
            </g>
            <g id="Path-24-+-Path-25-+-Path-25-Copy" sketch:type="MSLayerGroup" transform="translate(184.000000, 18.000000)">
                <path d="M2.4,0.633003224 L2.4,70.7999985" id="Path-24" sketch:type="MSShapeGroup"></path>
                <path d="M35.0229505,5.01862023 L2.17704946,46.921462" id="Path-25" sketch:type="MSShapeGroup"></path>
                <path d="M35.0229505,67.2202742 L2.17704946,25.3174324" id="Path-25-Copy" sketch:type="MSShapeGroup"></path>
            </g>
            <path d="M72.8736235,50 L98,21.7157288 L123.126377,50 L98,78.2842712 L72.8736235,50 Z" id="Rectangle-13-Copy-2" sketch:type="MSShapeGroup"></path>
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
