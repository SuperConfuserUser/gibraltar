import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as paper from 'paper';
import { DemoComponent } from '../demo-component/demo.component';
import { VappData, VappComponent } from '../../../../../src/components/vapp';
import { placeholderArrayOfVappData} from '../../constants/vapp-basic-placeholder-data';
import { VmComponent } from '../../../../../src/components/vm';
import { VmAndVnicListComponent } from '../../../../../src/components/vm-and-vnic-list';
import { LabelComponent } from '../../../../../src/components/label';
import { VmWithMarginComponent } from '../../../../../src/components/vm-with-margin';
import { MarginComponent } from '../../../../../src/components/margin';
import { LIGHT_GREY, VAPP_BACKGROUND_COLOR, CANVAS_BACKGROUND_COLOR } from '../../../../../src/constants/colors';
import { CONNECTOR_SIZE, LABEL_HORIZONTAL_PADDING } from '../../../../../src/constants/dimensions';
import { fillProperties } from '@angular/core/src/util/property';
import { EntityLabelComponent } from '../../../../../src/components/entity-label';
import { NetworkLabelComponent } from '../../../../../src/components/network-label';
import { VnicData, VnicComponent } from '../../../../../src/components/vnic';
import { VappNetworkComponent } from '../../../../../src/components/vapp-network.component';
import { IconLabelComponent } from '../../../../../src/components/icon-label';
import { IconService } from '../../../../../src/services/icon-service';
import { ScrollbarComponent } from '../../../../../src/components/scrollbar';
import { ToolStack } from '../../../../../src/components/tool-stack';

@Component({
  selector: 'sandbox-demo',
  template: `
	  <demo label="Sandbox" height="500"
          description="This is where all the things are tested."></demo>
  ` })
export class SandboxDemoComponent implements AfterViewInit {

  @ViewChild(DemoComponent)
  demo: DemoComponent;

  ngAfterViewInit() {
    // sets up Paper Project
    const proj = this.demo.getProject();
    proj.activate();
    proj.activeLayer.applyMatrix = false;
    const view = proj.view;
    // this.demo.backgroundColor = CANVAS_BACKGROUND_COLOR;
    const activeLayer = proj.activeLayer;
    const canvas = this.demo.canvas.nativeElement;
    const self = this;

// TEST INDIVIDUAL PATH SEGMENTS FOR VAPP PATH

    // build first path
    const offsetX = 30;
    const test = new paper.Path();
    test.strokeWidth = 1;
    test.strokeColor = LIGHT_GREY;
    for (let i = 0; i < 4; i++) {
      test.add(new paper.Point(offsetX, i * 100 + 30));
    }
    logValues(test, 'OG Values');

    // test.fullySelected = true;

    enum VappNetworkSegments {
      topmost,
      externalTop,
      vappHeader,
      vmList
    }

    // this changes the points on an individual basis
    test.segments[VappNetworkSegments.topmost].point.y += -10;
    test.segments[VappNetworkSegments.externalTop].point.y += 10;
    test.segments[VappNetworkSegments.vappHeader].point.y += 40;
    test.segments[VappNetworkSegments.vmList].point.y += 30;
    logValues(test, 'individually updated vals');

    // animation
    const animated = test.clone();
    animated.translate(new paper.Point(30, 0));

    // not allowed to tween height from 0
    const tinyHeight = 0.01;
    (animated as any).tweenFrom({
      'bounds.height': tinyHeight
    }, 2000);

    // clone and separate specific segment
    const clonedSeg = new paper.Path.Line(test.segments[VappNetworkSegments.vappHeader].point,
      test.segments[VappNetworkSegments.vmList].point);

    // remove original and add back in the clone
    test.segments[VappNetworkSegments.vmList].remove();
    test.addSegments(clonedSeg.segments);

    clonedSeg.strokeColor = 'red';
    clonedSeg.translate(new paper.Point(1, 0));

    function logValues(path: paper.Path, label?: string) {
      if (label) {
        console.log(label);
      }
      for (let i = 0; i < path.segments.length; i++) {
        console.log('segment', i, path.segments[i].point);
      }
    }
// END TEST

// // TEST UPDATED MARGIN COMPONENT WITH VM COMPONENT - turn off bg color
//     let test = new paper.Group({ applyMatrix: false });
//     // set a starting point for elements that are positioned relatively to previous sibling
//     let origin = new paper.Path.Circle(new paper.Point(30, 30), 0);
//     test.addChild(origin);
//     // test.position = new paper.Point(30, 30);
//
//     const vms = placeholderArrayOfVappData[0].vms;
//     // LABEL ONLY
//     // // inline positioning
//     // // positioning and position style can also be built into the item
//     // vms.forEach(vmData => {
//     //   let vm = new VmWithMarginComponent(vmData.name);
//     //   vm.bounds.topLeft = vm.previousSibling.bounds.topRight;
//     //   test.addChild(vm);
//     // });
//     //
//     // // block positioning
//     // vms.forEach(vmData => {
//     //   let vm = new VmWithMarginComponent(vmData.name);
//     //   vm.bounds.topLeft = vm.previousSibling.bounds.bottomLeft;
//     //   test.addChild(vm);
//     // });
//
//     // WITH VM
//     // inline positioning
//     vms.forEach(vmData => {
//       let vm = new VmWithMarginComponent(vmData);
//       vm.bounds.topLeft = vm.previousSibling.bounds.topRight;
//       test.addChild(vm);
//     });
//
//     // block positioning
//     vms.forEach(vmData => {
//       let vm = new VmWithMarginComponent(vmData);
//       vm.bounds.topLeft = vm.previousSibling.bounds.bottomLeft;
//       test.addChild(vm);
//     });
//
//     (test.lastChild as VmWithMarginComponent).margin.top = 100;
//     // (test.lastChild as VmWithMarginComponent).getMarginBox().top = 100;
//     // (test.lastChild as VmWithMarginComponent).getMarginBox().right = 100;
//     // (test.lastChild as VmWithMarginComponent).getMarginBox().bottom = 100;
//     // (test.lastChild as VmWithMarginComponent).getMarginBox().left = 100;
//     // (test.lastChild as VmWithMarginComponent).getMarginBox().setValues(20, 40, 30, 10);
// // END TEST

// // TEST HTML MARGIN COMPONENT
//     let test = new paper.Group();
//     // set a starting point for elements that are positioned relatively to previous sibling
//     let origin = new paper.Path.Circle(new paper.Point(30, 30), 0);
//     test.addChild(origin);
//
//     const vms = placeholderArrayOfVappData[0].vms;
//     // inline positioning
//     // positioning and position style can also be built into the item
//     vms.forEach(vmData => {
//       let vm = new VmWithMarginComponent(vmData.name);
//       vm.position = vm.position.add(vm.previousSibling.bounds.topRight);// can also use test.lastChild vs prevSibling
//       test.addChild(vm);
//     });
//
//     // block positioning
//     vms.forEach(vmData => {
//       let vm = new VmWithMarginComponent(vmData.name);
//       vm.position = vm.position.add(vm.previousSibling.bounds.bottomLeft);
//       test.addChild(vm);
//     });
// // END TEST

// // TEST OBJECT PARAMETERS IN CONSTRUCTOR v2
//     // https://github.com/microsoft/TypeScript/issues/5326
//     // #1 using interface to extend and save on retyping class members
//     interface FooOptions {
//       name: string;
//       age: number;
//     }
//
//     interface Foo extends FooOptions {}
//
//     class Foo {
//       constructor(options: FooOptions) {
//         Object.assign(this, options);
//         // able to call this.name and this.age :D
//       }
//     }
//
//     const test = new Foo({ name: 'john doe', age: 20 });
//
//     // #2 using optional params and defaults when assigning to this
//     interface OptionalFooOptions {
//       name: string;
//       age?: number;
//     }
//
//     interface OptionalFoo extends OptionalFooOptions {}
//
//     class OptionalFoo {
//       constructor(options: OptionalFooOptions) {
//         Object.assign(this, { age: 20 }, options);
//       }
//     }
//
//     // const testOptional = new OptionalFoo({}); // errors bc name is required
//     const testOptional2 = new OptionalFoo({ name: 'jane doe' });
//     const testOptional3 = new OptionalFoo({ name: 'bob', age: 30 });
//
//     // #3 using class. much cleaner! \o/
//     // but if it has to extend from two classes, you would need to use mixins
//     class FooData {
//       name: string;
//       age?: number = 20;
//     }
//
//     class ExtendedFoo extends FooData {
//       constructor(options: FooData) {
//         super();
//         Object.assign(this, options);
//       }
//     }
//
//     // const testSchema = new ExtendedFoo({}); // errors bc name is required
//     const testSchema2 = new ExtendedFoo({ name: 'jane doe' });
//     const testSchema3 = new ExtendedFoo({ name: 'bob', age: 30 });
//
//     // #4 using multiple classes
//     // let's nope this for now. doesn't handle optional args with defaults
//     // would be good to learn what's happening with partials
//     type Constructor<T = {}> = new (...args: any[]) => T;
//     function FooSchema<TBase extends Constructor>(Base: TBase) {
//       return class extends Base {
//         name: string;
//         age?: number = 20;
//       };
//     }
//
//     function BarSchema<TBase extends Constructor>(Base: TBase) {
//       return class extends Base {
//         color?: string = 'blue';
//       };
//     }
//
//     class FooBar {
//       constructor(options: any) {
//         Object.assign(this, options);
//         console.log(this);
//       }
//     };
//
//     const inception = FooSchema(FooBar);
//     const inception2 = BarSchema(inception);
//
//     const testMultiClasses = new inception2({}); // errors bc name is required
//     const testMultiClasses2 = new inception2({ name: 'jane doe' });
//     const testMultiClasses3 = new inception2({ name: 'bob', age: 30 });
//     const testMultiClasses4 = new inception2({ name: 'patrick', color: 'red' });
//
// // END TEST

// // TEST TOOLSTACK
//     const toolPath = () => {
//       const tool = new paper.Tool();
//
//       let path: paper.Path;
//
//       tool.onMouseDown = function(event) {
//         path = new paper.Path();
//         path.strokeColor = '#424242';
//         path.strokeWidth = 4;
//         path.add(event.point);
//       };
//
//       tool.onMouseDrag = function(event) {
//         path.add(event.point);
//       };
//
//       return tool;
//     };
//
//     const toolCircle = () => {
//       const tool = new paper.Tool();
//
//       let path: paper.Path;
//
//       tool.onMouseDown = function(event) {
//         path = new paper.Path.Circle({
//           center: event.point,
//           radius: 30,
//           fillColor: '#9C27B0'
//         });
//       };
//
//       return tool;
//     };
//
//     const toolStack = new ToolStack([toolPath, toolCircle]);
//     console.log('paper tools init:', paper.tools);
//     // toolStack.activateTool('toolCircle');
//     // toolStack.addTools();
//     // console.log('paper tools added:', paper.tools);
//     // toolStack.removeTools(paper.tools);
//     // console.log('paper tools removed:', paper.tools);
//
//     toolStack.activateTool('toolCircle');
//     console.log('paper tools circle:', paper.tools);
//     toolStack.activateTool('toolPath');
//     console.log('paper tools path:', paper.tools);
//     toolStack.removeTools(paper.tools);
//     console.log('paper tools removed:', paper.tools);
// // END TEST
  }
}

