/*! For license information please see 1_SimpleUsage-stories.a747e553.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_projectstorm_react_diagrams_gallery=self.webpackChunk_projectstorm_react_diagrams_gallery||[]).push([[958],{"../node_modules/.pnpm/@storybook+addon-actions@7.4.4_@types+react-dom@18.2.7_@types+react@18.2.22_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../node_modules/.pnpm/@storybook+addon-actions@7.4.4_@types+react-dom@18.2.7_@types+react@18.2.22_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./demos/1_SimpleUsage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CanvasDrag:()=>CanvasDrag,CanvasGridSize:()=>CanvasGridSize,CanvasPanAndZoom:()=>CanvasPanAndZoom,DemoSimple:()=>DemoSimple,DynamicPorts:()=>DynamicPorts,EventsAndListeners:()=>EventsAndListeners,LinksWithLabels:()=>LinksWithLabels,LockedWidget:()=>LockedWidget,PerformanceDemo:()=>PerformanceDemo,SimpleFlowExample:()=>SimpleFlowExample,ZoomToFit:()=>ZoomToFit,ZoomToFitSelectNodes:()=>ZoomToFitSelectNodes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_1_SimpleUsage_stories});var dist=__webpack_require__("../packages/react-canvas-core/dist/index.js"),react_diagrams_dist=__webpack_require__("../packages/react-diagrams/dist/index.js"),react=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),DemoCanvasWidget=__webpack_require__("./demos/helpers/DemoCanvasWidget.tsx"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function generateNodes(model,offsetX,offsetY){var node1=new react_diagrams_dist.Fs("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100+offsetX,100+offsetY);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(200+offsetX,100+offsetY);var link1=port1.link(port2);model.addAll(node1,node2,link1)}var addon_actions_dist=__webpack_require__("../node_modules/.pnpm/@storybook+addon-actions@7.4.4_@types+react-dom@18.2.7_@types+react@18.2.22_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs");var DemoWorkspaceWidget=__webpack_require__("./demos/helpers/DemoWorkspaceWidget.tsx");function demo_zoom_to_fit_generateNodes(model,offsetX,offsetY){var node1=new react_diagrams_dist.Fs("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100+offsetX,100+offsetY);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(200+offsetX,100+offsetY);var link1=port1.link(port2);model.addAll(node1,node2,link1)}function demo_zoom_to_fit_nodes_generateNodes(model,offsetX,offsetY){var node1=new react_diagrams_dist.Fs("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100+offsetX,100+offsetY);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(200+offsetX,100+offsetY);var link1=port1.link(port2);model.addAll(node1,node2,link1)}class CanvasDragToggle extends react.Component{enableDrag=()=>{const{engine}=this.props;engine.getStateMachine().getCurrentState().dragCanvas.config.allowDrag=!0};disableDrag=()=>{const{engine}=this.props;engine.getStateMachine().getCurrentState().dragCanvas.config.allowDrag=!1};render(){const{engine}=this.props;return(0,jsx_runtime.jsx)(DemoWorkspaceWidget.F,{buttons:[(0,jsx_runtime.jsx)(DemoWorkspaceWidget.R,{onClick:this.enableDrag,children:"Enable canvas drag"},1),(0,jsx_runtime.jsx)(DemoWorkspaceWidget.R,{onClick:this.disableDrag,children:"Disable canvas drag"},2)],children:(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})})}}CanvasDragToggle.displayName="CanvasDragToggle";class CanvasPanAndZoomToggle extends react.Component{render(){const{engine}=this.props;return(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})}}CanvasPanAndZoomToggle.displayName="CanvasPanAndZoomToggle";var values=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/values.js"),values_default=__webpack_require__.n(values);class CloneSelected extends react.Component{addPorts=()=>{const nodes=values_default()(this.props.model.getNodes());for(let node of nodes)"Node 2"===node.getOptions().name?node.addInPort(`in-${node.getInPorts().length+1}`,!1):node.addOutPort(`out-${node.getOutPorts().length+1}`,!1);this.props.engine.repaintCanvas()};render(){const{engine}=this.props;return(0,jsx_runtime.jsx)(DemoWorkspaceWidget.F,{buttons:(0,jsx_runtime.jsx)(DemoWorkspaceWidget.R,{onClick:this.addPorts,children:"Add more ports"}),children:(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})})}}CloneSelected.displayName="CloneSelected";dist.C7.TESTING=!0;const _1_SimpleUsage_stories={title:"Simple Usage"},DemoSimple=()=>{var engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm,node1=new react_diagrams_dist.Fs({name:"Node 1",color:"rgb(0,192,255)"});node1.setPosition(100,100);let port1=node1.addOutPort("Out");var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)");let port2=node2.addInPort("In");node2.setPosition(400,100);let link1=port1.link(port2);return link1.getOptions().testName="Test",link1.addLabel("Hello World!"),model.addAll(node1,node2,link1),engine.setModel(model),(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})},SimpleFlowExample=()=>{var engine=(0,react_diagrams_dist.ZP)();const state=engine.getStateMachine().getCurrentState();state instanceof react_diagrams_dist.Qo&&(state.dragNewLink.config.allowLooseLinks=!1);var model=new react_diagrams_dist.Vm,node1=new react_diagrams_dist.Fs("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,100);var link1=port1.link(port2),node3=new react_diagrams_dist.Fs("Node 3","rgb(0,192,255)");return node3.addOutPort("Out"),node3.setPosition(100,200),model.addAll(node1,node2,node3,link1),engine.setModel(model),(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})},PerformanceDemo=()=>{for(var engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm,i=0;i<8;i++)for(var j=0;j<8;j++)generateNodes(model,200*i,100*j);return engine.setModel(model),(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})},LockedWidget=()=>{var engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm,node1=new react_diagrams_dist.Fs("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,100);let link1=port1.link(port2);model.addAll(node1,node2,link1);var node3=new react_diagrams_dist.Fs("Node 3","rgb(0,192,255)"),port3=node3.addOutPort("Out");node3.setPosition(100,250);var node4=new react_diagrams_dist.Fs("Node 4","rgb(192,255,0)"),port4=node4.addInPort("In");node4.setPosition(400,250);var link2=port3.link(port4);return link2.point(350,225),link2.point(200,225),model.addAll(node3,node4,link2),engine.setModel(model),model.setLocked(!0),(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})},CanvasGridSize=()=>{var engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm;model.setGridSize(50);var node1=new react_diagrams_dist.Fs("Node 1","rgb(0,192,255)");let port=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)");let port2=node2.addInPort("In");node2.setPosition(400,100);let link1=port.link(port2);return model.addAll(node1,node2,link1),engine.setModel(model),(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})},EventsAndListeners=()=>{var engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm,node1=new react_diagrams_dist.Fs("Node 1","rgb(255,99,66)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,40);var node3=new react_diagrams_dist.Fs("Node 3","rgb(128,99,255)"),port3=node3.addInPort("In");node3.setPosition(300,160);let link1=port1.link(port2),link2=port1.link(port3);return model.addAll(node1,node2,node3,link1,link2).forEach((item=>{item.registerListener({eventDidFire:(0,addon_actions_dist.aD)("element eventDidFire")})})),model.registerListener({eventDidFire:(0,addon_actions_dist.aD)("model eventDidFire")}),engine.setModel(model),(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})},ZoomToFit=()=>{for(var engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm,i=0;i<8;i++)for(var j=0;j<8;j++)demo_zoom_to_fit_generateNodes(model,200*i,100*j);return engine.setModel(model),(0,jsx_runtime.jsx)(DemoWorkspaceWidget.F,{buttons:(0,jsx_runtime.jsx)(DemoWorkspaceWidget.R,{onClick:()=>engine.zoomToFit(),children:"Zoom to fit"}),children:(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})})},ZoomToFitSelectNodes=()=>{for(var engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm,i=0;i<8;i++)for(var j=0;j<8;j++)demo_zoom_to_fit_nodes_generateNodes(model,200*i,100*j);return engine.setModel(model),(0,jsx_runtime.jsx)(DemoWorkspaceWidget.F,{buttons:(0,jsx_runtime.jsx)(DemoWorkspaceWidget.R,{onClick:()=>engine.zoomToFitSelectedNodes(50),children:"Zoom to fit"}),children:(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})})},CanvasDrag=()=>{var engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm,node1=new react_diagrams_dist.Fs("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,100);var link1=port1.link(port2);return model.addAll(node1,node2,link1),engine.setModel(model),(0,jsx_runtime.jsx)(CanvasDragToggle,{engine,model})},CanvasPanAndZoom=()=>{var engine=(0,react_diagrams_dist.ZP)({registerDefaultPanAndZoomCanvasAction:!0,registerDefaultZoomCanvasAction:!1}),model=new react_diagrams_dist.Vm,node1=new react_diagrams_dist.Fs("Node 1","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,100);var link1=port1.link(port2);return model.addAll(node1,node2,link1),engine.setModel(model),(0,jsx_runtime.jsx)(CanvasPanAndZoomToggle,{engine,model})},DynamicPorts=()=>{var engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm,node1=new react_diagrams_dist.Fs("Node 1","rgb(0,192,255)");node1.setPosition(100,100);var node2=new react_diagrams_dist.Fs("Node 2","rgb(192,255,0)");return node2.setPosition(400,100),model.addAll(node1,node2),engine.setModel(model),(0,jsx_runtime.jsx)(CloneSelected,{engine,model})},LinksWithLabels=()=>{const engine=(0,react_diagrams_dist.ZP)(),model=new react_diagrams_dist.Vm,node1=new react_diagrams_dist.Fs("Node A","rgb(0,192,255)"),port1=node1.addOutPort("Out");node1.setPosition(100,100);const node2=new react_diagrams_dist.Fs("Node B","rgb(255,255,0)"),port2=node2.addInPort("In");node2.setPosition(400,50);const node3=new react_diagrams_dist.Fs("Node C (no label)","rgb(192,255,255)"),port3=node3.addInPort("In");node3.setPosition(450,180);const node4=new react_diagrams_dist.Fs("Node D","rgb(192,0,255)"),port4=node4.addInPort("In");node4.setPosition(300,250);const link1=port1.link(port2);link1.addLabel("Custom label 1"),link1.addLabel("Custom label 2");const link2=port1.link(port3),link3=port1.link(port4);return link3.addLabel("Emoji label: 🎉"),model.addAll(node1,node2,node3,node4,link1,link2,link3),engine.setModel(model),(0,jsx_runtime.jsx)(DemoWorkspaceWidget.F,{buttons:(0,jsx_runtime.jsx)(DemoWorkspaceWidget.R,{onClick:()=>{(0,addon_actions_dist.aD)("Serialized Graph")(JSON.stringify(model.serializeDiagram(),null,2))},children:"Serialize Graph"}),children:(0,jsx_runtime.jsx)(DemoCanvasWidget._,{children:(0,jsx_runtime.jsx)(dist.JE,{engine})})})},__namedExportsOrder=["DemoSimple","SimpleFlowExample","PerformanceDemo","LockedWidget","CanvasGridSize","EventsAndListeners","ZoomToFit","ZoomToFitSelectNodes","CanvasDrag","CanvasPanAndZoom","DynamicPorts","LinksWithLabels"]},"./demos/helpers/DemoWorkspaceWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>DemoWorkspaceWidget,R:()=>DemoButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.22_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let S;var _S;(_S=S||(S={})).Toolbar=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
		padding: 5px;
		display: flex;
		flex-shrink: 0;
	`,_S.Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
		flex-grow: 1;
		height: 100%;
	`,_S.Container=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
		background: black;
		display: flex;
		flex-direction: column;
		height: 100%;
		border-radius: 5px;
		overflow: hidden;
	`;const DemoButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.button`
	background: rgb(60, 60, 60);
	font-size: 14px;
	padding: 5px 10px;
	border: none;
	color: white;
	outline: none;
	cursor: pointer;
	margin: 2px;
	border-radius: 3px;

	&:hover {
		background: rgb(0, 192, 255);
	}
`;class DemoWorkspaceWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(S.Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(S.Toolbar,{children:this.props.buttons}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(S.Content,{children:this.props.children})]})}}DemoWorkspaceWidget.displayName="DemoWorkspaceWidget"}}]);
//# sourceMappingURL=1_SimpleUsage-stories.a747e553.iframe.bundle.js.map