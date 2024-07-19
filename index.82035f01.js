class e{constructor(e,t,l,s){let i=document.createElement("div");i.classList.add("field-cell"),e.append(i),this.x=t,this.y=l,this.grid=s}linkTile(e){e.setXY(this.x,this.y),this.linkedTile=e}unlinkTile(){this.linkedTile=null}isEmpty(){return!this.linkedTile}linkTileForMerge(e){e.setXY(this.x,this.y),this.linkedTileForMerge=e}unlinkTileForMerge(){this.linkedTileForMerge=null}hasTileForMerge(){return!!this.linkedTileForMerge}canAccept(e){return this.isEmpty()||!this.hasTileForMerge()&&this.linkedTile.value===e.value}mergeTiles(){let e=this.linkedTile.value+this.linkedTileForMerge.value;return this.linkedTile.setValue(e),this.linkedTileForMerge.removeFromDOM(),this.unlinkTileForMerge(),this.grid.updateTotalScore(e),this.score+=e}}class t{constructor(e){this.tileElement=document.createElement("div"),this.tileElement.classList.add("field-tile"),this.setValue(Math.random()>.1?2:4),e.append(this.tileElement)}setXY(e,t){this.x=e,this.y=t,this.tileElement.style.setProperty("--x",e),this.tileElement.style.setProperty("--y",t)}setValue(e){this.value=e,this.tileElement.textContent=e;let t=100-8*Math.log2(e);this.tileElement.style.setProperty("--bg-lightness",`${t}%`),this.tileElement.style.setProperty("--text-lightness",`${t<60?100:30}%`)}removeFromDOM(){this.tileElement.remove()}}const l=document.querySelector(".button"),s=document.getElementById("game-board"),i=new class{constructor(t){this.cells=[],this.totalScore=0;for(let l=0;l<16;l++)this.cells.push(new e(t,l%4,Math.floor(l/4),this));this.cellsGroupedByColumn=this.groupCellsByColumn(),this.cellsGroupedByReversedColumn=this.cellsGroupedByColumn.map(e=>[...e].reverse()),this.cellsGroupedByRow=this.groupCellsByRow(),this.cellsGroupedByReversedRow=this.cellsGroupedByRow.map(e=>[...e].reverse())}getRandomEmptyCell(){let e=this.cells.filter(e=>e.isEmpty()),t=Math.floor(Math.random()*e.length);return e[t]}groupCellsByColumn(){return this.cells.reduce((e,t)=>(e[t.x]=e[t.x]||[],e[t.x][t.y]=t,e),[])}groupCellsByRow(){return this.cells.reduce((e,t)=>(e[t.y]=e[t.y]||[],e[t.y][t.x]=t,e),[])}reset(){this.cells.forEach(e=>{e.isEmpty()||(e.linkedTile.removeFromDOM(),e.unlinkTile())})}updateTotalScore(e){this.lastMerge=e,this.totalScore+=e}}(s),r=document.querySelector(".message-win"),n=document.querySelector(".message-lose"),o=document.querySelector(".message-start"),d=document.querySelector(".message-restart"),c=document.querySelector(".game-score");function a(){window.addEventListener("keydown",u,{once:!0})}function u(e){switch(e.key){case"ArrowUp":if(!m()){a();return}h(i.cellsGroupedByColumn),k();break;case"ArrowDown":if(!y()){a();return}h(i.cellsGroupedByReversedColumn),k();break;case"ArrowLeft":if(!p()){a();return}h(i.cellsGroupedByRow),k();break;case"ArrowRight":if(!g()){a();return}h(i.cellsGroupedByReversedRow),k();break;default:a();return}let l=new t(s);i.getRandomEmptyCell().linkTile(l),m()||y()||p()||g()||(n.classList.remove("hidden"),o.classList.add("hidden"),d.classList.add("hidden")),a()}function h(e){e.forEach(e=>(function(e){for(let t=0;t<e.length;t++){let l;if(e[t].isEmpty())continue;let s=e[t],i=t-1;for(;i>=0&&e[i].canAccept(s.linkedTile);)l=e[i],i--;l&&(l.isEmpty()?l.linkTile(s.linkedTile):l.linkTileForMerge(s.linkedTile),s.unlinkTile())}})(e)),i.cells.forEach(e=>{e.hasTileForMerge()&&e.mergeTiles()}),a()}function m(){return T(i.cellsGroupedByColumn)}function y(){return T(i.cellsGroupedByReversedColumn)}function p(){return T(i.cellsGroupedByRow)}function g(){return T(i.cellsGroupedByReversedRow)}function T(e){return e.some(e=>e.some((t,l)=>!(0===l||t.isEmpty())&&e[l-1].canAccept(t.linkedTile)))}function k(){c.textContent=i.totalScore,2048===i.lastMerge&&(d.classList.add("hidden"),r.classList.remove("hidden"))}function f(){i.reset(),i.totalScore=0,c.textContent=i.totalScore,i.getRandomEmptyCell().linkTile(new t(s)),i.getRandomEmptyCell().linkTile(new t(s)),d.classList.remove("hidden"),n.classList.add("hidden"),r.classList.contains("hidden")||r.classList.add("hidden"),a()}l.addEventListener("click",()=>{l.classList.contains("restart")?f():(l.classList.remove("start"),l.classList.add("restart"),l.innerHTML="Restart",f(),d.classList.remove("hidden"),o.classList.add("hidden"))});
//# sourceMappingURL=index.82035f01.js.map