// // TEST ADD OFFSET VALUES TO CONTAINER_BOUNDS / RECTANGLE
//     const og = new paper.Path.Rectangle({
//       pivot: new paper.Point(0, 0),
//       position: new paper.Point(20, 20),
//       size: new paper.Size(100, 100),
//       fillColor: 'white'
//     });
//     og.addTo(proj);
//     const testH = og.clone();
//     testH.opacity = 0;
//     const testV = testH.clone();
//     testH.selected = true;
//     testV.selected = true;
//
//     const offsetMax = 10;
//     const offsetMin = 10;
//
//     // horizontal
//     testH.bounds.width = testH.bounds.width + offsetMax + offsetMin;
//     // testH.bounds.size = new paper.Size(testH.bounds.width + offsetMax + offsetMin, testH.bounds.height);
//     testH.translate(new paper.Point(-offsetMin, 0));
//
//     // vertical
//     testV.bounds.height = testV.bounds.height + offsetMax + offsetMin;
//     // testV.bounds.size = new paper.Size(testV.bounds.width, testV.bounds.width + offsetMax + offsetMin);
//     testV.translate(new paper.Point(0, -offsetMin));
//
//     const content = new paper.Path.Rectangle({
//       position: new paper.Point(35, 35),
//       size: new paper.Size(30, 30),
//       fillColor: 'DodgerBlue'
//     });
//
//     function checkFit() {
//       const fitH = content.isInside(testH.strokeBounds);
//       const fitV = content.isInside(testV.strokeBounds);
//       if (fitH && fitV) content.fillColor = 'DodgerBlue';
//       else content.fillColor = 'red';
//     }
//
//     checkFit();
//     content.bounds.size = new paper.Size(30, 30);
//     content.translate(new paper.Point(-10, 0));
//     checkFit();
//     content.translate(new paper.Point(0, -10));
//     checkFit();
//
//     activeLayer.onMouseUp = (event: paper.MouseEvent) => {
//       const fitH = content.isInside(testH.strokeBounds);
//       const fitV = content.isInside(testV.strokeBounds);
//       console.log('content position:', content.position);
//       console.log('horizontal test:', fitH);
//       console.log('vertical test:', fitV);
//     };
//
//     activeLayer.onMouseDrag = (event) => {
//       content.position = event.point;
//       checkFit();
//     };
// // END TEST

