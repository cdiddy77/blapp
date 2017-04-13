CgRt.setTargetRenderProc(() => {
CgRt.pushCont();
  {
  CgRt.beginProps();

  CgRt.beginStyles();
    CgRt.addStyle("backgroundColor","#ff9900");
    CgRt.addStyle("borderColor","#000000");
    CgRt.addStyle("borderWidth",2);
    CgRt.addStyle("padding",10);
    CgRt.addStyle("minHeight",500);
    CgRt.addStyle("alignContent","flex-start");

  CgRt.addProp("style",CgRt.getStyles());
  let p=CgRt.getProps();
  CgRt.pushCont();
  {  {
    CgRt.beginProps();

    CgRt.beginStyles();
      CgRt.addStyle("backgroundColor","#c0c0c0");
      CgRt.addStyle("borderColor","#6600cc");
      CgRt.addStyle("borderWidth",2);
      CgRt.addStyle("padding",10);
      CgRt.addStyle("minHeight",500);

    CgRt.addProp("style",CgRt.getStyles());
    let p=CgRt.getProps();
    CgRt.pushElem(CgRt.createElement(CgRt.Text,CgRt.getProps(),'dfdfd'));
    }
  }
  let cl=CgRt.popCont();
  CgRt.pushElem(CgRt.createElement(CgRt.View, p,...cl));
  }

let cl=CgRt.popCont();
return CgRt.createElement("View", {style:{height:600}}, ...cl);
});

