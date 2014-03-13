jQuery-Domtab-plugin
====================

How to apply plugin.

<pre>$(“selector”).domTab();</pre>

Options to modify
<pre>$(“selector”).domTab({
events : 'click',  // mouseenter, hover, click
activeTab : 0,   // tab index you want to make active
detailBox : $('.detail-tab-wrapper > div'),  // detail box
activeClassName : 'active', // class name for active tab
fadeInOut : false // disable the fadein/fadeout effect.
});
</pre>