// // TEST and LEARN TS INDEX SIGNATURES
//     // https://basarat.gitbooks.io/typescript/content/docs/types/index-signatures.html
//     // TypeScript index signatures must be either string or number (and symbols)
//
//     // JS implicitly calls .toString() on expressions for bracket notation
//     let foo: any = {};
//     foo['Hello'] = 'World';
//     console.log(foo['Hello']);
//     // TS does not. you have to explicitly call it...
//     let obj = {
//       toString() {
//         return 'Hello';
//       }
//     };
//     // foo[obj] = 'World'; // error!
//     foo[obj.toString()] = 'World';
//
//     // specify index signature explicitly
//     // the name of the index signature e.g. index in { [index:string] : {message: string} }
//     // has no significance for TypeScript and is only for readability.
//     // e.g. if it's user names you can do { [username:string] : {message: string} }
//     // number indexes are also supported e.g. { [count: number] : SomeOtherTypeYouWantToStoreEgRebate }
//     // all members must conform to the signature
//     let foo2: { [index: string]: {message: string} } = {};  // {message: string}
//     foo2['a'] = { message: 'some message' };
//     // foo2['a'] = { messages: 'some message' };  // error! typo in messages
//     interface Bar {
//       [key: string]: number;
//       x: number;
//       // y: string; // ERROR: Property `y` must be of type number
//     }
//     // Direct string access
//     const a = foo2['x']; // number
//     // Indirect string access
//     let x = 'x';
//     const a2 = foo2[x]; // number
//
//     // limit set of string literals
//     type Index = 'a' | 'b' | 'c';
//     type FromIndex = { [k in Index]?: number };
//     const good: FromIndex = { b: 1, c: 2 };
//     // const bad: FromIndex = { b: 1, c: 2, d: 3 }; // error! 'd' does not exist on type 'FromIndex'
//     // often used together with keyof typeof to capture vocabulary types
//     // specification of the vocabulary can be deferred generically
//     type FromSomeIndex<K extends string> = { [key in K]: number };
//     const FromSomeIndex = { b: 1, c: 2, d: 3 };
//
//     // nested index signatures
//     // separate out the nesting into its own property
//     interface NestedCSS {
//       color?: string;
//       nest?: {
//         [selector: string]: NestedCSS;
//       };
//     }
//     const example: NestedCSS = {
//       color: 'red',
//       nest: {
//         '.subclass': {
//           color: 'blue'
//         }
//       }
//     };
//
// // END TEST

// // TEST VIEW ON RESIZE
//     // FIXME: it redraws on other views when resizing. be more explicit about which view?
//     const path = new paper.Path.Circle(view.bounds.center, 30);
//     path.fillColor = 'red';
//
//     const rect = new paper.Path.Rectangle({
//       point: view.bounds.bottomLeft.subtract(new paper.Point(-20, 40)),
//       size: new paper.Size(view.bounds.width - 40, 20),
//       fillColor: 'blue'
//     });
//
//     let rect2: paper.Path.Rectangle;
//
//     function draw() {
//       rect2 = new paper.Path.Rectangle({
//         point: view.bounds.topLeft.add(new paper.Point(20, 20)),
//         size: new paper.Size(view.bounds.width - 40, 20),
//         fillColor: 'yellow'
//       });
//     }
//
//     function redraw() {
//       rect2.remove();
//       draw();
//     }
//
//     draw();
//
//     function redrawAll() {
//       path.position = view.center;
//       rect.bounds.size = new paper.Size(view.bounds.width - 40, 20);
//       redraw();
//     }
//
//     view.on({
//       resize: redrawAll
//     });
// // END TEST

// // TEST OPTIONS OBJECT PARAMETER with TYPESCRIPT
//     enum Direction {
//       HORIZONTAL = 'x',
//       VERTICAL = 'y'
//     }
//
//     const direction = 'HORIZONTAL';
//     const axis = Direction[direction];
//
//     const a = new paper.Path.Rectangle(
//       new paper.Point(0, 0),
//       new paper.Size(10, 30)
//     );
//
//     const axis2 = direction === 'HORIZONTAL' ? 'x' : 'y';
//     const dimension = direction === 'HORIZONTAL' ? 'width': 'height';
//     console.log('position:', a.position[axis]);
//     console.log('postion2:', a.position[axis2]);
//     console.log('dimension:', a.bounds[dimension]);
//
//     const axis3 = {
//       HORIZONTAL: 'x',
//       VERTICAL: 'y'
//     };
//
//     console.log('axis obj:', axis3[direction]);
//
//     interface ITest {
//       foo?: string;
//       answer?: number;
//     }
//
//     class Test {
//
//       constructor(private options: ITest = {}) {
//         this.options = {
//           foo: 'bar',
//           answer: 42,
//         };
//         this.options = { ...this.options, ...options };
//         // Object.assign(this.options, options);
//         // debugger;
//       }
//
//       get Foo() {
//         return this.options.foo;
//       }
//     }
//
//     const test = new Test();
//     const test2 = new Test({
//       foo: 'whee',
//       answer: 0
//     });
//     const test3 = new Test({
//       answer: 1
//     });
//
//     // const test4 = new Test({ foo: 'sdlf', answer: 33 });
//
//     // debugger;
// // END TEST

// // TEST KEYDOWN
//     const test = new paper.Path.Circle({
//       position: view.center,
//       radius: 30,
//       fillColor: 'yellow'
//     });
//
//     // VIA PAPER TOOL
//     const keyTool = new paper.Tool();
//
//     keyTool.onKeyDown = (event: paper.KeyEvent) => {
//       const movementAmount = 10;
//
//       const positionByDirection: any = {
//         up: new paper.Point(0, -movementAmount),
//         down: new paper.Point(0, movementAmount),
//         left: new paper.Point(-movementAmount, 0),
//         right: new paper.Point(movementAmount, 0)
//       };
//       test.translate(positionByDirection[event.key]);
//
//       // switch (event.key) {
//       //   case 'up':
//       //     test.translate(new paper.Point(0, -movementAmount));
//       //     break;
//       //   case 'down':
//       //     test.translate(new paper.Point(0, movementAmount));
//       //     break;
//       //   case 'left':
//       //     test.translate(new paper.Point(-movementAmount, 0));
//       //     break;
//       //   case 'right':
//       //     test.translate(new paper.Point(movementAmount, 0));
//       //     break;
//       // }
//     };
//
//     // VIA CANVAS
//     // const defaultKeyDown = (event: KeyboardEvent) => {
//     //   console.log('something happened!');
//     //   // event.preventDefault();
//     //   // onKeyDown(event);
//     // };
//     // canvas.onkeydown = () => {
//     //   console.log('sometihng happened');
//     // };
//
// // END TEST

// // TEST HIT TEST MOUSE CLICK
//     const test = new paper.Path.Circle(view.center, 30);
//     let testFill = 'blue';
//     test.fillColor = testFill;
//
//     const tolerance = 10;
//     const toleranceVisual = new paper.Path.Circle({
//       position: test.position,
//       radius: tolerance + test.bounds.width / 2,
//       strokeWidth: 1,
//       strokeColor: 'white'
//     });
//
//     const hitOptions = {
//       fill: true,
//       tolerance: tolerance
//     };
//
//     view.onMouseDown = (event: paper.MouseEvent) => {
//       const hitResult = test.hitTest(event.point, hitOptions);
//       if (hitResult) {
//         testFill = testFill === 'blue' ? 'red' : 'blue';
//         test.fillColor = testFill;
//       }
//     };
// // END TEST

// // TEST CLICK TO MOVE
//     const test = new paper.Path.Circle(new paper.Point(-100,-100), 30);
//     let testFill = 'blue';
//     test.fillColor = testFill;
//
//     paper.view.onClick = (event: paper.MouseEvent) => {
//       console.log('mouse point', event.point);
//       testFill = testFill === 'blue' ? 'red' : 'blue';
//       test.fillColor = testFill;
//       test.position = event.point;
//     };
// // END TEST

