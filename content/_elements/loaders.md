---
title: Loaders
description: Loader animations are used to indicate a transitional state where content is in the process of loading.
tabs:
- Design
- Code
---

<div id="design" class="docs-tabs-content" markdown="1">

## Application loader

The application loader is only used on initial application load ie. when a user signs into their account or a page is shared with an external party.


**Do's and Dont's**

{% include guide-img.html img='elements/loaders/logo'%}

---

## Content Loader

The page content loader is used when loading all content within the content area of a page, usually when navigating within the same application. 


**Do's and Dont's**

{% include guide-img.html img='elements/loaders/page'%}

---

## Skeleton Loaders

The basic skeleton loader is used to represent any smaller piece of text based data. When the data or container shape differs dramatically in visual appearance from the basic skeleton loader, a custom skeleton loader will be a better idea.

**Do's and Dont's**

{% include guide-img.html img='elements/loaders/skeleton'%}

</div>

<div id="code" class="docs-tabs-content" markdown="1">

## Application loader

{% example html %}
<div class="c-card">
  <div class="c-card-content c-m-top-lg c-m-bottom-lg c-full-page-loader-logo">
  </div>
</div>
{% endexample %}

---

## Content Loader

{% example html %}
<div class="c-full-page-loader"></div>
{% endexample %}

---

## Skeleton Loaders

{% example html %}
<div class="c-card">
    <div class="c-card-content">
      <div class="c-skeleton-loading"></div>
      <hr class="c-hr">
      <div class="c-skeleton-loading"></div>
    </div>
  </div>
{% endexample %}

</div>