import { Globals } from "./Globals"
import Konva from 'konva';


export class Connection{


    points: number[] = []
    array:number[]=[]
    public prepareLine() {
        this.points=[]
        var x1 = Globals.stage.findOne('#' +String(Globals.firstShape)).x()
        var y1 = Globals.stage.findOne('#' +String(Globals.firstShape)).y()
        // if (Globals.queues.includes(Globals.firstShape) == true)//found it in the rectangles
        // {
        //   x1 = x1 + 35
        //   y1 = y1 + 25
        // }
    
        var x2 = Globals.stage.findOne('#' + Globals.secondShape).x()
        var y2 = Globals.stage.findOne('#' + Globals.secondShape).y()
        // if (Globals.queues.includes(Globals.secondShape) == true)//found it in the rectangles
        // {
        //   x2 = x2 + 35
        //   y2 = y2 + 25
        // }
        this.points.push(Globals.x11)
        this.points.push(Globals.y11)
        this.points.push(Globals.x22)
        this.points.push(Globals.y22)
        console.log("coordinates");
        // console.log(x11);
        // console.log(y11);
        // console.log(x22);
        // console.log(y22);
        var lineID = Globals.linesCount
        Globals.linesCount = Globals.linesCount + 1
        var shapeIDs = []
        shapeIDs.push(Globals.firstShape)
        shapeIDs.push(Globals.secondShape)
        Globals.fromTo.set(lineID, shapeIDs)
        Globals.lines.push(lineID)
        console.log("feeeeh lines");
        console.log(Globals.lines);
    
        
        Globals.linesOUT.get(Globals.firstShape)?.push(lineID)
        Globals.linesIN.get(Globals.secondShape)?.push(lineID)
        this.array[0]=Globals.LineGain
        this.array[1]=lineID;
        Globals.graph.get(Globals.firstShape)?.set(Globals.secondShape,this.array)
        console.log(Globals.graph);

    
        console.log("out of the first shape : " + Globals.linesOUT.get(Globals.firstShape));
        console.log("into the second shape : " + Globals.linesIN.get(Globals.secondShape));
    
        this.drawLine(this.points, lineID)
        console.log("from to=" + Globals.fromTo.keys.toString + " " + Globals.fromTo.values.toString)
        console.log("lines out=" + Globals.linesOUT)
        console.log("lines in=" + Globals.linesIN)
      }
   ////////////////////////handlii 7war en mynf3sh nrsm nfs el line tani