// // TEST MOUSEWHEEL WHEEEEELIES W/ SCROLLBAR HORIZONTAL and DRAGGABLE VIEW
//     const canvas = this.demo.canvas.nativeElement;
//     const view = paper.view;
//     const self = this;
//
//     // create long content
//     let test = new paper.Group();
//     test.pivot = test.bounds.topLeft;
//     test.position = new paper.Point(0, 0);
//     test.applyMatrix = false;
//     // set a starting points for elements that are positioned relatively to previous sibling
//     let origin = new paper.Path.Circle(new paper.Point(30, 30), 0);
//     test.addChild(origin);
//     const vms = placeholderArrayOfVappData[9].vms;
//     // inline positioning
//     // positioning and position style can also be built into the item
//     vms.forEach(vmData => {
//       let vm = new VmWithMarginComponent(vmData.name);
//       vm.position = vm.position.add(vm.previousSibling.bounds.topRight);  // can also use test.lastChild vs prevSibling
//       test.addChild(vm);
//     });
//
//     // create scrollbar
//     const scrollbarWidth = 150;
//     const scrollbarHeight = 5;
//     const scrollbarDefaultOpacity = 0.6;
//     const scrollbarActiveOpacity = 1;
//     const scrollbarPathMargin = 20;
//
//     // create scroll track
//     const scrollbarPath = new paper.Path.Rectangle({
//       point: new paper.Point(scrollbarPathMargin, view.bounds.bottom - scrollbarPathMargin),
//       size: new paper.Size(view.bounds.width - (scrollbarPathMargin * 2), scrollbarHeight),
//       radius: scrollbarHeight / 2,
//       fillColor: '#343B4E'
//     });
//     const scrollbar = new paper.Path.Rectangle({
//       point: new paper.Point(scrollbarPathMargin, view.bounds.bottom - scrollbarPathMargin),
//       size: new paper.Size(scrollbarWidth, scrollbarHeight),
//       radius: scrollbarHeight / 2,
//       fillColor: LIGHT_GREY,
//       opacity: scrollbarDefaultOpacity
//     });
//
//     // interactive
//     const changeScrollbarPosition = (delta: number) => {
//       const scrollLimitMin = view.bounds.left + scrollbarWidth / 2 + scrollbarPathMargin;
//       const scrollLimitMax = view.bounds.right - scrollbarWidth / 2 - scrollbarPathMargin;
//       scrollbar.position.x = delta;
//       // set the limits
//       if (scrollbar.position.x < scrollLimitMin) {
//         scrollbar.position.x = scrollLimitMin;
//       }
//       if (scrollbar.position.x > scrollLimitMax) {
//         scrollbar.position.x = scrollLimitMax;
//       }
//       let scrollDistanceX = scrollLimitMax - scrollLimitMin;
//       let contentDistance = test.bounds.width - paper.view.size.width + VIEW_PADDING * 2;
//       // what's causing the 593 offset?
//       test.position.x = -(scrollbar.position.x / scrollDistanceX) * contentDistance + 593;
//       console.log('test x:', test.position.x);
//     };
//
//     const changeContentPosition = (delta: number) => {
//       let maxX = 0;
//       let minX = -(test.bounds.width - paper.view.size.width + VIEW_PADDING * 2);
//       let distanceX = maxX - minX;
//       let scrollDistanceX = scrollbarPath.bounds.width - scrollbarWidth;
//       // paper.view.scrollBy(delta);
//       test.position.x = test.position.x - delta;
//       // set dragging limits based on test size
//       if (test.position.x > maxX) {
//         test.position.x = maxX;
//       }
//       if (test.position.x < minX) {
//         test.position.x = minX;
//       }
//       // drive scrollbar position when dragging content
//       scrollbar.position.x = -(test.position.x / distanceX)
//         * scrollDistanceX + scrollbarPathMargin + scrollbarWidth / 2;
//     };
//
//     const handleScroll = (event: WheelEvent) => {
//       // scrollbar.opacity = scrollbarActiveOpacity;
//       event.preventDefault();
//       changeScrollbarPosition(scrollbar.position.x + event.deltaX);
//     };
//
//     canvas.onwheel = handleScroll;
//
//     // CONTENT DRAG
//     let contentPan = new paper.Tool();
//     if (!proj.activeLayer.isInside(paper.view.bounds)) {
//       contentPan.activate();
//       // on drag, scroll the test group horizontally by the difference between mousedown and mouseup
//       contentPan.onMouseDown = () => {
//         paper.view.element.style.cursor = 'grabbing';
//       };
//       contentPan.onMouseUp = () => {
//         defaultTool.activate();
//         paper.view.element.style.cursor = 'default';
//       };
//       contentPan.onMouseDrag = event => {
//         let delta = new paper.Point(event.downPoint.subtract(event.point).x, 0);
//         changeContentPosition(delta.x);
//       };
//     }
//
//     // SCROLL DRAG
//     const defaultTool = contentPan;
//     const scrollDrag = new paper.Tool();
//     let scrollDragOffset: paper.Point;
//
//     scrollbar.onMouseEnter = () => {
//       scrollbar.opacity = scrollbarActiveOpacity;
//       scrollDrag.activate();
//     };
//     scrollbar.onMouseLeave = () => {
//       scrollbar.opacity = scrollbarDefaultOpacity;
//     };
//
//     scrollDrag.onMouseDown = event => {
//       paper.view.element.style.cursor = 'grabbing';
//       scrollDragOffset = new paper.Point(event.downPoint.subtract(scrollbar.position));
//     };
//     scrollDrag.onMouseUp = () => {
//       // is there a better way to setNormal scrollDrag tool?
//       defaultTool.activate();
//       paper.view.element.style.cursor = 'default';
//       scrollbar.opacity = scrollbarDefaultOpacity;
//     };
//     scrollDrag.onMouseDrag = event => {
//       scrollbar.opacity = scrollbarActiveOpacity;
//       changeScrollbarPosition(event.point.x - scrollDragOffset.x);
//     };
//
//     const VIEW_PADDING = 30;
//         // debugger;
// // END TEST

// // TEST CLIPPED VM LABEL
//     let label = new LabelComponent(
//       'wheeeeeeeeeeeeeeeeeeeeeeeeeee',
//       new paper.Point(0, 0)
//     );
//     label.position = label.position.add(new paper.Point(30, 30));
//     label.setMaxWidth(110);
//
//     let iconLabel = new IconLabelComponent('wheeeeeeeeeeeeeeeeeeeeeeeeeee',
//       IconService.getOperatingSystemIcon('ubuntu64Guest'),
//       new paper.Point(0, 0));
//     iconLabel.position = iconLabel.position.add(new paper.Point(30, 70));
//     iconLabel.setMaxWidth(80);
//
//     let rect1 = new paper.Path.Rectangle(
//       new paper.Point(30, 110),
//       new paper.Size(300, 30)
//     );
//     rect1.strokeColor = LIGHT_GREY;
//     let rect2 = rect1.clone();
//     rect2.position = rect2.position.add(new paper.Point(0, 40));
//     // change size or width
//     // rect2.bounds.size.set(new paper.Size(100, 30));  // size set method
//     rect2.bounds.width = 100; // width method
//     proj.activeLayer.addChildren([label, iconLabel, rect1, rect2]);
// // END TEST

// // TEST VAPP NETWORK PATHS OUTSIDE AND ABOVE BG
//     const vappNetworkConnectedData = {
//       uuid: '',
//       name: '172.16.55.0 Failover Network',
//       vapp_uuid: '',
//       fence_mode: 'BRIDGED'
//     };
//
//     const vappNetworkIsolatedData = {
//       uuid: '',
//       name: '172.16.55.0 Failover Network',
//       vapp_uuid: '',
//       fence_mode: 'ISOLATED'
//     };
//
//     const vappNetworkConnected = new VappNetworkComponent(vappNetworkConnectedData, new paper.Point(100, 100));
//     const vappNetworkIsolated = new VappNetworkComponent(vappNetworkIsolatedData, new paper.Point(200, 100));
//     proj.activeLayer.addChildren([vappNetworkConnected, vappNetworkIsolated]);
// // END TEST

