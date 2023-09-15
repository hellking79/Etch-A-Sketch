//set imporatant and constant cariables
const container=document.getElementById("container");
let rows=document.getElementsByClassName("gridrow");
let cells=document.getElementsByClassName("cells")
//creat a default grid size 16x16
function defaultgrid()={
    makerows(16)
    makecolumnns(16)
}
// takes(rows,columns)input and makes a grid
function makesrows(rownum){
    //creat rows
    for (r=0;r<rownum;r++){
        let row=document.createElement("div");
        container.appendChild(row).className="gridrow"
    }
}
//creat columns
function makecolumns(cellnum){
    for(i=0;i<rows.length;i++){
        for(j=0;j<cellnum;j++){
            let newcell=document.createElement("div");
            rows[j].appendChild(newcell).classname="cell";
        };
    };
};