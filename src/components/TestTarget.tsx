import * as React from 'react';
import { View, Text, Image } from 'react-native';
import {CodegenRuntime} from '../util/CodegenRuntime';

export class TestTarget extends React.Component<{}, {}>{
    render() {
        // return (React.createElement(
        //     View,{style:[{ height: 600 }]},
        //         React.createElement(
        //             View,{style:{
        //             backgroundColor:"#ff9900",
        //             borderColor:"#000000",
        //             borderWidth:2,
        //             padding:10,
        //             minHeight:500,
        //             alignContent:'flex-start'
        //         }},
        //             React.createElement("Text",{style:{
        //             backgroundColor:"#c0c0c0",
        //             padding:10,
        //             minHeight:500
        //         }},"dfdfd")
        //         )
        // ));
        /*return (
            <View style={{ height: 600 }}>
                <View style={{
                    backgroundColor:"#ff9900",
                    borderColor:"#000000",
                    borderWidth:2,
                    padding:10,
                    minHeight:500,
                    alignContent:'flex-start'
                }}>
                    <Text style={{
                    backgroundColor:"#c0c0c0",
                    padding:10,
                    minHeight:500
                }}>dfdfd</Text>
                </View>
            </View>
        );*/
let CgRt = CodegenRuntime;
        var bluesquare;


bluesquare = 0;


// function (){
// let result:any={};
//   result.backgroundColor="#33ccff";
//   result.height=50;
//   result.width=50;
// return result;
// }();


CgRt.pushCont();
  {
  CgRt.beginProps();

  CgRt.addProp("style",(
  function(){
  let result:any={};
    result.backgroundColor="#ff9900";
    result.borderColor="#ff0000";
    result.borderWidth=2;
    result.padding=10;
    result.minHeight=500;
    result.alignContent="flex-start";
  return result;
  }()));
  let p=CgRt.getProps();
  CgRt.pushCont();
  {  {
    CgRt.beginProps();

    let p=CgRt.getProps();
    CgRt.pushCont();
    {  {
      CgRt.beginProps();
      (
      function(){
      let result:any={};
        result.backgroundColor="#c0c0c0";
        result.padding=10;
        result.minHeight=500;
      return result;
      }())
      CgRt.addProp("style",CgRt.getStyles());
      let p=CgRt.getProps();
      CgRt.pushElem(CgRt.createElement(CgRt.Textr,CgRt.getProps(),'dfdfd'));
      }
    }
    let cl=CgRt.popCont();
    CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p,...cl));
    }
  }
  let cl=CgRt.popCont();
  CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p,...cl));
  }

let cl=CgRt.popCont();
return CgRt.createElement(CgRt.Viewr, {style:{height:600}}, ...cl);

    }
}