{
	"category": "CATEGORY_CUSTOM_COMPONENTS",
	"components": [{
			"className": "cu.Iframe",
			"displayName": "CIframe",
			"version": "1.0",
			"source": "src/ciframe.js",
			"icon": "assets/SP_Image_Sm",
			"dimensions": [100, 100],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_source", "variable": "src", "type": "String", "default": ""},
				{"name": "PROP_alt", "variable": "alt", "type": "String", "default": "iframe"},
				{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_class", "variable": "class", "type": "String", "default": "ui-iframe"},
				{"name": "PROP_marginwidth", "variable": "marginwidth", "type": "String", "default": "0"},
				{"name": "PROP_marginheight", "variable": "marginheight", "type": "String", "default": "0"},
                {"name": "PROP_border", "variable": "border", "type": "Integer", "default": "0"},
                {"name": "PROP_frameborder", "variable": "frameborder", "type": "String", "default": "0"},
				{"name": "PROP_scrolling", "variable": "scrolling", "type": "String", "default": "no"},
				{"name": "PROP_pointer-events", "variable": "pointer-events", "type": "String", "default": "auto"},
				{"name": "PROP_background-color", "variable": "background-color", "type": "String", "default": "transparent"}
            ]
		},
    	{
        	"className": "cu.Textarea",
        	"displayName": "CTextarea",
        	"version": "1.0",
        	"source": "src/ctextarea.js",
        	"icon": "assets/SP_Label_Sm",
        	"dimensions": [100, 22],
        	"dependencies": [
            	{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
            	{"src": "../sdk/anwidget.js"}
        	],
        	"properties": [
            	{"name": "PROP_value", "variable": "value", "type": "String", "default": ""},
            	{"name": "PROP_disabled", "variable": "disabled", "type": "Boolean", "default": "false"},
            	{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
            	{"name": "PROP_class", "variable": "class", "type": "String", "default": "ui-textarea"},
				{"name": "PROP_readonly", "variable": "readonly", "type": "String", "default": "readonly"},
                {"name": "PROP_contenteditable", "variable": "contenteditable", "type": "Boolean", "default": "false"},
                {"name": "PROP_resize", "variable": "resize", "type": "String", "default": "none"},
                {"name": "PROP_outline", "variable": "outline", "type": "String", "default": "none"},
                {"name": "PROP_box-sizing", "variable": "box-sizing", "type": "String", "default": "border-box"},
                {"name": "PROP_border", "variable": "border", "type": "Integer", "default": "0"},
                {"name": "PROP_font-family", "variable": "font-family", "type": "String", "default": "宋体"},
                {"name": "PROP_font-size", "variable": "font-size", "type": "String", "default": "12px"}
        	]
    	},
    	{
        	"className": "cu.Audio",
        	"displayName": "CAudio",
        	"version": "1.0",
        	"source": "src/caudio.js",
        	"icon": "assets/SP_FLVPlayback_Sm",
        	"dimensions": [100, 22],
        	"dependencies": [
            	{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
            	{"src": "../sdk/anwidget.js"}
        	],
        	"properties": [
				{"name": "PROP_source", "variable": "src", "type": "File Path", "default": ""},
				{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_preload", "variable": "preload", "type": "List", "default": "auto, metadata, none"},
				{"name": "PROP_autoplay", "variable": "autoplay", "type": "String", "default": "autoplay"},
                {"name": "PROP_loop", "variable": "loop", "type": "Boolean", "default": "false"},
                {"name": "PROP_controls", "variable": "controls", "type": "Boolean", "default": "false"}
            ]
    	},
    	{
        	"className": "cu.Video2",
        	"displayName": "CVideo2",
        	"version": "1.0",
        	"source": "src/cvideo2.js",
        	"icon": "assets/SP_FLVPlayback_Sm",
			"dimensions": [400, 300],
        	"dependencies": [
            	{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
            	{"src": "../sdk/anwidget.js"},
                {"src": "../lib/videojs-6.6.3.css","cdn":"https://unpkg.com/video.js/dist/video-js.css"},
                {"src": "../lib/videojs-6.6.3.js","cdn":"https://unpkg.com/video.js/dist/video.js"},
                {"src": "../lib/custom-videojs.css"}
        	],
        	"properties": [
            	{"name": "PROP_source", "variable": "src", "type": "Video Content Path", "default": ""},
            	{"name": "PROP_autoplay", "variable": "autoplay", "type": "Boolean", "default": "true"},
            	{"name": "PROP_controls", "variable": "controls", "type": "Boolean", "default": "true"},
            	{"name": "PROP_muted", "variable": "muted", "type": "Boolean", "default": "false"},
            	{"name": "PROP_loop", "variable": "loop", "type": "Boolean", "default": "true"},
            	{"name": "PROP_poster", "variable": "poster", "type": "Image Path", "default": ""},
				{"name": "PROP_preload", "variable": "preload", "type": "Boolean", "default": "true"},
                {"name": "PROP_playsinline", "variable": "playsinline", "type": "String", "default": "playsinline"},
                {"name": "PROP_data-setup", "variable": "data-setup", "type": "String", "default": "{}"},
            	{"name": "PROP_class", "variable": "class", "type": "String", "default": "video-js vjs-big-play-centered"}
        	]
   		 },{
			"className": "cu.Video",
			"displayName": "CVideo",
			"version": "1.0",
			"source": "src/cvideo.js",
			"icon": "assets/SP_FLVPlayback_Sm",
			"dimensions": [400, 300],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_SOURCE", "variable": "src", "type": "Video Content Path", "default": ""},
				{"name": "PROP_AUTOPLAY", "variable": "autoplay", "type": "Boolean", "default": "true"},
				{"name": "PROP_CONTROLS", "variable": "controls", "type": "Boolean", "default": "true"},
				{"name": "PROP_MUTED", "variable": "muted", "type": "Boolean", "default": "false"},
				{"name": "PROP_LOOP", "variable": "loop", "type": "Boolean", "default": "true"},
				{"name": "PROP_POSTER", "variable": "poster", "type": "Image Path", "default": ""},
				{"name": "PROP_PRElOAD", "variable": "preload", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "video"},
				{"name": "PROP_webkit-playsinline", "variable": "webkit-playsinline", "type": "String", "default": "true"},
				{"name": "PROP_playsinline", "variable": "playsinline", "type": "String", "default": "true"},
				{"name": "PROP_x-webkit-airplay", "variable": "x-webkit-airplay", "type": "String", "default": "allow"},
				{"name": "PROP_x5-playsinline", "variable": "x5-playsinline", "type": "String", "default": "true"},
				{"name": "PROP_x5-video-player-type", "variable": "x5-video-player-type", "type": "String", "default": "h5"},
				{"name": "PROP_x5-video-player-fullscreen", "variable": "x5-video-player-fullscreen", "type": "String", "default": "true"},
				{"name": "PROP_x5-video-orientation", "variable": "x5-video-orientation", "type": "String", "default": "portraint"},
				{"name": "PROP_object-fit", "variable": "object-fit", "type": "String", "default": "fill"}
			]
		},
		 {
			"className": "cu.Link",
			"displayName": "CLink",
			"version": "1.0",
			"source": "src/clink.js",
			"icon": "assets/SP_PL_CodeSample",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_SOURCE", "variable": "href", "type": "String", "default": ""},
				{"name": "PROP_rel", "variable": "rel", "type": "String", "default": "stylesheet"},
				{"name": "PROP_type", "variable": "type", "type": "String", "default": "text/css"}
			]
		},
		{
		   "className": "cu.Script",
		   "displayName": "CScript",
		   "version": "1.0",
		   "source": "src/cscript.js",
		   "icon": "assets/SP_PL_CodeSample",
		   "dimensions": [100, 22],
		   "dependencies": [
			   {"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
			   {"src": "../sdk/anwidget.js"}
		   ],
		   "properties": [
			   {"name": "PROP_SOURCE", "variable": "src", "type": "String", "default": ""},
			   {"name": "PROP_type", "variable": "type", "type": "String", "default": "text/javascript"},
			   {"name": "PROP_charset", "variable": "charset", "type": "String", "default": ""},
			   {"name": "PROP_async", "variable": "async", "type": "String", "default": ""},
			   {"name": "PROP_defer", "variable": "defer", "type": "String", "default": ""},
			   {"name": "PROP_xml:space", "variable": "xml:space", "type": "String", "default": ""}
		   ]
	   }
	]
}

