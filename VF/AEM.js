try {
var s=s_gi({{LU s_account}});
	var pageName = {{k AA Channel}};
var contentHierarchy = [];
	var urlPathSplit = {{Page Path}}.substr(1).split("/");

	if ("/" === {{Page Path}}) {
	pageName = pageName + ":" + {{DL Page Name}};

	} else {
    if (urlPathSplit.length > 1) {
      for (p in urlPathSplit) {
          pageName = pageName + ":" + urlPathSplit[p];
          contentHierarchy.push(urlPathSplit[p]);

      }
    } else {
    	pageName = pageName + ":" + urlPathSplit[0];
    }
}

s.channel = {{k AA Channel}};
s.server = {{JS getServer}};
	s.pageName = pageName;
	s.eVar3 = "AEM";

//ignore the last contentHierarchy value, since that will be part of the pageName.
	if (contentHierarchy.length > 1) {
		s.prop1 = contentHierarchy[0];
  	dataLayer.push({'category': contentHierarchy[0]});
}

if (contentHierarchy.length > 2) {
		s.prop2 = contentHierarchy[1];
    dataLayer.push({'subcategory': contentHierarchy[1]});
}

if (contentHierarchy.length > 3) {
		s.prop3 = contentHierarchy[2];
  	dataLayer.push({'subcategory2': contentHierarchy[2]});
}

s.t();
//save

} catch (err) { var e = "Adobe Analytics - AEM pages - " + err; dataLayer.push({'event':'AAtagError','AAtagName': e }); console.log(e); }