// // TEST MOUSEWHEEL WHEEEEELIES W/ SCROLLBAR VERTICAL
//     const scrollbarWidth = 5;
//     const scrollbarHeight = 150;
//     const scrollbarDefaultOpacity = 0.6;
//     const scrollbarActiveOpacity = 1;
//     const scrollbarPathMargin = 20;
//     // draw scrollbarPath and scrollbar
//     const scrollbarPath = new paper.Path.Rectangle({
//       point: new paper.Point(view.center.x - (scrollbarWidth / 2), scrollbarPathMargin),
//       size: new paper.Size(scrollbarWidth, view.bounds.height - (scrollbarPathMargin * 2)),
//       radius: scrollbarWidth / 2,
//       fillColor: '#343B4E'
//     });
//     const scrollbar = new paper.Path.Rectangle({
//       point: view.center.subtract(new paper.Point(scrollbarWidth / 2, scrollbarHeight / 2)),
//       size: new paper.Size(scrollbarWidth, scrollbarHeight),
//       radius: scrollbarWidth / 2,
//       fillColor: LIGHT_GREY,
//       opacity: scrollbarDefaultOpacity
//     });
//
//     const changeScrollbarPosition = (delta: number) => {
//       const scrollLimitMin = view.bounds.top + scrollbarHeight / 2 + scrollbarPathMargin;
//       const scrollLimitMax = view.bounds.bottom - scrollbarHeight / 2 - scrollbarPathMargin;
//       scrollbar.position.y = delta;
//       // set the limits
//       if (scrollbar.position.y < scrollLimitMin) {
//         scrollbar.position.y = scrollLimitMin;
//       }
//       if (scrollbar.position.y > scrollLimitMax) {
//         scrollbar.position.y = scrollLimitMax;
//       }
//     };
//
//     // let scrolling: any = null;
//     // const onScroll = (event: WheelEvent) => {
//     //   scrollbar.opacity = scrollbarActiveOpacity;
//     //   // https://stackoverflow.com/questions/3515446/jquery-mousewheel-detecting-when-the-wheel-stops
//     //   // timeout event that resets scrollbar to default when scrolling stops
//     //   // FIXME: flicker issues while it activates and deactivates. set an interrupter on Active
//     //   //  because clearTimeout isn't really doing anything. it should clear the setTimeout value
//     //   clearTimeout(scrolling);
//     //   setTimeout(() => {
//     //     // scrolling = undefined;
//     //     (scrollbar as any).tween({
//     //       opacity: scrollbarActiveOpacity
//     //     }, {
//     //       opacity: scrollbarDefaultOpacity
//     //     }, 100);
//     //   }, 700);
//     //   event.preventDefault();
//     //   changeScrollbarPosition(scrollbar.position.y + event.deltaY);
//     // };
//
//     const additionalScrollEffects = {
//       activate: function() {
//         test.opacity = 1;
//       },
//       setNormal: function() {
//         (test as any).tween({
//           opacity: 1
//         }, {
//           opacity: 0
//         }, 250);
//       }
//     };
//     const activeScrolling = () => {
//       scrollbar.opacity = scrollbarActiveOpacity;
//       additionalScrollEffects.activate();
//     };
//
//     const inactiveScrolling = () => {
//       // scrollbar.opacity = scrollbarDefaultOpacity;
//       (scrollbar as any).tween({
//         opacity: scrollbarActiveOpacity
//       }, {
//         opacity: scrollbarDefaultOpacity
//       }, 100);
//       additionalScrollEffects.setNormal();
//     };
//     let scrollTimeout: any;
//     const onScroll = (event: WheelEvent) => {
//       activeScrolling();
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         inactiveScrolling();
//       }, 750);
//       event.preventDefault();
//       changeScrollbarPosition(scrollbar.position.y + event.deltaY);
//     };
//
//     // TODO: observable for scrolling. so outside objects can change based on it's value
//     let testFill = scrollTimeout ? 'red' : 'blue';
//     const test = new paper.Path.Circle({
//       point: new paper.Point(100, 100),
//       radius: 10,
//       fillColor: 'blue',
//       opacity: 0
//     });
//
//     canvas.onwheel = onScroll;
//
//     // DRAG TOOL
//     const defaultTool = new paper.Tool();
//     const scrollDrag = new paper.Tool();
//     let scrollDragOffset: paper.Point;
//
//     scrollbar.onMouseEnter = () => {
//       scrollbar.opacity = scrollbarActiveOpacity;
//       scrollDrag.activate();
//     };
//     scrollbar.onMouseLeave = () => {
//       scrollbar.opacity = scrollbarDefaultOpacity;
//     };
//
//     scrollDrag.onMouseDown = event => {
//       paper.view.element.style.cursor = 'grabbing';
//       activeScrolling();
//       scrollDragOffset = new paper.Point(event.downPoint.subtract(scrollbar.position));
//     };
//     scrollDrag.onMouseUp = () => {
//       // is there a better way to setNormal scrollDrag tool?
//       defaultTool.activate();
//       inactiveScrolling();
//       paper.view.element.style.cursor = 'default';
//       scrollbar.opacity = scrollbarDefaultOpacity;
//     };
//     scrollDrag.onMouseDrag = event => {
//       scrollbar.opacity = scrollbarActiveOpacity;
//       changeScrollbarPosition(event.point.y - scrollDragOffset.y);
//     };
//
//     // would like to use this as scrollbar.position[scrollAxis]
//     // const axis = {
//     //   horizontal: 'x',
//     //   vertical: 'y'
//     // };
//     // const scrollAxis = axis.vertical;
//
//     // deprecated.... mousewheel
//     // view.element.addEventListener('mousewheel', (event: Event) => {
//     //   const ev = event as MouseEvent;
//     // });
//     // canvas.addEventListener('DOMMouseScroll',onScroll,false);
//     // canvas.addEventListener('mousewheel',onScroll,false); // MDN docs says this is deprecated and 'non-standard'
// // END TEST

// // TEST SCROLL DRAG
//     const scrollbarWidth = 300;
//     const scrollbarHeight = 10;
//     const scrollbarDefaultOpacity = 0.4;
//     const scrollbarActiveOpacity = 1;
//     const scrollbar = new paper.Path.Rectangle({
//       point: paper.view.center.subtract(new paper.Point(scrollbarWidth / 2, scrollbarHeight / 2)),
//       size: new paper.Size(scrollbarWidth, scrollbarHeight),
//       radius: scrollbarHeight / 2,
//       fillColor: LIGHT_GREY,
//       opacity: scrollbarDefaultOpacity
//     });
//
//     const defaultTool = new paper.Tool();
//     const scrollDrag = new paper.Tool();
//     let scrollDragOffset: paper.Point;
//     const scrollLimitMin = paper.view.bounds.left + scrollbarWidth / 2;
//     const scrollLimitMax= paper.view.bounds.right - scrollbarWidth / 2;
//     scrollbar.onMouseEnter = () => {
//       scrollbar.opacity = scrollbarActiveOpacity;
//       scrollDrag.activate();
//     };
//     scrollbar.onMouseLeave = () => {
//       scrollbar.opacity = scrollbarDefaultOpacity;
//     };
//
//     scrollDrag.onMouseDown = event => {
//       scrollDragOffset = new paper.Point(event.downPoint.subtract(scrollbar.position));
//     };
//     scrollDrag.onMouseUp = () => {
//       // is there a better way to setNormal scrollDrag tool?
//       defaultTool.activate();
//       scrollbar.opacity = scrollbarDefaultOpacity;
//     };
//     scrollDrag.onMouseDrag = event => {
//       scrollbar.opacity = scrollbarActiveOpacity;
//       scrollbar.position.x = event.point.x - scrollDragOffset.x;
//       // set the limits
//       if (scrollbar.position.x < scrollLimitMin) {
//         scrollbar.position.x = scrollLimitMin;
//       }
//       if (scrollbar.position.x > scrollLimitMax) {
//         scrollbar.position.x = scrollLimitMax;
//       }
//     };
// // END TEST

