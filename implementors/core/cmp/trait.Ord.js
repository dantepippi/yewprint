(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;A&gt; Ord for ArrayString&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Array&lt;Item = u8&gt; + Copy,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Ord&gt; Ord for CapacityError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Ord for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["byteorder"] = [{"text":"impl Ord for BigEndian","synthetic":false,"types":[]},{"text":"impl Ord for LittleEndian","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl Ord for Bytes","synthetic":false,"types":[]},{"text":"impl Ord for BytesMut","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl Ord for HeaderValue","synthetic":false,"types":[]},{"text":"impl Ord for StatusCode","synthetic":false,"types":[]},{"text":"impl Ord for Version","synthetic":false,"types":[]}];
implementors["id_tree"] = [{"text":"impl Ord for NodeId","synthetic":false,"types":[]}];
implementors["lexical_core"] = [{"text":"impl Ord for ErrorCode","synthetic":false,"types":[]},{"text":"impl Ord for Error","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Ord for Ident","synthetic":false,"types":[]}];
implementors["snowflake"] = [{"text":"impl Ord for ProcessUniqueId","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Ord for Lifetime","synthetic":false,"types":[]}];
implementors["yew"] = [{"text":"impl Ord for Key","synthetic":false,"types":[]}];
implementors["yew_router"] = [{"text":"impl&lt;T:&nbsp;Ord&gt; Ord for LeadingSlash&lt;T&gt;","synthetic":false,"types":[]}];
implementors["yew_router_route_parser"] = [{"text":"impl Ord for FieldNamingScheme","synthetic":false,"types":[]}];
implementors["yewtil"] = [{"text":"impl&lt;T:&nbsp;Ord&gt; Ord for Irc&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Ord&gt; Ord for Mrc&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()