    drawLine(p: number[], idLine: number) {

      var line = new Konva.Group({
        id: String(idLine)
      })
        console.log("kheeeeeer");
        console.log(p);
      
      line.add(new Konva.Line({

        points: p,
        stroke: 'black',
        strokeWidth: 5,
        zIndex:0,
      }))
          

  
      var arrowp=[]
      for(let a of p) arrowp.push(a)
      arrowp[2]=(arrowp[0]+arrowp[2])/2
      arrowp[3]=(arrowp[1]+arrowp[3])/2

  
      line.add(new Konva.Arrow({
        points: arrowp,
        pointerLength: 10,
        pointerWidth: 10,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 4,
      }))
      line.add(new Konva.Text({
        x: (p[0]+p[2])/2,
        y: (p[1]+p[3])/2,
      
        points: arrowp,
        text:String(Globals.LineGain),
        fontSize: 20,
        padding: 5,
        fontFamily: 'Calibri',
        fill: 'red',
        stroke: 'red',
        name: 'label'
    }));
        console.log(p);  
      
      let clickOnShape = () => {
        console.log('click line');
        Globals.deletedShape = idLine
        Globals.isCircle=false;
      
      
      }
      line.on('click', () => { clickOnShape() })
  
  
      Globals.layer.add(line);
      Globals.layer.draw();
      console.log("yaraaaab");
      console.log(Globals.firstShape);
      console.log(Globals.secondShape);
      console.log(Globals.deletedShape);
      console.log(Globals.isCircle);
      var shape1 = Globals.stage.findOne('#' + Globals.firstShape);
        var shape2 = Globals.stage.findOne('#' + Globals.secondShape);
        shape1.moveToTop()
        shape2.moveToTop()
      
    }
    public prepareArc() {
      this.points=[]
      var x1 = Globals.stage.findOne('#' +String(Globals.firstShape)).x()
      var y1 = Globals.stage.findOne('#' +String(Globals.firstShape)).y()
      var x2 = Globals.stage.findOne('#' + Globals.secondShape).x()
      var y2 = Globals.stage.findOne('#' + Globals.secondShape).y()
      this.points.push(Globals.x11)
      this.points.push(Globals.y11)
      this.points.push(Globals.x22)
      this.points.push(Globals.y22)
      console.log("coordinates");
      var lineID = Globals.linesCount
      Globals.linesCount = Globals.linesCount + 1
      var shapeIDs = []
      shapeIDs.push(Globals.firstShape)
      shapeIDs.push(Globals.secondShape)
      Globals.fromTo.set(lineID, shapeIDs)
      Globals.lines.push(lineID)
      Globals.linesOUT.get(Globals.firstShape)?.push(lineID)
      Globals.linesIN.get(Globals.secondShape)?.push(lineID)
      this.array[0]=Globals.LineGain
      this.array[1]=lineID;
      Globals.graph.get(Globals.firstShape)?.set(Globals.secondShape,this.array)
      this.drawArc(this.points, lineID)
    }
    drawArc(p: number[], idLine: number) {
      
      var line = new Konva.Group({
        id: String(idLine)
      })
      
        console.log("kheeeeeer");
        console.log(p);
      line.add(new Konva.Arc({
        points: p,
        x:(this.points[0]+this.points[2])/2,
        y:((this.points[1]+this.points[3])/2),
        
        innerRadius:(Math.sqrt(((this.points[2]-this.points[0])*(this.points[2]-this.points[0]))+((this.points[3]-this.points[1])*(this.points[3]-this.points[1])))/2)-5,
        outerRadius:Math.sqrt(((this.points[2]-this.points[0])*(this.points[2]-this.points[0]))+((this.points[3]-this.points[1])*(this.points[3]-this.points[1])))/2,
        fill: 'black',
        angle:180,
        rotationDeg:Math.atan( (this.points[3]-this.points[1])/(this.points[2]-this.points[0]))*(180/Math.PI),
        strokeWidth:5
      }))
  
      var arrowp=[]
      for(let a of p) arrowp.push(a)
      arrowp[2]=(arrowp[0]+arrowp[2])/2
      arrowp[3]=((arrowp[1]+arrowp[3])/2)+Math.sqrt(((this.points[2]-this.points[0])*(this.points[2]-this.points[0]))+((this.points[3]-this.points[1])*(this.points[3]-this.points[1])))/2;
      var arroww:number[]=[];
      arroww[0]=(this.points[0]+this.points[2])/2
      arroww[1]=(((this.points[1]+this.points[3])/2)+Math.sqrt(((this.points[2]-this.points[0])*(this.points[2]-this.points[0]))+((this.points[3]-this.points[1])*(this.points[3]-this.points[1])))/2)-3;
  
      if(p[0]>p[2]){
        arroww[2]=((this.points[0]+this.points[2])/2)-1
        arroww[3]=(((this.points[1]+this.points[3])/2)+Math.sqrt(((this.points[2]-this.points[0])*(this.points[2]-this.points[0]))+((this.points[3]-this.points[1])*(this.points[3]-this.points[1])))/2)-3;
       }
       
      line.add(new Konva.Arrow({
        points: arroww,
        pointerLength: 10,
        pointerWidth: 10,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 4,
        LineJoin:'round',
        pointerAtEnding:true,
      }))
      line.add(new Konva.Text({
        x: (p[0]+p[2])/2,
        y: ((p[1]+p[3])/2)+Math.sqrt(((p[2]-p[0])*(p[2]-p[0]))+((p[3]-p[1])*(p[3]-p[1])))/2,
        points: arrowp,
        text:String(Globals.LineGain),
        fontSize: 20,
        padding: 5,
        fontFamily: 'Calibri',
        fill: 'red',
        stroke: 'red',
        name: 'label'
    }));
        console.log(p);  
        let clickOnShape = () => {
        console.log('click line');
        Globals.deletedShape = idLine
        Globals.isCircle=false;
      
      
      }
      line.on('click', () => { clickOnShape() })
  
  
      Globals.layer.add(line);
      Globals.layer.draw();
      console.log("yaraaaab");
      console.log(Globals.firstShape);
      console.log(Globals.secondShape);
      console.log(Globals.deletedShape);
      console.log(Globals.isCircle);
      var shape1 = Globals.stage.findOne('#' + Globals.firstShape);
        var shape2 = Globals.stage.findOne('#' + Globals.secondShape);
        shape1.moveToTop()
        shape2.moveToTop()
      
      }
}