// // TEST BOOLEAN SHAPE OPERATIONS
//     // line doesn't work for boolean shape operations. it needs to be a shape
//     // let line = new paper.Path.Line(paper.view.center.subtract(new paper.Point(300, 0)),
//     //   paper.view.center.add(new paper.Point(300, 0)));
//     // line.style = {
//     //   strokeColor: 'white',
//     //   strokeWidth: 2
//     // };
//
//     // create a rectangle that looks like the line
//     let rect = new paper.Path.Rectangle(
//       paper.view.center.subtract(new paper.Point(300, 0)),
//       new paper.Size(600, 1)
//     );
//     rect.style = {
//       fillColor: 'white'
//     };
//
//     // create circle reference
//     let c = new paper.Path.Circle(new paper.Point(rect.bounds.left, paper.view.center.y), 20);
//     c.style = {
//       strokeColor: 'white',
//       strokeWidth: 2
//     };
//
//     // create circle compound path to count as one shape for boolean operation.
//     // cleaner way to do it vs with a group or multiple shapes. each operation creates a new resulting shape
//     let cCompoundPath = new paper.CompoundPath(c.clone());
//     let cCount = 7;
//     // skip the first reference circle
//     for (let i = 1; i < cCount; i++) {
//       let clone = c.clone();
//       clone.position.x = rect.bounds.left + i * ((rect.bounds.width / (cCount - 1)));
//       cCompoundPath.addChild(clone);
//       // renders a circle while we're iterating
//       let renderedClone = clone.clone();
//       renderedClone.style = c.style;
//     }
//
//     // 'line' needs to be a shape or for boolean shape operations to work
//     let result = rect.subtract(cCompoundPath); // 'unite', 'intersect', 'subtract', 'exclude', 'divide'
//
//     // simulating that drop shadow....
//     let between = new paper.Path.Rectangle(
//       paper.view.center.subtract(new paper.Point(50, 50)),
//       new paper.Size(100, 100)
//     );
//     between.style = {
//       fillColor: 'blue',
//     };
//     between.opacity = 0.7;
//     result.bringToFront();
//
//     // cCompoundPath.selected = true;
//     // result.selected = true;
//
//     rect.remove();
//     // line.remove();
// // TEST END

// // TEST INTERSECTIONS
//     let line = new paper.Path.Line(paper.view.center.subtract(new paper.Point(300, 0)),
//       paper.view.center.add(new paper.Point(300, 0)));
//     line.style = {
//       strokeColor: 'white',
//       strokeWidth: 2
//     };
//
//     let c = new paper.Path.Circle(paper.view.center, 20);
//     c.style = {
//       strokeColor: 'white',
//       strokeWidth: 2
//     };
//     c.remove();
//
//     let cGroup = new paper.Group();
//     let cCount = 7;
//     for (let i = 0; i < cCount; i++) {
//       let clone = c.clone();
//       clone.position.x = line.bounds.left + i * ((line.bounds.width / (cCount - 1))) ;
//       // showIntersections(line, clone);
//       cGroup.addChild(clone);
//     }
//
//     function showIntersections(path1: paper.Path, path2: paper.Path) {
//       let intersections = path1.getIntersections(path2);
//
//       for (let i = 0; i < intersections.length; i++) {
//         new paper.Path.Circle({
//           center: intersections[i].point,
//           radius: 5,
//           fillColor: '#009dec'
//         });
//       }
//     }
// // END TEST

// // TEST ANCHOR
// class RectangleComponent extends paper.Group {
//   constructor(private _point: paper.Point = new paper.Point(0, 0), private _size: number = 100,
//               private _color: string = 'blue') {
//     super();
//     this.applyMatrix = false;
//     this.position = _point;
//     this.pivot = this.bounds.topLeft;
//
//     const rect = new paper.Path.Rectangle(
//       _point,
//       new paper.Size(this._size, this._size));
//     rect.fillColor = this._color;
//   }
// }
//
// class RectangleParentComponent extends paper.Group {
//   constructor(private _point: paper.Point = new paper.Point(0, 0)) {
//     super();
//     this.applyMatrix = false;
//     this.position = _point;
//     this.pivot = this.bounds.topLeft;
//
//     new RectangleComponent();
//   }
// }
//
// class RectangleGrandparentComponent extends paper.Group {
//   constructor(private _point: paper.Point = new paper.Point(0, 0)) {
//     super();
//     this.applyMatrix = false;
//     this.position = _point;
//     this.pivot = this.bounds.topLeft;
//
//     new RectangleParentComponent();
//
//     this.children.forEach(child => {
//
//     });
//   }
// }
//
// class DisplayComponent extends paper.Group {
//   private rect: RectangleComponent;
//
//   constructor(private _point: paper.Point = new paper.Point(0, 0)) {
//     super();
//     this.applyMatrix = false;
//     this.position = _point;
//     this.pivot = this.bounds.topLeft;
//
//     this.rect = new RectangleComponent(new paper.Point(0, 0));
//     // const rectParent = new RectangleParentComponent();
//     // const rectGrandparent = new RectangleGrandparentComponent();
//
//     // let circle = new paper.Path.Circle({
//     //   position: new paper.Point(0, 0),
//     //   radius: 5,
//     //   fillColor: 'white'
//     // });
//     //
//     // this.children.forEach(child => {
//     //   circle.clone().position = child.position;
//     // });
//
//     this.rect.position = this.rect.position.add(new paper.Point(100, 100));
//   }
// }
// // END TEST

// ideas

// TODO: clean up and move to WIP branch

