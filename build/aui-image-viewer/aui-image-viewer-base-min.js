AUI.add("aui-image-viewer-base",function(ar){var ak=ar.Lang,aJ=ak.isBoolean,Q=ak.isNumber,D=ak.isObject,aO=ak.isString,au=ar.Plugin.NodeFX,aX="anim",d="arrow",M="arrowLeftEl",h="arrowRightEl",aV="auto",aR="bd",T="blank",aB="body",o="boundingBox",aG="caption",x="captionEl",aE="captionFromTitle",c="centered",e="close",at="closeEl",H="createDocumentFragment",aF="currentIndex",aP="easeBothStrong",aM="footer",m="helper",ah="hidden",t="hide",aC="href",ag="icon",E="image",w="imageAnim",aL="image-viewer",ax="info",P="infoEl",al="infoTemplate",a="left",ap="link",X="links",aK="loader",aU="loading",K="loadingEl",v="lock",n="maxHeight",aQ="maxWidth",V="modal",I="offsetHeight",aN="offsetWidth",Y="opacity",k="overlay",aw="preloadAllImages",aj="preloadNeighborImages",ab="px",i="region",j="right",u="scroll",ao="show",C="showArrows",aH="showClose",q=" ",aA="src",aD="title",l="top",O="totalLinks",W="viewportRegion",ad="visible",aq="ownerDocument",aT=function(A){return(A instanceof ar.NodeList);},aS=function(){return Array.prototype.slice.call(arguments).join(q);},z=ar.getClassName,Z=z(m,u,v),S=z(ag,aU),y=z(aL,d),an=z(aL,d,a),aI=z(aL,d,j),F=z(aL,aR),ac=z(aL,aG),B=z(aL,e),ai=z(aL,E),b=z(aL,ax),aW=z(aL,ap),az=z(aL,aU),r=z(k,ah),p="ESC",R="RIGHT",ay="LEFT",af={height:aV,width:aV},f=document.createTextNode(""),U="Image {current} of {total}",am='<a href="#" class="'+aS(y,an)+'"></a>',av='<a href="#" class="'+aS(y,aI)+'"></a>',s='<div class="'+ac+'"></div>',g='<a href="#" class="'+B+'"></a>',G='<img class="'+ai+'" />',aa='<div class="'+b+'"></div>',N='<div class="'+r+'"></div>',J='<div class="'+S+'"></div>';var ae=ar.Component.create({NAME:aL,ATTRS:{anim:{value:true,validator:aJ},bodyContent:{value:f},caption:{value:T,validator:aO},captionFromTitle:{value:true,validator:aJ},centered:{value:true},currentIndex:{value:0,validator:Q},image:{readOnly:true,valueFn:function(){return ar.Node.create(G);}},imageAnim:{value:{},setter:function(A){return ar.merge({to:{opacity:1},easing:aP,duration:0.8},A);},validator:D},infoTemplate:{getter:function(A){return this._getInfoTemplate(A);},value:U,validator:aO},links:{setter:function(L){var A=this;if(aT(L)){return L;}else{if(aO(L)){return ar.all(L);}}return new ar.NodeList([L]);}},loading:{value:false,validator:aJ},modal:{value:{opacity:0.8,background:"#000"}},preloadAllImages:{value:false,validator:aJ},preloadNeighborImages:{value:true,validator:aJ},showClose:{value:true,validator:aJ},showArrows:{value:true,validator:aJ},totalLinks:{readOnly:true,getter:function(A){return this.get(X).size();}},visible:{value:false},zIndex:{value:3000,validator:Q},arrowLeftEl:{readOnly:true,valueFn:function(){return ar.Node.create(am);}},arrowRightEl:{readOnly:true,valueFn:function(){return ar.Node.create(av);}},captionEl:{readOnly:true,valueFn:function(){return ar.Node.create(s);}},closeEl:{readOnly:true,valueFn:function(){return ar.Node.create(g);}},infoEl:{readOnly:true,valueFn:function(){return ar.Node.create(aa);}},loader:{readOnly:true,valueFn:function(){return ar.Node.create(N).appendTo(document.body);}},loadingEl:{valueFn:function(){return ar.Node.create(J);}},maxHeight:{value:Infinity,validator:Q},maxWidth:{value:Infinity,validator:Q}},EXTENDS:ar.OverlayBase,prototype:{_keyHandler:null,renderUI:function(){var A=this;A._renderControls();A._renderFooter();A.get(X).addClass(aW);},bindUI:function(){var A=this;var L=A.get(X);var aZ=A.get(M);var aY=A.get(h);var a0=A.get(at);aZ.on("click",ar.bind(A._onClickLeftArrow,A));aY.on("click",ar.bind(A._onClickRightArrow,A));a0.on("click",ar.bind(A._onClickCloseEl,A));L.on("click",ar.bind(A._onClickLinks,A));A._keyHandler=ar.bind(A._onKeyInteraction,A);ar.getDoc().on("keydown",A._keyHandler);A.after("render",A._afterRender);A.after("loadingChange",A._afterLoadingChange);A.after("visibleChange",A._afterVisibleChange);},destructor:function(){var A=this;var L=A.get(X);A.close();L.detach("click");L.removeClass(aW);ar.getDoc().detach("keydown",A._keyHandler);A.get(M).remove(true);A.get(h).remove(true);A.get(at).remove(true);A.get(aK).remove(true);},close:function(){var A=this;A.hide();A.hideMask();},getLink:function(L){var A=this;return A.get(X).item(L);},getCurrentLink:function(){var A=this;return A.getLink(A.get(aF));},loadImage:function(A){var a5=this;var aZ=a5.bodyNode;var a4=a5.get(aK);a5.set(aU,true);var L=a5._activeImagePool;if(!L){L=[];var a3=a5.get(E);var a2=a3.clone();var a1=a3.clone();var a0=ar.bind(a5._onLoadImage,a5);a2.on("load",a0);a1.on("load",a0);L.push(a2,a1);a5._activeImagePool=L;}var aY=L[0];aY.removeAttribute("height");aY.removeAttribute("width");aY.setStyles(af);a4.append(aY);L.push(L.shift(aY));if(ar.UA.webkit){aY.attr(aA,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==");}aY.attr(aA,A);a5.fire("request",{image:aY});},hasLink:function(L){var A=this;return A.getLink(L);},hasNext:function(){var A=this;return A.hasLink(A.get(aF)+1);},hasPrev:function(){var A=this;return A.hasLink(A.get(aF)-1);},hideControls:function(){var A=this;A.get(M).hide();A.get(h).hide();A.get(at).hide();},hideMask:function(){ar.ImageViewerMask.hide();},next:function(){var A=this;if(A.hasNext()){A.set(aF,A.get(aF)+1);A.show();}},preloadAllImages:function(){var A=this;A.get(X).each(function(aY,L){A.preloadImage(L);});},preloadImage:function(L){var A=this;var aY=A.getLink(L);if(aY){var aZ=aY.attr(aC);A._createPreloadImage(aZ);}},prev:function(){var A=this;if(A.hasPrev()){A.set(aF,A.get(aF)-1);A.show();}},showLoading:function(){var A=this;var L=A.get(K);A.setStdModContent(aB,L);L.center(A.bodyNode);},showMask:function(){var A=this;var L=A.get(V);if(D(L)){ar.each(L,function(aZ,aY){ar.ImageViewerMask.set(aY,aZ);});}if(L){ar.ImageViewerMask.show();}},show:function(){var A=this;var L=A.getCurrentLink();if(L){A.showMask();ae.superclass.show.apply(this,arguments);A.loadImage(L.attr(aC));}},_clearPreloadImageFn:function(){var A=this;var aY=A._preloadImagePool;var aZ;for(var L in aY){aZ=aY[L];if(aZ&&aZ.complete){aY[L]=null;}}},_createPreloadImage:function(aZ){var A=this;
var L=A._preloadImagePool;if(!L){L=A._preloadImagePool={};A._clearPreloadImageTask=ar.debounce(A._clearPreloadImageFn,50,A);}if(!(aZ in L)){var aY=new Image();aY.onload=A._clearPreloadImageTask;aY.src=aZ;L[aZ]=aY;}},_renderControls:function(){var L=this;var A=ar.one(aB);A.append(L.get(M).hide());A.append(L.get(h).hide());A.append(L.get(at).hide());},_renderFooter:function(){var A=this;var L=A.get(o);var aY=L.get(aq).invoke(H);aY.append(A.get(x));aY.append(A.get(P));A.setStdModContent(aM,aY);},_syncCaptionUI:function(){var A=this;var aY=A.get(aG);var a0=A.get(x);var L=A.get(aE);if(L){var aZ=A.getCurrentLink();if(aZ){var a1=aZ.attr(aD);if(a1){aY=aZ.attr(aD);}}}a0.html(aY);},_syncControlsUI:function(){var A=this;var aY=A.get(o);var aZ=A.get(M);var L=A.get(h);var a2=A.get(at);if(A.get(ad)){if(A.get(C)){var a1=aY.get(W);var a0=Math.floor(a1.height/2)+a1.top;aZ[A.hasPrev()?ao:t]();L[A.hasNext()?ao:t]();aZ.setStyle(l,a0-aZ.get(I)+ab);L.setStyle(l,a0-L.get(I)+ab);}if(A.get(aH)){a2.show();}}else{A.hideControls();}},_syncImageViewerUI:function(){var A=this;A._syncControlsUI();A._syncCaptionUI();A._syncInfoUI();},_syncInfoUI:function(){var A=this;var L=A.get(P);L.html(A.get(al));},_getRatio:function(a0,L){var A=this;var aZ=1;var a2=A.get(n);var a1=A.get(aQ);if((L>a2)||(a0>a1)){var a3=(L/a2);var aY=(a0/a1);aZ=Math.max(a3,aY);}return aZ;},_getInfoTemplate:function(L){var A=this;var aY=A.get(O);var aZ=A.get(aF)+1;return ak.sub(L,{current:aZ,total:aY});},_displayLoadedImage:function(aY){var A=this;A.setStdModContent(aB,aY);A._uiSetImageSize(aY);A._syncImageViewerUI();A._setAlignCenter(true);A.set(aU,false);A.fire("load",{image:aY});if(A.get(aj)){var L=A.get(aF);A.preloadImage(L+1);A.preloadImage(L-1);}},_afterRender:function(){var A=this;var L=A.bodyNode;L.addClass(F);if(A.get(aw)){A.preloadAllImages();}},_afterLoadingChange:function(aY){var A=this;var L=A.get(o);if(aY.newVal){L.addClass(az);A.showLoading();}else{L.removeClass(az);}},_afterVisibleChange:function(L){var A=this;A._syncControlsUI();},_onClickCloseEl:function(L){var A=this;A.close();L.halt();},_onClickLeftArrow:function(L){var A=this;A.prev();L.halt();},_onClickRightArrow:function(L){var A=this;A.next();L.halt();},_onClickLinks:function(L){var A=this;var aY=L.currentTarget;A.set(aF,A.get(X).indexOf(aY));A.show();L.preventDefault();},_onKeyInteraction:function(L){var A=this;if(!A.get(ad)){return false;}if(L.isKey(ay)){A.prev();}else{if(L.isKey(R)){A.next();}else{if(L.isKey(p)){A.close();}}}},_onLoadImage:function(L){var A=this;var aY=L.currentTarget;var aZ=A.get(w);if(A.get(aX)){aY.setStyle(Y,0);aY.unplug(au).plug(au);aY.fx.on("end",function(a0){A.fire("anim",{anim:a0,image:aY});A._displayLoadedImage(aY);});aY.fx.setAttrs(aZ);aY.fx.stop().run();}else{A._displayLoadedImage(aY);}},_uiSetImageSize:function(a2){var L=this;var a0=L.bodyNode;var a1=a2.get(i);var aZ=L._getRatio(a1.width,a1.height);var A=(a1.height/aZ);var aY=(a1.width/aZ);a2.set(I,A);a2.set(aN,aY);a0.setStyles({height:A+ab,width:aY+ab});}}});ar.ImageViewer=ae;ar.ImageViewerMask=new ar.OverlayMask().render();},"@VERSION@",{requires:["anim","aui-overlay-mask"],skinnable:true});