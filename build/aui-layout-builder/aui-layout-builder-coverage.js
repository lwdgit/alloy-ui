if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-layout-builder/aui-layout-builder.js']) {
   __coverage__['build/aui-layout-builder/aui-layout-builder.js'] = {"path":"build/aui-layout-builder/aui-layout-builder.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":49}}},"2":{"name":"(anonymous_2)","line":49,"loc":{"start":{"line":49,"column":17},"end":{"line":49,"column":28}}},"3":{"name":"(anonymous_3)","line":72,"loc":{"start":{"line":72,"column":16},"end":{"line":72,"column":27}}},"4":{"name":"(anonymous_4)","line":85,"loc":{"start":{"line":85,"column":24},"end":{"line":85,"column":40}}},"5":{"name":"(anonymous_5)","line":104,"loc":{"start":{"line":104,"column":28},"end":{"line":104,"column":48}}},"6":{"name":"(anonymous_6)","line":131,"loc":{"start":{"line":131,"column":23},"end":{"line":131,"column":37}}},"7":{"name":"(anonymous_7)","line":144,"loc":{"start":{"line":144,"column":23},"end":{"line":144,"column":37}}},"8":{"name":"(anonymous_8)","line":147,"loc":{"start":{"line":147,"column":21},"end":{"line":147,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":183,"column":3}},"2":{"start":{"line":9,"column":0},"end":{"line":11,"column":93}},"3":{"start":{"line":25,"column":0},"end":{"line":165,"column":3}},"4":{"start":{"line":50,"column":8},"end":{"line":51,"column":40}},"5":{"start":{"line":53,"column":8},"end":{"line":53,"column":47}},"6":{"start":{"line":55,"column":8},"end":{"line":55,"column":31}},"7":{"start":{"line":57,"column":8},"end":{"line":59,"column":10}},"8":{"start":{"line":61,"column":8},"end":{"line":61,"column":43}},"9":{"start":{"line":63,"column":8},"end":{"line":63,"column":45}},"10":{"start":{"line":73,"column":8},"end":{"line":73,"column":57}},"11":{"start":{"line":75,"column":8},"end":{"line":75,"column":38}},"12":{"start":{"line":86,"column":8},"end":{"line":87,"column":39}},"13":{"start":{"line":89,"column":8},"end":{"line":89,"column":38}},"14":{"start":{"line":91,"column":8},"end":{"line":91,"column":38}},"15":{"start":{"line":93,"column":8},"end":{"line":93,"column":34}},"16":{"start":{"line":94,"column":8},"end":{"line":94,"column":46}},"17":{"start":{"line":105,"column":8},"end":{"line":105,"column":89}},"18":{"start":{"line":107,"column":8},"end":{"line":110,"column":9}},"19":{"start":{"line":108,"column":12},"end":{"line":108,"column":72}},"20":{"start":{"line":109,"column":12},"end":{"line":109,"column":53}},"21":{"start":{"line":132,"column":16},"end":{"line":132,"column":73}},"22":{"start":{"line":145,"column":16},"end":{"line":145,"column":51}},"23":{"start":{"line":148,"column":16},"end":{"line":148,"column":38}}},"branchMap":{"1":{"line":107,"type":"if","locations":[{"start":{"line":107,"column":8},"end":{"line":107,"column":8}},{"start":{"line":107,"column":8},"end":{"line":107,"column":8}}]},"2":{"line":132,"type":"binary-expr","locations":[{"start":{"line":132,"column":23},"end":{"line":132,"column":43}},{"start":{"line":132,"column":47},"end":{"line":132,"column":72}}]}},"code":["(function () { YUI.add('aui-layout-builder', function (A, NAME) {","","/**"," * The Layout Builder Component"," *"," * @module aui-layout-builder"," */","","var CSS_LAYOUT_BUILDER_LAYOUT_CONTAINER = A.getClassName('layout', 'builder', 'layout', 'container'),","","    TPL_LAYOUT_CONTAINER = '<div class=\"' + CSS_LAYOUT_BUILDER_LAYOUT_CONTAINER + '\"></div>';","","/**"," * A base class for Layout Builder."," *"," * Check the [live demo](http://alloyui.com/examples/layout-builder/)."," *"," * @class A.LayoutBuilder"," * @extends Base"," * @uses A.LayoutBuilderAddCol, A.LayoutBuilderRemoveCol"," * @param {Object} config Object literal specifying layout builder configuration"," *     properties."," * @constructor"," */","A.LayoutBuilder = A.Base.create('layout-builder', A.Base, [","    A.LayoutBuilderAddCol,","    A.LayoutBuilderMove,","    A.LayoutBuilderRemoveRow,","    A.LayoutBuilderResizeCol,","    // It's necessary that A.LayoutBuilderAddRow is the last to be loaded.","    A.LayoutBuilderAddRow","], {","","    /**","     * The node where the layout will be rendered.","     *","     * @property _layoutContainer","     * @type {Node}","     * @protected","     */","    _layoutContainer: null,","","    /**","     * Construction logic executed during LayoutBuilder instantiation. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        var container = this.get('container'),","            layout = this.get('layout');","","        this._createLayoutContainer(container);","","        layout.addTarget(this);","","        this._eventHandles = [","            this.after('layoutChange', A.bind(this._afterLayoutChange, this))","        ];","","        layout.draw(this._layoutContainer);","","        this._layoutContainer.unselectable();","    },","","    /**","     * Destructor implementation for the `A.LayoutBuilder` class. Lifecycle.","     *","     * @method destructor","     * @protected","     */","    destructor: function() {","        (new A.EventHandle(this._eventHandles)).detach();","","        this.get('container').empty();","    },","","    /**","     * Fires after layout changes.","     *","     * @method _afterLayoutChange","     * @param {EventFacade} event","     * @protected","     */","    _afterLayoutChange: function(event) {","        var newLayout = event.newVal,","            prevLayout = event.prevVal;","","        this._layoutContainer.empty();","","        prevLayout.removeTarget(this);","","        newLayout.addTarget(this);","        newLayout.draw(this._layoutContainer);","    },","","    /**","     * Create layout container node.","     *","     * @method _createLayoutContainer","     * @param {Node} container Node that will append the _layoutContainer node.","     * @protected","     */","    _createLayoutContainer: function(container) {","        this._layoutContainer = container.one('.' + CSS_LAYOUT_BUILDER_LAYOUT_CONTAINER);","","        if (!this._layoutContainer) {","            this._layoutContainer = A.Node.create(TPL_LAYOUT_CONTAINER);","            container.prepend(this._layoutContainer);","        }","    }","}, {","    /**","     * Static property used to define the default attribute","     * configuration for LayoutBuilder.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * Node that that will be inserted the layout.","         *","         * @attribute container","         * @type {String | Node}","         * @initOnly","         */","        container: {","            setter: A.one,","            validator: function(val) {","                return A.Lang.isString(val) || A.instanceOf(val, A.Node);","            },","            writeOnce: 'initOnly'","        },","","        /**","         * Object with layout configuration.","         *","         * @attribute layout","         * @type {A.Layout}","         */","        layout: {","            validator: function(val) {","                return A.instanceOf(val, A.Layout);","            },","            valueFn: function() {","                return new A.Layout();","            }","        },","","        /**","         * Collection of strings used to label elements of the UI.","         *","         * @attribute strings","         * @type {Object}","         */","        strings: {","            value: {","                addColumn: 'Add Column'","            },","            writeOnce: true","        }","    }","});","","","}, '3.0.3-deprecated.18', {","    \"requires\": [","        \"aui-classnamemanager\",","        \"aui-layout\",","        \"aui-layout-builder-add-col\",","        \"aui-layout-builder-add-row\",","        \"aui-layout-builder-move\",","        \"aui-layout-builder-remove-row\",","        \"aui-layout-builder-resize-col\",","        \"aui-node-base\",","        \"base-build\",","        \"node-event-delegate\",","        \"node-screen\",","        \"node-style\"","    ]","});","","}());"]};
}
var __cov_HulXw2jVTeNd79THgb5a2A = __coverage__['build/aui-layout-builder/aui-layout-builder.js'];
__cov_HulXw2jVTeNd79THgb5a2A.s['1']++;YUI.add('aui-layout-builder',function(A,NAME){__cov_HulXw2jVTeNd79THgb5a2A.f['1']++;__cov_HulXw2jVTeNd79THgb5a2A.s['2']++;var CSS_LAYOUT_BUILDER_LAYOUT_CONTAINER=A.getClassName('layout','builder','layout','container'),TPL_LAYOUT_CONTAINER='<div class="'+CSS_LAYOUT_BUILDER_LAYOUT_CONTAINER+'"></div>';__cov_HulXw2jVTeNd79THgb5a2A.s['3']++;A.LayoutBuilder=A.Base.create('layout-builder',A.Base,[A.LayoutBuilderAddCol,A.LayoutBuilderMove,A.LayoutBuilderRemoveRow,A.LayoutBuilderResizeCol,A.LayoutBuilderAddRow],{_layoutContainer:null,initializer:function(){__cov_HulXw2jVTeNd79THgb5a2A.f['2']++;__cov_HulXw2jVTeNd79THgb5a2A.s['4']++;var container=this.get('container'),layout=this.get('layout');__cov_HulXw2jVTeNd79THgb5a2A.s['5']++;this._createLayoutContainer(container);__cov_HulXw2jVTeNd79THgb5a2A.s['6']++;layout.addTarget(this);__cov_HulXw2jVTeNd79THgb5a2A.s['7']++;this._eventHandles=[this.after('layoutChange',A.bind(this._afterLayoutChange,this))];__cov_HulXw2jVTeNd79THgb5a2A.s['8']++;layout.draw(this._layoutContainer);__cov_HulXw2jVTeNd79THgb5a2A.s['9']++;this._layoutContainer.unselectable();},destructor:function(){__cov_HulXw2jVTeNd79THgb5a2A.f['3']++;__cov_HulXw2jVTeNd79THgb5a2A.s['10']++;new A.EventHandle(this._eventHandles).detach();__cov_HulXw2jVTeNd79THgb5a2A.s['11']++;this.get('container').empty();},_afterLayoutChange:function(event){__cov_HulXw2jVTeNd79THgb5a2A.f['4']++;__cov_HulXw2jVTeNd79THgb5a2A.s['12']++;var newLayout=event.newVal,prevLayout=event.prevVal;__cov_HulXw2jVTeNd79THgb5a2A.s['13']++;this._layoutContainer.empty();__cov_HulXw2jVTeNd79THgb5a2A.s['14']++;prevLayout.removeTarget(this);__cov_HulXw2jVTeNd79THgb5a2A.s['15']++;newLayout.addTarget(this);__cov_HulXw2jVTeNd79THgb5a2A.s['16']++;newLayout.draw(this._layoutContainer);},_createLayoutContainer:function(container){__cov_HulXw2jVTeNd79THgb5a2A.f['5']++;__cov_HulXw2jVTeNd79THgb5a2A.s['17']++;this._layoutContainer=container.one('.'+CSS_LAYOUT_BUILDER_LAYOUT_CONTAINER);__cov_HulXw2jVTeNd79THgb5a2A.s['18']++;if(!this._layoutContainer){__cov_HulXw2jVTeNd79THgb5a2A.b['1'][0]++;__cov_HulXw2jVTeNd79THgb5a2A.s['19']++;this._layoutContainer=A.Node.create(TPL_LAYOUT_CONTAINER);__cov_HulXw2jVTeNd79THgb5a2A.s['20']++;container.prepend(this._layoutContainer);}else{__cov_HulXw2jVTeNd79THgb5a2A.b['1'][1]++;}}},{ATTRS:{container:{setter:A.one,validator:function(val){__cov_HulXw2jVTeNd79THgb5a2A.f['6']++;__cov_HulXw2jVTeNd79THgb5a2A.s['21']++;return(__cov_HulXw2jVTeNd79THgb5a2A.b['2'][0]++,A.Lang.isString(val))||(__cov_HulXw2jVTeNd79THgb5a2A.b['2'][1]++,A.instanceOf(val,A.Node));},writeOnce:'initOnly'},layout:{validator:function(val){__cov_HulXw2jVTeNd79THgb5a2A.f['7']++;__cov_HulXw2jVTeNd79THgb5a2A.s['22']++;return A.instanceOf(val,A.Layout);},valueFn:function(){__cov_HulXw2jVTeNd79THgb5a2A.f['8']++;__cov_HulXw2jVTeNd79THgb5a2A.s['23']++;return new A.Layout();}},strings:{value:{addColumn:'Add Column'},writeOnce:true}}});},'3.0.3-deprecated.18',{'requires':['aui-classnamemanager','aui-layout','aui-layout-builder-add-col','aui-layout-builder-add-row','aui-layout-builder-move','aui-layout-builder-remove-row','aui-layout-builder-resize-col','aui-node-base','base-build','node-event-delegate','node-screen','node-style']});
