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
var __f,result={};
 CgRt.pushCont();
  {
  CgRt.beginProps();

  let p=CgRt.getProps();
  CgRt.pushCont();
  {
    CgRt.beginProps();

    CgRt.addProp("source",{uri:'favicon.ico'});
    CgRt.addProp("style",(
    __f= function(){
    let result:any={};
      result.height=50;
      result.width=50;
    return result;
    }()));
    let p=CgRt.getProps();
    CgRt.pushElem(CgRt.createElement(CgRt.Imager,p));{
    CgRt.beginProps();

    CgRt.addProp("style",(
    __f= function(){
    let result={};
    return result;
    }()));
    let p=CgRt.getProps();
    CgRt.pushElem(CgRt.createElement(CgRt.Textr,p,'Math homework takes 10^3 times longer when using your phone as your calculator'));
    }
  }
  let cl=CgRt.popCont();
  CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p,...cl));
  }

let cl=CgRt.popCont();
return CgRt.createElement(CgRt.Viewr, {style:{backgroundColor:"white",height:600}}, ...cl);
    }
}