// // TEST: LOCAL_TO_GLOBAL POINT
//     const vappMargin = 30;
//
//     const vappData: VappData = {
//       uuid: '',
//       name: 'BC Test vApp',
//       networks: [
//         {
//           uuid: '',
//           connected: true
//         }
//       ],
//       edge: {
//         uuid: '',
//         name: '',
//         ip: ''
//       },
//       vms: [
//         {
//           name: 'AutomatedSecurityTest1',
//           uuid: '',
//           operatingSystem: 'windows7Guest'
//         }
//       ]
//     };
//     let origin = new paper.Point(0, 0); // _point
//     let pointOffset = new paper.Point(vappMargin, vappMargin);
//
//     // let rect = new paper.Path.Rectangle({
//     //   size: new paper.Size(100, 100),
//     //   fillColor: 'blue',
//     //   applyMatrix: false,
//     //   pivot: origin,
//     //   position: pointOffset,
//     // });
//
//     // let rect = new VmComponent(vappData.vms[0]);
//     // // rect.position = rect.position.add(pointOffset);
//     // rect.visible = true;
//
//     // let rect = new VmAndVnicListComponent(vappData.vms, 1);
//
//     // localToOrigin is off by vappMargin amount
//     // let rect = new VappComponent(vappData);
//     // rect.position = new paper.Point(vappMargin, vappMargin);
//     // rect.pivot = new paper.Point(0, 0);
//
//     // can also assign pivot in relation to bounds, but set position afterwards externally
//     let rect = new paper.Path.Rectangle({
//       size: new paper.Size(100, 100),
//       fillColor: 'blue',
//       applyMatrix: false
//     });
//     // rect.pivot = rect.bounds.topLeft;
//     // rect.pivot = new paper.Point(0, 0);
//
//     let point0 = rect.localToGlobal(rect.position);
//     console.log('pivot0:', rect.pivot);
//     console.log('rect point0:', point0);
//
//     // rect.position = rect.position.add(pointOffset);
//     // rect.pivot = new paper.Point(0, 0);
//     // rect.position = pointOffset;
//     // rect.pivot = rect.parentToLocal(rect.bounds.topLeft);
//
//     // when position is offset. localToGlobal coordinates are off...
//
//     let point1 = rect.localToGlobal(rect.position);
//
//     console.log('pivot1:', rect.pivot);
//     console.log('rect point1:', point1);
//
//     let parent = new paper.Group({
//       position: new paper.Point(100, 100),
//       children: [rect],
//       applyMatrix: false
//     });
//     let point2 = rect.localToGlobal(rect.position);
//     console.log('parent point2:', point2);
//
//     // let grandparent = new paper.Group({
//     //   position: new paper.Point(100, 100),
//     //   children: [parent],
//     //   applyMatrix: false
//     // });
//     // children should be added after setting position externally, if you want predictable results
//     let grandparent = new paper.Group({
//       applyMatrix: false
//     });
//     grandparent.position = new paper.Point(100, 100);
//     grandparent.addChild(parent);
//
//     let point3 = rect.localToGlobal(rect.position);
//     console.log('grandparent point3:', point3);
//
//     // vector style is good practice
//     let pointTranslation = new paper.Point(100, 100);
//     // grandparent.position = grandparent.position.add(pointTranslation); // point3: 200, 200, point4: 300, 300
//
//     // Setting position to original position causes weirdness. what's going on with coordinates??
//     // may be because children need to be added afterwards
//     // pivots might go back original
//     grandparent.position = new paper.Point(100, 100); // point3: 200, 200, point4: 50, 50
//
//     // 'fix' for the above problem. causes vector behavior
//     // parent.remove();
//     // grandparent.position = new paper.Point(100, 100); // point3: 200,200, point4: 300, 300
//     // grandparent.addChild(parent);
//
//     let point4 = rect.localToGlobal(rect.position);
//     console.log('grandparent moved point4:', point4);
//
//     let circle = new paper.Path.Circle({
//       position: point1,
//       radius: 5,
//       fillColor: 'white'
//     });
//     circle.clone().position = point2;
//     circle.clone().position = point3;
//     circle.clone().position = point4;
// // END TEST

// // STROKE_BOUNDS vs. BOUNDS TEST
// let a = new paper.Path.Rectangle(
//   new paper.Point(30, 30),
//   new paper.Size(400, 100)
// );
// a.strokeColor = 'white';
// a.strokeWidth = 10;
// // a.strokeBounds size 410, 110
// // a.bounds 400, 100
//
// let b = a.clone();
// b.fillColor = 'blue';
// b.strokeWidth = 0;
// b.position = new paper.Point(400 / 2 + 30, 200);
// // b.strokeBounds and b.bounds size 400, 100,
//
// a.bounds.selected = true;
// b.bounds.selected = true;
// debugger;
// // END TEST

// // // HTML ATTRIBUTES with TEST_COMPONENT
//     // x: method or component to set padding and margins
//     // TODO: method to display inline and block
//     // how should it be implemented?
//     // INLINE
//     const test1 = new VmWithMarginComponent();
//     const test2 = new VmWithMarginComponent('foo');
//     test2.position = test2.position.add(test1.bounds.topRight);
//     const test3 = new VmWithMarginComponent('fooooooooooooooooooooooooooooooooooo');
//     test3.position = test3.position.add(test2.bounds.topRight);
//
//     // BLOCK
//     const test4 = new VmWithMarginComponent();
//     test4.position = test4.position.add(new paper.Point(0, 150));
//     const test5 = new VmWithMarginComponent('foo');
//     test5.position = test5.position.add(test4.bounds.bottomLeft);
//     const test6 = new VmWithMarginComponent('fooooooooooooooooooooooooooooooooooo');
//     test6.position = test6.position.add(test5.bounds.bottomLeft);
//
// // END TEST

// // VIEWMORE shadow and scroll bar
// next phase: add actual interactivity.
// how does the bottom look while scrolling. any clipping?
// const background = new paper.Path.Rectangle({
//   rectangle: new paper.Rectangle(30, 30, 250, 400),
//   radius: 5,
//   fillColor: VAPP_BACKGROUND_COLOR
// });
//
// const clippy = new paper.Path.Rectangle(
//   new paper.Point(30, 80), // y: rectShadow position + size
//   new paper.Size(250, 10)
// );
//
// const rectShadow = new paper.Path.Rectangle(
//   new paper.Point(30, 30),
//   new paper.Size(250, 50)
// );
//
// const clipGroup = new paper.Group([clippy, rectShadow]);
// clipGroup.clipped = true;
//
// // clippy.bounds.selected = true;
// // box-shadow: 0 2px 10px 0 rgba(0,0,0,0.41); - h-offset v-offset blur spread color
// rectShadow.style = {
//   fillColor: VAPP_BACKGROUND_COLOR,
//   shadowColor: new paper.Color(0, 0, 0, 0.41),
//   shadowBlur: 10,
//   shadowOffset: new paper.Point(0, 2)
// };
//
// const scrollbar = new paper.Path.Rectangle({
//   // x: 5 scroll padding, 5 scroll width, y: 20 - vappPadding
//   rectangle: new paper.Rectangle(background.bounds.right - 5 - 5, background.bounds.rightCenter.y - 20, 5, 200),
//   radius: 5,
//   fillColor: LIGHT_GREY
// });
// // END TEST

// HTML ATTRIBUTES WITHOUT COMPONENT
//     const test = new paper.Group();
//     test.applyMatrix = false;
//     test.pivot = test.bounds.topLeft;
//
//     // reposition causes the relativity to break ;_;
//     // test.position = test.position.add(new paper.Point(30, 30));
//
//     let padding = {
//       top: 10,
//       right: 10,
//       bottom: 10,
//       left: 10
//     };
//
//     let marginData = {
//       top: 20,
//       right: 20,
//       bottom: 20,
//       left: 20
//     };
//
//     let vms = placeholderArrayOfVappData[5].vms;
//     let vm = new VmComponent(vms[0]);
//     vm.visible = true;
//
//     test.addChild(vm);
//
//     // move the current children to new point based on padding amount
//     test.children.forEach(child => {
//       child.position = child.position.add(new paper.Point(padding.left, padding.top));
//     });
//
//     // create a background surrounding current children based on padding amount
//     const background = new paper.Path.Rectangle(new paper.Point(0, 0),
//       test.bounds.bottomRight.add(new paper.Point(padding.right, padding.bottom)));
//     background.pivot = background.bounds.topLeft;
//     background.fillColor = 'navy';
//     test.insertChild(0, background);
//
//     background.bounds.selected = true;
//
//     // move children and background to new point based on marginData amount
//     test.children.forEach(child => {
//       child.position = child.position.add(new paper.Point(marginData.left, marginData.top));
//     });
//
//     // test.position = test.position.add(new paper.Point(marginData.left, marginData.top));
//     const marginData = new paper.Path.Rectangle(new paper.Point(0, 0),
//       test.bounds.bottomRight.add(new paper.Point(marginData.right, marginData.bottom)));
//     test.insertChild(0, marginData);
//
//     test.bounds.selected = true;
// END TEST

