AUI.add("aui-form-validator",function(t){var l=t.Lang,j=t.Object,S=l.isBoolean,H=l.isDate,y=j.isEmpty,u=l.isFunction,ac=l.isObject,o=l.isString,a=l.trim,J="-",G=".",q="",p="form-validator",C="Invalid Date",M="|",ak="blurHandlers",g="checkbox",d="container",al="containerErrorClass",W="containerValidClass",K="contentBox",U="error",an="errorClass",am="extractCssPrefix",ap="extractRules",s="field",ai="fieldContainer",aa="fieldStrings",e="inputHandlers",ab="message",b="messageContainer",T="name",Z="radio",r="rules",ad="selectText",ah="showAllMessages",z="showMessages",Q="stack",m="stackErrorContainer",v="type",ag="valid",E="validateOnBlur",Y="validateOnInput",X="validClass",n="blur",R="errorField",ae="input",I="reset",B="submit",F="submitError",i="validateField",D="validField",h=t.getClassName,ao=h(p,U),x=h(p,U,d),f=h(p,ag),af=h(p,ag,d),N=h(s),c=h(p,ab),w=h(p,Q,U),aj='<div class="'+c+'"></div>',V='<label class="'+w+'"></label>',k=[ap,E,Y];YUI.AUI.defaults.FormValidator={STRINGS:{DEFAULT:"Please fix this field.",acceptFiles:"Please enter a value with a valid extension ({0}).",alpha:"Please enter only apha characters.",alphanum:"Please enter only aphanumeric characters.",date:"Please enter a valid date.",digits:"Please enter only digits.",email:"Please enter a valid email address.",equalTo:"Please enter the same value again.",max:"Please enter a value less than or equal to {0}.",maxLength:"Please enter no more than {0} characters.",min:"Please enter a value greater than or equal to {0}.",minLength:"Please enter at least {0} characters.",number:"Please enter a valid number.",range:"Please enter a value between {0} and {1}.",rangeLength:"Please enter a value between {0} and {1} characters long.",required:"This field is required.",url:"Please enter a valid URL."},REGEX:{alpha:/^[a-z_]+$/i,alphanum:/^\w+$/,digits:/^\d+$/,number:/^[+\-]?(\d+([.,]\d+)?)+$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i},RULES:{acceptFiles:function(aq,O,ar){var L=null;if(o(ar)){var A=ar.split(/,\s*|\b\s*/).join(M);L=new RegExp("[.]("+A+")$","i");}return L&&L.test(aq);},date:function(O,L,aq){var A=new Date(O);return(H(A)&&(A!=C)&&!isNaN(A));},equalTo:function(O,L,aq){var A=t.one(aq);return A&&(a(A.val())==O);},max:function(L,A,O){return(P.toNumber(L)<=O);},maxLength:function(L,A,O){return(L.length<=O);},min:function(L,A,O){return(P.toNumber(L)>=O);},minLength:function(L,A,O){return(L.length>=O);},range:function(O,L,aq){var A=P.toNumber(O);return(A>=aq[0])&&(A<=aq[1]);},rangeLength:function(O,L,aq){var A=O.length;return(A>=aq[0])&&(A<=aq[1]);},required:function(ar,O,at){var A=this;if(t.FormValidator.isCheckable(O)){var L=O.get(T);var aq=A.getElementsByName(L);return(aq.filter(":checked").size()>0);}else{return !!ar;}}}};var P=t.Component.create({NAME:p,ATTRS:{containerErrorClass:{value:x,validator:o},containerValidClass:{value:af,validator:o},errorClass:{value:ao,validator:o},extractCssPrefix:{value:N+J,validator:o},extractRules:{value:true,validator:S},fieldContainer:{value:G+N},fieldStrings:{value:{},validator:ac},messageContainer:{getter:function(A){return t.Node.create(A).clone();},value:aj},render:{value:true},strings:{valueFn:function(){return YUI.AUI.defaults.FormValidator.STRINGS;}},rules:{validator:ac,value:{}},selectText:{value:true,validator:S},showMessages:{value:true,validator:S},showAllMessages:{value:false,validator:S},stackErrorContainer:{getter:function(A){return t.Node.create(A).clone();},value:V},validateOnBlur:{value:true,validator:S},validateOnInput:{value:false,validator:S},validClass:{value:f,validator:o}},isCheckable:function(L){var A=L.get(v).toLowerCase();return(A==g||A==Z);},toNumber:function(A){return parseFloat(A)||0;},EXTENDS:t.Widget,UI_ATTRS:k,prototype:{CONTENT_TEMPLATE:null,UI_EVENTS:{},initializer:function(){var A=this;A.blurHandlers=[];A.errors={};A.inputHandlers=[];A.stackErrorContainers={};},bindUI:function(){var A=this;A._createEvents();A._bindValidation();},addFieldError:function(aq,O){var A=this;
var ar=A.errors;var L=aq.get(T);if(!ar[L]){ar[L]=[];}ar[L].push(O);},clearFieldError:function(L){var A=this;delete A.errors[L.get(T)];},eachRule:function(L){var A=this;t.each(A.get(r),function(O,aq){if(u(L)){L.apply(A,[O,aq]);}});},findFieldContainer:function(L){var A=this;var O=A.get(ai);if(O){return L.ancestor(O);}},focusInvalidField:function(){var A=this;var L=A.get(K);var O=L.one(G+ao);if(O){if(A.get(ad)){O.selectText();}O.focus();}},getElementsByName:function(L){var A=this;return A.get(K).all('[name="'+L+'"]');},getField:function(L){var A=this;if(o(L)){L=A.getElementsByName(L).item(0);}return L;},getFieldError:function(L){var A=this;return A.errors[L.get(T)];},getFieldStackErrorContainer:function(aq){var A=this;var L=aq.get(T);var O=A.stackErrorContainers;if(!O[L]){O[L]=A.get(m);}return O[L];},getFieldErrorMessage:function(at,ar){var au=this;var aw=at.get(T);var L=au.get(aa)[aw]||{};var A=au.get(r)[aw];var av=au.getStrings();var aq={};if(ar in A){var O=t.Array(A[ar]);t.each(O,function(az,ay){aq[ay]=[az].join(q);});}var ax=(L[ar]||av[ar]||av.DEFAULT);return l.sub(ax,aq);},hasErrors:function(){var A=this;return !y(A.errors);},highlight:function(O,L){var A=this;var aq=A.findFieldContainer(O);A._highlightHelper(O,A.get(an),A.get(X),L);A._highlightHelper(aq,A.get(al),A.get(W),L);},normalizeRuleValue:function(L){var A=this;return u(L)?L.apply(A):L;},unhighlight:function(L){var A=this;A.highlight(L,true);},printStackError:function(O,L,aq){var A=this;if(!A.get(ah)){aq=aq.slice(0,1);}L.empty();t.each(aq,function(at,ar){var au=A.getFieldErrorMessage(O,at);var av=A.get(b).addClass(at);L.append(av.html(au));});},resetAllFields:function(){var A=this;A.eachRule(function(O,aq){var L=A.getField(aq);A.resetField(L);});},resetField:function(O){var A=this;var L=A.getFieldStackErrorContainer(O);L.remove();A.resetFieldCss(O);A.clearFieldError(O);},resetFieldCss:function(O){var L=this;var aq=L.findFieldContainer(O);var A=function(at,ar){if(at){t.each(ar,function(au){at.removeClass(L.get(au));});}};A(O,[X,an]);A(aq,[W,al]);},validatable:function(O){var A=this;var ar=A.get(r)[O.get(T)];var aq=A.normalizeRuleValue(ar.required);var L=YUI.AUI.defaults.FormValidator.RULES.required.apply(A,[O.val(),O]);return(aq||(!aq&&L));},validate:function(){var A=this;A.eachRule(function(L,O){A.validateField(O);});A.focusInvalidField();},validateField:function(aq){var A=this;var O=A.getField(aq);if(O){var L=A.validatable(O);A.resetField(O);if(L){A.fire(i,{validator:{field:O}});}}},_bindValidation:function(){var A=this;var L=A.get(K);L.on(I,t.bind(A._onFormReset,A));L.on(B,t.bind(A._onFormSubmit,A));},_createEvents:function(){var A=this;var L=function(O,aq){A.publish(O,{defaultFn:aq});};L(R,A._defErrorFieldFn);L(D,A._defValidFieldFn);L(i,A._defValidateFieldFn);},_defErrorFieldFn:function(aq){var A=this;var L=aq.validator;var ar=L.field;A.highlight(ar);if(A.get(z)){var O=A.getFieldStackErrorContainer(ar);ar.placeBefore(O);A.printStackError(ar,O,L.errors);}},_defValidFieldFn:function(L){var A=this;var O=L.validator.field;A.unhighlight(O);},_defValidateFieldFn:function(O){var L=this;var aq=O.validator.field;var ar=L.get(r)[aq.get(T)];t.each(ar,function(aw,au){var av=YUI.AUI.defaults.FormValidator.RULES[au];var at=a(aq.val());aw=L.normalizeRuleValue(aw);if(u(av)&&!av.apply(L,[at,aq,aw])){L.addFieldError(aq,au);}});var A=L.getFieldError(aq);if(A){L.fire(R,{validator:{field:aq,errors:A}});}else{L.fire(D,{validator:{field:aq}});}},_highlightHelper:function(aq,A,L,O){if(aq){if(O){aq.removeClass(A).addClass(L);}else{aq.removeClass(L).addClass(A);}}},_onBlurField:function(L){var A=this;var O=L.currentTarget.get(T);A.validateField(O);},_onFieldInputChange:function(L){var A=this;A.validateField(L.currentTarget);},_onFormSubmit:function(L){var A=this;var O={validator:{formEvent:L}};A.validate();if(A.hasErrors()){O.validator.errors=A.errors;A.fire(F,O);L.halt();}else{A.fire(B,O);}},_onFormReset:function(L){var A=this;A.resetAllFields();},_bindValidateHelper:function(ar,aq,O,L){var A=this;A._unbindHandlers(L);if(ar){A.eachRule(function(au,av){var at=A.getElementsByName(av);A[L].push(at.on(aq,t.bind(O,A)));});}},_uiSetExtractRules:function(ar){var A=this;if(ar){var L=A.get(K);var aq=A.get(r);var O=A.get(am);t.each(YUI.AUI.defaults.FormValidator.RULES,function(av,au){var at=[G,O,au].join(q);L.all(at).each(function(aw){if(aw.get(v)){var ax=aw.get(T);if(!aq[ax]){aq[ax]={};}if(!(au in aq[ax])){aq[ax][au]=true;}}});});}},_uiSetValidateOnInput:function(L){var A=this;A._bindValidateHelper(L,ae,A._onFieldInputChange,e);},_uiSetValidateOnBlur:function(L){var A=this;A._bindValidateHelper(L,n,A._onBlurField,ak);},_unbindHandlers:function(L){var A=this;t.each(A[L],function(O){O.detach();});A[L]=[];}}});t.each(YUI.AUI.defaults.FormValidator.REGEX,function(L,A){YUI.AUI.defaults.FormValidator.RULES[A]=function(aq,O,ar){return YUI.AUI.defaults.FormValidator.REGEX[A].test(aq);};});t.FormValidator=P;},"@VERSION@",{requires:["aui-base","aui-event-input","selector-css3"]});