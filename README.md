# JavaScript BugSense Client

[BugSense](http://www.bugsense.com) is the leading crash/quality reporting solution for Mobile developers. The bugsense.js libs brings this functionality to mobile web developers that develop mobile web apps, Phonegap apps and even Windows 8 Javascript apps.

## Installing the plugin

Store the bugsense.js file along with you other Javascript files. Alternatively you can use the BugSense hosted version (see the following snipper).

``` html
  <!-- start Bugsense -->
  <script>
    !(function ( document, window ) {
      var script = document.createElement( 'script' ),
          bugsense;
          script.type = 'text/javascript'
          script.async = true;
          script.src = 'http://www.bugsense.com/static/js/global/bugsense.js';
          document.getElementsByTagName( 'head' )[ 0 ].appendChild( script );

          // Initialize the tracker when the script loads
          script.onreadystatechange = script.onload = function bugsenseInit () {
            // Init the Bugsense client
            bugsense = new Bugsense( {
              apiKey: 'YOUR_API_KEY',
              appName: 'YOUR_APP_NAME',
              appVersion: 'APP_VERSION'
            } );
            // Setup error handler
            window.onerror = function ( exception, url, line ) {
              bugsense.notify.apply( bugsense, [ exception, url, line ] );
              return true;
            };
          }

    }(document, window));
  </script>
  <!-- end Bugsense -->
```

**Notes**:

* Older browsers do not support the <i>window.onerror</i> callback and thefore the plugin will not receive any uncaught exception.
* When there's only the Error object caught, error.stack will be parsed to get the url and line number.
* Deobfuscation or retracing for minified and/or obfuscated Javascript files is not supported yet.
* Bugsense.js uses CORS to send crash reports.


## Registering handled exceptions

Bugsense.js allows you to register handled exception as well and append metadata to the crash report.


```js
try {
   rotateScreen();
} catch ( error ) {
   bugsense.notify( error, { rotation: 'not supported' } )
};
```

## Metadata & Breadcrumbs
You can add metadata to the BugSense crash reports as well as breacrumbs to help you debug your app faster!

```js
// add metadata
bugsense.addExtraData( 'user_level', 'paid' );
bugsense.addExtraData( 'account', 'CEO' );

// Clear all metadata
bugsense.clearExtraData();

// leave breadcrumb
bugsense.leaveBreadcrumb( 'Fetch Friendlist' );
```