//     // APPLYMATRIX CHRISTMAS TREE EXAMPLE
//     let xmasTree = new paper.Group();
//     // !! set ApplyMatrix to false before setting position of the group
//     xmasTree.applyMatrix = false;
//
//     xmasTree.position = paper.view.center;
//
//     let tree = new paper.Path.Rectangle(
//       new paper.Point(0, 0),
//       new paper.Size(80, 20)
//     );
//
//     tree.pivot = tree.bounds.topLeft;
//     // tree.pivot = tree.parentToLocal(tree.bounds.topLeft);
//     // tree.pivot = new paper.Point(0, 0);
//     tree.fillColor = 'SkyBlue';
//     xmasTree.position = new paper.Point(100, 100);
//     xmasTree.addChild(tree);
//
//     console.log('view size', paper.view.viewSize);
//     console.log('pivot:', tree.pivot);
//     console.log('tree local:', tree.position);
//     console.log('tree global:', tree.localToGlobal(tree.position));
//
//     xmasTree.position = new paper.Point(100, 100);
//     console.log('repositioned...');
//     console.log('tree local:', tree.position);
//     console.log('tree global:', tree.localToGlobal(tree.position));
//    // END TEST

// TEST - RESPONSIVENESS TO WIDTH
//     const test = new paper.Group();
//
//     // const boundingBox = new paper.Path.Rectangle(new paper.Point(0, 0), new paper.Point(600, 400));
//     const boundingBox = new paper.Path.Rectangle(new paper.Point(0, 0), paper.view.viewSize);
//     boundingBox.strokeWidth = 1;
//     boundingBox.strokeColor = '#FFFFFF';
//     boundingBox.pivot = boundingBox.bounds.topLeft;
//     // test.addChild(boundingBox);
//
//     const rect = new paper.Path.Rectangle(new paper.Point(0, 0), new paper.Point(100, 100));
//     rect.fillColor = 'blue';
//     rect.pivot = rect.bounds.topLeft;
//     rect.remove();
//     const rectPadding = 10;
//
//     let offsetY = 0;
//     for (let i = 0; i < 10; i++) {
//       let offsetX = i === 0 ? 0 : test.children[i - 1].bounds.right;
//       const rectCopy = rect.clone();
//       rectCopy.position = new paper.Point(rectPadding + offsetX, rectPadding + offsetY);
//
//       if (!rectCopy.isInside(paper.view.bounds)) {
//         offsetY = test.bounds.bottom;
//         offsetX = 0;
//         rectCopy.position = new paper.Point(rectPadding + offsetX, rectPadding + offsetY);
//         if (!rectCopy.isInside(boundingBox.bounds)) {
//           rectCopy.visible = false;
//         }
//       }
//       test.addChild(rectCopy);
//     }
//     console.log('view bounds:', paper.view.bounds.width, paper.view.bounds.height);
//     console.log('view size:', paper.view.viewSize);
//     paper.view.onResize = () => {
//       console.log('view reSize:', paper.view.viewSize);
//     };
// END TEST

// TEST LOCAL_TO_GLOBAL w/ CURRENT COMPONENTS
//     const vappMargin = 30;
//     let origin = new paper.Point(0, 0); // _point
//     const vappData: VappData = {
//       uuid: '',
//       name: 'BC Test vApp',
//       networks: [
//         {
//           uuid: '',
//           connected: true
//         }
//       ],
//       edge: {
//         uuid: '',
//         name: '',
//         ip: ''
//       },
//       vms: [
//         {
//           name: 'AutomatedSecurityTest1',
//           uuid: '',
//           operatingSystem: 'windows7Guest'
//         }
//       ]
//     };
//
//     const vapp = new VappComponent(vappData, new paper.Point(vappMargin, vappMargin));
//     // vapp.position = vapp.position.add(new paper.Point(vappMargin, vappMargin));
//     // vapp.visible = false;
//
//     let point1 = vapp.position;
//     console.log('vapp point1:', point1);
//
//     let point2 = proj.activeLayer.localToGlobal(vapp.position);
//     console.log('localToGlobal point2:', point2);
//
//     const vm = new VmComponent(vappData.vms[0]);
//     vm.visible = true;
//     let point3 = vm.position;
//     console.log('vm point1:', point3);
//
//     let point4 = vm.localToGlobal(vm.position);
//     console.log('localToGlobal point2:', point4);
//
//     const vmList = new VmAndVnicListComponent(vappData.vms, 1, paper.view.bounds.height);
//     // vmList.visible = false;
//     let point5 = vmList.position;
//     console.log('vm point1:', point5);
//
//     let point6 = vmList.localToGlobal(vmList.position);
//     console.log('localToGlobal point2:', point6);
// END TEST

// DEMO applyMatrix = true. default
//     // applyMatrix controls lifetime of group's local coordinate space
//     // transform (position, scale, rotate, skew) on group level is INSTANTLY applied to children at instantiation
//     // the group does not store its own position in it's own transformation matrix. new children sent to global
//
//     // local positioning too early. group doesn't propagate to new child object
//     // tree position is global. so you have to reposition tree after adding it to group
//     // then, reset group position after it gets a child
//     let xmasTree = new paper.Group();
//     xmasTree.position = new paper.Point(0.5 * paper.view.bounds.width, 0.5 * paper.view.bounds.height);
//
//     let tree = new paper.Path.Rectangle(
//       new paper.Point(0, 0),
//       new paper.Size(20, 80)
//     );
//     tree.fillColor = 'green';
//     xmasTree.addChild(tree);
//     tree.position = new paper.Point(0, 0);
//
//     xmasTree.position = new paper.Point(0.5 * paper.view.bounds.width, 0.5 * paper.view.bounds.height);
// END DEMO

// DEMO applyMatrix = false
//     let xmasTree = new paper.Group();
//     // !! set ApplyMatrix to false before setting position of the group
//     xmasTree.applyMatrix = false;
//
//     xmasTree.position = paper.view.center;
//
//     let tree = new paper.Path.Rectangle(
//       new paper.Point(0, 0),
//       new paper.Size(20, 80)
//     );
//
//     tree.pivot = tree.bounds.topLeft;
//     // tree.pivot = tree.parentToLocal(tree.bounds.topLeft);
//     // tree.pivot = new paper.Point(0, 0);
//     tree.fillColor = 'green';
//     xmasTree.addChild(tree);
//
//     console.log('view size', paper.view.viewSize);
//     console.log('pivot:', tree.pivot);
//     console.log('tree local:', tree.position);
//     console.log('tree global:', tree.localToGlobal(tree.position));
//
//     tree.onFrame = () => {
//       tree.rotate(2);
//     };
//     xmasTree.position = new paper.Point(100, 100);
//     console.log('repositioned...');
//     console.log('tree local:', tree.position);
//     console.log('tree global:', tree.localToGlobal(tree.position));
// END DEMO
