<script type="text/javascript">
(function(doc, script) {
    var js, 
        fjs = doc.getElementsByTagName(script)[0],
        add = function(url, id) {
            if (doc.getElementById(id)) {return;}
            js = doc.createElement(script);
            js.src = url;
            id && (js.id = id);
            fjs.parentNode.insertBefore(js, fjs);
        };

    // Google Analytics
    add(('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js', 'ga');
    // Google+ button
    add('http://apis.google.com/js/plusone.js');
    // Facebook SDK
    add('//connect.facebook.net/en_GB/all.js', 'facebook-jssdk');
    // Twitter SDK
    add('//platform.twitter.com/widgets.js', 'twitter-wjs');
}(document, 'script'));
</script>